'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { getProduit } from '@/lib/produits'

interface PanierItem {
  id: string
  couleur: string
  taille: string
}

export default function PanierPage() {
  const router = useRouter()
  const [items, setItems] = useState<PanierItem[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('trova_panier') || '[]')
    setItems(saved)
  }, [])

  const total = items.reduce((acc, item) => {
    const p = getProduit(item.id)
    return acc + (p?.prix || 0)
  }, 0)

  const supprimer = (index: number) => {
    const updated = items.filter((_, i) => i !== index)
    setItems(updated)
    localStorage.setItem('trova_panier', JSON.stringify(updated))
  }

  const checkout = async () => {
    if (items.length === 0) return
    setLoading(true)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      }
    } catch (e) {
      console.error(e)
      alert('Erreur lors du paiement. Vérifiez votre configuration Stripe.')
    }
    setLoading(false)
  }

  return (
    <main style={{ background: '#0E0E0E', minHeight: '100vh', color: '#F5F0E8', paddingTop: '80px' }}>
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.4rem 3rem', background: 'rgba(14,14,14,0.93)', backdropFilter: 'blur(12px)', borderBottom: '0.5px solid rgba(184,150,110,0.2)' }}>
        <Link href="/" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.8rem', fontWeight: 300, letterSpacing: '0.3em', color: '#B8966E', textDecoration: 'none' }}>TROVA</Link>
        <Link href="/produits" style={{ fontSize: '0.68rem', letterSpacing: '0.15em', color: 'rgba(245,240,232,0.6)', textDecoration: 'none' }}>← Continuer mes achats</Link>
      </nav>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '3rem 2rem' }}>
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.5rem', fontWeight: 300, marginBottom: '3rem' }}>
          Mon <em style={{ fontStyle: 'italic', color: '#D4B896' }}>Panier</em>
        </h1>

        {items.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '5rem 0' }}>
            <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '4rem', color: 'rgba(184,150,110,0.15)', marginBottom: '1rem' }}>∅</div>
            <div style={{ fontSize: '0.83rem', fontWeight: 300, color: 'rgba(245,240,232,0.5)', marginBottom: '2rem' }}>Votre panier est vide</div>
            <Link href="/produits" style={{ background: '#B8966E', color: '#0E0E0E', padding: '0.9rem 2rem', fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none' }}>
              Découvrir la collection
            </Link>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '3rem', alignItems: 'start' }}>
            <div>
              {items.map((item, i) => {
                const p = getProduit(item.id)
                if (!p) return null
                return (
                  <div key={i} style={{ display: 'flex', gap: '1.5rem', paddingBottom: '1.5rem', marginBottom: '1.5rem', borderBottom: '0.5px solid rgba(184,150,110,0.1)' }}>
                    <div style={{ width: '90px', height: '120px', background: '#1A1612', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.5rem', color: 'rgba(184,150,110,0.15)' }}>{p.categorie[0]}</span>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#B8966E', marginBottom: '0.3rem' }}>{p.categorie}</div>
                      <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', fontWeight: 300, marginBottom: '0.4rem' }}>{p.nom}</div>
                      <div style={{ fontSize: '0.75rem', color: 'rgba(245,240,232,0.5)', marginBottom: '0.8rem' }}>
                        {item.couleur}{item.taille !== 'Taille unique' ? ` · ${item.taille}` : ''}
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', color: '#B8966E' }}>{p.prix.toFixed(2)} €</span>
                        <button onClick={() => supprimer(i)} style={{ fontSize: '0.63rem', letterSpacing: '0.1em', color: 'rgba(245,240,232,0.4)', background: 'none', border: 'none', cursor: 'pointer', textTransform: 'uppercase' }}>
                          Supprimer
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Récap */}
            <div style={{ border: '0.5px solid rgba(184,150,110,0.2)', padding: '2rem' }}>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', fontWeight: 300, marginBottom: '1.5rem' }}>Récapitulatif</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontWeight: 300, color: 'rgba(245,240,232,0.6)', marginBottom: '0.8rem' }}>
                <span>{items.length} article{items.length > 1 ? 's' : ''}</span>
                <span>{total.toFixed(2)} €</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontWeight: 300, color: 'rgba(245,240,232,0.6)', marginBottom: '1.5rem' }}>
                <span>Livraison</span>
                <span style={{ color: '#B8966E' }}>Calculée à l&apos;étape suivante</span>
              </div>
              <div style={{ borderTop: '0.5px solid rgba(184,150,110,0.2)', paddingTop: '1.2rem', display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
                <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem' }}>Total</span>
                <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', color: '#B8966E' }}>{total.toFixed(2)} €</span>
              </div>
              <button onClick={checkout} disabled={loading} style={{ width: '100%', background: '#B8966E', color: '#0E0E0E', padding: '1rem', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', border: 'none', cursor: loading ? 'not-allowed' : 'pointer', fontFamily: 'Jost, sans-serif', opacity: loading ? 0.7 : 1 }}>
                {loading ? 'Redirection...' : 'Payer avec Stripe'}
              </button>
              <div style={{ marginTop: '1rem', fontSize: '0.63rem', textAlign: 'center', color: 'rgba(245,240,232,0.35)', letterSpacing: '0.1em' }}>
                Paiement 100% sécurisé · SSL
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
