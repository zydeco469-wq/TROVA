export interface Product {
  id: string
  nom: string
  categorie: string
  prix: number
  description: string
  details: string[]
  couleurs: string[]
  tailles: string[]
  tag?: string
}

export const produits: Product[] = [
  {
    id: 'tshirt-streetwear-01',
    nom: 'T-Shirt Streetwear Oversize',
    categorie: 'T-Shirts',
    prix: 24.99,
    description: 'T-shirt Hip Hop coupe oversize, style streetwear classique. Manches courtes, tissu respirant et confortable.',
    details: ['100% coton premium', 'Coupe oversize', 'Style streetwear', 'Lavable en machine', 'Livraison mondiale'],
    couleurs: ['Noir', 'Blanc', 'Gris', 'Vert'],
    tailles: ['M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL'],
    tag: 'Bestseller',
  },
  {
    id: 'pull-laine-01',
    nom: 'Pull Col Rond Premium',
    categorie: 'T-Shirts',
    prix: 34.99,
    description: 'Pull en laine 100% col rond, coupe ample décontractée chic. Parfait pour le printemps et l\'été.',
    details: ['100% laine premium', 'Col rond', 'Coupe ample', 'Style décontracté chic', 'Livraison mondiale'],
    couleurs: ['Noir', 'Gris', 'Marron', 'Blanc', 'Navy'],
    tailles: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    tag: 'Nouveauté',
  },
  {
    id: 'tshirt-retro-01',
    nom: 'T-Shirt Modal Rétro',
    categorie: 'T-Shirts',
    prix: 19.99,
    description: 'T-shirt en modal style rétro délavé, ourlet effiloché. Coupe ample respirante et douce pour la peau.',
    details: ['Modal premium', 'Style rétro délavé', 'Ourlet effiloché', 'Respirant et doux', 'Livraison mondiale'],
    couleurs: ['Gris'],
    tailles: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    tag: 'Exclusif',
  },
  {
    id: 'polo-luxe-01',
    nom: 'Polo 100% Coton Luxe',
    categorie: 'Polos',
    prix: 29.99,
    description: 'Polo haut de gamme 100% coton, broderie signature. Style Golf casual business, élégant et polyvalent.',
    details: ['100% coton haut de gamme', 'Broderie signature', 'Style Golf casual', 'Multi-couleurs', 'Livraison mondiale'],
    couleurs: ['Chameau', 'Noir', 'Bleu', 'Gris', 'Blanc', 'Vert', 'Orange'],
    tailles: ['M', 'L', 'XL', 'XXL', 'XXXL', '4XL'],
    tag: 'Populaire',
  },
  {
    id: 'chemise-homme-01',
    nom: 'Chemise Homme Luxe',
    categorie: 'Chemises',
    prix: 32.99,
    description: 'Chemise à manches longues luxe, couleur unie décontractée. Style bureau d\'affaires élégant et moderne.',
    details: ['Tissu premium', 'Manches longues', 'Style bureau', 'Coupe slim', 'Livraison mondiale'],
    couleurs: ['Navy', 'Gris', 'Noir'],
    tailles: ['M', 'L', 'XL', 'XXL', 'XXXL', '4XL'],
    tag: 'Premium',
  },
  {
    id: 'chemise-femme-01',
    nom: 'Chemise Femme Lin & Coton',
    categorie: 'Chemises',
    prix: 27.99,
    description: 'Chemise ample en coton et lin, manches longues élégantes. Style Vintage Y2K décontracté.',
    details: ['Coton et lin', 'Coupe ample', 'Style Vintage Y2K', 'Multi-couleurs', 'Livraison mondiale'],
    couleurs: ['Rose', 'Blanc', 'Bleu', 'Jaune'],
    tailles: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    tag: 'Tendance',
  },
]

export const getProduit = (id: string) => produits.find(p => p.id === id)
