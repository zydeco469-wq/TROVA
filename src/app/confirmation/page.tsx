import Link from 'next/link'

export const metadata = {
  title: 'Commande confirmée — TROVA',
}

export default function ConfirmationPage() {
  return (
    <main style={{ background: '#0E0E0E', minHeight: '100vh', color: '#F5F0E8', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem' }}>
      <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.8rem', fontWeight: 300, letterSpacing: '0.3em', color: '#B8966E', marginBottom: '3rem' }}>
        TROVA
      </div>
      <div style={{ border: '0.5px solid rgba(184,150,110,0.3)', padding: '4rem 3rem', maxWidth: '500px' }}>
        <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3rem', color: '#B8966E', marginBottom: '1rem' }}>✓</div>
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', fontWeight: 300, marginBottom: '1rem' }}>
          Commande <em style={{ fontStyle: 'italic', color: '#D4B896' }}>Confirmée</em>
        </h1>
        <p style={{ fontSize: '0.83rem', fontWeight: 300, lineHeight: 1.9, color: 'rgba(245,240,232,0.6)', marginBottom: '2.5rem' }}>
          Merci pour votre commande. Vous recevrez un email de confirmation sous peu. Votre commande sera expédiée dans les 24-48h.
        </p>
        <Link href="/produits" style={{ background: '#B8966E', color: '#0E0E0E', padding: '0.9rem 2rem', fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-block' }}>
          Continuer mes achats
        </Link>
      </div>
    </main>
  )
}
