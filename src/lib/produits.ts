export interface Product {
  id: string
  nom: string
  categorie: string
  prix: number
  description: string
  details: string[]
  couleurs: string[]
  tailles: string[]
  stripePriceId: string
  tag?: string
}

export const produits: Product[] = [
  {
    id: 'tshirt-oversize-01',
    nom: 'T-Shirt Oversize Essential',
    categorie: 'T-Shirts',
    prix: 24.99,
    description: 'Coupe oversize tendance, tissu premium 100% coton. Confortable, élégant, polyvalent.',
    details: ['100% coton premium', 'Coupe oversize', 'Lavable en machine', 'Livraison internationale'],
    couleurs: ['Noir', 'Blanc', 'Beige', 'Gris'],
    tailles: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    stripePriceId: process.env.STRIPE_PRICE_TSHIRT || 'price_tshirt',
    tag: 'Bestseller',
  },
  {
    id: 'robe-ete-01',
    nom: 'Robe d\'Été Florale',
    categorie: 'Robes',
    prix: 28.99,
    description: 'Robe légère et fluide pour l\'été. Coupe midi élégante, imprimé floral exclusif.',
    details: ['Tissu léger et respirant', 'Coupe midi', 'Taille ajustable', 'Livraison internationale'],
    couleurs: ['Floral Rose', 'Floral Bleu', 'Uni Blanc'],
    tailles: ['XS', 'S', 'M', 'L', 'XL'],
    stripePriceId: process.env.STRIPE_PRICE_ROBE || 'price_robe',
    tag: 'Nouveauté',
  },
  {
    id: 'lunettes-01',
    nom: 'Lunettes de Soleil Premium',
    categorie: 'Accessoires',
    prix: 19.99,
    description: 'Protection UV400 certifiée. Style contemporain pour homme et femme.',
    details: ['Protection UV400', 'Monture légère', 'Unisexe', 'Étui inclus'],
    couleurs: ['Noir', 'Tortoise', 'Or'],
    tailles: ['Taille unique'],
    stripePriceId: process.env.STRIPE_PRICE_LUNETTES || 'price_lunettes',
    tag: 'Exclusif',
  },
  {
    id: 'casquette-01',
    nom: 'Casquette Trova Signature',
    categorie: 'Accessoires',
    prix: 16.99,
    description: 'Casquette brodée logo TROVA. Style streetwear premium, ajustable.',
    details: ['Broderie logo TROVA', 'Fermeture ajustable', 'Coton structuré', 'Unisexe'],
    couleurs: ['Noir', 'Beige', 'Blanc'],
    tailles: ['Taille unique'],
    stripePriceId: process.env.STRIPE_PRICE_CASQUETTE || 'price_casquette',
    tag: 'Populaire',
  },
]

export const getProduit = (id: string) => produits.find(p => p.id === id)
