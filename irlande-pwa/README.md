# 🍀 Voyage Irlande 2025 — PWA

Carnet de voyage numérique installable sur téléphone.

## Déploiement

```bash
git init
git add .
git commit -m "init irlande pwa"
# Créer le repo sur GitHub : irlande-voyage (ou autre nom)
git remote add origin https://github.com/thier43/irlande-voyage.git
git push -u origin main
# Puis déployer sur Vercel (import depuis GitHub)
```

## Données & sécurité

Toutes les données saisies par les utilisateurs sont stockées **uniquement en local**
sur leur téléphone (localStorage). Aucune donnée ne transite vers le serveur.

## Installation sur téléphone

- **Android (Chrome)** : bandeau automatique "Installer l'appli"
- **iPhone (Safari)** : Partager → "Sur l'écran d'accueil"
