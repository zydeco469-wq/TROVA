import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TROVA — Mode & Élégance Premium',
  description: 'Boutique mode en ligne TROVA. T-shirts oversize, robes d\'été, lunettes et casquettes premium. Livraison mondiale.',
  keywords: 'mode, vêtements, t-shirt oversize, robe été, lunettes, casquette, boutique en ligne, livraison mondiale',
  openGraph: {
    title: 'TROVA — Mode & Élégance Premium',
    description: 'Découvrez les collections TROVA. Mode premium livrée dans le monde entier.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@200;300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
