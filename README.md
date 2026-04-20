# TROVA — Boutique Mode Premium

Boutique e-commerce dropshipping mode & vêtements. Stack : Next.js 14 + Tailwind + Stripe.

---

## 🚀 DÉPLOIEMENT EN 5 ÉTAPES

### Étape 1 — Télécharger le dossier
Télécharge ce dossier sur ton ordinateur.

### Étape 2 — Créer un compte GitHub (gratuit)
1. Va sur github.com
2. Crée un compte gratuit
3. Crée un nouveau "repository" appelé `trova-boutique`
4. Uploade tous les fichiers de ce dossier dedans

### Étape 3 — Déployer sur Vercel
1. Va sur vercel.com (connecte-toi avec ton compte GitHub)
2. Clique "New Project"
3. Sélectionne le repository `trova-boutique`
4. Clique "Deploy"
5. Ta boutique est en ligne ! 🎉

### Étape 4 — Configurer Stripe
1. Va sur dashboard.stripe.com
2. Crée un compte gratuit
3. Va dans Développeurs > Clés API
4. Copie ta "Clé secrète" (sk_test_...) et ta "Clé publiable" (pk_test_...)
5. Sur Vercel : Settings > Environment Variables
6. Ajoute ces 3 variables :
   - `STRIPE_SECRET_KEY` = ta clé secrète
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` = ta clé publiable
   - `NEXT_PUBLIC_URL` = https://ton-site.vercel.app
7. Redéploie (onglet Deployments > Redeploy)

### Étape 5 — Ajouter tes vrais produits
Ouvre le fichier `src/lib/produits.ts` et modifie :
- `nom` : le nom de ton produit
- `prix` : le prix en euros
- `description` : la description
- `couleurs` et `tailles` disponibles

---

## 💰 RECEVOIR LES PAIEMENTS

Les paiements arrivent automatiquement sur ton compte Stripe.
Pour virer l'argent sur ton compte bancaire :
1. Dashboard Stripe > Balances
2. Clique "Payout"
3. L'argent arrive en 2-3 jours ouvrés

---

## 📦 STRUCTURE DU PROJET

```
trova/
├── src/
│   ├── app/
│   │   ├── page.tsx          → Page d'accueil
│   │   ├── produits/         → Liste des produits
│   │   ├── produits/[id]/    → Page produit individuelle
│   │   ├── panier/           → Panier
│   │   ├── confirmation/     → Page après paiement
│   │   └── api/checkout/     → API Stripe
│   └── lib/
│       └── produits.ts       → Données des produits (à modifier)
├── .env.example              → Modèle pour les variables d'environnement
└── README.md
```

---

## 🌍 MARCHÉS COUVERTS

La boutique accepte les commandes et paiements depuis :
France, Belgique, Suisse, Maroc, Sénégal, Côte d'Ivoire, Tunisie, Algérie, Djibouti, UK, USA, Canada

---

Fait avec ❤️ — TROVA 2025
