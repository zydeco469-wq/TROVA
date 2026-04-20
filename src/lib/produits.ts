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
    id: 'chemise-homme-01',
    nom: 'Chemise Homme Élégance',
    categorie: 'Chemises',
    prix: 32.99,
    description: 'Chemise premium manches longues, coupe slim élégante. Parfaite pour le bureau ou une soirée.',
    details: ['Tissu premium anti-froissé', 'Coupe slim', 'Manches longues', 'Style business', 'Livraison mondiale'],
    couleurs: ['Camel', 'Blanc', 'Noir', 'Navy'],
    tailles: ['M', 'L', 'XL', 'XXL', 'XXXL', '4XL'],
    tag: 'Premium',
  },
  {
    id: 'chemise-imprimee-01',
    nom: 'Chemise Imprimée Signature',
    categorie: 'Chemises',
    prix: 34.99,
    description: 'Chemise imprimée chaînes dorées style luxe. Un statement piece unique pour se démarquer.',
    details: ['Tissu satiné', 'Imprimé exclusif', 'Manches longues', 'Style luxe', 'Livraison mondiale'],
    couleurs: ['Blanc / Or'],
    tailles: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    tag: 'Exclusif',
  },
  {
    id: 'tshirt-streetwear-01',
    nom: 'T-Shirt Streetwear Oversize',
    categorie: 'T-Shirts',
    prix: 24.99,
    description: 'T-shirt oversize avec poche patch, style streetwear urbain. Confortable et tendance.',
    details: ['100% coton premium', 'Coupe oversize', 'Poche patch', 'Style streetwear', 'Livraison mondiale'],
    couleurs: ['Gris', 'Noir', 'Blanc', 'Bleu'],
    tailles: ['M', 'L', 'XL', '2XL', '3XL', '4XL'],
    tag: 'Bestseller',
  },
  {
    id: 'tshirt-retro-01',
    nom: 'T-Shirt Vintage Rétro',
    categorie: 'T-Shirts',
    prix: 22.99,
    description: 'T-shirt style vintage délavé, col henley. Coupe ample respirante avec finitions effilochées.',
    details: ['Modal premium', 'Style vintage délavé', 'Col henley', 'Finitions effilochées', 'Livraison mondiale'],
    couleurs: ['Noir Délavé', 'Gris', 'Marron'],
    tailles: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    tag: 'Tendance',
  },
  {
    id: 'polo-vert-01',
    nom: 'Polo Premium Brodé',
    categorie: 'Polos',
    prix: 29.99,
    description: 'Polo 100% coton broderie signature, col rayé intérieur. Style Golf casual chic et élégant.',
    details: ['100% coton', 'Broderie signature', 'Col rayé intérieur', 'Style Golf', 'Livraison mondiale'],
    couleurs: ['Vert', 'Noir', 'Blanc', 'Navy'],
    tailles: ['M', 'L', 'XL', 'XXL', 'XXXL'],
    tag: 'Populaire',
  },
  {
    id: 'polo-luxe-01',
    nom: 'Polo Maille Côtelée Luxe',
    categorie: 'Polos',
    prix: 34.99,
    description: 'Polo en maille côtelée fine, col ouvert élégant. Texture raffinée pour un style contemporain.',
    details: ['Maille côtelée fine', 'Col ouvert', 'Texture premium', 'Style contemporain', 'Livraison mondiale'],
    couleurs: ['Camel', 'Noir', 'Gris', 'Bleu'],
    tailles: ['M', 'L', 'XL', 'XXL', 'XXXL'],
    tag: 'Nouveauté',
  },
]

export const getProduit = (id: string) => produits.find(p => p.id === id)
