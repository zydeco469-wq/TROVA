import Link from 'next/link'
import { produits } from '@/lib/produits'

export const metadata = {
  title: 'Collections — TROVA',
  description: 'Découvrez toutes les collections TROVA : t-shirts oversize, robes d\'été, lunettes et casquettes premium.',
}

export default function ProduitsPage() {
  return (
    <main style={{ background: '#0E0E0E', minHeight: '100vh', color: '#F5F0E8', paddingTop: '80px' }}>
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.4rem 3rem', background: 'rgba(14,14,14,0.93)', backdropFilter: 'blur(12px)', borderBottom: '0.5px solid rgba(184,150,110,0.2)' }}>
        <Link href="/" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.8rem', fontWeight: 300, letterSpacing: '0.3em', color: '#B8966E', textDecoration: 'none' }}>TROVA</Link>
        <Link href="/panier" style={{ fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#B8966E', textDecoration: 'none', border: '0.5px solid rgba(184,150,110,0.4)', padding: '0.5rem 1rem' }}>Panier</Link>
      </nav>

      <section style={{ padding: '4rem 5rem' }}>
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ fontSize: '0.63rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#B8966E', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ display: 'block', width: '20px', height: '0.5px', background: '#B8966E' }}></span>
            Toutes les collections
          </div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3rem', fontWeight: 300 }}>
            Nos <em style={{ fontStyle: 'italic', color: '#D4B896' }}>Pièces</em>
          </h1>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
          {produits.map((p) => (
            <Link key={p.id} href={`/produits/${p.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ cursor: 'pointer' }}>
                <div style={{ aspectRatio: '3/4', background: '#1A1612', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', position: 'relative' }}>
                  <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '5rem', color: 'rgba(184,150,110,0.12)', fontWeight: 300 }}>{p.categorie[0]}</span>
                  {p.tag && (
                    <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'rgba(184,150,110,0.15)', border: '0.5px solid rgba(184,150,110,0.4)', padding: '0.25rem 0.6rem', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#B8966E' }}>
                      {p.tag}
                    </div>
                  )}
                </div>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.15em', color: '#B8966E', textTransform: 'uppercase', marginBottom: '0.3rem' }}>{p.categorie}</div>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', fontWeight: 300, marginBottom: '0.3rem' }}>{p.nom}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.82rem', color: 'rgba(245,240,232,0.65)', fontWeight: 300 }}>{p.prix.toFixed(2)} €</span>
                  <span style={{ fontSize: '0.63rem', letterSpacing: '0.1em', color: '#B8966E' }}>Voir →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
