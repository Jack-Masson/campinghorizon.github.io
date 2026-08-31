# 🏕️ Camping Horizon - Site Vitrine Officiel

Bienvenue sur le site vitrine officiel de **Camping Horizon**, un jeu de gestion et simulation de camping immersif et relaxant.

![Camping Horizon](./assets/banner.png)

## 📋 À propos du projet

**Camping Horizon** est un jeu PC indépendant de gestion de camping où vous construisez, aménagez et développez votre propre destination touristique au cœur de paysages magnifiques.

Ce dépôt contient le site vitrine officiel du jeu, conçu pour présenter le gameplay, les fonctionnalités et permettre aux joueurs de télécharger le jeu.

### 🎮 Caractéristiques du jeu

- 🏗️ **Construisez** - Créez emplacements, installations et aménagements
- 👥 **Gérez** - Accueillez campeurs et contrôlez votre équipe
- 💰 **Optimisez** - Gérez finances et tarifs intelligemment
- 🎨 **Personnalisez** - Créez un camping unique et immersif
- 🌲 **Explorez** - Découvrez paysages, saisons et nouveaux défis
- ⭐ **Prospérez** - Devenez une destination incontournable

## 🌐 Site Vitrine

### Accès rapide

- **[Visiter le site](https://campinghorizon.com)** - Accédez au site officiel
- **[Télécharger le jeu](https://campinghorizon.com#telecharger)** - Obtenez Camping Horizon

### 📱 Platforms disponibles

- **Windows** - Version complète PC
- **Linux** - Support natif
- **macOS** - Optimisé pour Apple Silicon

## 🛠️ Stack technologique

### Frontend

- **React** - Framework UI moderne
- **JavaScript ES6+** - Langage principal
- **CSS3** - Styling avec variables CSS
- **Lucide React** - Iconographie

### Architecture

```
src/
├── components/          # Composants React réutilisables
├── pages/              # Pages du site
├── styles/             # Fichiers CSS globaux
├── assets/             # Images, icônes, ressources
└── App.jsx             # Composant principal
```

### Responsive Design

- ✅ Desktop (1024px+)
- ✅ Tablet (768px - 1023px)
- ✅ Mobile (< 768px)

## 🎨 Design & Esthétique

### Palette de couleurs

```
Primaire :      #e8dcc8 (Beige crème)
Secondaire :    #d4a574 (Or chaud)
Accent bois :   #8b753b (Bois sombre)
Fond :          #0a0804 (Noir profond)
```

### Inspiration visuelle

Le site s'inspire directement de l'interface du jeu :
- **Panneaux en bois** - Bordures et cadres inspirés du jeu
- **Esthétique chaleureuse** - Nature, montagne, forêt
- **Premium mais accessible** - Design professionnel et accueillant
- **Textures subtiles** - Bois et papier pour l'immersion

## 📦 Installation & Développement

### Prérequis

- **Node.js** 16+ 
- **npm** ou **yarn**
- **Git**

### Installation locale

```bash
# Cloner le dépôt
git clone https://github.com/username/camping-horizon.git
cd camping-horizon

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm start

# Accéder à http://localhost:3000
```

### Build pour production

```bash
# Créer la version optimisée
npm run build

# Le dossier `build/` contient les fichiers prêts pour déploiement
```

## 🚀 Déploiement

### Options de déploiement

#### Vercel (Recommandé)
```bash
npm install -g vercel
vercel
```

#### Netlify
```bash
npm run build
# Drag & drop le dossier build sur Netlify
```

#### GitHub Pages
```bash
npm install --save-dev gh-pages
# Configurer package.json avec "homepage": "https://username.github.io/camping-horizon"
npm run build
npm run deploy
```

## 📝 Configuration des téléchargements

### Mettre à jour les URLs de téléchargement

Modifiez le fichier `src/config/downloads.js` :

```javascript
export const DOWNLOAD_LINKS = {
  WINDOWS: 'https://votre-lien-windows',
  LINUX: 'https://votre-lien-linux',
  MACOS: 'https://votre-lien-macos'
};
```

Ou directement dans le composant principal avec les variables d'environnement :

```bash
REACT_APP_DOWNLOAD_WINDOWS=https://...
REACT_APP_DOWNLOAD_LINUX=https://...
REACT_APP_DOWNLOAD_MACOS=https://...
```

## 📊 Sections du site

### 1. Navigation & Header
- Logo avec icône montagne
- Menu responsive
- Bouton "Jouer maintenant"

### 2. Section HERO
- Titre accrocheur
- 3 boutons de téléchargement (Windows, Linux, macOS)
- Illustration panoramique du jeu
- Indicateur de scroll animé

### 3. Présentation du jeu
- Capture d'écran avec cadre bois
- Description détaillée
- Call-to-action

### 4. 6 Fonctionnalités principales
- Cartes avec icônes
- Descriptions courtes
- Effets hover interactifs

### 5. Galerie immersive
- 6 screenshots du jeu
- Zoom au survol
- Lightbox interactive

### 6. Progression visuelle
- Timeline de 5 étapes
- Représentation du développement du camping

### 7. Section Ambiance
- Illustration coucher de soleil
- Texte inspirant et émotionnel

### 8. Section Téléchargement
- Panneau principal façon menu de jeu
- 3 options de plateforme
- Tailles de téléchargement

### 9. Footer
- Navigation complète
- Liens communauté (Discord, Twitch)
- Copyright

## 🎬 Animations & Interactivité

- **Hover effects** - Tous les boutons et cartes
- **Scroll animations** - Apparition progressive des sections
- **Parallaxe léger** - Effet de profondeur
- **Pulsations** - Animations feu de camp
- **Transitions fluides** - 0.3s ease-out

## ♿ Accessibilité

- ✅ Contraste WCAG AA
- ✅ Navigation au clavier
- ✅ Labels sémantiques
- ✅ Texte alternatif sur images
- ✅ Structure HTML5 valide

## 📱 Performance

- Lighthouse Score: **90+**
- Temps de chargement: **< 2s**
- Mobile optimisé
- Images optimisées
- Code minifié

## 🔍 SEO

- Meta tags configurés
- Open Graph pour partage social
- Sitemap généré
- Mobile-first indexing
- Structured data

### Meta tags principaux

```html
<meta name="description" content="Camping Horizon - Construisez le camping de vos rêves. Jeu de gestion indépendant sur PC.">
<meta name="keywords" content="camping, gestion, simulation, jeu, PC, indépendant">
<meta property="og:title" content="Camping Horizon">
<meta property="og:description" content="Construisez votre camping. Créez votre horizon.">
```

## 🤝 Contribution

Les contributions sont bienvenues ! 

### Pour contribuer

1. **Fork** le dépôt
2. Créez une **branche** (`git checkout -b feature/amelioration`)
3. **Commit** vos changements (`git commit -m 'Ajout de X'`)
4. **Push** vers la branche (`git push origin feature/amelioration`)
5. Ouvrez une **Pull Request**

### Guidelines

- Respectez le style de code existant
- Testez vos modifications sur mobile et desktop
- Ajoutez des descriptions claires aux PR
- Suivez la structure des commits conventionnels

## 🐛 Signaler un bug

Découvrez un problème ? Créez une [issue](https://github.com/username/camping-horizon/issues) avec :

- Description du bug
- Étapes pour reproduire
- Comportement attendu vs réel
- Screenshots/vidéo si utile
- Configuration système

## 📧 Contact & Communauté

### Rejoignez-nous

- **Discord** - [Rejoindre le serveur](https://discord.gg/campinghorizon)
- **Twitch** - [Suivre les streams](https://twitch.tv/campinghorizon)
- **Twitter** - [@CampingHorizon](https://twitter.com/campinghorizon)
- **Email** - contact@campinghorizon.com

## 📄 Licence

Ce projet est sous licence [MIT](LICENSE).

Vous êtes libre de :
- ✅ Utiliser le code
- ✅ Modifier le code
- ✅ Distribuer le code
- ❌ Réclamer le jeu comme vôtre

## 🙏 Remerciements

Merci à tous les contributeurs et à la communauté Camping Horizon pour leur soutien !

### Outils & Librairies

- [React](https://react.dev)
- [Lucide React](https://lucide.dev)
- [Vercel](https://vercel.com)
- Et tous les contributeurs open-source

## 📈 Feuille de route

### Version actuelle (v1.0)
- ✅ Site vitrine complet
- ✅ Responsive design
- ✅ Section téléchargement
- ✅ Galerie screenshots

### À venir (v1.1)
- 🔄 Blog/actualités
- 🔄 Système de notation
- 🔄 Forum communauté
- 🔄 Système de bugs reports

### Futures améliorations
- 🎯 Dark mode toggle
- 🎯 Internationalisation (i18n)
- 🎯 Live chat support
- 🎯 Intégration Steam

---

## 📊 Statistiques

![GitHub stars](https://img.shields.io/github/stars/username/camping-horizon?style=social)
![GitHub forks](https://img.shields.io/github/forks/username/camping-horizon?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/username/camping-horizon?style=social)

---

## 🎮 Ressources

- **Site officiel** - https://campinghorizon.com
- **Documentation** - [Wiki](https://github.com/username/camping-horizon/wiki)
- **Changelog** - [Releases](https://github.com/username/camping-horizon/releases)
- **Issues** - [Bug tracker](https://github.com/username/camping-horizon/issues)

---

**Construisez votre camping. Créez votre horizon.** 🌅

*Camping Horizon - Jeu indépendant • PC • Linux • macOS*
