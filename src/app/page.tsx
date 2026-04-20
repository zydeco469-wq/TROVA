'use client'
import Link from 'next/link'
import { useState } from 'react'
import { produits } from '@/lib/produits'

export default function Home() {
  const [panier, setPanier] = useState<string[]>([])

  const ajouterAuPanier = (id: string) => {
    const saved = JSON.parse(localStorage.getItem('trova_panier') || '[]')
    saved.push(id)
    localStorage.setItem('trova_panier', JSON.stringify(saved))
    setPanier(saved)
  }

  return (
    <main style={{ background: '#0E0E0E', minHeight: '100vh', color: '#F5F0E8' }}>

      {/* NAVBAR */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '1.4rem 3rem',
        background: 'rgba(14,14,14,0.93)',
        backdropFilter: 'blur(12px)',
        borderBottom: '0.5px solid rgba(184,150,110,0.2)',
      }}>
        <Link href="/" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.8rem', fontWeight: 300, letterSpacing: '0.3em', color: '#B8966E', textDecoration: 'none' }}>
          TROVA
        </Link>
        <div style={{ display: 'flex', gap: '2.5rem' }}>
          {['Collections', 'Nouveautés', 'À propos'].map(l => (
            <Link key={l} href="/produits" style={{ fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.7)', textDecoration: 'none' }}>{l}</Link>
          ))}
        </div>
        <Link href="/panier" style={{ fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#B8966E', textDecoration: 'none', border: '0.5px solid rgba(184,150,110,0.4)', padding: '0.5rem 1rem' }}>
          Panier
        </Link>
      </nav>

      {/* HERO */}
      <section style={{ minHeight: '100vh', display: 'grid', gridTemplateColumns: '1fr 1fr', paddingTop: '80px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '5rem 3rem 5rem 5rem' }}>
          <div style={{ fontSize: '0.63rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#B8966E', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ display: 'block', width: '30px', height: '0.5px', background: '#B8966E' }}></span>
            Nouvelle Collection 2025
          </div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(3.5rem, 5.5vw, 5rem)', fontWeight: 300, lineHeight: 1.05, marginBottom: '1.5rem' }}>
            Mode &<br /><em style={{ fontStyle: 'italic', color: '#D4B896' }}>Élégance</em><br />Redéfinie
          </h1>
          <p style={{ fontSize: '0.83rem', fontWeight: 300, lineHeight: 1.9, color: 'rgba(245,240,232,0.6)', maxWidth: '400px', marginBottom: '3rem' }}>
            T-shirts oversize, robes d&apos;été, lunettes et casquettes premium. TROVA réunit les tendances mondiales livrées directement chez vous.
          </p>
          <div style={{ display: 'flex', gap: '1.2rem' }}>
            <Link href="/produits" style={{ background: '#B8966E', color: '#0E0E0E', padding: '0.9rem 2.5rem', fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 400 }}>
              Explorer
            </Link>
            <Link href="/produits" style={{ background: 'transparent', color: '#F5F0E8', padding: '0.9rem 2rem', fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none', border: '0.5px solid rgba(245,240,232,0.3)' }}>
              Voir la collection
            </Link>
          </div>
        </div>
        <div style={{ background: '#1A1612', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
          <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '12rem', fontWeight: 300, color: 'rgba(184,150,110,0.08)', letterSpacing: '0.05em' }}>T</span>
          <div style={{ position: 'absolute', bottom: '3rem', right: '3rem', border: '0.5px solid rgba(184,150,110,0.4)', padding: '1.2rem 1.5rem', textAlign: 'center' }}>
            <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.2rem', color: '#B8966E', display: 'block' }}>4</span>
            <span style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.5)' }}>Collections</span>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div style={{ background: '#B8966E', padding: '0.7rem 0', overflow: 'hidden', whiteSpace: 'nowrap' }}>
        <span className="animate-marquee" style={{ display: 'inline-block', fontSize: '0.63rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#0E0E0E' }}>
          {Array(4).fill('LIVRAISON MONDIALE &nbsp;&nbsp;·&nbsp;&nbsp; QUALITÉ PREMIUM &nbsp;&nbsp;·&nbsp;&nbsp; PAIEMENT SÉCURISÉ STRIPE &nbsp;&nbsp;·&nbsp;&nbsp; RETOURS SOUS 30 JOURS &nbsp;&nbsp;·&nbsp;&nbsp; NOUVELLES ARRIVÉES &nbsp;&nbsp;·&nbsp;&nbsp;').join('')}
        </span>
      </div>

      {/* PRODUITS */}
      <section style={{ padding: '6rem 5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.8rem', fontWeight: 300 }}>
            Nos <em style={{ fontStyle: 'italic', color: '#D4B896' }}>Collections</em>
          </h2>
          <Link href="/produits" style={{ fontSize: '0.63rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8966E', textDecoration: 'none' }}>
            Voir tout →
          </Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
          {produits.map((p) => (
            <Link key={p.id} href={`/produits/${p.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ cursor: 'pointer' }}>
                <div style={{ aspectRatio: '3/4', background: '#1A1612', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', position: 'relative', overflow: 'hidden' }}>
                  <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '4rem', color: 'rgba(184,150,110,0.12)', fontWeight: 300 }}>
                    {p.categorie[0]}
                  </span>
                  <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'rgba(184,150,110,0.15)', border: '0.5px solid rgba(184,150,110,0.4)', padding: '0.25rem 0.6rem', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#B8966E' }}>
                    {p.tag}
                  </div>
                </div>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.15em', color: '#B8966E', textTransform: 'uppercase', marginBottom: '0.3rem' }}>{p.categorie}</div>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', fontWeight: 300, marginBottom: '0.3rem' }}>{p.nom}</div>
                <div style={{ fontSize: '0.82rem', color: 'rgba(245,240,232,0.65)', fontWeight: 300 }}>{p.prix.toFixed(2)} €</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* VALEURS */}
      <section style={{ margin: '0 5rem 6rem', borderTop: '0.5px solid rgba(184,150,110,0.15)', borderBottom: '0.5px solid rgba(184,150,110,0.15)', padding: '4rem 0', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3rem', textAlign: 'center' }}>
        {[
          { titre: 'Livraison Mondiale', desc: 'France, Afrique, international. Suivi inclus.' },
          { titre: 'Paiement Sécurisé', desc: 'Stripe certifié. Visa, Mastercard, Apple Pay.' },
          { titre: 'Satisfaction 30j', desc: 'Retour ou échange sans conditions.' },
        ].map(v => (
          <div key={v.titre}>
            <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', fontWeight: 300, color: '#B8966E', marginBottom: '0.7rem' }}>{v.titre}</div>
            <div style={{ fontSize: '0.8rem', fontWeight: 300, color: 'rgba(245,240,232,0.55)', lineHeight: 1.8 }}>{v.desc}</div>
          </div>
        ))}
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: '0.5px solid rgba(184,150,110,0.2)', padding: '2.5rem 5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', fontWeight: 300, letterSpacing: '0.3em', color: '#B8966E' }}>TROVA</span>
        <span style={{ fontSize: '0.63rem', letterSpacing: '0.12em', color: 'rgba(245,240,232,0.35)' }}>© 2025 TROVA — Tous droits réservés</span>
        <div style={{ display: 'flex', gap: '2rem' }}>
          {['CGV', 'Mentions légales', 'Contact'].map(l => (
            <span key={l} style={{ fontSize: '0.63rem', letterSpacing: '0.15em', color: 'rgba(245,240,232,0.4)', cursor: 'pointer' }}>{l}</span>
          ))}
        </div>
      </footer>
    </main>
  )
}
