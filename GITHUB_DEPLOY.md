# Déploiement GitHub Pages — Explor’Action V5

## Dossier à publier

Publier **uniquement le contenu de ce dossier public V5**. Ne jamais envoyer le paquet `EXPLOR_ACTION_V5_ADMIN_OFFLINE`, `private-key.jwk.json` ou toute sauvegarde de clé privée.

## Procédure

1. Remplacer les anciens fichiers du dépôt par le contenu de la V5.
2. Conserver `.nojekyll` à la racine.
3. Vérifier que GitHub Pages publie la branche/dossier attendu.
4. Ouvrir le site une première fois en ligne puis le recharger afin que le Service Worker V5 prenne le contrôle.
5. Sur un ancien appareil, fermer/réouvrir l’application si nécessaire : la V5 utilise un nouveau cache et migre la progression locale compatible.
6. Tester l’installation PWA, la géolocalisation, IndexedDB, le partage et la carte sur Android/iOS/ordinateur.

## Important : ancien cache

Le Service Worker `explor-action-v5-20260908` supprime les autres caches de l’application lors de son activation. Les URLs des ressources principales utilisent `v=5.0.0`, ce qui évite de conserver la V4 en production.

## Avant diffusion publique

- changer le PIN admin initial `2468` ;
- garder la clé privée hors ligne ;
- effectuer la reconnaissance terrain de chaque étape ;
- vérifier les horaires et accès ;
- vérifier la carte officielle du risque incendie et les restrictions du jour ;
- tester un parcours complet avec plusieurs téléphones et niveaux de précision GPS.
