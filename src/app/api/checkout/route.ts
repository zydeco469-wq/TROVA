import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { getProduit } from '@/lib/produits'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
})

export async function POST(req: NextRequest) {
  try {
    const { items } = await req.json()

    const lineItems = items.map((item: { id: string; couleur: string; taille: string }) => {
      const produit = getProduit(item.id)
      if (!produit) throw new Error(`Produit introuvable: ${item.id}`)
      return {
        price_data: {
          currency: 'eur',
          product_data: {
            name: produit.nom,
            description: `${item.couleur}${item.taille !== 'Taille unique' ? ` · ${item.taille}` : ''}`,
          },
          unit_amount: Math.round(produit.prix * 100),
        },
        quantity: 1,
      }
    })

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/confirmation?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/panier`,
      shipping_address_collection: {
        allowed_countries: ['FR', 'BE', 'CH', 'MA', 'SN', 'CI', 'TN', 'DZ', 'DJ', 'GB', 'US', 'CA'],
      },
      metadata: {
        boutique: 'TROVA',
      },
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Stripe error:', error)
    return NextResponse.json({ error: 'Erreur lors de la création du paiement' }, { status: 500 })
  }
}
