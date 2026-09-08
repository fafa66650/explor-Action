# Explor’Action – FAFATRAINING — V5.0.0

Build : 8 septembre 2026  
Cible : GitHub Pages uniquement  
Type : PWA responsive, sans backend

## Positionnement V5

Explor’Action devient un hybride entre application de randonnée et jeu outdoor : itinéraire réel, difficulté physique lisible, GPS/géofencing, patrimoine, observation du terrain, énigmes, score et narration FAFA.

La difficulté principale d’une aventure est désormais **physique** : Facile / Intermédiaire / Difficile. Elle est décrite par la distance, le dénivelé, la durée, le terrain et trois critères inspirés de la cotation FFRandonnée : effort, technicité et risque. Le public Enfant / Ado / Adulte adapte séparément l’accompagnement du jeu.

## État des territoires

- **Banyuls-sur-Mer** : moteur jouable et quatre missions restructurées.
- **10 autres territoires** : visibles comme BIENTÔT, avec premières références officielles documentaires quand elles sont disponibles. Aucun faux GPS n’est créé.

Les coordonnées de jeu de Banyuls restent à reconnaître physiquement au GNSS/smartphone sur le terrain avant diffusion publique. Une source cartographique ou touristique ne valide pas à elle seule le point exact où une énigme doit se déclencher.

## Principales évolutions V5

- moteur multi-territoires ;
- nombre d’étapes dynamique ;
- niveaux physiques Facile / Intermédiaire / Difficile ;
- fiches parcours avec D+, D-, temps de marche, temps de jeu, terrain, altitude et E/T/R quand les données sont fiables ;
- profil équipe local ;
- mode Test organisateur sans GPS, scores non officiels ;
- photos en IndexedDB ;
- carte progressive anti-spoiler ;
- carte géographique en ligne avec OpenStreetMap + schéma local de secours ;
- sécurité incendie avec lien vers la carte officielle quotidienne des Pyrénées-Orientales ;
- accessibilité : grand texte, contraste, réduction des animations, lecture automatique ;
- résultat final premium et diplôme PNG ;
- codes d’accès signés ECDSA P-256 : seule la clé publique est incluse ici ;
- migration automatique des sauvegardes locales V4 puis nettoyage des anciennes clés de stockage.

## Sécurité des codes

Le générateur privé n’est **pas** dans ce dossier. Il est livré dans un paquet séparé `EXPLOR_ACTION_V5_ADMIN_OFFLINE`. Ne jamais publier ce paquet ni sa clé privée sur GitHub.

PIN administrateur initial : `2468`. À changer avant diffusion.

## Cartographie

Leaflet 1.9.4 (version stable au moment du build) est chargé en ligne. Les tuiles standard OpenStreetMap ne sont ni préchargées ni téléchargées pour un usage hors ligne. Le Service Worker ne met en cache que les ressources du même domaine. En hors connexion, l’application conserve un schéma progressif local.

## Déploiement

Voir `GITHUB_DEPLOY.md`.

## Validation terrain

Voir `VALIDATION_TERRAIN.md` avant toute publication au grand public.
