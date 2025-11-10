
# AECHA - Agriculture Connectée et Durable

Bienvenue sur le dépôt officiel du site web de l'**AECHA** (Association des Étudiants du Complexe Horticole d'Agadir). Ce projet est une plateforme moderne, responsive et interactive conçue pour connecter les étudiants, présenter la vision de l'association et recueillir les initiatives via l'outil "Ta Voix".

## 🌟 Fonctionnalités Clés

*   **Bilingue & Bi-directionnel** : Support complet du Français et de l'Arabe, avec gestion automatique de la direction du texte (LTR/RTL).
*   **Design Moderne & Adaptatif** : Interface utilisateur soignée utilisant Tailwind CSS, animations fluides et "Glassmorphism".
*   **Thématisation Dynamique** : Sélecteur de thèmes (Original, Forêt, Tech, Terre) modifiant instantanément la palette de couleurs via des variables CSS.
*   **Outil "Ta Voix"** : Un formulaire interactif multi-étapes permettant aux étudiants de soumettre des idées ou des problèmes de manière anonyme ou nominative, avec un système de suivi simulé.
*   **Présentation de l'Équipe** : Section dynamique pour découvrir les membres du bureau et des comités.
*   **Feuille de Route (Programme)** : Visualisation des projets de l'association avec filtrage par catégorie et statut.

## 🛠 Stack Technique

Ce projet est construit avec des technologies modernes pour assurer performance et maintenabilité :

*   **Framework** : [React 18](https://react.dev/) (avec Hooks et Composants fonctionnels)
*   **Langage** : [TypeScript](https://www.typescriptlang.org/) pour un code robuste et typé.
*   **Styling** : [Tailwind CSS](https://tailwindcss.com/) (version CDN pour prototypage rapide).
*   **Build Tool** : [Vite](https://vitejs.dev/) pour un développement ultra-rapide.
*   **Déploiement** : Configuré pour GitHub Pages via GitHub Actions.

## 🚀 Installation et Lancement

Pour lancer le projet localement sur votre machine :

1.  **Cloner le dépôt**
    ```bash
    git clone https://github.com/votre-utilisateur/aecha-website.git
    cd aecha-website
    ```

2.  **Installer les dépendances**
    ```bash
    npm install
    ```

3.  **Lancer le serveur de développement**
    ```bash
    npm run dev
    ```
    Ouvrez votre navigateur sur `http://localhost:5173`.

## 📦 Déploiement

Ce projet inclut un workflow GitHub Actions (`.github/workflows/deploy.yml`) qui déploie automatiquement l'application sur **GitHub Pages** à chaque `push` sur la branche principale.

## 📂 Structure du Projet

```
src/
├── components/    # Composants réutilisables (Header, Hero, Cards...)
├── data/          # Données statiques (membres de l'équipe, programme)
├── pages/         # Pages principales (Home, Vision, Programme, Ta Voix)
├── App.tsx        # Point d'entrée de l'application et routage
└── index.tsx      # Montage React
```

---
*Développé pour l'AECHA - Cultivons l'avenir ensemble.*
