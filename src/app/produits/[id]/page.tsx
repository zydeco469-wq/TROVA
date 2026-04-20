'use client'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'
import { getProduit } from '@/lib/produits'

export default function ProduitPage() {
  const params = useParams()
  const router = useRouter()
  const produit = getProduit(params.id as string)
  const [couleur, setCouleur] = useState(0)
  const [taille, setTaille] = useState(0)
  const [qty, setQty] = useState(1)
  const [ajoute, setAjoute] = useState(false)

  if (!produit) return (
    <main style={{ background: '#0E0E0E', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F5F0E8' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3rem', color: '#B8966E', marginBottom: '1rem' }}>404</div>
        <Link href="/produits" style={{ color: '#B8966E' }}>← Retour aux collections</Link>
      </div>
    </main>
  )

  const ajouterAuPanier = () => {
    const saved = JSON.parse(localStorage.getItem('trova_panier') || '[]')
    for (let i = 0; i < qty; i++) {
      saved.push({ id: produit.id, couleur: produit.couleurs[couleur], taille: produit.tailles[taille] })
    }
    localStorage.setItem('trova_panier', JSON.stringify(saved))
    setAjoute(true)
    setTimeout(() => setAjoute(false), 2000)
  }

  const acheterMaintenant = () => {
    ajouterAuPanier()
    router.push('/panier')
  }

  const btnStyle = (active: boolean) => ({
    padding: '0.5rem 1rem', fontSize: '0.72rem', cursor: 'pointer', fontFamily: 'Jost, sans-serif',
    background: active ? '#B8966E' : 'transparent',
    color: active ? '#0E0E0E' : 'rgba(245,240,232,0.7)',
    border: active ? '0.5px solid #B8966E' : '0.5px solid rgba(245,240,232,0.2)',
    transition: 'all 0.2s',
  })

  return (
    <main style={{ background: '#0E0E0E', minHeight: '100vh', color: '#F5F0E8', paddingTop: '80px' }}>
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.4rem 3rem', background: 'rgba(14,14,14,0.93)', backdropFilter: 'blur(12px)', borderBottom: '0.5px solid rgba(184,150,110,0.2)' }}>
        <Link href="/" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.8rem', fontWeight: 300, letterSpacing: '0.3em', color: '#B8966E', textDecoration: 'none' }}>TROVA</Link>
        <Link href="/panier" style={{ fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#B8966E', textDecoration: 'none', border: '0.5px solid rgba(184,150,110,0.4)', padding: '0.5rem 1rem' }}>Panier</Link>
      </nav>

      <div style={{ padding: '3rem 5rem' }}>
        <Link href="/produits" style={{ fontSize: '0.68rem', letterSpacing: '0.15em', color: 'rgba(245,240,232,0.5)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '3rem' }}>
          ← Collections
        </Link>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
          {/* Image */}
          <div style={{ aspectRatio: '3/4', background: '#1A1612', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <span style={{ fontFamily: 'Cormorant Garamond, serif', display: 'none' }}>{produit.categorie[0]}</span>
            {produit.tag && (
              <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', background: 'rgba(184,150,110,0.15)', border: '0.5px solid rgba(184,150,110,0.4)', padding: '0.3rem 0.8rem', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#B8966E' }}>
                {produit.tag}
              </div>
            )}
          </div>

          {/* Infos */}
          <div style={{ paddingTop: '1rem' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8966E', marginBottom: '0.8rem' }}>{produit.categorie}</div>
            <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.5rem', fontWeight: 300, marginBottom: '0.8rem' }}>{produit.nom}</h1>
            <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', color: '#B8966E', marginBottom: '1.5rem' }}>{produit.prix.toFixed(2)} €</div>
            <p style={{ fontSize: '0.83rem', fontWeight: 300, lineHeight: 1.9, color: 'rgba(245,240,232,0.65)', marginBottom: '2rem' }}>{produit.description}</p>

            {/* Couleurs */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.63rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.8rem', color: 'rgba(245,240,232,0.6)' }}>
                Couleur — <span style={{ color: '#F5F0E8' }}>{produit.couleurs[couleur]}</span>
              </div>
              <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                {produit.couleurs.map((c, i) => (
                  <button key={c} onClick={() => setCouleur(i)} style={btnStyle(couleur === i)}>{c}</button>
                ))}
              </div>
            </div>

            {/* Tailles */}
            {produit.tailles[0] !== 'Taille unique' && (
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '0.63rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.8rem', color: 'rgba(245,240,232,0.6)' }}>
                  Taille — <span style={{ color: '#F5F0E8' }}>{produit.tailles[taille]}</span>
                </div>
                <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                  {produit.tailles.map((t, i) => (
                    <button key={t} onClick={() => setTaille(i)} style={btnStyle(taille === i)}>{t}</button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantité */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ fontSize: '0.63rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.8rem', color: 'rgba(245,240,232,0.6)' }}>Quantité</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <button onClick={() => setQty(Math.max(1, qty - 1))} style={{ ...btnStyle(false), width: '36px', padding: '0.5rem' }}>−</button>
                <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem' }}>{qty}</span>
                <button onClick={() => setQty(qty + 1)} style={{ ...btnStyle(false), width: '36px', padding: '0.5rem' }}>+</button>
              </div>
            </div>

            {/* Boutons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <button onClick={acheterMaintenant} style={{ background: '#B8966E', color: '#0E0E0E', padding: '1rem', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', border: 'none', cursor: 'pointer', fontFamily: 'Jost, sans-serif', fontWeight: 400 }}>
                Acheter maintenant
              </button>
              <button onClick={ajouterAuPanier} style={{ background: 'transparent', color: ajoute ? '#B8966E' : '#F5F0E8', padding: '1rem', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', border: `0.5px solid ${ajoute ? '#B8966E' : 'rgba(245,240,232,0.3)'}`, cursor: 'pointer', fontFamily: 'Jost, sans-serif', transition: 'all 0.3s' }}>
                {ajoute ? '✓ Ajouté au panier' : 'Ajouter au panier'}
              </button>
            </div>

            {/* Détails */}
            <div style={{ marginTop: '2.5rem', borderTop: '0.5px solid rgba(184,150,110,0.15)', paddingTop: '1.5rem' }}>
              <div style={{ fontSize: '0.63rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#B8966E', marginBottom: '0.8rem' }}>Détails du produit</div>
              {produit.details.map(d => (
                <div key={d} style={{ fontSize: '0.78rem', fontWeight: 300, color: 'rgba(245,240,232,0.6)', lineHeight: 2, display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <span style={{ width: '4px', height: '4px', background: '#B8966E', borderRadius: '50%', flexShrink: 0 }}></span>
                  {d}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
