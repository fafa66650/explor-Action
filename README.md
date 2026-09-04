# FAFATRAINING – Banyuls Aventure

Application PWA statique prête pour GitHub Pages.

## Déploiement GitHub Pages
1. Créer un dépôt GitHub.
2. Envoyer **tous** les fichiers de ce dossier à la racine.
3. GitHub > Settings > Pages > Deploy from a branch > `main` / root.
4. Ouvrir l'URL HTTPS fournie par GitHub Pages.

## Accès joueur / administration
- Première ouverture : bouton **Espace admin** puis PIN initial `2468`.
- L'admin peut changer son PIN, générer des codes temporaires et choisir 3 h, 6 h, 12 h, 1 j, 3 j, 7 j, 14 j ou 30 j.
- Les codes sont **stateless** : ils contiennent une date d'expiration signée et peuvent donc être utilisés sur plusieurs appareils sans base de données.
- Pour un usage public réel, changez le PIN et la clé `ADMIN_SECRET` au début de `app.js` avant publication. GitHub Pages restant statique, cette protection est un contrôle d'accès pratique, pas une sécurité serveur inviolable.

## Hors ligne
L'interface, les missions et la progression sont mises en cache par le Service Worker après la première visite. Le GPS fonctionne si le navigateur l'autorise. La carte de secours intégrée est une carte schématique locale et ne dépend pas de tuiles Internet.

## Important terrain
Les coordonnées fournies sont des points de navigation de travail. Plusieurs lieux/adresses ont été vérifiés auprès de sources officielles, mais avant une animation publique il faut effectuer une reconnaissance terrain des 40 étapes, contrôler l'accessibilité, les travaux, horaires, propriétés privées et la précision GPS réelle de chaque zone.
