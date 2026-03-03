<h1 align="center">🍽️ Cuisine Delight</h1>
<p align="center"><em>Site vitrine pour un restaurant fictif proposant réservations en ligne et carte complète.</em></p>

<p align="center">
  <a href="https://cuisinedelight.netlify.app">
    <img src="https://img.shields.io/badge/🌐_Voir_le_site-Cuisine_Delight-E63946?style=for-the-badge" alt="Voir le site">
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Supabase-3ECF8E?logo=supabase&logoColor=white" alt="Supabase">
  <img src="https://img.shields.io/badge/Hosted_on-Netlify-00C7B7?logo=netlify&logoColor=white" alt="Netlify">
</p>

---

## 📋 Contexte du projet

**Cuisine Delight** est un projet personnel réalisé pour apprendre et pratiquer le développement web frontend avec une intégration backend légère via Supabase.

| | |
|---|---|
| **Type** | Projet personnel |
| **Auteur** | Mattys Lachaise |
| **Année** | 2025 |

---

## 🍜 Présentation

**Cuisine Delight** est le site vitrine d'un restaurant fictif de cuisine française. Il permet aux visiteurs de consulter la carte, de prendre connaissance de l'univers du restaurant et de réserver une table directement en ligne, les réservations étant persistées dans une base de données Supabase.

### Fonctionnalités principales

#### Pages du site
- **Accueil** — Hero avec image de fond, plats du chef mis en avant, section avis clients
- **Menu** — Carte complète organisée par catégories (Entrées, Plats, Desserts, Boissons)
- **Contact** — Coordonnées, liens réseaux sociaux et formulaire de contact accessible
- **Réservation** — Formulaire (nom, couverts, date, heure) connecté à Supabase avec génération d'un identifiant de réservation unique
- **Pages de confirmation** — Redirection après soumission des formulaires (contact & réservation)

---

## 🛠️ Stack technique

| Composant | Technologie |
|-----------|-------------|
| **Frontend** | HTML5, CSS3, JavaScript vanilla |
| **Base de données** | Supabase (PostgreSQL) |
| **Hébergement** | Netlify |
| **Polices** | Google Fonts (Playfair Display) |

---

## 📁 Architecture du projet

```
Site_Resto_Fictif/
├── HTML/
│   ├── contact.html        # Page de contact avec formulaire
│   ├── menu.html           # Carte complète du restaurant
│   ├── merci.html          # Confirmation de contact
│   ├── merci_2.html        # Confirmation de réservation
│   └── reservation.html    # Formulaire de réservation (connecté à Supabase)
│
├── images/
│   ├── Acceuil/            # Images de la page d'accueil (hero, plats, avis)
│   ├── Contact/            # Visuels de la page contact
│   └── Menu/               # Photos des plats du menu
│
├── index.html              # Page d'accueil
├── main.js                 # Logique de réservation (client Supabase)
├── style.css               # Feuille de styles globale
└── package.json
```

---

## 🚀 Installation locale

Aucune installation serveur requise. Le projet est un site statique qui s'ouvre directement dans un navigateur.

```bash
# 1. Cloner le projet
git clone <url-du-repo>
cd Site_Resto_Fictif

# 2. Ouvrir dans le navigateur
# Ouvrir index.html directement, ou utiliser un serveur local :
npx serve .
```

> **Note :** Le formulaire de réservation utilise un import ES module (`@supabase/supabase-js` via CDN). Il nécessite d'être servi via HTTP(S) et non en `file://` pour fonctionner correctement.

---

## 🔭 Améliorations envisagées

- [ ] Slider / carousel pour les avis clients
- [ ] Carte interactive (Google Maps ou OpenStreetMap)
- [ ] Page "À propos" (histoire du restaurant, équipe)
- [ ] Application restaurateur — interface de gestion des réservations, des stocks et du restaurant (tableau de bord connecté à Supabase)

---

## 🧑‍💻 Auteur

Développé par **Mattys Lachaise** — [mattys.contact@gmail.com](mailto:mattys.contact@gmail.com)

---

## 🔒 Licence

Ce projet est publié à titre d'**exemple visuel uniquement**.
Toute utilisation non autorisée (personnelle, commerciale, scolaire) constitue une violation des droits d'auteur.

Tous droits réservés © 2025 KoThek64 — voir le fichier [LICENCE](./LICENCE).

---

<p align="center">
  Projet réalisé avec ❤️ pour apprendre le développement web
</p>
