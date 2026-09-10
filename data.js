/* Explor’Action V5.4 QUALITY — données consolidées le 2026-09-10.
   Toute validation physique de terrain reste distincte de la validation application/test. */
const TERRITORIES=[
  {
    "id": "argeles",
    "name": "Argelès-sur-Mer",
    "kicker": "Mémoire, littoral & Albères",
    "icon": "🧭",
    "status": "ready",
    "research": [
      {
        "level": "facile",
        "name": "Autour d’Argelès-sur-Mer",
        "distanceKm": 10.5,
        "ascentM": 105,
        "descentM": 105,
        "time": "2 h",
        "mode": "pédestre",
        "status": "official-route",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/balade-autour-dargeles-sur-mer/"
      },
      {
        "level": "tres-facile",
        "name": "Promenade du Front de Mer",
        "distanceKm": 5.1,
        "ascentM": 24,
        "descentM": 24,
        "time": "2 h",
        "mode": "pédestre",
        "status": "official-route-candidate",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/balade-promenade-du-front-de-mer/"
      },
      {
        "level": "difficile",
        "name": "La Tour de la Massane",
        "distanceKm": 12.5,
        "ascentM": 792,
        "descentM": 795,
        "time": "5 h 30",
        "mode": "pédestre",
        "status": "official-route-candidate",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/la-tour-de-la-massane/"
      },
      {
        "level": "difficile",
        "name": "Argelès Nature Trail – Font Andreu",
        "distanceKm": 14.4,
        "ascentM": 808,
        "descentM": 802,
        "time": "3 h",
        "mode": "trail / randonnée possible",
        "status": "official-route-candidate",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/argeles-nature-trail-font-andreu/"
      },
      {
        "level": "facile",
        "name": "Le Dolmen de la Cova de l’Alarb",
        "distanceKm": 3.6,
        "ascentM": 150,
        "descentM": 149,
        "time": "1 h 30",
        "mode": "pédestre",
        "status": "official-route",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/balade-le-dolmen-de-la-cova-de-lalarb/"
      }
    ],
    "playerStatus": "Disponible",
    "soonText": "",
    "universeTitle": "Du rivage aux Albères",
    "story": "Argelès-sur-Mer se découvre à travers 6 aventures complémentaires : village et mer, front de mer, Valmy et les pierres anciennes, montée vers la Massane, parcours à très faible dénivelé et expédition longue. Chaque format propose un effort et une lecture du territoire différents.",
    "storyNote": "Univers narratif original Explor’Action. La mémoire de la Retirada est traitée comme un contenu historique à respecter, jamais comme un ressort de score ou un jeu de rôle.",
    "promise": "Relier village, rivage, temps long et montagne dans un même territoire.",
    "themeWords": [
      "Village",
      "Rivage",
      "Valmy",
      "Massane"
    ],
    "developmentStatus": "ready-content-field-monitoring",
    "finale": {
      "title": "Le Territoire Relié",
      "kicker": "ÉPILOGUE DU TERRITOIRE",
      "intro": "Fil. Rivage. Mémoire. Vigie. Plaine. Expédition. Tu as parcouru les différentes échelles d’Argelès, de la ville et du littoral jusqu’aux reliefs des Albères. Il faut maintenant réunir tous ces fragments.",
      "question": "Que révèle l’ensemble des aventures d’Argelès-sur-Mer ?",
      "choices": [
        "Qu’Argelès relie village, rivage, mémoire et montagne dans un même territoire",
        "Qu’Argelès se résume à sa plage",
        "Que la Massane est indépendante du reste du territoire"
      ],
      "answer": "Qu’Argelès relie village, rivage, mémoire et montagne dans un même territoire",
      "ending": "Argelès se comprend par continuités : des rues au rivage, du littoral à Valmy, des pierres anciennes aux pentes de la Massane. Les distances changent, mais le territoire reste relié. Tu viens d’en parcourir les différentes profondeurs plutôt qu’un seul visage.",
      "badge": "🏆 Gardien du fil d’Argelès"
    },
    "validationNotice": "Contenu et sources vérifiés à distance. Les conditions réelles (travaux, météo, incendie, accès ponctuels) restent à contrôler avant le départ."
  },
  {
    "id": "standre",
    "name": "Saint-André",
    "kicker": "Art roman & légendes",
    "icon": "☀️",
    "status": "ready",
    "research": [
      {
        "level": "facile",
        "name": "Cœur roman de Saint-André — boucle Explor’Action à mesurer",
        "distanceKm": null,
        "ascentM": null,
        "time": "À mesurer en reconnaissance",
        "mode": "pédestre",
        "status": "field-required",
        "source": "https://www.saint-andre66.fr/eglise-romane/"
      },
      {
        "level": "benchmark",
        "name": "Benchmark officiel Baludik « Menace sur Saint-André »",
        "distanceKm": 1.06,
        "ascentM": null,
        "time": "≈ 1 h 30",
        "mode": "jeu géolocalisé",
        "status": "benchmark-only-not-route-basis",
        "source": "https://baludik.fr/parcours/2971-menace-sur-saint-andre/"
      },
      {
        "level": "documentation",
        "name": "Route de l’art roman — Saint-André",
        "distanceKm": null,
        "ascentM": null,
        "time": "Documentation patrimoniale",
        "mode": "patrimoine",
        "status": "source-only",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/explorer_la_destination_pyrenees_mediterranee/entrez-dans-lhistoire/route-de-lart-roman/"
      },
      {
        "level": "corridor",
        "name": "Liaison Mairie de Saint-André – EV8 Sorède",
        "distanceKm": 2.2,
        "ascentM": 28,
        "descentM": 3,
        "time": "durée cyclable affichée non retenue",
        "mode": "cyclo / corridor à reconnaître à pied",
        "status": "source-corridor-not-pedestrian-metric",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/liaison-mairie-de-saint-andre-ev8-sorede/"
      },
      {
        "level": "documentation",
        "name": "Histoire du monastère Sant Andreu de la Sureda",
        "distanceKm": null,
        "ascentM": null,
        "time": "documentation historique",
        "mode": "patrimoine",
        "status": "municipal-source",
        "source": "https://www.saint-andre66.fr/histoire-de-saint-andre-et-jumelage/"
      },
      {
        "level": "documentation",
        "name": "Terrae Cognitae — patrimoine en 3D",
        "distanceKm": null,
        "ascentM": null,
        "time": "documentation culturelle",
        "mode": "patrimoine / 3D",
        "status": "municipal-source",
        "source": "https://www.saint-andre66.fr/terrae-cognitae/"
      }
    ],
    "playerStatus": "Disponible",
    "soonText": "",
    "universeTitle": "Les portes de Saint-André",
    "story": "Saint-André propose 5 aventures accessibles dans la base application/test autour du cœur roman, de l’ancienne abbaye, des images patrimoniales, du piémont et d’un parcours à très faible dénivelé. Une sixième grande boucle inter-villages reste réservée au Mode Reconnaissance car sa source officielle est cyclable et ne constitue pas une randonnée pédestre validée.",
    "storyNote": "Univers volontairement distinct du parcours Baludik local « Menace sur Saint-André ». Le benchmark Baludik sert seulement à évaluer l’échelle d’un jeu urbain ; aucun scénario ni énigme n’est repris.",
    "promise": "Faire du cœur roman et du piémont un terrain d’enquête où pierre, histoire, art et orientation se répondent.",
    "themeWords": [
      "Art roman",
      "Abbaye",
      "Images",
      "Piémont"
    ],
    "developmentStatus": "ready-content-field-monitoring",
    "finale": {
      "title": "La Mémoire en Mouvement",
      "kicker": "ÉPILOGUE DU TERRITOIRE",
      "intro": "Pierre. Chronique. Transmission. Orientation. Plaine. À Saint-André, les cinq fragments joueurs partent du cœur roman puis ouvrent progressivement le regard vers l’histoire, les images et le piémont. La grande boucle inter-villages reste un chantier de reconnaissance séparé.",
      "question": "Que racontent ensemble tous les fragments de Saint-André ?",
      "choices": [
        "Que le patrimoine se lit de la pierre au paysage et se transmet en changeant de regard",
        "Que seule la façade romane compte",
        "Que l’histoire du village s’arrête au Moyen Âge"
      ],
      "answer": "Que le patrimoine se lit de la pierre au paysage et se transmet en changeant de regard",
      "ending": "Saint-André ne se limite pas à un monument. La pierre garde des traces, les chroniques les replacent dans le temps, les outils de médiation les rendent lisibles et le paysage replace le village au pied des Albères. Tu as transformé un patrimoine immobile en lecture active du territoire.",
      "badge": "🏆 Passe-mémoire de Saint-André"
    },
    "validationNotice": "Contenu et sources vérifiés à distance. Les conditions réelles (travaux, météo, incendie, accès ponctuels) restent à contrôler avant le départ."
  },
  {
    "id": "laroque",
    "name": "Laroque-des-Albères",
    "kicker": "Village fortifié & montagne",
    "icon": "🏰",
    "status": "soon",
    "research": [
      {
        "level": "facile",
        "name": "Découverte du village et environs",
        "distanceKm": 3,
        "ascentM": 100,
        "time": "1 h 30",
        "source": "https://www.laroque-des-alberes.fr/fr/office-de-tourisme/randonner/circuits/la%20randonnee%20des%20enfants%20village%20-10.html"
      },
      {
        "level": "intermediaire",
        "name": "Randonnée des Deux Fontaines",
        "distanceKm": 10.8,
        "ascentM": 400,
        "time": "4 h 15",
        "source": "https://www.laroque-des-alberes.fr/fr/office-de-tourisme/randonner/circuits/"
      },
      {
        "level": "difficile",
        "name": "Roc del Grevol et Pic d’Orella",
        "distanceKm": 17.7,
        "ascentM": 900,
        "time": "5 h",
        "source": "https://www.laroque-des-alberes.fr/fr/office-de-tourisme/randonner/circuits/le%20roc%20del%20grevol%20et%20le%20pic%20d%27orella-4.html"
      }
    ],
    "playerStatus": "Bientôt",
    "soonText": "Un nouvel univers Explor’Action est en préparation à Laroque-des-Albères."
  },
  {
    "id": "villelongue",
    "name": "Villelongue-dels-Monts",
    "kicker": "Prieuré, forêt & relief",
    "icon": "🌿",
    "status": "soon",
    "research": [
      {
        "level": "intermediaire",
        "name": "Prieuré Santa-Maria-del-Vilar par les mas catalans",
        "distanceKm": 8.6,
        "ascentM": 481,
        "time": "3 h 30",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/le-prieure-santa-maria-del-vilar-par-les-mas-catalans/"
      }
    ],
    "playerStatus": "Bientôt",
    "soonText": "Un nouvel univers Explor’Action est en préparation à Villelongue-dels-Monts."
  },
  {
    "id": "collioure",
    "name": "Collioure",
    "kicker": "Couleurs, forts & crêtes",
    "icon": "🎨",
    "status": "ready",
    "research": [
      {
        "level": "facile",
        "name": "Entre le Château Royal et le Fort Saint-Elme",
        "distanceKm": 4.1,
        "ascentM": 163,
        "descentM": 166,
        "time": "1 h 02",
        "mode": "pédestre",
        "status": "official-route",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/balade-entre-le-chateau-royal-et-le-fort-st-elme/"
      },
      {
        "level": "facile",
        "name": "Les Chemins du Fauvisme",
        "distanceKm": null,
        "ascentM": 8,
        "descentM": 9,
        "time": "1 h 30",
        "mode": "pédestre",
        "status": "official-route-distance-anomaly",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/balade-les-chemins-du-fauvisme/",
        "note": "La page officielle affiche 463,1 km : distance rejetée et à remesurer."
      },
      {
        "level": "difficile",
        "name": "Massif de la Madeloc",
        "distanceKm": 16.5,
        "ascentM": 963,
        "descentM": 962,
        "time": "6 h 30",
        "mode": "pédestre",
        "status": "official-route-candidate",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/massif-de-la-madeloc/"
      },
      {
        "level": "intermediaire",
        "name": "Les Hauts de Collioure",
        "distanceKm": 9.6,
        "ascentM": 401,
        "descentM": 401,
        "time": "3 h 02",
        "mode": "pédestre",
        "status": "official-route",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/les-hauts-de-collioure/"
      }
    ],
    "playerStatus": "Disponible",
    "soonText": "",
    "universeTitle": "Les regards de Collioure",
    "story": "Collioure se décline en 6 aventures réellement différentes : baie et fortifications, Fauvisme, vignes et hauteurs, signal de la Madeloc, parcours à très faible dénivelé et grande expédition. Le joueur change d’échelle et de regard selon l’aventure choisie.",
    "storyNote": "Univers narratif original Explor’Action. Le parcours facile Château Royal–Fort Saint-Elme sert de base officielle ; les points d’observation doivent encore être validés en reconnaissance.",
    "promise": "Passer de la couleur aux crêtes sans transformer Collioure en simple carte postale.",
    "themeWords": [
      "Baie",
      "Fauvisme",
      "Vignes",
      "Madeloc"
    ],
    "developmentStatus": "ready-content-field-monitoring",
    "finale": {
      "title": "Le Regard Réuni",
      "kicker": "ÉPILOGUE DU TERRITOIRE",
      "intro": "Regards. Couleur. Relief. Signal. Rivage. Expédition. Tu as observé Collioure depuis la baie, à travers les peintres, sur les hauteurs et jusqu’au système de vigie. Tous les fragments changent de sens lorsqu’on les regarde ensemble.",
      "question": "Quelle idée relie le mieux toutes les aventures de Collioure ?",
      "choices": [
        "Collioure change selon le point de vue, de la baie jusqu’aux crêtes",
        "La couleur est le seul patrimoine de Collioure",
        "Les hauteurs n’ont aucun lien avec la ville"
      ],
      "answer": "Collioure change selon le point de vue, de la baie jusqu’aux crêtes",
      "ending": "À Collioure, regarder est déjà explorer. La forme de la baie, les constructions, les couleurs, les vignes et les crêtes composent des lectures différentes d’un même lieu. L’aventure se termine lorsque tu comprends que le paysage n’est jamais figé : il dépend de l’endroit depuis lequel on le lit.",
      "badge": "🏆 Éclaireur des regards de Collioure"
    },
    "validationNotice": "Contenu et sources vérifiés à distance. Les conditions réelles (travaux, météo, incendie, accès ponctuels) restent à contrôler avant le départ."
  },
  {
    "id": "portvendres",
    "name": "Port-Vendres",
    "kicker": "Grand port & patrimoine maritime",
    "icon": "⚓",
    "status": "ready",
    "research": [
      {
        "level": "facile",
        "name": "Port-Vendres à travers l’histoire",
        "distanceKm": 5.4,
        "ascentM": 124,
        "descentM": 124,
        "time": "1 h 30",
        "mode": "pédestre",
        "status": "official-route",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/port-vendres-a-travers-lhistoire/"
      },
      {
        "level": "intermediaire",
        "name": "Grand tour du Cap Béar par Paulilles",
        "distanceKm": 11.6,
        "ascentM": 371,
        "descentM": 351,
        "time": "4 h",
        "mode": "pédestre",
        "status": "official-route",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/grand-tour-du-cap-bear-par-paulilles/"
      },
      {
        "level": "intermediaire",
        "name": "Port-Vendres à Collioure par le Fort Saint-Elme",
        "distanceKm": 7.7,
        "ascentM": 361,
        "time": "2 h 05",
        "mode": "pédestre",
        "status": "official-route-candidate",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/de-port-vendres-a-collioure-par-le-fort-saint-elme/"
      },
      {
        "level": "facile",
        "name": "Randonnée dans les vignes",
        "distanceKm": 8.8,
        "ascentM": 314,
        "descentM": 313,
        "time": "4 h",
        "mode": "pédestre",
        "status": "official-route",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/randonnee-dans-les-vignes/"
      },
      {
        "level": "difficile",
        "name": "Le Chemin des forts",
        "distanceKm": 19,
        "ascentM": 884,
        "descentM": 883,
        "time": "8 h",
        "mode": "pédestre",
        "status": "official-route",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/le-chemin-des-forts/"
      }
    ],
    "playerStatus": "Disponible",
    "soonText": "",
    "universeTitle": "Port, cap, vignes et fortifications",
    "story": "Port-Vendres se découvre à travers 5 aventures complémentaires : l’histoire du port et de ses sentinelles, le Cap Béar jusqu’à Paulilles, les chemins du vignoble et des muletiers, une voie à très faible dénivelé et une grande expédition par les fortifications. Chaque mission possède sa propre mécanique et son propre niveau physique.",
    "storyNote": "Univers narratif original Explor’Action. Les itinéraires et faits patrimoniaux sont documentés ; les géofences et l’observabilité des énigmes restent à reconnaître sur le terrain.",
    "promise": "Du quai aux crêtes, comprendre comment mer, relief, vigne et défense ont organisé le territoire.",
    "themeWords": [
      "Port",
      "Cap Béar",
      "Vignes",
      "Fortifications"
    ],
    "developmentStatus": "ready-content-field-monitoring",
    "finale": {
      "title": "La Porte de la Côte Vermeille",
      "kicker": "ÉPILOGUE DU TERRITOIRE",
      "intro": "Signaux. Horizon. Passage. Réseau. Littoral. Du port aux crêtes, tu as suivi plusieurs façons de lire Port-Vendres. Il reste à comprendre ce qui relie le quai, le cap, la vigne, le littoral et les fortifications.",
      "question": "Que racontent ensemble tous les fragments de Port-Vendres ?",
      "choices": [
        "Que le territoire s’organise autour des passages entre mer, relief, échanges et défense",
        "Que Port-Vendres ne se comprend qu’en restant sur les quais",
        "Que les fortifications sont sans lien avec le relief"
      ],
      "answer": "Que le territoire s’organise autour des passages entre mer, relief, échanges et défense",
      "ending": "Port-Vendres n’est pas un décor maritime isolé. Le port, les caps, les chemins viticoles et les ouvrages militaires se répondent parce que le relief impose des passages, protège des mouillages et organise les déplacements. Tu as appris à lire cette articulation plutôt qu’à collectionner des points sur une carte.",
      "badge": "🏆 Gardien des passages de Port-Vendres"
    },
    "validationNotice": "Contenu et sources vérifiés à distance. Les conditions réelles (travaux, météo, incendie, accès ponctuels) restent à contrôler avant le départ."
  },
  {
    "id": "banyuls",
    "name": "Banyuls-sur-Mer",
    "kicker": "Mer, art, vigne & relief",
    "icon": "🍇",
    "status": "ready",
    "research": [
      {
        "level": "facile",
        "name": "Le Cami d’Anicet",
        "distanceKm": 7.4,
        "ascentM": 253,
        "time": "2 h 30",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/le-cami-danicet/"
      },
      {
        "level": "intermediaire",
        "name": "Sentier littoral Les Elmes → Le Troc",
        "distanceKm": 2.8,
        "ascentM": 77,
        "time": "1 h 30",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/e-12-sentier-littoral-guide-oti-banyuls-sur-mer-plage-des-elmes-plage-du-troc/"
      },
      {
        "level": "difficile",
        "name": "Les Balcons de la Côte Vermeille",
        "distanceKm": 13,
        "ascentM": 676,
        "time": "4 h 04",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/les-balcons-de-la-cote-vermeille/"
      },
      {
        "level": "difficile",
        "name": "Troc → Peyrefite",
        "distanceKm": 4.5,
        "ascentM": 232,
        "time": "2 h",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/e-12-sentier-littoral-guide-oti-plage-du-troc-banyuls-sur-mer-plage-de-peyrefite/"
      }
    ],
    "universeTitle": "Les éclats de Banyuls",
    "story": "Ici, la Méditerranée touche les Albères. Les 6 aventures racontent Banyuls sans le réduire à une carte postale : mémoire de Maillol, terre viticole, regards artistiques, mer et sciences, parcours à très faible dénivelé et grande expédition. Chaque mission révèle un éclat différent du territoire.",
    "storyNote": "La narration Explor’Action est une fiction de jeu. Les faits historiques, artistiques, naturels et les données de randonnée sont issus de sources identifiées.",
    "promise": "Choisis ton effort, suis le terrain et récupère l’éclat propre à chaque aventure.",
    "playerStatus": "Disponible",
    "themeWords": [
      "Maillol",
      "Vignes",
      "Ville",
      "Méditerranée"
    ],
    "finale": {
      "title": "Le Cœur de Banyuls",
      "kicker": "ÉPILOGUE DU TERRITOIRE",
      "intro": "Mémoire. Terre. Regards. Mer. Rivage. Expédition. Tu as parcouru plusieurs visages de Banyuls. Il faut maintenant comprendre ce qui relie tous ces éclats.",
      "question": "Que racontent ensemble tous les éclats ?",
      "choices": [
        "Qu’un territoire ne se résume jamais à un seul lieu",
        "Que Banyuls ne se découvre qu’en voiture",
        "Que seule la mer compte ici"
      ],
      "answer": "Qu’un territoire ne se résume jamais à un seul lieu",
      "ending": "Banyuls se lit en marchant : une œuvre répond à une ruelle, une vigne au relief, un regard d’artiste à la mer et la science à la protection du vivant. Tu n’as pas seulement terminé plusieurs aventures : tu as appris à lire un territoire.",
      "badge": "🏆 Gardien de Banyuls"
    },
    "developmentStatus": "ready-content-field-monitoring",
    "soonText": "",
    "validationNotice": "Contenu et sources vérifiés à distance. Les conditions réelles (travaux, météo, incendie, accès ponctuels) restent à contrôler avant le départ."
  },
  {
    "id": "sorede",
    "name": "Sorède",
    "kicker": "Four solaire, forêt & sommets",
    "icon": "🌞",
    "status": "soon",
    "research": [
      {
        "level": "difficile",
        "name": "Sorède → Roc de les Medes",
        "distanceKm": 6.6,
        "ascentM": 682,
        "time": "3 h",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/de-sorede-au-roc-de-les-medes/"
      },
      {
        "level": "difficile",
        "name": "Sorède → Pic Néoulous",
        "distanceKm": 7.9,
        "ascentM": 1196,
        "time": "2 h 04",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/sorede-pic-neoulous/"
      }
    ],
    "playerStatus": "Bientôt",
    "soonText": "Un nouvel univers Explor’Action est en préparation à Sorède."
  },
  {
    "id": "montesquieu",
    "name": "Montesquieu-des-Albères",
    "kicker": "Botanique, château & relief",
    "icon": "⛰️",
    "status": "soon",
    "research": [
      {
        "level": "intermediaire",
        "name": "Sentier botanique",
        "distanceKm": 4.1,
        "ascentM": 232,
        "time": "1 h 03",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/sentier-botanique-de-montesquieu-des-alberes/"
      },
      {
        "level": "intermediaire",
        "name": "Tour de Montesquieu",
        "distanceKm": 15.5,
        "ascentM": 257,
        "time": "4 h 04",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/le-tour-de-montesquieu/"
      }
    ],
    "playerStatus": "Bientôt",
    "soonText": "Un nouvel univers Explor’Action est en préparation à Montesquieu-des-Albères."
  },
  {
    "id": "palau",
    "name": "Palau-del-Vidre",
    "kicker": "Maîtres verriers & patrimoine",
    "icon": "💎",
    "status": "soon",
    "research": [
      {
        "level": "facile",
        "name": "Village, verriers et lac",
        "distanceKm": 2,
        "ascentM": null,
        "time": "Parcours santé autour du lac ≈ 2 km",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/explorer_la_destination_pyrenees_mediterranee/les-villages-incontournables-en-pyrenees-mediterranee/palau-del-vidre/"
      }
    ],
    "playerStatus": "Bientôt",
    "soonText": "Un nouvel univers Explor’Action est en préparation à Palau-del-Vidre."
  },
  {
    "id": "theza",
    "name": "Théza",
    "kicker": "Patrimoine local & plaine",
    "icon": "🔥",
    "status": "soon",
    "research": [],
    "playerStatus": "Bientôt",
    "soonText": "Un nouvel univers Explor’Action est en préparation à Théza."
  }
];

const MISSIONS=[
  {
    "id": "maillol",
    "icon": "🎨",
    "title": "L’Héritage Maillol",
    "tag": "Art • Histoire • Cap d’Osna",
    "duration": "2 h – 3 h avec le jeu",
    "difficulty": "Intermédiaire",
    "story": "Un carnet attribué à un ancien élève de Maillol a été retrouvé. Explore le Cap d’Osna et le front de mer pour recomposer le mot qui protège son héritage.",
    "final": "HARMONIE",
    "steps": [
      {
        "name": "Office de Tourisme / départ",
        "lat": 42.4837,
        "lng": 3.1288,
        "radius": 140,
        "fact": "Le circuit officiel « Dans les pas d’Aristide » part du centre et traverse le Cap d’Osna.",
        "type": "cipher",
        "q": "Décode NBJMMPM avec un César -1 : chaque lettre recule d’un rang.",
        "answers": [
          "maillol"
        ],
        "hint": "Commence par N → M.",
        "token": "",
        "source": "https://www.banyuls-sur-mer.com/tourisme/decouvrir/un-musee-a-ciel-ouvert/incontournables-culturels/circuit-dans-les-pas-daristide/",
        "gpsConfidence": "navigation-zone",
        "access": "Extérieur / espace public ou observation depuis l’espace public.",
        "season": "Toute l’année, sous réserve des conditions locales.",
        "photoBonus": false,
        "expertBonus": "Observe un détail réel du lieu avant de répondre.",
        "interaction": "text",
        "routeInstruction": "Départ : Office de Tourisme. Lis le briefing avant de rejoindre la mairie.",
        "audience": {
          "enfant": {
            "q": "Petit code : recule chaque lettre d’une place. NBJMMPM devient le nom de quel artiste ?",
            "choices": [
              "Maillol",
              "Matisse",
              "Miró"
            ],
            "answers": [
              "maillol"
            ],
            "interaction": "choice",
            "hint": "N devient M.",
            "hint2": "Décale chaque lettre d’un rang vers l’arrière : N devient M, B devient A."
          },
          "adulte": {
            "q": "Sans utiliser l’indice, décode NBJMMPM avec un César -1. Le résultat doit être un nom lié au parcours.",
            "interaction": "text",
            "hint": "Une seule opération est nécessaire.",
            "hint2": "Décale chaque lettre d’un rang vers l’arrière : N devient M, B devient A.",
            "answers": [
              "maillol"
            ]
          },
          "ado": {
            "q": "Décode NBJMMPM avec un César -1 : chaque lettre recule d’un rang.",
            "answers": [
              "maillol"
            ],
            "interaction": "text",
            "hint": "Commence par N → M.",
            "hint2": "Décale chaque lettre d’un rang vers l’arrière : N devient M, B devient A."
          }
        },
        "locationMode": "gps",
        "hint2": "Décale chaque lettre d’un rang vers l’arrière : N devient M, B devient A.",
        "id": "maillol-s01"
      },
      {
        "name": "Hôtel de Ville & jardin",
        "lat": 42.4837,
        "lng": 3.1289,
        "radius": 140,
        "fact": "Dans le jardin de la mairie se trouve Esquisse pour l’Harmonie, dernière œuvre de Maillol.",
        "type": "choice",
        "q": "Dans le jardin de la mairie, identifie l’œuvre de Maillol dont le titre contient le mot « Harmonie ».",
        "choices": [
          "Esquisse pour l’Harmonie",
          "La Nuit",
          "Le Port",
          "La Vigne"
        ],
        "answers": [
          "esquisse pour l harmonie",
          "harmonie"
        ],
        "hint": "Regarde le cartel ou le titre de l’œuvre.",
        "token": "",
        "source": "https://www.banyuls-sur-mer.com/tourisme/decouvrir/un-musee-a-ciel-ouvert/incontournables-culturels/circuit-dans-les-pas-daristide/",
        "gpsConfidence": "navigation-zone",
        "access": "Extérieur / espace public ou observation depuis l’espace public.",
        "season": "Toute l’année, sous réserve des conditions locales.",
        "photoBonus": false,
        "expertBonus": "Observe un détail réel du lieu avant de répondre.",
        "interaction": "choice",
        "audience": {
          "enfant": {
            "q": "Quelle œuvre du jardin parle d’« Harmonie » ?",
            "choices": [
              "Esquisse pour l’Harmonie",
              "La Nuit",
              "Le Port"
            ],
            "answers": [
              "esquisse pour l harmonie",
              "harmonie"
            ],
            "interaction": "choice",
            "hint": "Le mot est dans le titre.",
            "hint2": "Le titre complet commence par « Esquisse pour… »."
          },
          "adulte": {
            "q": "Observe le jardin et retrouve le titre de la dernière œuvre de Maillol indiquée par les sources locales.",
            "answers": [
              "esquisse pour l harmonie",
              "harmonie"
            ],
            "interaction": "text",
            "hint": "Le titre se termine par « Harmonie ».",
            "hint2": "Le titre complet commence par « Esquisse pour… »."
          },
          "ado": {
            "q": "Dans le jardin de la mairie, identifie l’œuvre de Maillol dont le titre contient le mot « Harmonie ».",
            "answers": [
              "esquisse pour l harmonie",
              "harmonie"
            ],
            "choices": [
              "Esquisse pour l’Harmonie",
              "La Nuit",
              "Le Port",
              "La Vigne"
            ],
            "interaction": "choice",
            "hint": "Regarde le cartel ou le titre de l’œuvre.",
            "hint2": "Le titre complet commence par « Esquisse pour… »."
          }
        },
        "locationMode": "gps",
        "hint2": "Le titre complet commence par « Esquisse pour… ».",
        "id": "maillol-s02",
        "routeInstruction": "Rejoins ce repère par l’espace public en respectant la signalisation et les accès autorisés."
      },
      {
        "name": "Place Paul Reig",
        "lat": 42.4835,
        "lng": 3.1294,
        "radius": 160,
        "fact": "Le parcours officiel passe par la place Paul Reig avant de longer la plage.",
        "type": "riddle",
        "q": "Le circuit officiel te conduit vers le quartier où Maillol a vécu et où il est né. Quel est ce quartier ?",
        "answers": [
          "cap dosna",
          "cap d osna",
          "cap d’osna"
        ],
        "hint": "Son nom commence par Cap d…",
        "token": "",
        "source": "https://www.banyuls-sur-mer.com/tourisme/decouvrir/un-musee-a-ciel-ouvert/incontournables-culturels/circuit-dans-les-pas-daristide/",
        "gpsConfidence": "navigation-zone",
        "access": "Extérieur / espace public ou observation depuis l’espace public.",
        "season": "Toute l’année, sous réserve des conditions locales.",
        "photoBonus": false,
        "expertBonus": "Observe un détail réel du lieu avant de répondre.",
        "interaction": "text",
        "locationMode": "trail",
        "routeInstruction": "Depuis la place Paul Reig, longe la plage vers Port-Vendres puis rejoins la place Bassères. Le circuit officiel t’amène ensuite dans le Cap d’Osna.",
        "audience": {
          "enfant": {
            "q": "Comment s’appelle le quartier en escaliers lié à Maillol ?",
            "choices": [
              "Cap d’Osna",
              "Le Racou",
              "Paulilles"
            ],
            "answers": [
              "cap dosna",
              "cap d osna"
            ],
            "interaction": "choice",
            "hint": "Il commence par « Cap ».",
            "hint2": "Le quartier commence par « Cap d’… »."
          },
          "adulte": {
            "q": "Retrouve le nom du quartier typique où le circuit « Dans les pas d’Aristide » serpente.",
            "answers": [
              "cap dosna",
              "cap d osna"
            ],
            "interaction": "text",
            "hint": "Lis les indications du circuit.",
            "hint2": "Le quartier commence par « Cap d’… »."
          },
          "ado": {
            "q": "Le circuit officiel te conduit vers le quartier où Maillol a vécu et où il est né. Quel est ce quartier ?",
            "answers": [
              "cap dosna",
              "cap d osna",
              "cap d’osna"
            ],
            "interaction": "text",
            "hint": "Son nom commence par Cap d…",
            "hint2": "Le quartier commence par « Cap d’… »."
          }
        },
        "hint2": "Le quartier commence par « Cap d’… ».",
        "id": "maillol-s03"
      },
      {
        "name": "Place Bassères",
        "lat": 42.4827,
        "lng": 3.132,
        "radius": 180,
        "fact": "La place Bassères marque l’entrée du circuit dans le Cap d’Osna.",
        "type": "sequence",
        "q": "Remets les quatre jalons du départ dans l’ordre du circuit officiel.",
        "answers": [
          "hotel de ville > place paul reig > plage > place basseres"
        ],
        "hint": "Le parcours part de la mairie, traverse Paul Reig, longe la plage puis rejoint Bassères.",
        "token": "",
        "source": "https://www.banyuls-sur-mer.com/tourisme/decouvrir/un-musee-a-ciel-ouvert/incontournables-culturels/circuit-dans-les-pas-daristide/",
        "gpsConfidence": "navigation-zone",
        "access": "Extérieur / espace public ou observation depuis l’espace public.",
        "season": "Toute l’année, sous réserve des conditions locales.",
        "photoBonus": false,
        "expertBonus": "Observe un détail réel du lieu avant de répondre.",
        "interaction": "sequence",
        "choices": [
          "Hôtel de Ville",
          "Place Paul Reig",
          "Plage",
          "Place Bassères"
        ],
        "sequence": [
          "Hôtel de Ville",
          "Place Paul Reig",
          "Plage",
          "Place Bassères"
        ],
        "locationMode": "trail",
        "routeInstruction": "Suis le chemin officiel jusqu’à la place Bassères. Ne quitte pas l’espace public.",
        "audience": {
          "enfant": {
            "q": "Touche les lieux dans l’ordre où tu les rencontres.",
            "choices": [
              "Hôtel de Ville",
              "Place Paul Reig",
              "Plage",
              "Place Bassères"
            ],
            "sequence": [
              "Hôtel de Ville",
              "Place Paul Reig",
              "Plage",
              "Place Bassères"
            ],
            "answers": [
              "hotel de ville > place paul reig > plage > place basseres"
            ],
            "interaction": "sequence",
            "hint": "Commence par l’Hôtel de Ville.",
            "hint2": "Mairie → Paul Reig → plage → Bassères."
          },
          "adulte": {
            "q": "Sans revenir au briefing, reconstitue l’ordre exact des quatre premiers jalons du circuit municipal.",
            "choices": [
              "Hôtel de Ville",
              "Place Paul Reig",
              "Plage",
              "Place Bassères"
            ],
            "sequence": [
              "Hôtel de Ville",
              "Place Paul Reig",
              "Plage",
              "Place Bassères"
            ],
            "answers": [
              "hotel de ville > place paul reig > plage > place basseres"
            ],
            "interaction": "text",
            "hint": "Observe le chemin que tu viens réellement de parcourir.",
            "hint2": "Mairie → Paul Reig → plage → Bassères."
          },
          "ado": {
            "q": "Remets les quatre jalons du départ dans l’ordre du circuit officiel.",
            "answers": [
              "hotel de ville > place paul reig > plage > place basseres"
            ],
            "choices": [
              "Hôtel de Ville",
              "Place Paul Reig",
              "Plage",
              "Place Bassères"
            ],
            "interaction": "sequence",
            "hint": "Le parcours part de la mairie, traverse Paul Reig, longe la plage puis rejoint Bassères.",
            "hint2": "Mairie → Paul Reig → plage → Bassères."
          }
        },
        "hint2": "Mairie → Paul Reig → plage → Bassères.",
        "id": "maillol-s04"
      },
      {
        "name": "Rue Aristide Maillol",
        "lat": 42.4824,
        "lng": 3.1317,
        "radius": 180,
        "fact": "La rue Aristide Maillol, avec ses escaliers, fait partie du circuit officiel.",
        "type": "observation",
        "q": "Lis la plaque de rue : quel prénom complète « … Maillol » ?",
        "answers": [
          "aristide"
        ],
        "hint": "Le prénom de l’artiste.",
        "token": "",
        "source": "https://www.banyuls-sur-mer.com/tourisme/decouvrir/un-musee-a-ciel-ouvert/incontournables-culturels/circuit-dans-les-pas-daristide/",
        "gpsConfidence": "navigation-zone",
        "access": "Extérieur / espace public ou observation depuis l’espace public.",
        "season": "Toute l’année, sous réserve des conditions locales.",
        "photoBonus": false,
        "expertBonus": "Observe un détail réel du lieu avant de répondre.",
        "interaction": "text",
        "locationMode": "trail",
        "routeInstruction": "À la place Bassères, prends les escaliers de la rue Aristide Maillol comme l’indique le circuit officiel.",
        "audience": {
          "enfant": {
            "q": "Quel prénom lis-tu sur la plaque de la rue Maillol ?",
            "choices": [
              "Aristide",
              "Henri",
              "Pablo"
            ],
            "answers": [
              "aristide"
            ],
            "interaction": "choice",
            "hint": "Regarde la plaque.",
            "hint2": "La plaque porte le nom complet de l’artiste."
          },
          "adulte": {
            "q": "Ne réponds qu’après avoir localisé la plaque de la rue portant le nom complet de l’artiste. Quel prénom y figure ?",
            "answers": [
              "aristide"
            ],
            "interaction": "text",
            "hint": "Le lieu donne directement la réponse.",
            "hint2": "La plaque porte le nom complet de l’artiste."
          },
          "ado": {
            "q": "Lis la plaque de rue : quel prénom complète « … Maillol » ?",
            "answers": [
              "aristide"
            ],
            "interaction": "text",
            "hint": "Le prénom de l’artiste.",
            "hint2": "La plaque porte le nom complet de l’artiste."
          }
        },
        "hint2": "La plaque porte le nom complet de l’artiste.",
        "id": "maillol-s05"
      },
      {
        "name": "Cap d’Osna",
        "lat": 42.4821,
        "lng": 3.1321,
        "radius": 220,
        "fact": "Ancien quartier de pêcheurs-vignerons, le Cap d’Osna est lié à l’enfance de Maillol.",
        "type": "logic",
        "q": "Maillol est né en 1861. Additionne les quatre chiffres.",
        "answers": [
          "16",
          "seize"
        ],
        "hint": "1 + 8 + 6 + 1.",
        "token": "",
        "source": "https://www.banyuls-sur-mer.com/tourisme/decouvrir/un-musee-a-ciel-ouvert/incontournables-culturels/circuit-dans-les-pas-daristide/",
        "gpsConfidence": "navigation-zone",
        "access": "Extérieur / espace public ou observation depuis l’espace public.",
        "season": "Toute l’année, sous réserve des conditions locales.",
        "photoBonus": false,
        "expertBonus": "Observe un détail réel du lieu avant de répondre.",
        "interaction": "numeric",
        "locationMode": "trail",
        "routeInstruction": "Continue à suivre les panneaux du circuit dans les ruelles et escaliers du Cap d’Osna.",
        "audience": {
          "enfant": {
            "q": "1 + 8 + 6 + 1 = ?",
            "answers": [
              "16",
              "seize"
            ],
            "interaction": "numeric",
            "hint": "Additionne deux chiffres à la fois.",
            "hint2": "1 + 8 + 6 + 1 donne le résultat."
          },
          "adulte": {
            "q": "Le parcours te ramène à 1861. Calcule la somme de ses chiffres sans calculatrice.",
            "answers": [
              "16",
              "seize"
            ],
            "interaction": "text",
            "hint": "Le résultat est inférieur à 20.",
            "hint2": "1 + 8 + 6 + 1 donne le résultat."
          },
          "ado": {
            "q": "Maillol est né en 1861. Additionne les quatre chiffres.",
            "answers": [
              "16",
              "seize"
            ],
            "interaction": "numeric",
            "hint": "1 + 8 + 6 + 1.",
            "hint2": "1 + 8 + 6 + 1 donne le résultat."
          }
        },
        "hint2": "1 + 8 + 6 + 1 donne le résultat.",
        "id": "maillol-s06"
      },
      {
        "name": "Allées Maillol",
        "lat": 42.4827,
        "lng": 3.1278,
        "radius": 220,
        "fact": "La Jeune Fille Allongée est visible sur les Allées Maillol.",
        "type": "choice",
        "q": "Sur les Allées Maillol, identifie l’œuvre installée ici.",
        "choices": [
          "Jeune Fille Allongée",
          "Méditerranée",
          "La Victoire",
          "Le Penseur"
        ],
        "answers": [
          "jeune fille allongee"
        ],
        "hint": "Le cartel de l’œuvre donne le titre.",
        "token": "",
        "source": "https://www.banyuls-sur-mer.com/tourisme/decouvrir/un-musee-a-ciel-ouvert/incontournables-culturels/admirer-les-statues-de-maillol-en-front-de-mer/",
        "gpsConfidence": "navigation-zone",
        "access": "Extérieur / espace public ou observation depuis l’espace public.",
        "season": "Toute l’année, sous réserve des conditions locales.",
        "photoBonus": false,
        "expertBonus": "Observe un détail réel du lieu avant de répondre.",
        "interaction": "choice",
        "audience": {
          "enfant": {
            "q": "Quelle sculpture de Maillol vois-tu sur les Allées ?",
            "choices": [
              "Jeune Fille Allongée",
              "La Victoire",
              "Le Penseur"
            ],
            "answers": [
              "jeune fille allongee"
            ],
            "interaction": "choice",
            "hint": "Observe le cartel.",
            "hint2": "Le titre décrit une jeune figure en position allongée."
          },
          "adulte": {
            "q": "Retrouve le titre exact de la sculpture de Maillol installée sur les Allées qui portent son nom.",
            "answers": [
              "jeune fille allongee"
            ],
            "interaction": "text",
            "hint": "La posture de la figure aide autant que le cartel.",
            "hint2": "Le titre décrit une jeune figure en position allongée."
          },
          "ado": {
            "q": "Sur les Allées Maillol, identifie l’œuvre installée ici.",
            "answers": [
              "jeune fille allongee"
            ],
            "choices": [
              "Jeune Fille Allongée",
              "Méditerranée",
              "La Victoire",
              "Le Penseur"
            ],
            "interaction": "choice",
            "hint": "Le cartel de l’œuvre donne le titre.",
            "hint2": "Le titre décrit une jeune figure en position allongée."
          }
        },
        "locationMode": "gps",
        "hint2": "Le titre décrit une jeune figure en position allongée.",
        "id": "maillol-s07",
        "routeInstruction": "Rejoins ce repère par l’espace public en respectant la signalisation et les accès autorisés."
      },
      {
        "name": "Front de mer – sculptures",
        "lat": 42.4837,
        "lng": 3.1302,
        "radius": 220,
        "fact": "Le front de mer expose notamment L’Air, L’Action enchaînée et Île de France sans bras.",
        "type": "multi",
        "q": "Sur le front de mer, complète le titre d’une œuvre de Maillol : « L’Action … »",
        "answers": [
          "enchainee",
          "enchaînée"
        ],
        "hint": "Le mot évoque quelque chose qui est retenu.",
        "token": "",
        "source": "https://www.banyuls-sur-mer.com/tourisme/decouvrir/un-musee-a-ciel-ouvert/incontournables-culturels/admirer-les-statues-de-maillol-en-front-de-mer/",
        "gpsConfidence": "navigation-zone",
        "access": "Extérieur / espace public ou observation depuis l’espace public.",
        "season": "Toute l’année, sous réserve des conditions locales.",
        "photoBonus": false,
        "expertBonus": "Observe un détail réel du lieu avant de répondre.",
        "interaction": "text",
        "audience": {
          "enfant": {
            "q": "Quel mot complète « L’Action … » ?",
            "choices": [
              "enchaînée",
              "libérée",
              "cachée"
            ],
            "answers": [
              "enchainee"
            ],
            "interaction": "choice",
            "hint": "Regarde le titre de l’œuvre.",
            "hint2": "Le mot recherché signifie retenue par des chaînes."
          },
          "adulte": {
            "q": "Parmi les sculptures du front de mer, retrouve celle dont le titre associe l’action à une contrainte. Donne le second mot du titre.",
            "answers": [
              "enchainee"
            ],
            "interaction": "text",
            "hint": "Le cartel suffit.",
            "hint2": "Le mot recherché signifie retenue par des chaînes."
          },
          "ado": {
            "q": "Sur le front de mer, complète le titre d’une œuvre de Maillol : « L’Action … »",
            "answers": [
              "enchainee",
              "enchaînée"
            ],
            "interaction": "text",
            "hint": "Le mot évoque quelque chose qui est retenu.",
            "hint2": "Le mot recherché signifie retenue par des chaînes."
          }
        },
        "locationMode": "gps",
        "hint2": "Le mot recherché signifie retenue par des chaînes.",
        "id": "maillol-s08",
        "routeInstruction": "Rejoins ce repère par l’espace public en respectant la signalisation et les accès autorisés."
      },
      {
        "name": "Monument aux morts",
        "lat": 42.4837,
        "lng": 3.1287,
        "radius": 180,
        "fact": "Le Monument aux morts pacifiste est une œuvre majeure de Maillol à Banyuls.",
        "type": "riddle",
        "q": "Ce dernier lieu est un monument aux morts qualifié de pacifiste. Quel idéal s’oppose directement à la guerre ?",
        "answers": [
          "la paix",
          "paix"
        ],
        "hint": "Pacifiste vient de la même famille d’idée.",
        "token": "",
        "source": "https://www.banyuls-sur-mer.com/tourisme/decouvrir/un-musee-a-ciel-ouvert/incontournables-culturels/admirer-les-statues-de-maillol-en-front-de-mer/",
        "gpsConfidence": "navigation-zone",
        "access": "Extérieur / espace public ou observation depuis l’espace public.",
        "season": "Toute l’année, sous réserve des conditions locales.",
        "photoBonus": false,
        "expertBonus": "Observe un détail réel du lieu avant de répondre.",
        "interaction": "choice",
        "choices": [
          "La paix",
          "La vitesse",
          "Le commerce",
          "Le hasard"
        ],
        "audience": {
          "enfant": {
            "q": "Un monument « pacifiste » défend surtout quelle idée ?",
            "choices": [
              "La paix",
              "La vitesse",
              "La richesse"
            ],
            "answers": [
              "la paix",
              "paix"
            ],
            "interaction": "choice",
            "hint": "C’est le contraire de la guerre.",
            "hint2": "Le mot recherché est le contraire de la guerre."
          },
          "adulte": {
            "q": "Le monument est décrit comme pacifiste. Quel idéal politique et humain exprime ce qualificatif, en un mot ?",
            "answers": [
              "paix",
              "la paix"
            ],
            "interaction": "text",
            "hint": "Le contraire de la guerre.",
            "hint2": "Le mot recherché est le contraire de la guerre."
          },
          "ado": {
            "q": "Ce dernier lieu est un monument aux morts qualifié de pacifiste. Quel idéal s’oppose directement à la guerre ?",
            "answers": [
              "la paix",
              "paix"
            ],
            "choices": [
              "La paix",
              "La vitesse",
              "Le commerce",
              "Le hasard"
            ],
            "interaction": "choice",
            "hint": "Pacifiste vient de la même famille d’idée.",
            "hint2": "Le mot recherché est le contraire de la guerre."
          }
        },
        "locationMode": "gps",
        "hint2": "Le mot recherché est le contraire de la guerre.",
        "id": "maillol-s09",
        "routeInstruction": "Rejoins ce repère par l’espace public en respectant la signalisation et les accès autorisés."
      }
    ],
    "lastVerified": "2026-09-09",
    "sourceSummary": "https://www.banyuls-sur-mer.com/tourisme/decouvrir/un-musee-a-ciel-ouvert/incontournables-culturels/circuit-dans-les-pas-daristide/",
    "safety": "Reste dans l’espace public, respecte les propriétés privées, la signalisation, la météo et les règles locales.",
    "offline": true,
    "territoryId": "banyuls",
    "bonusStops": [
      {
        "name": "Musée Maillol – Vallée de la Roume",
        "lat": 42.4708,
        "lng": 3.1126,
        "fact": "La Métairie abrite le musée, l’atelier, le tombeau de Maillol et la statue Méditerranée.",
        "source": "https://www.banyuls-sur-mer.com/tourisme/decouvrir/un-musee-a-ciel-ouvert/incontournables-culturels/circuit-dans-les-pas-daristide/",
        "gpsConfidence": "navigation-zone",
        "access": "Musée : horaires et conditions d’ouverture à vérifier avant le départ ; l’étape peut être résolue depuis la zone extérieure si le site est fermé.",
        "season": "Toute l’année selon horaires d’ouverture du musée."
      }
    ],
    "route": {
      "level": "intermediaire",
      "levelLabel": "Intermédiaire",
      "distanceKm": null,
      "distanceLabel": "Distance à relever sur le terrain",
      "walkTime": "≈ 1 h pour le circuit officiel du Cap d’Osna",
      "gameTime": "2 h – 3 h avec le jeu",
      "ascentM": null,
      "descentM": null,
      "altMaxM": null,
      "effort": null,
      "technical": null,
      "risk": null,
      "surface": "Ruelles urbaines, escaliers, front de mer",
      "accessibility": "Non PMR / non poussette sur le Cap d’Osna",
      "metricsStatus": "partial-official",
      "source": "https://www.banyuls-sur-mer.com/tourisme/decouvrir/un-musee-a-ciel-ouvert/incontournables-culturels/circuit-dans-les-pas-daristide/",
      "note": "Durée et contraintes d’accessibilité publiées par l’Office de tourisme. Distance et dénivelé du parcours Explor’Action complet à mesurer en reconnaissance terrain.",
      "playerDistance": "Circuit officiel ≈ 1 h",
      "playerAscent": "Ruelles pentues + escaliers",
      "playerWalk": "≈ 1 h hors jeu",
      "playerTerrain": "Ruelles, escaliers, front de mer",
      "playerNote": "Circuit urbain escarpé avec de nombreux escaliers. Non adapté aux PMR ni aux poussettes sur le Cap d’Osna.",
      "routeType": "Boucle urbaine",
      "officialBasis": "Circuit « Dans les pas d’Aristide »"
    },
    "teaser": "Un carnet incomplet te ramène sur les traces de Maillol. Ici, les œuvres, les ruelles et la mémoire du quartier deviennent les pièces d’une même histoire.",
    "briefing": "Un carnet de jeu sans signature a été retrouvé près du front de mer. Ses pages renvoient à des lieux réellement liés à Aristide Maillol. À chaque étape, le terrain révèle un morceau de sens : une œuvre, un quartier, une date, un geste. À toi de comprendre ce qui relie tout cela.",
    "objective": "Suivre le circuit, retrouver les trois cartes-indices et comprendre le mot qui relie l’artiste, la ville et le paysage.",
    "ending": "HARMONIE. Le mot final renvoie à une œuvre réellement visible à Banyuls et résume le fil du jeu : artiste, quartier, sculptures et paysage se répondent.",
    "territoryFragment": "Mémoire",
    "cardTerrain": "Ruelles • escaliers • front de mer",
    "cardTime": "≈ 1 h de circuit + temps de jeu",
    "playerMetrics": [
      [
        "↻",
        "Boucle urbaine"
      ],
      [
        "⏱",
        "≈ 1 h de marche officielle"
      ],
      [
        "↗",
        "Escaliers & rues pentues"
      ]
    ],
    "storyBeats": [
      {
        "title": "Le nom effacé",
        "text": "Le carnet s’ouvre sur un nom brouillé. Une fois décodé, le terrain de jeu devient clair : tu marches dans la ville natale de Maillol."
      },
      {
        "title": "L’œuvre du jardin",
        "text": "Dans le jardin de la mairie, une œuvre donne le ton du carnet : l’harmonie n’est pas encore la solution, mais elle devient un fil conducteur."
      },
      {
        "title": "Retour aux origines",
        "text": "Le jeu quitte les œuvres isolées pour revenir au quartier : le Cap d’Osna relie l’artiste à un lieu vécu."
      },
      {
        "title": "Le fil du parcours",
        "text": "Tu ne suis plus seulement une liste : le chemin parcouru lui-même devient une information à mémoriser."
      },
      {
        "title": "Un nom dans la rue",
        "text": "Une simple plaque de rue confirme que la ville a intégré le nom de l’artiste à son propre paysage."
      },
      {
        "title": "1861",
        "text": "Un nombre replace l’aventure dans le temps : 1861, année de naissance de Maillol à Banyuls."
      },
      {
        "title": "La ville comme musée",
        "text": "Les sculptures sortent du musée. Le parcours montre comment l’œuvre se lit directement dans l’espace public."
      },
      {
        "title": "Le geste retenu",
        "text": "Le titre de L’Action enchaînée donne au carnet une tension nouvelle : mouvement et contrainte coexistent."
      },
      {
        "title": "Mémoire et paix",
        "text": "Le dernier lieu ne donne pas directement la réponse. Il donne le sens de ce que tu as observé : mémoire, œuvre et paix se répondent."
      }
    ],
    "playerStatus": "playable-test",
    "scenarioDisclaimer": "Histoire de jeu fictive ; faits patrimoniaux, artistiques, naturels et données de randonnée documentés séparément.",
    "finalPrompt": "Quel mot, déjà rencontré dans le titre d’une œuvre du jardin de la mairie, résume le lien entre l’artiste, la ville et le paysage ?",
    "clueCards": [
      {
        "unlockAt": 3,
        "title": "Carte 1 — Origines",
        "text": "Le carnet relie un artiste à un quartier vécu : le Cap d’Osna n’est pas un simple décor."
      },
      {
        "unlockAt": 6,
        "title": "Carte 2 — Un mot déjà croisé",
        "text": "Dans le jardin de la mairie, le titre d’une œuvre contient le mot que le carnet cherche à remettre au centre."
      },
      {
        "unlockAt": 9,
        "title": "Carte 3 — Équilibre",
        "text": "Le mot final évoque ce qui peut relier mémoire, œuvres, ville et paysage sans les opposer."
      }
    ],
    "sourceCheckedAt": "2026-09-10",
    "fieldValidation": "monitoring-required",
    "validationTier": "ready-application-test"
  },
  {
    "id": "vignes",
    "icon": "🍇",
    "title": "Le Secret des Vignes",
    "tag": "Vignes • Mas • Terroir",
    "duration": "2 h 30 – 4 h avec le jeu",
    "difficulty": "Facile",
    "story": "Huit sceaux du terroir ont été dispersés entre caves, domaines et savoir-faire banyulencs. Retrouve-les pour reconstituer le cépage-clé.",
    "final": "GRENACHE",
    "steps": [
      {
        "name": "Office de Tourisme / départ",
        "lat": 42.4797,
        "lng": 3.124,
        "radius": 180,
        "fact": "Le raisin pousse en grappes et constitue la matière première du vin.",
        "type": "riddle",
        "q": "Départ officiel de la boucle. Avant de partir, quel fruit est récolté dans les vignes que tu vas traverser ?",
        "answers": [
          "raisin",
          "le raisin"
        ],
        "hint": "Le fruit pousse en grappes.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/le-cami-danicet/",
        "gpsConfidence": "official-navigation",
        "access": "Rester sur l’itinéraire balisé et dans l’espace public ; ne pas entrer dans les parcelles.",
        "season": "Toute l’année selon météo et conditions locales ; vigilance chaleur et vent.",
        "photoBonus": false,
        "expertBonus": "Observe un détail réel du lieu avant de répondre.",
        "locationMode": "gps",
        "routeInstruction": "Depuis l’Office, passe devant la mairie puis suis l’avenue Général de Gaulle.",
        "interaction": "choice",
        "audience": {
          "enfant": {
            "q": "Quel fruit vois-tu pousser dans les vignes de Banyuls ?",
            "choices": [
              "Raisin",
              "Pomme",
              "Orange"
            ],
            "answers": [
              "raisin",
              "le raisin"
            ],
            "interaction": "choice",
            "hint": "Il pousse en grappes.",
            "hint2": "Ce n’est pas le nom du vin : cherche le fruit avant transformation."
          },
          "adulte": {
            "q": "Avant de quitter le départ, nomme la matière première végétale du vin de Banyuls en un mot.",
            "answers": [
              "raisin",
              "le raisin"
            ],
            "interaction": "text",
            "hint": "Une grappe suffit à te répondre.",
            "hint2": "Ce n’est pas le nom du vin : cherche le fruit avant transformation."
          },
          "ado": {
            "q": "Départ officiel de la boucle. Avant de partir, quel fruit est récolté dans les vignes que tu vas traverser ?",
            "answers": [
              "raisin",
              "le raisin"
            ],
            "choices": [
              "Raisin",
              "Olive",
              "Figue"
            ],
            "interaction": "choice",
            "hint": "Le fruit pousse en grappes.",
            "hint2": "Ce n’est pas le nom du vin : cherche le fruit avant transformation."
          }
        },
        "hint2": "Ce n’est pas le nom du vin : cherche le fruit avant transformation.",
        "choices": [
          "Raisin",
          "Olive",
          "Figue"
        ],
        "id": "vignes-s01"
      },
      {
        "name": "Après le pont ferroviaire / route des Mas",
        "lat": 42.4779,
        "lng": 3.1198,
        "radius": 300,
        "fact": "La route à rejoindre est la route des Mas.",
        "type": "riddle",
        "q": "Après le pont de chemin de fer, l’itinéraire officiel demande de poursuivre environ 900 m avant de tourner. Quel mot du nom de la route rappelle les fermes traditionnelles catalanes ?",
        "answers": [
          "mas",
          "les mas"
        ],
        "hint": "Regarde le nom de la voie suivie après le pont.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/le-cami-danicet/",
        "gpsConfidence": "official-route-landmark",
        "access": "Rester sur l’itinéraire balisé et dans l’espace public ; ne pas entrer dans les parcelles.",
        "season": "Toute l’année selon météo et conditions locales ; vigilance chaleur et vent.",
        "photoBonus": false,
        "expertBonus": "Observe un détail réel du lieu avant de répondre.",
        "locationMode": "trail",
        "routeInstruction": "Environ 900 m après le pont de chemin de fer, repère le départ de la route des Mas.",
        "interaction": "text",
        "audience": {
          "enfant": {
            "q": "La route à prendre s’appelle « route des … » ?",
            "choices": [
              "Mas",
              "Ports",
              "Pins"
            ],
            "answers": [
              "mas",
              "les mas"
            ],
            "interaction": "choice",
            "hint": "Lis la signalisation.",
            "hint2": "Le mot recherché est déjà dans « route des Mas »."
          },
          "adulte": {
            "q": "Lis le nom de la voie indiquée par l’itinéraire après le pont : quel terme catalan désigne le type d’habitat mentionné ?",
            "answers": [
              "mas",
              "les mas"
            ],
            "interaction": "text",
            "hint": "Le mot est sur le panneau.",
            "hint2": "Le mot recherché est déjà dans « route des Mas »."
          },
          "ado": {
            "q": "Après le pont de chemin de fer, l’itinéraire officiel demande de poursuivre environ 900 m avant de tourner. Quel mot du nom de la route rappelle les fermes traditionnelles catalanes ?",
            "answers": [
              "mas",
              "les mas"
            ],
            "interaction": "text",
            "hint": "Regarde le nom de la voie suivie après le pont.",
            "hint2": "Le mot recherché est déjà dans « route des Mas »."
          }
        },
        "hint2": "Le mot recherché est déjà dans « route des Mas ».",
        "id": "vignes-s02"
      },
      {
        "name": "Square Jean Ferrer / départ du Cami",
        "lat": 42.4748,
        "lng": 3.1187,
        "radius": 350,
        "fact": "Le Cami d’Anicet suit un balisage jaune.",
        "type": "observation",
        "q": "Au départ du Cami, quelle couleur de balisage l’itinéraire officiel demande-t-il de suivre ?",
        "answers": [
          "jaune",
          "le jaune"
        ],
        "hint": "Cherche une marque de balisage sur le terrain.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/le-cami-danicet/",
        "gpsConfidence": "official-route-landmark",
        "access": "Rester sur l’itinéraire balisé et dans l’espace public ; ne pas entrer dans les parcelles.",
        "season": "Toute l’année selon météo et conditions locales ; vigilance chaleur et vent.",
        "photoBonus": true,
        "expertBonus": "Observe un détail réel du lieu avant de répondre.",
        "locationMode": "trail",
        "routeInstruction": "Après environ 800 m sur la route des Mas, rejoins le square Jean Ferrer puis le début du Cami.",
        "interaction": "choice",
        "audience": {
          "enfant": {
            "q": "Quelle couleur de balise dois-tu suivre ?",
            "choices": [
              "Jaune",
              "Rouge",
              "Bleue"
            ],
            "answers": [
              "jaune",
              "le jaune"
            ],
            "interaction": "choice",
            "hint": "Cherche une marque peinte.",
            "hint2": "La fiche officielle demande de suivre le balisage jaune."
          },
          "adulte": {
            "q": "Ne regarde pas le téléphone : identifie sur le terrain la couleur du balisage à suivre et saisis-la.",
            "answers": [
              "jaune",
              "le jaune"
            ],
            "interaction": "text",
            "hint": "La fiche officielle l’indique aussi.",
            "hint2": "La fiche officielle demande de suivre le balisage jaune."
          },
          "ado": {
            "q": "Au départ du Cami, quelle couleur de balisage l’itinéraire officiel demande-t-il de suivre ?",
            "answers": [
              "jaune",
              "le jaune"
            ],
            "choices": [
              "Jaune",
              "Rouge",
              "Bleu"
            ],
            "interaction": "choice",
            "hint": "Cherche une marque de balisage sur le terrain.",
            "hint2": "La fiche officielle demande de suivre le balisage jaune."
          }
        },
        "hint2": "La fiche officielle demande de suivre le balisage jaune.",
        "choices": [
          "Jaune",
          "Rouge",
          "Bleu"
        ],
        "id": "vignes-s03"
      },
      {
        "name": "Ancien moulin du Mas Reig",
        "lat": 42.4748,
        "lng": 3.1188,
        "radius": 350,
        "fact": "La source officielle identifie ici l’ancien moulin à huile du Mas Reig.",
        "type": "riddle",
        "q": "À environ 150 m après le début du Cami, une bâtisse protégée par des arbres correspond à un ancien…",
        "answers": [
          "moulin a huile",
          "moulin à huile",
          "moulin"
        ],
        "hint": "La bâtisse servait à transformer une production agricole.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/le-cami-danicet/",
        "gpsConfidence": "official-route-landmark",
        "access": "Rester sur l’itinéraire balisé et dans l’espace public ; ne pas entrer dans les parcelles.",
        "season": "Toute l’année selon météo et conditions locales ; vigilance chaleur et vent.",
        "photoBonus": false,
        "expertBonus": "Observe un détail réel du lieu avant de répondre.",
        "locationMode": "trail",
        "routeInstruction": "Engage-toi sur le Cami par la pente. Environ 150 m plus loin, repère la bâtisse protégée par des arbres.",
        "interaction": "choice",
        "audience": {
          "enfant": {
            "q": "Cette ancienne bâtisse servait à fabriquer de l’huile. C’était un… ?",
            "choices": [
              "Moulin à huile",
              "Phare",
              "Four solaire"
            ],
            "answers": [
              "moulin a huile",
              "moulin à huile",
              "moulin"
            ],
            "interaction": "choice",
            "hint": "On y pressait les olives.",
            "hint2": "La source décrit un ancien moulin à huile."
          },
          "adulte": {
            "q": "À partir du repère décrit et de la source, donne la fonction historique de la bâtisse du Mas Reig.",
            "answers": [
              "moulin a huile",
              "moulin à huile",
              "moulin"
            ],
            "interaction": "text",
            "hint": "Elle transformait les olives.",
            "hint2": "La source décrit un ancien moulin à huile."
          },
          "ado": {
            "q": "À environ 150 m après le début du Cami, une bâtisse protégée par des arbres correspond à un ancien…",
            "answers": [
              "moulin a huile",
              "moulin à huile",
              "moulin"
            ],
            "choices": [
              "Moulin à huile",
              "Bergerie",
              "Tour de guet"
            ],
            "interaction": "choice",
            "hint": "La bâtisse servait à transformer une production agricole.",
            "hint2": "La source décrit un ancien moulin à huile."
          }
        },
        "hint2": "La source décrit un ancien moulin à huile.",
        "choices": [
          "Moulin à huile",
          "Bergerie",
          "Tour de guet"
        ],
        "id": "vignes-s04"
      },
      {
        "name": "Ruines de Can Rède",
        "lat": 42.474621,
        "lng": 3.11722,
        "radius": 220,
        "fact": "Can Rède est mentionné comme des ruines laissées sur la gauche.",
        "type": "observation",
        "q": "À ce repère, quel état du bâti est explicitement mentionné par l’itinéraire ?",
        "answers": [
          "ruines",
          "des ruines"
        ],
        "hint": "Observe l’état du bâti sans entrer dans le site.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/le-cami-danicet/",
        "gpsConfidence": "official-route-landmark",
        "access": "Rester sur l’itinéraire balisé et dans l’espace public ; ne pas entrer dans les parcelles.",
        "season": "Toute l’année selon météo et conditions locales ; vigilance chaleur et vent.",
        "photoBonus": true,
        "expertBonus": "Observe un détail réel du lieu avant de répondre.",
        "locationMode": "trail",
        "routeInstruction": "Lorsque tu arrives sur un tronçon goudronné, laisse les ruines de Can Rède sur ta gauche et prends le sentier.",
        "interaction": "text",
        "audience": {
          "enfant": {
            "q": "Can Rède est aujourd’hui signalé comme quoi ?",
            "choices": [
              "Des ruines",
              "Une plage",
              "Un port"
            ],
            "answers": [
              "ruines",
              "des ruines"
            ],
            "interaction": "choice",
            "hint": "Observe sans t’approcher des propriétés.",
            "hint2": "La description officielle parle de ruines."
          },
          "adulte": {
            "q": "Quel mot la description officielle emploie-t-elle pour l’état de Can Rède ?",
            "answers": [
              "ruines",
              "des ruines"
            ],
            "interaction": "text",
            "hint": "Il ne s’agit plus d’un bâtiment intact.",
            "hint2": "La description officielle parle de ruines."
          },
          "ado": {
            "q": "À ce repère, quel état du bâti est explicitement mentionné par l’itinéraire ?",
            "answers": [
              "ruines",
              "des ruines"
            ],
            "interaction": "text",
            "hint": "Observe l’état du bâti sans entrer dans le site.",
            "hint2": "La description officielle parle de ruines."
          }
        },
        "hint2": "La description officielle parle de ruines.",
        "id": "vignes-s05"
      },
      {
        "name": "Vignes abandonnées / contreforts des Pyrénées",
        "lat": 42.4822,
        "lng": 3.128,
        "radius": 250,
        "fact": "La description évoque les derniers contreforts de la chaîne des Pyrénées.",
        "type": "riddle",
        "q": "En traversant les vignes, quel grand massif lointain est cité dans la description officielle ?",
        "answers": [
          "pyrenees",
          "pyrénées",
          "les pyrenees",
          "les pyrénées"
        ],
        "hint": "Regarde au loin : il s’agit de la chaîne qui ferme l’horizon régional.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/le-cami-danicet/",
        "gpsConfidence": "official-route-landmark",
        "access": "Rester sur l’itinéraire balisé et dans l’espace public ; ne pas entrer dans les parcelles.",
        "season": "Toute l’année selon météo et conditions locales ; vigilance chaleur et vent.",
        "photoBonus": true,
        "expertBonus": "Observe un détail réel du lieu avant de répondre.",
        "locationMode": "trail",
        "routeInstruction": "Reste sur le sentier qui traverse les vignes abandonnées. Prends le temps de lire le relief, sans entrer dans les parcelles.",
        "interaction": "choice",
        "audience": {
          "enfant": {
            "q": "Quel massif vois-tu se dessiner au loin ?",
            "choices": [
              "Pyrénées",
              "Alpes",
              "Jura"
            ],
            "answers": [
              "pyrenees",
              "pyrénées",
              "les pyrenees",
              "les pyrénées"
            ],
            "interaction": "choice",
            "hint": "Banyuls est au pied de cette chaîne.",
            "hint2": "La source cite les contreforts des Pyrénées."
          },
          "adulte": {
            "q": "La source décrit les derniers contreforts d’une chaîne de montagnes. Laquelle ?",
            "answers": [
              "pyrenees",
              "pyrénées",
              "les pyrenees",
              "les pyrénées"
            ],
            "interaction": "text",
            "hint": "Regarde l’arrière-pays.",
            "hint2": "La source cite les contreforts des Pyrénées."
          },
          "ado": {
            "q": "En traversant les vignes, quel grand massif lointain est cité dans la description officielle ?",
            "answers": [
              "pyrenees",
              "pyrénées",
              "les pyrenees",
              "les pyrénées"
            ],
            "choices": [
              "Pyrénées",
              "Alpes",
              "Vosges"
            ],
            "interaction": "choice",
            "hint": "Regarde au loin : il s’agit de la chaîne qui ferme l’horizon régional.",
            "hint2": "La source cite les contreforts des Pyrénées."
          }
        },
        "hint2": "La source cite les contreforts des Pyrénées.",
        "choices": [
          "Pyrénées",
          "Alpes",
          "Vosges"
        ],
        "id": "vignes-s06"
      },
      {
        "name": "Sous le Mas Rafalet",
        "lat": 42.4811,
        "lng": 3.1272,
        "radius": 300,
        "fact": "Le repère est le Mas Rafalet.",
        "type": "riddle",
        "q": "Le tracé officiel demande de passer sous quel mas avant de rejoindre une piste goudronnée ?",
        "answers": [
          "mas rafalet",
          "rafalet"
        ],
        "hint": "Le nom du mas sert de jalon juste avant la piste goudronnée.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/le-cami-danicet/",
        "gpsConfidence": "official-route-landmark",
        "access": "Rester sur l’itinéraire balisé et dans l’espace public ; ne pas entrer dans les parcelles.",
        "season": "Toute l’année selon météo et conditions locales ; vigilance chaleur et vent.",
        "photoBonus": true,
        "expertBonus": "Observe un détail réel du lieu avant de répondre.",
        "locationMode": "trail",
        "routeInstruction": "Poursuis le sentier jusqu’au passage sous le Mas Rafalet, puis continue vers la piste goudronnée.",
        "interaction": "text",
        "audience": {
          "enfant": {
            "q": "Sous quel mas le sentier passe-t-il ?",
            "choices": [
              "Mas Rafalet",
              "Mas Larrieu",
              "Mas Blanc"
            ],
            "answers": [
              "mas rafalet",
              "rafalet"
            ],
            "interaction": "choice",
            "hint": "Le nom est celui du repère.",
            "hint2": "Le repère recherché est le Mas Rafalet."
          },
          "adulte": {
            "q": "Quel nom de mas sert de jalon juste avant la piste goudronnée ?",
            "answers": [
              "mas rafalet",
              "rafalet"
            ],
            "interaction": "text",
            "hint": "Suis la description officielle du Cami.",
            "hint2": "Le repère recherché est le Mas Rafalet."
          },
          "ado": {
            "q": "Le tracé officiel demande de passer sous quel mas avant de rejoindre une piste goudronnée ?",
            "answers": [
              "mas rafalet",
              "rafalet"
            ],
            "interaction": "text",
            "hint": "Le nom du mas sert de jalon juste avant la piste goudronnée.",
            "hint2": "Le repère recherché est le Mas Rafalet."
          }
        },
        "hint2": "Le repère recherché est le Mas Rafalet.",
        "id": "vignes-s07"
      },
      {
        "name": "Retour vers le square Jean Ferrer",
        "lat": 42.4807,
        "lng": 3.136,
        "radius": 350,
        "fact": "La boucle revient au square Jean Ferrer avant de redescendre vers l’Office.",
        "type": "riddle",
        "q": "Pour prouver que tu as vraiment suivi la boucle, remets ces quatre repères dans l’ordre où tu les as rencontrés.",
        "answers": [
          "square jean ferrer > ancien moulin du mas reig > ruines de can rede > sous le mas rafalet"
        ],
        "hint": "Commence au square Jean Ferrer.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/le-cami-danicet/",
        "gpsConfidence": "official-route-landmark",
        "access": "Rester sur l’itinéraire balisé et dans l’espace public ; ne pas entrer dans les parcelles.",
        "season": "Toute l’année selon météo et conditions locales ; vigilance chaleur et vent.",
        "photoBonus": false,
        "expertBonus": "Observe un détail réel du lieu avant de répondre.",
        "locationMode": "trail",
        "routeInstruction": "Après la piste goudronnée, tourne à droite pour retrouver le sentier qui ramène au square Jean Ferrer puis à l’Office.",
        "interaction": "sequence",
        "audience": {
          "enfant": {
            "q": "Quel square retrouves-tu pour fermer la boucle ?",
            "choices": [
              "Jean Ferrer",
              "Paul Reig",
              "Dina Vierny"
            ],
            "answers": [
              "square jean ferrer",
              "jean ferrer"
            ],
            "interaction": "choice",
            "hint": "Tu y es déjà passé au début du Cami.",
            "hint2": "Le moulin vient avant Can Rède, puis le parcours passe sous le Mas Rafalet."
          },
          "adulte": {
            "q": "Quel repère déjà rencontré boucle la partie sentier avant le retour à l’Office ?",
            "answers": [
              "square jean ferrer",
              "jean ferrer"
            ],
            "interaction": "text",
            "hint": "La boucle revient sur ses propres traces.",
            "hint2": "Le moulin vient avant Can Rède, puis le parcours passe sous le Mas Rafalet."
          },
          "ado": {
            "q": "Pour prouver que tu as vraiment suivi la boucle, remets ces quatre repères dans l’ordre où tu les as rencontrés.",
            "answers": [
              "square jean ferrer > ancien moulin du mas reig > ruines de can rede > sous le mas rafalet"
            ],
            "choices": [
              "Square Jean Ferrer",
              "Ancien moulin du Mas Reig",
              "Ruines de Can Rède",
              "Sous le Mas Rafalet"
            ],
            "interaction": "sequence",
            "hint": "Commence au square Jean Ferrer.",
            "hint2": "Le moulin vient avant Can Rède, puis le parcours passe sous le Mas Rafalet."
          }
        },
        "hint2": "Le moulin vient avant Can Rède, puis le parcours passe sous le Mas Rafalet.",
        "choices": [
          "Square Jean Ferrer",
          "Ancien moulin du Mas Reig",
          "Ruines de Can Rède",
          "Sous le Mas Rafalet"
        ],
        "sequence": [
          "Square Jean Ferrer",
          "Ancien moulin du Mas Reig",
          "Ruines de Can Rède",
          "Sous le Mas Rafalet"
        ],
        "id": "vignes-s08"
      }
    ],
    "lastVerified": "2026-09-09",
    "sourceSummary": "https://www.banyuls-sur-mer.com/tourisme/banyulspratique/trouver-son-activite/vins-et-terroir/",
    "safety": "Reste dans l’espace public, respecte les propriétés privées, la signalisation, la météo et les règles locales.",
    "offline": true,
    "territoryId": "banyuls",
    "route": {
      "level": "facile",
      "levelLabel": "Facile",
      "distanceKm": 7.4,
      "distanceLabel": "7,4 km",
      "walkTime": "2 h 30",
      "gameTime": "≈ 3 h 30 – 4 h 30 avec le jeu",
      "ascentM": 253,
      "descentM": 252,
      "altMaxM": 123,
      "effort": null,
      "technical": null,
      "risk": null,
      "surface": "Boucle balisée jaune entre ville, vignes, mas, sentier et piste",
      "accessibility": "Non PMR sur les portions de sentier",
      "metricsStatus": "official-route",
      "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/le-cami-danicet/",
      "referenceRoute": {
        "name": "Le Cami d’Anicet",
        "distanceKm": 7.4,
        "ascentM": 253,
        "descentM": 252,
        "walkTime": "2 h 30",
        "levelLabel": "Facile",
        "altMaxM": 123
      },
      "note": "Le parcours joueur suit la trame de la boucle officielle Cami d’Anicet. Les micro-zones GNSS exactes des défis restent à relever sur place ; les repères du sentier sont donc déverrouillés manuellement en suivant le balisage et les indications officielles.",
      "playerDistance": "7,4 km",
      "playerAscent": "+253 m / −252 m",
      "playerWalk": "2 h 30 hors jeu",
      "playerTerrain": "Vignes, sentier, piste et portions goudronnées",
      "playerNote": "Boucle officielle facile, balisée en jaune. Eau, chapeau, coupe-vent et chaussures de marche recommandés. Ne pas cueillir de raisins et rester sur les sentiers balisés.",
      "routeType": "Boucle",
      "officialBasis": "Cami d’Anicet"
    },
    "teaser": "Suis les traces d’Anicet, ancien muletier banyulenc, sur une vraie boucle entre vignes et mas. Les huit sceaux se trouvent désormais sur le chemin, pas dans une succession de caves.",
    "briefing": "Anicet, muletier banyulenc cité par l’itinéraire officiel, devient le guide fictif de cette mission. Tu suis la vraie boucle du Cami d’Anicet : le balisage jaune, les mas, les traces agricoles et le relief deviennent les indices. Le but n’est pas de réciter le vin de Banyuls, mais de lire le territoire qui le rend possible.",
    "objective": "Boucler les 7,4 km du Cami d’Anicet, débloquer trois cartes-indices et identifier le cépage-clé du récit.",
    "ending": "GRENACHE. Le mot final appartient bien au vocabulaire du cru de Banyuls. La fiction d’Anicet t’a surtout obligé à regarder le chemin, les terrasses, le relief et les gestes qui façonnent le vignoble.",
    "territoryFragment": "Terre",
    "cardTerrain": "Vignes • mas • sentier balisé",
    "cardTime": "≈ 3 h 30 à 4 h 30 avec le jeu",
    "playerMetrics": [
      [
        "🥾",
        "7,4 km"
      ],
      [
        "↗",
        "+253 m / −252 m"
      ],
      [
        "⏱",
        "2 h 30 hors jeu"
      ]
    ],
    "storyBeats": [
      {
        "title": "Le départ d’Anicet",
        "text": "La fiction commence à l’Office, mais la boucle est bien réelle : le Cami d’Anicet t’emmène vers les vignes et les mas."
      },
      {
        "title": "Quitter la ville",
        "text": "Après le pont ferroviaire, la ville s’efface progressivement. La route des Mas annonce le changement de décor."
      },
      {
        "title": "Le fil jaune",
        "text": "Le jeu confie maintenant la navigation au terrain : le balisage jaune devient ton fil conducteur."
      },
      {
        "title": "L’ancien moulin",
        "text": "Une bâtisse du Mas Reig rappelle que le paysage agricole ne se limite pas à la vigne : d’autres productions ont aussi laissé leurs traces."
      },
      {
        "title": "Les traces du temps",
        "text": "Can Rède montre un patrimoine plus fragile. Le jeu ne demande jamais d’entrer dans les ruines : observer et respecter suffit."
      },
      {
        "title": "Lire le relief",
        "text": "Le sentier traverse les vignes et ouvre le regard sur les contreforts pyrénéens. Le relief devient une partie du récit."
      },
      {
        "title": "Sous le mas",
        "text": "Le Mas Rafalet sert de jalon : ici, les noms de lieux structurent autant la randonnée que les énigmes."
      },
      {
        "title": "La boucle se referme",
        "text": "La boucle revient vers Jean Ferrer. Les trois cartes-indices sont maintenant réunies : le terroir peut livrer son mot-clé."
      }
    ],
    "playerStatus": "playable-test",
    "scenarioDisclaimer": "Histoire de jeu fictive ; faits patrimoniaux, artistiques, naturels et données de randonnée documentés séparément.",
    "finalPrompt": "Les cartes parlent du fruit, du terroir et du cépage emblématique. Quel cépage-clé du cru de Banyuls cherches-tu ?",
    "clueCards": [
      {
        "unlockAt": 3,
        "title": "Carte 1 — Du fruit au cépage",
        "text": "Le raisin est le point de départ, mais le mot final n’est pas le nom du fruit : cherche le nom d’un cépage."
      },
      {
        "unlockAt": 6,
        "title": "Carte 2 — Un cépage de terroir",
        "text": "La boucle montre pourquoi relief, pierre et travail humain comptent autant que la plante elle-même."
      },
      {
        "unlockAt": 8,
        "title": "Carte 3 — Le mot du cru",
        "text": "Le mot final est un cépage étroitement associé aux vins de Banyuls."
      }
    ],
    "sourceCheckedAt": "2026-09-10",
    "fieldValidation": "monitoring-required",
    "validationTier": "ready-application-test"
  },
  {
    "id": "art",
    "icon": "🗿",
    "title": "Banyuls, Musée à Ciel Ouvert",
    "tag": "Art contemporain • Sculpture • Ville",
    "duration": "1 h 30 – 2 h 30 avec le jeu",
    "difficulty": "Facile",
    "story": "Banyuls cache une galerie à ciel ouvert au-delà de Maillol. Huit œuvres et détails urbains composent cette mission d’observation.",
    "final": "DIALOGUE",
    "steps": [
      {
        "name": "Les Arcades / Passellis",
        "lat": 42.48345,
        "lng": 3.13005,
        "radius": 170,
        "fact": "Face à la plage centrale, les arcades bordent le Passellis. Le site officiel invite à observer la faune et la flore au pied des rochers.",
        "type": "observation",
        "q": "Observe la façade face à la plage : quel élément architectural se répète et donne son nom au lieu ?",
        "answers": [
          "arcades",
          "arcade"
        ],
        "hint": "Une suite d’ouvertures arrondies.",
        "token": "",
        "source": "https://www.banyuls-sur-mer.com/tourisme/decouvrir/banyuls-la-mer-et-ses-tresors/incontournables-de-la-mediterranee/les-plages-de-banyuls/",
        "gpsConfidence": "navigation-zone",
        "access": "Espace public.",
        "season": "Toute l’année.",
        "photoBonus": true,
        "interaction": "text",
        "audience": {
          "enfant": {
            "q": "Que vois-tu se répéter : des arcades, des tours ou des ponts ?",
            "choices": [
              "Arcades",
              "Tours",
              "Ponts"
            ],
            "answers": [
              "arcades"
            ],
            "interaction": "choice",
            "hint": "Regarde les ouvertures.",
            "hint2": "Le nom du lieu reprend ces ouvertures arrondies."
          },
          "adulte": {
            "q": "Nomme l’élément architectural répété qui structure ce front bâti.",
            "answers": [
              "arcades"
            ],
            "interaction": "text",
            "hint": "Le nom du lieu t’aide seulement après observation.",
            "hint2": "Le nom du lieu reprend ces ouvertures arrondies."
          },
          "ado": {
            "q": "Observe la façade face à la plage : quel élément architectural se répète et donne son nom au lieu ?",
            "answers": [
              "arcades",
              "arcade"
            ],
            "interaction": "text",
            "hint": "Une suite d’ouvertures arrondies.",
            "hint2": "Le nom du lieu reprend ces ouvertures arrondies."
          }
        },
        "locationMode": "gps",
        "hint2": "Le nom du lieu reprend ces ouvertures arrondies.",
        "id": "art-s01",
        "routeInstruction": "Rejoins ce repère par l’espace public en respectant la signalisation et les accès autorisés."
      },
      {
        "name": "Manolo Valiente – Place Bassères",
        "lat": 42.48275,
        "lng": 3.13195,
        "radius": 180,
        "fact": "Manuel Perez Valiente, dit Manolo Valiente, est un artiste réfugié espagnol lié à la Retirada. Une de ses statues est visible place Bassères.",
        "type": "observation",
        "q": "Retrouve sur place une œuvre de Manolo Valiente. Quel prénom d’artiste est associé à ce nom ?",
        "answers": [
          "manolo"
        ],
        "hint": "Le plan municipal donne Manolo Valiente.",
        "token": "",
        "source": "https://www.banyuls-sur-mer.com/offres/statues-de-manolo-valiente-banyuls-sur-mer-fr-3131241/",
        "gpsConfidence": "official-area",
        "access": "Espace public.",
        "season": "Toute l’année.",
        "photoBonus": true,
        "interaction": "text",
        "audience": {
          "enfant": {
            "q": "Quel prénom lis-tu pour l’artiste Valiente ?",
            "choices": [
              "Manolo",
              "Cyrille",
              "Aristide"
            ],
            "answers": [
              "manolo"
            ],
            "interaction": "choice",
            "hint": "Lis le cartel ou le plan.",
            "hint2": "Le prénom d’artiste est Manolo."
          },
          "adulte": {
            "q": "À partir du cartel ou du plan municipal, donne le prénom d’artiste de Manuel Perez Valiente.",
            "answers": [
              "manolo"
            ],
            "interaction": "text",
            "hint": "Il est connu sous un prénom plus court.",
            "hint2": "Le prénom d’artiste est Manolo."
          },
          "ado": {
            "q": "Retrouve sur place une œuvre de Manolo Valiente. Quel prénom d’artiste est associé à ce nom ?",
            "answers": [
              "manolo"
            ],
            "interaction": "text",
            "hint": "Le plan municipal donne Manolo Valiente.",
            "hint2": "Le prénom d’artiste est Manolo."
          }
        },
        "locationMode": "gps",
        "hint2": "Le prénom d’artiste est Manolo.",
        "id": "art-s02",
        "routeInstruction": "Rejoins ce repère par l’espace public en respectant la signalisation et les accès autorisés."
      },
      {
        "name": "La Remendaire – Manolo Valiente",
        "lat": 42.48355,
        "lng": 3.12915,
        "radius": 210,
        "fact": "Le plan de ville 2026 recense « La Remendaire » parmi les œuvres de Manolo Valiente visibles à Banyuls.",
        "type": "cipher",
        "q": "Lis ERIADNEMER de droite à gauche pour retrouver le titre de l’œuvre.",
        "answers": [
          "remendaire",
          "la remendaire"
        ],
        "hint": "Commence par la dernière lettre.",
        "token": "",
        "source": "https://www.banyuls-sur-mer.com/app/uploads/banyuls-sur-mer/2026/02/Plan-de-ville-2026-web-1.pdf",
        "gpsConfidence": "city-map-grid",
        "access": "Espace public ; localisation donnée comme zone de navigation.",
        "season": "Toute l’année.",
        "photoBonus": false,
        "interaction": "text",
        "audience": {
          "enfant": {
            "q": "Lis ce mot à l’envers : ERIADNEMER.",
            "choices": [
              "Remendaire",
              "Méditerranée",
              "Sardane"
            ],
            "answers": [
              "remendaire"
            ],
            "interaction": "choice",
            "hint": "Retourne l’ordre des lettres.",
            "hint2": "Lis la chaîne de lettres depuis la droite."
          },
          "adulte": {
            "q": "Le titre est caché en miroir : ERIADNEMER. Restitue-le sans aide.",
            "answers": [
              "remendaire"
            ],
            "interaction": "text",
            "hint": "Lecture droite → gauche.",
            "hint2": "Lis la chaîne de lettres depuis la droite."
          },
          "ado": {
            "q": "Lis ERIADNEMER de droite à gauche pour retrouver le titre de l’œuvre.",
            "answers": [
              "remendaire",
              "la remendaire"
            ],
            "interaction": "text",
            "hint": "Commence par la dernière lettre.",
            "hint2": "Lis la chaîne de lettres depuis la droite."
          }
        },
        "locationMode": "gps",
        "hint2": "Lis la chaîne de lettres depuis la droite.",
        "id": "art-s03",
        "routeInstruction": "Rejoins ce repère par l’espace public en respectant la signalisation et les accès autorisés."
      },
      {
        "name": "L’Œil – Fetiye Boudevin",
        "lat": 42.48385,
        "lng": 3.13035,
        "radius": 220,
        "fact": "Le plan de ville 2026 recense « L’Œil » de Fetiye Boudevin. Son atelier est installé aux Allées Maillol, au port de plaisance.",
        "type": "riddle",
        "q": "Le titre de l’œuvre nomme un organe qui sert à voir. Lequel ?",
        "answers": [
          "oeil",
          "œil",
          "l oeil",
          "l’œil"
        ],
        "hint": "Il est unique dans le titre.",
        "token": "",
        "source": "https://www.banyuls-sur-mer.com/app/uploads/banyuls-sur-mer/2026/02/Plan-de-ville-2026-web-1.pdf",
        "gpsConfidence": "city-map-grid",
        "access": "Œuvre en espace public ; atelier privé à respecter.",
        "season": "Toute l’année.",
        "photoBonus": true,
        "interaction": "text",
        "audience": {
          "enfant": {
            "q": "Quel organe donne son nom à l’œuvre ?",
            "choices": [
              "Œil",
              "Oreille",
              "Main"
            ],
            "answers": [
              "oeil",
              "œil",
              "l oeil",
              "l’œil"
            ],
            "interaction": "choice",
            "hint": "Il sert à regarder.",
            "hint2": "Le titre désigne l’organe de la vue."
          },
          "adulte": {
            "q": "Observe l’œuvre et son titre : quel organe devient ici un motif artistique ?",
            "answers": [
              "oeil",
              "œil",
              "l oeil",
              "l’œil"
            ],
            "interaction": "text",
            "hint": "Un seul mot.",
            "hint2": "Le titre désigne l’organe de la vue."
          },
          "ado": {
            "q": "Le titre de l’œuvre nomme un organe qui sert à voir. Lequel ?",
            "answers": [
              "oeil",
              "œil",
              "l oeil",
              "l’œil"
            ],
            "interaction": "text",
            "hint": "Il est unique dans le titre.",
            "hint2": "Le titre désigne l’organe de la vue."
          }
        },
        "locationMode": "gps",
        "hint2": "Le titre désigne l’organe de la vue.",
        "id": "art-s04",
        "routeInstruction": "Rejoins ce repère par l’espace public en respectant la signalisation et les accès autorisés."
      },
      {
        "name": "La Sardane – Patricia Rowland",
        "lat": 42.48345,
        "lng": 3.12925,
        "radius": 220,
        "fact": "Le plan de ville 2026 recense « La Sardane » de Patricia Rowland, une référence directe à la danse catalane.",
        "type": "choice",
        "q": "La Sardane renvoie à quel patrimoine culturel local ?",
        "answers": [
          "catalan"
        ],
        "hint": "Cette danse est emblématique de Catalogne.",
        "token": "",
        "source": "https://www.banyuls-sur-mer.com/app/uploads/banyuls-sur-mer/2026/02/Plan-de-ville-2026-web-1.pdf",
        "gpsConfidence": "city-map-grid",
        "access": "Espace public.",
        "season": "Toute l’année.",
        "photoBonus": false,
        "choices": [
          "Catalan",
          "Breton",
          "Basque",
          "Provençal"
        ],
        "interaction": "choice",
        "audience": {
          "enfant": {
            "q": "La Sardane est une danse de quelle culture ?",
            "choices": [
              "Catalane",
              "Bretonne",
              "Basque"
            ],
            "answers": [
              "catalan",
              "catalane"
            ],
            "interaction": "choice",
            "hint": "Nous sommes en pays catalan.",
            "hint2": "La Sardane est une danse emblématique catalane."
          },
          "adulte": {
            "q": "Associe le titre « La Sardane » à l’aire culturelle qu’il évoque.",
            "answers": [
              "catalan",
              "catalane",
              "catalogne"
            ],
            "interaction": "text",
            "hint": "Le contexte territorial est un indice.",
            "hint2": "La Sardane est une danse emblématique catalane."
          },
          "ado": {
            "q": "La Sardane renvoie à quel patrimoine culturel local ?",
            "answers": [
              "catalan"
            ],
            "choices": [
              "Catalan",
              "Breton",
              "Basque",
              "Provençal"
            ],
            "interaction": "choice",
            "hint": "Cette danse est emblématique de Catalogne.",
            "hint2": "La Sardane est une danse emblématique catalane."
          }
        },
        "locationMode": "gps",
        "hint2": "La Sardane est une danse emblématique catalane.",
        "id": "art-s05",
        "routeInstruction": "Rejoins ce repère par l’espace public en respectant la signalisation et les accès autorisés."
      },
      {
        "name": "Festival de coraux – Cyrille André",
        "lat": 42.48285,
        "lng": 3.12795,
        "radius": 250,
        "fact": "Le plan de ville 2026 recense « Festival de coraux » de Cyrille André dans le musée à ciel ouvert.",
        "type": "multi",
        "q": "Sélectionne les deux œuvres du parcours attribuées à Cyrille André.",
        "answers": [
          "festival de coraux + l echappee belle"
        ],
        "hint": "Le plan municipal associe plusieurs œuvres au même artiste.",
        "token": "",
        "source": "https://www.banyuls-sur-mer.com/app/uploads/banyuls-sur-mer/2026/02/Plan-de-ville-2026-web-1.pdf",
        "gpsConfidence": "city-map-grid",
        "access": "Espace public.",
        "season": "Toute l’année.",
        "photoBonus": true,
        "choices": [
          "Festival de coraux",
          "L’Échappée belle",
          "La Sardane",
          "L’Œil"
        ],
        "interaction": "multi",
        "multiAnswers": [
          "Festival de coraux",
          "L’Échappée belle"
        ],
        "audience": {
          "enfant": {
            "q": "Quelles DEUX œuvres sont de Cyrille André ?",
            "choices": [
              "Festival de coraux",
              "L’Échappée belle",
              "La Sardane",
              "L’Œil"
            ],
            "multiAnswers": [
              "Festival de coraux",
              "L’Échappée belle"
            ],
            "answers": [
              "festival de coraux + l echappee belle"
            ],
            "interaction": "multi",
            "hint": "Choisis exactement deux réponses.",
            "hint2": "Les deux titres à retenir sont « Festival de coraux » et « L’Échappée belle »."
          },
          "adulte": {
            "q": "À partir des cartels ou du plan, isole les deux titres attribués à Cyrille André parmi cette sélection.",
            "choices": [
              "Festival de coraux",
              "L’Échappée belle",
              "La Sardane",
              "L’Œil"
            ],
            "multiAnswers": [
              "Festival de coraux",
              "L’Échappée belle"
            ],
            "answers": [
              "festival de coraux + l echappee belle"
            ],
            "interaction": "text",
            "hint": "Deux œuvres partagent le même auteur.",
            "hint2": "Les deux titres à retenir sont « Festival de coraux » et « L’Échappée belle »."
          },
          "ado": {
            "q": "Sélectionne les deux œuvres du parcours attribuées à Cyrille André.",
            "answers": [
              "festival de coraux + l echappee belle"
            ],
            "choices": [
              "Festival de coraux",
              "L’Échappée belle",
              "La Sardane",
              "L’Œil"
            ],
            "interaction": "multi",
            "hint": "Le plan municipal associe plusieurs œuvres au même artiste.",
            "hint2": "Les deux titres à retenir sont « Festival de coraux » et « L’Échappée belle »."
          }
        },
        "locationMode": "gps",
        "hint2": "Les deux titres à retenir sont « Festival de coraux » et « L’Échappée belle ».",
        "id": "art-s06",
        "routeInstruction": "Rejoins ce repère par l’espace public en respectant la signalisation et les accès autorisés."
      },
      {
        "name": "Ballet d’une méduse cristalline",
        "lat": 42.48255,
        "lng": 3.12675,
        "radius": 260,
        "fact": "Cette œuvre de Cyrille André figure sur le plan de ville 2026. Son titre associe mouvement, transparence et monde marin.",
        "type": "logic",
        "q": "Dans « Ballet d’une méduse cristalline », quel animal marin est mis en mouvement par le titre ?",
        "answers": [
          "meduse",
          "méduse"
        ],
        "hint": "Il flotte et possède des tentacules.",
        "token": "",
        "source": "https://www.banyuls-sur-mer.com/app/uploads/banyuls-sur-mer/2026/02/Plan-de-ville-2026-web-1.pdf",
        "gpsConfidence": "city-map-grid",
        "access": "Espace public.",
        "season": "Toute l’année.",
        "photoBonus": false,
        "interaction": "text",
        "audience": {
          "enfant": {
            "q": "Quel animal danse dans le titre ?",
            "choices": [
              "Méduse",
              "Dauphin",
              "Crabe"
            ],
            "answers": [
              "meduse",
              "méduse"
            ],
            "interaction": "choice",
            "hint": "Il a des tentacules.",
            "hint2": "L’animal possède des tentacules."
          },
          "adulte": {
            "q": "Le titre transforme un animal marin en danseur. Nomme-le.",
            "answers": [
              "meduse",
              "méduse"
            ],
            "interaction": "text",
            "hint": "Relis le titre sur place.",
            "hint2": "L’animal possède des tentacules."
          },
          "ado": {
            "q": "Dans « Ballet d’une méduse cristalline », quel animal marin est mis en mouvement par le titre ?",
            "answers": [
              "meduse",
              "méduse"
            ],
            "interaction": "text",
            "hint": "Il flotte et possède des tentacules.",
            "hint2": "L’animal possède des tentacules."
          }
        },
        "locationMode": "gps",
        "hint2": "L’animal possède des tentacules.",
        "id": "art-s07",
        "routeInstruction": "Rejoins ce repère par l’espace public en respectant la signalisation et les accès autorisés."
      },
      {
        "name": "L’Échappée belle – Cyrille André",
        "lat": 42.48225,
        "lng": 3.12575,
        "radius": 280,
        "fact": "« L’Échappée belle » est également recensée parmi les œuvres publiques du plan de ville 2026.",
        "type": "word",
        "q": "« Prendre la poudre d’… » signifie s’échapper. Quel mot complète l’expression et fait écho au titre L’Échappée belle ?",
        "answers": [
          "escampette"
        ],
        "hint": "Le mot commence par E.",
        "token": "",
        "source": "https://www.banyuls-sur-mer.com/app/uploads/banyuls-sur-mer/2026/02/Plan-de-ville-2026-web-1.pdf",
        "gpsConfidence": "city-map-grid",
        "access": "Espace public.",
        "season": "Toute l’année.",
        "photoBonus": false,
        "interaction": "text",
        "audience": {
          "enfant": {
            "q": "Complète : « prendre la poudre d’… »",
            "choices": [
              "escampette",
              "étoile",
              "orage"
            ],
            "answers": [
              "escampette"
            ],
            "interaction": "choice",
            "hint": "C’est une expression pour partir vite.",
            "hint2": "L’expression se termine par « escampette »."
          },
          "adulte": {
            "q": "Retrouve le mot final de l’expression française « prendre la poudre d’… » et relie-le au titre de l’œuvre.",
            "answers": [
              "escampette"
            ],
            "interaction": "text",
            "hint": "Ne cherche pas le mot dans le titre : cherche son idée.",
            "hint2": "L’expression se termine par « escampette »."
          },
          "ado": {
            "q": "« Prendre la poudre d’… » signifie s’échapper. Quel mot complète l’expression et fait écho au titre L’Échappée belle ?",
            "answers": [
              "escampette"
            ],
            "interaction": "text",
            "hint": "Le mot commence par E.",
            "hint2": "L’expression se termine par « escampette »."
          }
        },
        "locationMode": "gps",
        "hint2": "L’expression se termine par « escampette ».",
        "id": "art-s08",
        "routeInstruction": "Rejoins ce repère par l’espace public en respectant la signalisation et les accès autorisés."
      }
    ],
    "lastVerified": "2026-09-09",
    "sourceSummary": "https://www.banyuls-sur-mer.com/app/uploads/banyuls-sur-mer/2026/02/Plan-de-ville-2026-web-1.pdf",
    "safety": "Reste dans l’espace public, respecte les propriétés privées, la signalisation, la météo et les règles locales.",
    "offline": true,
    "territoryId": "banyuls",
    "route": {
      "level": "facile",
      "levelLabel": "Facile",
      "distanceKm": null,
      "distanceLabel": "Distance à relever terrain",
      "walkTime": "Durée à mesurer terrain",
      "gameTime": "1 h 30 – 2 h 30 avec le jeu",
      "ascentM": null,
      "descentM": null,
      "altMaxM": null,
      "effort": null,
      "technical": null,
      "risk": null,
      "surface": "Centre-ville, quais et espaces publics",
      "accessibility": "Majoritairement urbaine ; vérification PMR étape par étape",
      "metricsStatus": "city-map",
      "source": "https://www.banyuls-sur-mer.com/app/uploads/banyuls-sur-mer/2026/02/Plan-de-ville-2026-web-1.pdf",
      "note": "Localisation issue du plan de ville 2026 ; les positions city-map-grid restent à confirmer au mètre près sur le terrain.",
      "playerDistance": "Balade urbaine",
      "playerAscent": "Faible dénivelé",
      "playerWalk": "Marche urbaine avec arrêts",
      "playerTerrain": "Centre, quais, espaces publics",
      "playerNote": "Balade urbaine centrée sur l’observation des œuvres, des quais et des espaces publics.",
      "routeType": "Boucle urbaine",
      "officialBasis": "Plan de ville 2026 – musée à ciel ouvert"
    },
    "teaser": "Banyuls devient une galerie à ciel ouvert. Pour avancer, il faut comparer les formes, les titres, les signatures et parfois même l’architecture autour des œuvres.",
    "briefing": "Une conservatrice fictive a laissé huit repères dans la ville pour défendre une idée : Banyuls ne se résume pas à un seul artiste. Les œuvres utilisées dans le jeu figurent sur le plan municipal. Observe, compare et relie les regards jusqu’à comprendre le mot final du parcours.",
    "objective": "Résoudre huit défis d’observation, débloquer trois cartes-indices et comprendre ce qui relie œuvres, ville et Méditerranée.",
    "ending": "DIALOGUE. C’est le mot de jeu qui résume cette aventure : architecture, sculptures, culture catalane et Méditerranée se répondent sans réduire Banyuls à un seul regard.",
    "territoryFragment": "Regards",
    "cardTerrain": "Balade urbaine • art & architecture",
    "cardTime": "≈ 1 h 30 à 2 h 30 avec le jeu",
    "playerMetrics": [
      [
        "👀",
        "Observation"
      ],
      [
        "🏙️",
        "Centre & front de mer"
      ],
      [
        "⏱",
        "≈ 1 h 30–2 h 30"
      ]
    ],
    "storyBeats": [
      {
        "title": "La ville devient cadre",
        "text": "Les premières formes ne sont pas une œuvre isolée : l’architecture elle-même prépare le regard."
      },
      {
        "title": "Un artiste en exil",
        "text": "Manolo Valiente ouvre une autre histoire artistique de Banyuls, distincte de celle de Maillol."
      },
      {
        "title": "Un titre à retourner",
        "text": "Le jeu dérègle la lecture d’un titre pour forcer l’attention. Une œuvre peut aussi être un code."
      },
      {
        "title": "Regarder autrement",
        "text": "Avec L’Œil, la mission devient presque littérale : pour avancer, il faut réellement regarder."
      },
      {
        "title": "Un geste collectif",
        "text": "La Sardane reconnecte l’art contemporain à une culture locale et collective."
      },
      {
        "title": "Les signatures se croisent",
        "text": "Les auteurs se croisent : reconnaître une signature oblige à comparer plusieurs œuvres plutôt qu’à lire un seul cartel."
      },
      {
        "title": "Le vivant devient mouvement",
        "text": "Le titre du ballet transforme un organisme marin en mouvement. La frontière entre ville et Méditerranée se brouille."
      },
      {
        "title": "Sortir du cadre",
        "text": "L’Échappée belle clôt la galerie : après avoir appris à regarder, le jeu t’invite à sortir du cadre."
      }
    ],
    "playerStatus": "playable-test",
    "scenarioDisclaimer": "Histoire de jeu fictive ; faits patrimoniaux, artistiques, naturels et données de randonnée documentés séparément.",
    "finalPrompt": "Quel mot désigne une conversation — ici sans parole — entre les œuvres, la ville, la culture locale et la Méditerranée ?",
    "clueCards": [
      {
        "unlockAt": 3,
        "title": "Carte 1 — Le cadre compte",
        "text": "La ville elle-même participe à l’expérience : architecture et œuvres ne sont pas séparées."
      },
      {
        "unlockAt": 6,
        "title": "Carte 2 — Plusieurs voix",
        "text": "Les signatures changent, les thèmes aussi. Aucun artiste ne raconte seul tout le territoire."
      },
      {
        "unlockAt": 8,
        "title": "Carte 3 — Une conversation sans parole",
        "text": "Le mot final désigne ce qui se crée lorsque des œuvres, des lieux et des cultures se répondent."
      }
    ],
    "sourceCheckedAt": "2026-09-10",
    "fieldValidation": "monitoring-required",
    "validationTier": "ready-application-test"
  },
  {
    "id": "nature",
    "icon": "🌊",
    "title": "Entre Terre & Méditerranée",
    "tag": "Mer • Sciences • Réserve • Paysages",
    "duration": "3 h 30 – 5 h selon le rythme et les arrêts",
    "difficulty": "Difficile",
    "story": "Du laboratoire Arago au sentier de la réserve marine, restaure les données perdues d’une balise scientifique en suivant la Côte Vermeille vers Peyrefite.",
    "final": "POSIDONIE",
    "steps": [
      {
        "name": "Aquarium du Biodiversarium",
        "lat": 42.480016,
        "lng": 3.135934,
        "radius": 180,
        "fact": "L’Aquarium scientifique du Biodiversarium présente la biodiversité marine locale. Son parcours actuel relie les milieux littoraux, les herbiers de Posidonie, les fonds rocheux et le coralligène.",
        "type": "choice",
        "q": "Quel grand milieu régional est au cœur de l’aquarium scientifique de Banyuls ?",
        "answers": [
          "mediterranee",
          "méditerranée"
        ],
        "hint": "Regarde les espèces et la présentation du lieu.",
        "token": "",
        "source": "https://www.biodiversarium.fr/fr/biodiversarium/aquarium.html",
        "gpsConfidence": "official-coordinate",
        "access": "Horaires d’ouverture à vérifier ; étape jouable depuis l’extérieur si fermé.",
        "season": "Toute l’année selon horaires.",
        "photoBonus": true,
        "choices": [
          "Méditerranée",
          "Atlantique Nord",
          "Amazonie",
          "Arctique"
        ],
        "interaction": "choice",
        "audience": {
          "enfant": {
            "q": "L’aquarium présente surtout la vie de quelle mer ?",
            "choices": [
              "Méditerranée",
              "Atlantique",
              "Mer du Nord"
            ],
            "answers": [
              "mediterranee",
              "méditerranée"
            ],
            "interaction": "choice",
            "hint": "C’est la mer devant Banyuls.",
            "hint2": "Le bassin étudié ici est la Méditerranée."
          },
          "adulte": {
            "q": "À partir du contenu de l’aquarium, identifie le bassin marin étudié localement.",
            "answers": [
              "mediterranee",
              "méditerranée",
              "la mediterranee",
              "la méditerranée"
            ],
            "interaction": "text",
            "hint": "Le territoire donne la réponse, mais vérifie-la sur place.",
            "hint2": "Le bassin étudié ici est la Méditerranée."
          },
          "ado": {
            "q": "Quel grand milieu régional est au cœur de l’aquarium scientifique de Banyuls ?",
            "answers": [
              "mediterranee",
              "méditerranée"
            ],
            "choices": [
              "Méditerranée",
              "Atlantique Nord",
              "Amazonie",
              "Arctique"
            ],
            "interaction": "choice",
            "hint": "Regarde les espèces et la présentation du lieu.",
            "hint2": "Le bassin étudié ici est la Méditerranée."
          }
        },
        "locationMode": "gps",
        "hint2": "Le bassin étudié ici est la Méditerranée.",
        "id": "nature-s01",
        "routeInstruction": "Rejoins ce repère par l’espace public en respectant la signalisation et les accès autorisés."
      },
      {
        "name": "Observatoire océanologique / Laboratoire Arago",
        "lat": 42.48015,
        "lng": 3.13625,
        "radius": 190,
        "fact": "L’Observatoire océanologique de Banyuls est fondé en 1882. L’aquarium historique créé par Henri de Lacaze-Duthiers ouvre en 1885.",
        "type": "logic",
        "q": "L’Observatoire océanologique est fondé en 1882 ; son aquarium historique ouvre en 1885. Additionne les quatre chiffres de 1885.",
        "answers": [
          "22",
          "vingt deux",
          "vingt-deux"
        ],
        "hint": "1 + 8 + 8 + 5.",
        "token": "",
        "source": "https://www.biodiversarium.fr/fr/biodiversarium/oob.html",
        "gpsConfidence": "official-area",
        "access": "Espace public.",
        "season": "Toute l’année.",
        "photoBonus": false,
        "interaction": "numeric",
        "audience": {
          "enfant": {
            "q": "L’Observatoire date de 1882 et l’ancien aquarium de 1885. Combien font 1 + 8 + 8 + 5 ?",
            "answers": [
              "22",
              "vingt deux",
              "vingt-deux"
            ],
            "interaction": "numeric",
            "hint": "Additionne les chiffres de 1885.",
            "hint2": "Additionne 1 + 8 + 8 + 5."
          },
          "adulte": {
            "q": "Distingue les deux dates : fondation de l’Observatoire en 1882, aquarium historique en 1885. Calcule le checksum de 1885.",
            "answers": [
              "22",
              "vingt deux",
              "vingt-deux"
            ],
            "interaction": "text",
            "hint": "Tu dois obtenir un nombre à deux chiffres.",
            "hint2": "Additionne 1 + 8 + 8 + 5."
          },
          "ado": {
            "q": "L’Observatoire océanologique est fondé en 1882 ; son aquarium historique ouvre en 1885. Additionne les quatre chiffres de 1885.",
            "answers": [
              "22",
              "vingt deux",
              "vingt-deux"
            ],
            "interaction": "numeric",
            "hint": "1 + 8 + 8 + 5.",
            "hint2": "Additionne 1 + 8 + 8 + 5."
          }
        },
        "locationMode": "gps",
        "hint2": "Additionne 1 + 8 + 8 + 5.",
        "id": "nature-s02",
        "routeInstruction": "Rejoins ce repère par l’espace public en respectant la signalisation et les accès autorisés."
      },
      {
        "name": "Port de plaisance",
        "lat": 42.48147,
        "lng": 3.13375,
        "radius": 220,
        "fact": "Le port de Banyuls est dans le Parc naturel marin du golfe du Lion, près de la réserve marine. Il est engagé dans plusieurs démarches environnementales.",
        "type": "observation",
        "q": "Observe les installations : quel mot désigne le bassin aménagé où les bateaux viennent s’amarrer ?",
        "answers": [
          "port",
          "le port"
        ],
        "hint": "Ce n’est pas la plage.",
        "token": "",
        "source": "https://www.banyuls-sur-mer.com/tourisme/decouvrir/le-port/",
        "gpsConfidence": "official-navigation",
        "access": "Espace public, rester dans les zones autorisées.",
        "season": "Toute l’année.",
        "photoBonus": true,
        "interaction": "text",
        "audience": {
          "enfant": {
            "q": "Où les bateaux sont-ils amarrés ?",
            "choices": [
              "Au port",
              "Dans la forêt",
              "Sur la route"
            ],
            "answers": [
              "port",
              "le port",
              "au port"
            ],
            "interaction": "choice",
            "hint": "Regarde les pontons.",
            "hint2": "Le mot recherché désigne le bassin aménagé avec pontons et amarres."
          },
          "adulte": {
            "q": "Nomme l’infrastructure nautique organisée autour des pontons et des amarres.",
            "answers": [
              "port",
              "le port",
              "port de plaisance"
            ],
            "interaction": "text",
            "hint": "Observe avant de répondre.",
            "hint2": "Le mot recherché désigne le bassin aménagé avec pontons et amarres."
          },
          "ado": {
            "q": "Observe les installations : quel mot désigne le bassin aménagé où les bateaux viennent s’amarrer ?",
            "answers": [
              "port",
              "le port"
            ],
            "interaction": "text",
            "hint": "Ce n’est pas la plage.",
            "hint2": "Le mot recherché désigne le bassin aménagé avec pontons et amarres."
          }
        },
        "locationMode": "gps",
        "hint2": "Le mot recherché désigne le bassin aménagé avec pontons et amarres.",
        "id": "nature-s03",
        "routeInstruction": "Rejoins ce repère par l’espace public en respectant la signalisation et les accès autorisés."
      },
      {
        "name": "Plage centrale / Fontaulé",
        "lat": 42.48355,
        "lng": 3.13055,
        "radius": 220,
        "fact": "La plage centrale de Fontaulé est une plage de galets au cœur du village, face aux arcades.",
        "type": "observation",
        "q": "Observe directement le rivage de Fontaulé : quelle matière domine sous tes pieds ?",
        "answers": [
          "galets",
          "galet"
        ],
        "hint": "Regarde le sol, pas l’écran.",
        "token": "",
        "source": "https://www.banyuls-sur-mer.com/tourisme/decouvrir/banyuls-la-mer-et-ses-tresors/incontournables-de-la-mediterranee/les-plages-de-banyuls/",
        "gpsConfidence": "official-area",
        "access": "Plage publique ; tenir compte de la météo et de la mer.",
        "season": "Toute l’année.",
        "photoBonus": true,
        "interaction": "choice",
        "choices": [
          "Galets",
          "Sable fin",
          "Herbe",
          "Bois"
        ],
        "audience": {
          "enfant": {
            "q": "Sur quoi marches-tu surtout ?",
            "choices": [
              "Galets",
              "Sable fin",
              "Herbe"
            ],
            "answers": [
              "galets",
              "galet"
            ],
            "interaction": "choice",
            "hint": "Regarde sous tes pieds.",
            "hint2": "Observe directement le sol de la plage : ce sont des galets."
          },
          "adulte": {
            "q": "Sans te fier au nom de la plage, caractérise le matériau dominant du rivage en un mot.",
            "answers": [
              "galets",
              "galet"
            ],
            "interaction": "text",
            "hint": "La réponse est littéralement au sol.",
            "hint2": "Observe directement le sol de la plage : ce sont des galets."
          },
          "ado": {
            "q": "Observe directement le rivage de Fontaulé : quelle matière domine sous tes pieds ?",
            "answers": [
              "galets",
              "galet"
            ],
            "choices": [
              "Galets",
              "Sable fin",
              "Herbe",
              "Bois"
            ],
            "interaction": "choice",
            "hint": "Regarde le sol, pas l’écran.",
            "hint2": "Observe directement le sol de la plage : ce sont des galets."
          }
        },
        "locationMode": "gps",
        "hint2": "Observe directement le sol de la plage : ce sont des galets.",
        "id": "nature-s04",
        "routeInstruction": "Rejoins ce repère par l’espace public en respectant la signalisation et les accès autorisés."
      },
      {
        "name": "Plage du Troc",
        "lat": 42.4724,
        "lng": 3.142,
        "radius": 350,
        "fact": "Le secteur du Troc se trouve sur le littoral au sud de Banyuls, en direction de la réserve marine.",
        "type": "riddle",
        "q": "À partir du Troc, quel type de sentier suis-tu jusqu’à Peyrefite ?",
        "answers": [
          "sentier littoral",
          "littoral"
        ],
        "hint": "Il suit la côte.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/e-12-sentier-littoral-guide-oti-plage-du-troc-banyuls-sur-mer-plage-de-peyrefite/",
        "gpsConfidence": "navigation-zone",
        "access": "Sentier : chaussures adaptées, eau et prudence.",
        "season": "Éviter fortes chaleurs, vent violent ou intempéries.",
        "photoBonus": true,
        "locationMode": "trail",
        "routeInstruction": "Rejoins la plage du Troc puis engage-toi uniquement sur le sentier littoral officiel en direction de Peyrefite. Suis le balisage et les éventuelles déviations sur place.",
        "interaction": "choice",
        "choices": [
          "Sentier littoral",
          "Voie ferrée",
          "Canal",
          "Piste cyclable"
        ],
        "audience": {
          "enfant": {
            "q": "Quel sentier suis-tu le long de la mer ?",
            "choices": [
              "Sentier littoral",
              "Canal",
              "Autoroute"
            ],
            "answers": [
              "sentier littoral",
              "littoral"
            ],
            "interaction": "choice",
            "hint": "Il longe le littoral.",
            "hint2": "Le nom officiel de l’itinéraire contient le mot « littoral »."
          },
          "adulte": {
            "q": "Identifie la nature officielle de l’itinéraire emprunté entre le Troc et Peyrefite.",
            "answers": [
              "sentier littoral",
              "littoral"
            ],
            "interaction": "text",
            "hint": "Le nom figure sur la fiche du parcours.",
            "hint2": "Le nom officiel de l’itinéraire contient le mot « littoral »."
          },
          "ado": {
            "q": "À partir du Troc, quel type de sentier suis-tu jusqu’à Peyrefite ?",
            "answers": [
              "sentier littoral",
              "littoral"
            ],
            "choices": [
              "Sentier littoral",
              "Voie ferrée",
              "Canal",
              "Piste cyclable"
            ],
            "interaction": "choice",
            "hint": "Il suit la côte.",
            "hint2": "Le nom officiel de l’itinéraire contient le mot « littoral »."
          }
        },
        "hint2": "Le nom officiel de l’itinéraire contient le mot « littoral ».",
        "id": "nature-s05"
      },
      {
        "name": "Cap Rédéris / belvédère",
        "lat": 42.4558,
        "lng": 3.1578,
        "radius": 650,
        "fact": "Le Cap Rédéris offre un vaste panorama sur la Côte Vermeille et le secteur de la réserve marine.",
        "type": "riddle",
        "q": "Au Cap Rédéris, quel équipement aide à nommer les éléments du panorama ?",
        "answers": [
          "table dorientation",
          "table d orientation",
          "table d’orientation"
        ],
        "hint": "On y lit les noms du paysage.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/e-12-sentier-littoral-guide-oti-plage-du-troc-banyuls-sur-mer-plage-de-peyrefite/",
        "gpsConfidence": "navigation-zone",
        "access": "Belvédère / route : rester hors chaussée et respecter les accès.",
        "season": "Toute l’année selon météo.",
        "photoBonus": true,
        "locationMode": "trail",
        "routeInstruction": "Poursuis sur le sentier officiel jusqu’au secteur du Cap Rédéris et de sa table d’orientation. Ne quitte pas le tracé balisé.",
        "interaction": "text",
        "audience": {
          "enfant": {
            "q": "Quel panneau permet de lire le panorama ?",
            "choices": [
              "Table d’orientation",
              "Feu tricolore",
              "Panneau publicitaire"
            ],
            "answers": [
              "table dorientation",
              "table d orientation",
              "table d’orientation"
            ],
            "interaction": "choice",
            "hint": "Il est fait pour s’orienter.",
            "hint2": "L’équipement porte le mot « orientation »."
          },
          "adulte": {
            "q": "Nomme précisément l’équipement de belvédère qui transforme le panorama en carte lisible.",
            "answers": [
              "table dorientation",
              "table d orientation",
              "table d’orientation"
            ],
            "interaction": "text",
            "hint": "Deux mots.",
            "hint2": "L’équipement porte le mot « orientation »."
          },
          "ado": {
            "q": "Au Cap Rédéris, quel équipement aide à nommer les éléments du panorama ?",
            "answers": [
              "table dorientation",
              "table d orientation",
              "table d’orientation"
            ],
            "interaction": "text",
            "hint": "On y lit les noms du paysage.",
            "hint2": "L’équipement porte le mot « orientation »."
          }
        },
        "hint2": "L’équipement porte le mot « orientation ».",
        "id": "nature-s06"
      },
      {
        "name": "Réserve marine Cerbère-Banyuls",
        "lat": 42.453,
        "lng": 3.163,
        "radius": 800,
        "fact": "Créée en 1974, la Réserve naturelle nationale marine de Cerbère-Banyuls couvre 650 hectares et s’étend sur environ 7 km de littoral, de l’île Grosse au cap de Peyrefite.",
        "type": "multi",
        "q": "Sélectionne les TROIS informations correctes sur la Réserve marine Cerbère-Banyuls.",
        "answers": [
          "creee en 1974 + environ 650 hectares + environ 7 km de littoral"
        ],
        "hint": "Trois chiffres structurent la fiche de la réserve : une année, une surface et une longueur.",
        "token": "",
        "source": "https://www.reserves-naturelles-catalanes.org/les-reserves/reserve-naturelle-de-cerbere-banyuls/",
        "gpsConfidence": "official-area",
        "access": "Respect absolu de la réglementation de la réserve.",
        "season": "Toute l’année ; activités nautiques selon réglementation.",
        "photoBonus": false,
        "choices": [
          "Créée en 1974",
          "Environ 650 hectares",
          "Environ 7 km de littoral",
          "Créée en 2004",
          "Plus de 5 000 hectares"
        ],
        "locationMode": "trail",
        "routeInstruction": "Continue vers la réserve marine en respectant la signalisation, les propriétés et les zones protégées.",
        "interaction": "multi",
        "multiAnswers": [
          "Créée en 1974",
          "Environ 650 hectares",
          "Environ 7 km de littoral"
        ],
        "audience": {
          "enfant": {
            "q": "Choisis les TROIS bonnes informations sur la réserve.",
            "choices": [
              "Créée en 1974",
              "Environ 650 hectares",
              "Environ 7 km de littoral",
              "Créée en 2004",
              "Plus de 5 000 hectares"
            ],
            "multiAnswers": [
              "Créée en 1974",
              "Environ 650 hectares",
              "Environ 7 km de littoral"
            ],
            "answers": [
              "creee en 1974 + environ 650 hectares + environ 7 km de littoral"
            ],
            "interaction": "multi",
            "hint": "Il y a exactement trois bonnes réponses.",
            "hint2": "Les trois valeurs sont 1974, environ 650 hectares et environ 7 km de littoral."
          },
          "adulte": {
            "q": "Croise la signalétique et le journal de mission : sélectionne les trois valeurs qui décrivent réellement la réserve.",
            "choices": [
              "Créée en 1974",
              "Environ 650 hectares",
              "Environ 7 km de littoral",
              "Créée en 2004",
              "Plus de 5 000 hectares"
            ],
            "multiAnswers": [
              "Créée en 1974",
              "Environ 650 hectares",
              "Environ 7 km de littoral"
            ],
            "answers": [
              "creee en 1974 + environ 650 hectares + environ 7 km de littoral"
            ],
            "interaction": "text",
            "hint": "Écarte les deux ordres de grandeur incohérents.",
            "hint2": "Les trois valeurs sont 1974, environ 650 hectares et environ 7 km de littoral."
          },
          "ado": {
            "q": "Sélectionne les TROIS informations correctes sur la Réserve marine Cerbère-Banyuls.",
            "answers": [
              "creee en 1974 + environ 650 hectares + environ 7 km de littoral"
            ],
            "choices": [
              "Créée en 1974",
              "Environ 650 hectares",
              "Environ 7 km de littoral",
              "Créée en 2004",
              "Plus de 5 000 hectares"
            ],
            "interaction": "multi",
            "hint": "Trois chiffres structurent la fiche de la réserve : une année, une surface et une longueur.",
            "hint2": "Les trois valeurs sont 1974, environ 650 hectares et environ 7 km de littoral."
          }
        },
        "hint2": "Les trois valeurs sont 1974, environ 650 hectares et environ 7 km de littoral.",
        "id": "nature-s07"
      },
      {
        "name": "Peyrefite / sentier sous-marin",
        "lat": 42.4409,
        "lng": 3.166,
        "radius": 600,
        "fact": "Le sentier sous-marin de Peyrefite mesure 250 m et comporte 5 stations d’observation : galets, herbier de Posidonie, blocs, failles et tombants.",
        "type": "sequence",
        "q": "Le sentier sous-marin comporte 5 stations. Remets-les dans l’ordre annoncé par la réserve.",
        "answers": [
          "galets > herbier de posidonie > blocs > failles > tombants"
        ],
        "hint": "Le parcours part du rivage puis gagne des reliefs sous-marins plus marqués.",
        "token": "",
        "source": "https://www.reserves-naturelles-catalanes.org/decouvrir/les-sentiers-et-guides-de-decouverte/sentier-sous-marin/",
        "gpsConfidence": "official-area",
        "access": "Accès au sentier sous-marin uniquement selon période, météo et réglementation.",
        "season": "Sentier sous-marin : généralement juin à septembre ; vérifier avant départ.",
        "photoBonus": false,
        "locationMode": "trail",
        "routeInstruction": "Termine la traversée vers Peyrefite. L’accès aux activités nautiques dépend de la saison, de la météo et de la réglementation.",
        "interaction": "sequence",
        "choices": [
          "Galets",
          "Herbier de Posidonie",
          "Blocs",
          "Failles",
          "Tombants"
        ],
        "sequence": [
          "Galets",
          "Herbier de Posidonie",
          "Blocs",
          "Failles",
          "Tombants"
        ],
        "audience": {
          "enfant": {
            "q": "Touche les 5 milieux dans l’ordre du sentier sous-marin.",
            "choices": [
              "Galets",
              "Herbier de Posidonie",
              "Blocs",
              "Failles",
              "Tombants"
            ],
            "sequence": [
              "Galets",
              "Herbier de Posidonie",
              "Blocs",
              "Failles",
              "Tombants"
            ],
            "answers": [
              "galets > herbier de posidonie > blocs > failles > tombants"
            ],
            "interaction": "sequence",
            "hint": "Commence par les galets.",
            "hint2": "L’ordre commence par galets, puis herbier de posidonie."
          },
          "adulte": {
            "q": "Reconstitue l’ordre exact des cinq stations officielles du sentier sous-marin de Peyrefite.",
            "choices": [
              "Galets",
              "Herbier de Posidonie",
              "Blocs",
              "Failles",
              "Tombants"
            ],
            "sequence": [
              "Galets",
              "Herbier de Posidonie",
              "Blocs",
              "Failles",
              "Tombants"
            ],
            "answers": [
              "galets > herbier de posidonie > blocs > failles > tombants"
            ],
            "interaction": "text",
            "hint": "Pense à une progression depuis le bord vers des reliefs plus complexes.",
            "hint2": "L’ordre commence par galets, puis herbier de posidonie."
          },
          "ado": {
            "q": "Le sentier sous-marin comporte 5 stations. Remets-les dans l’ordre annoncé par la réserve.",
            "answers": [
              "galets > herbier de posidonie > blocs > failles > tombants"
            ],
            "choices": [
              "Galets",
              "Herbier de Posidonie",
              "Blocs",
              "Failles",
              "Tombants"
            ],
            "interaction": "sequence",
            "hint": "Le parcours part du rivage puis gagne des reliefs sous-marins plus marqués.",
            "hint2": "L’ordre commence par galets, puis herbier de posidonie."
          }
        },
        "hint2": "L’ordre commence par galets, puis herbier de posidonie.",
        "id": "nature-s08"
      }
    ],
    "lastVerified": "2026-09-09",
    "sourceSummary": "https://www.banyuls-sur-mer.com/tourisme/decouvrir/un-musee-a-ciel-ouvert/",
    "safety": "Sentier littoral difficile : chaussures adaptées, eau, protection solaire, prudence au vent et aux passages exposés. Reste sur le chemin autorisé et respecte toute déviation ou fermeture. Vérifie le risque incendie avant le départ.",
    "offline": true,
    "territoryId": "banyuls",
    "route": {
      "level": "difficile",
      "levelLabel": "Difficile",
      "distanceKm": 4.5,
      "distanceLabel": "4,5 km sur le tronçon Troc → Peyrefite + approche urbaine",
      "walkTime": "2 h depuis le Troc jusqu’à Peyrefite + approche urbaine",
      "gameTime": "3 h 30 – 5 h selon le rythme et les arrêts",
      "ascentM": 232,
      "descentM": 260,
      "altMaxM": 104,
      "effort": null,
      "technical": null,
      "risk": null,
      "surface": "Sentier littoral rocheux, passages exposés, portions urbaines au départ",
      "accessibility": "Non PMR sur le tronçon littoral",
      "metricsStatus": "official-segment",
      "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/e-12-sentier-littoral-guide-oti-plage-du-troc-banyuls-sur-mer-plage-de-peyrefite/",
      "note": "Les 4,5 km / +232 m / -260 m / 2 h correspondent au tronçon officiel Troc → Peyrefite. L’approche depuis le centre de Banyuls doit encore être mesurée comme parcours Explor’Action complet.",
      "playerDistance": "4,5 km (Troc → Peyrefite)",
      "playerAscent": "+232 m",
      "playerWalk": "2 h sur le tronçon officiel",
      "playerTerrain": "Sentier littoral rocheux",
      "playerNote": "Le tronçon officiel Troc → Peyrefite fait 4,5 km, +232 m / −260 m, 2 h et est classé difficile. L’approche urbaine depuis Banyuls s’ajoute à ces chiffres. Le tracé officiel mentionne des points comme le Dôme, les vignes, la table d’orientation du Cap Rédéris et la Pedra Dreta. Vérifie les éventuelles déviations avant de partir.",
      "routeType": "Traversée",
      "officialBasis": "Sentier littoral Troc → Peyrefite"
    },
    "teaser": "Une balise scientifique a cessé de transmettre. Du laboratoire Arago à Peyrefite, récupère huit données pour comprendre ce que protège la côte.",
    "briefing": "Une balise fictive de suivi de la biodiversité a cessé de transmettre après une série de relevés incomplets. Les données sont dispersées entre le Biodiversarium, le port, le littoral et la réserve marine. Du centre de Banyuls à Peyrefite, avance prudemment, lis le terrain et reconstitue le message scientifique.",
    "objective": "Récupérer les données, débloquer trois cartes-indices et identifier l’écosystème-clé du message final.",
    "ending": "POSIDONIE. La balise est restaurée : l’herbier rappelle que la Méditerranée n’est pas seulement un décor, mais un milieu vivant suivi, étudié et protégé.",
    "territoryFragment": "Mer",
    "cardTerrain": "Sentier littoral • roche & passages exposés",
    "cardTime": "≈ 3 h 30 à 5 h avec le jeu",
    "playerMetrics": [
      [
        "🥾",
        "4,5 km officiels Troc → Peyrefite"
      ],
      [
        "↗",
        "+232 m / −260 m"
      ],
      [
        "⏱",
        "2 h de marche sur le tronçon"
      ]
    ],
    "storyBeats": [
      {
        "title": "Le signal revient",
        "text": "La balise fictive se rallume au Biodiversarium : l’aventure commence par la biodiversité réellement étudiée à Banyuls."
      },
      {
        "title": "1885",
        "text": "1885 rappelle que l’observation scientifique de la mer s’inscrit ici dans une histoire longue."
      },
      {
        "title": "L’interface humaine",
        "text": "Au port, la mission rencontre les usages humains de la Méditerranée. Science et activités maritimes partagent le même littoral."
      },
      {
        "title": "Le rivage change",
        "text": "À Fontaulé, un simple changement de sol oblige à revenir au terrain : les galets deviennent une donnée."
      },
      {
        "title": "Le sentier prend le relais",
        "text": "Au Troc, la sortie devient une vraie randonnée. Le téléphone n’est plus le guide principal : le sentier, le balisage et ta prudence prennent le relais."
      },
      {
        "title": "Lire le cap",
        "text": "Le Cap Rédéris élargit la lecture. Une table d’orientation permet de relier relief, côte et position."
      },
      {
        "title": "Protéger par des règles",
        "text": "La réserve marine montre que protéger un milieu passe aussi par des règles, des limites et des chiffres précis."
      },
      {
        "title": "Cinq mondes sous la surface",
        "text": "À Peyrefite, les cinq stations du sentier sous-marin révèlent une succession de milieux. La donnée finale n’est plus un mot isolé : c’est un écosystème."
      }
    ],
    "playerStatus": "playable-test",
    "scenarioDisclaimer": "Histoire de jeu fictive ; faits patrimoniaux, artistiques, naturels et données de randonnée documentés séparément.",
    "finalPrompt": "Au sentier sous-marin, quelle plante marine forme l’herbier de la deuxième station et devient le mot-clé du message restauré ?",
    "clueCards": [
      {
        "unlockAt": 3,
        "title": "Carte 1 — Observer pour comprendre",
        "text": "À Banyuls, la mer est étudiée depuis longtemps : l’aventure relie science, usages humains et biodiversité."
      },
      {
        "unlockAt": 6,
        "title": "Carte 2 — Le littoral change",
        "text": "Galets, sentier, relief et panorama rappellent que la côte est une succession de milieux, pas un décor uniforme."
      },
      {
        "unlockAt": 8,
        "title": "Carte 3 — Un herbier sous la mer",
        "text": "La deuxième station du sentier sous-marin porte le nom d’une plante marine qui forme de véritables herbiers."
      }
    ],
    "sourceCheckedAt": "2026-09-10",
    "fieldValidation": "monitoring-required",
    "validationTier": "ready-application-test"
  },
  {
    "id": "pv-sentinelles-port",
    "icon": "⚓",
    "title": "Les Sentinelles du Port",
    "tag": "Port • Fortifications • Histoire maritime",
    "duration": "1 h 30 de marche officielle • ≈ 2 h 30 – 3 h avec le jeu",
    "difficulty": "Facile",
    "story": "Un ancien registre de signaux a perdu sa légende. Pour le relire, il faut suivre le port et comprendre comment navigation, défense et architecture se répondent.",
    "final": "SENTINELLE",
    "steps": [
      {
        "name": "Gare de Port-Vendres — départ",
        "fact": "Le circuit pédestre officiel « Port-Vendres à travers l’histoire » part de la gare, suit l’avenue Demonte puis descend vers les quais.",
        "type": "sequence",
        "q": "Replace ces trois premiers repères dans l’ordre du circuit officiel.",
        "answers": [
          "gare > avenue demonte > quais"
        ],
        "hint": "Le circuit commence à la gare.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/port-vendres-a-travers-lhistoire/",
        "gpsConfidence": "documented-work-coordinate",
        "access": "Extérieur / espace public ou observation depuis l’espace public.",
        "season": "Toute l’année, sous réserve des conditions locales et des éventuelles fermetures.",
        "photoBonus": false,
        "expertBonus": "Observe le lieu réel et vérifie le repère avant de répondre.",
        "interaction": "sequence",
        "locationMode": "trail",
        "hint2": "Gare → avenue Demonte → quais.",
        "choices": [
          "Gare",
          "Avenue Demonte",
          "Quais"
        ],
        "sequence": [
          "Gare",
          "Avenue Demonte",
          "Quais"
        ],
        "routeInstruction": "Départ à la gare. Suis l’avenue Demonte puis les indications officielles jusqu’aux quais.",
        "audience": {
          "enfant": {
            "q": "Commence par la gare puis touche les deux repères suivants dans le bon ordre.",
            "answers": [
              "gare > avenue demonte > quais"
            ],
            "interaction": "sequence",
            "choices": [
              "Gare",
              "Avenue Demonte",
              "Quais"
            ],
            "sequence": [
              "Gare",
              "Avenue Demonte",
              "Quais"
            ],
            "hint": "Le départ est la gare.",
            "hint2": "Gare → avenue Demonte → quais."
          },
          "adulte": {
            "q": "Reconstitue sans aide le premier enchaînement du tracé officiel.",
            "answers": [
              "gare > avenue demonte > quais"
            ],
            "interaction": "text",
            "choices": [
              "Gare",
              "Avenue Demonte",
              "Quais"
            ],
            "sequence": [
              "Gare",
              "Avenue Demonte",
              "Quais"
            ],
            "hint": "Le départ est la gare.",
            "hint2": "Gare → avenue Demonte → quais."
          },
          "ado": {
            "q": "Replace ces trois premiers repères dans l’ordre du circuit officiel.",
            "answers": [
              "gare > avenue demonte > quais"
            ],
            "choices": [
              "Gare",
              "Avenue Demonte",
              "Quais"
            ],
            "interaction": "sequence",
            "hint": "Le circuit commence à la gare.",
            "hint2": "Gare → avenue Demonte → quais."
          }
        },
        "validationFocus": "Confirmer sur place le point exact de lancement et la lisibilité du premier cheminement.",
        "id": "pv-sentinelles-port-s01"
      },
      {
        "name": "Quais — goélette Miguel Caldentey",
        "fact": "La goélette Miguel Caldentey, construite en 1913 et classée Monument Historique, est accueillie à Port-Vendres depuis 2020 ; elle a assuré du transport marchand entre plusieurs ports méditerranéens.",
        "type": "choice",
        "q": "Sur les quais, quel type de navire est le Miguel Caldentey ?",
        "answers": [
          "goelette",
          "goélette",
          "Une goélette"
        ],
        "hint": "Regarde sa silhouette et le panneau patrimonial s’il est accessible.",
        "token": "",
        "source": "https://www.port-vendres.com/port-vendres-et-vous/patrimoine",
        "gpsConfidence": "documented-work-coordinate",
        "access": "Extérieur / espace public ou observation depuis l’espace public.",
        "season": "Toute l’année, sous réserve des conditions locales et des éventuelles fermetures.",
        "photoBonus": false,
        "expertBonus": "Observe le lieu réel et vérifie le repère avant de répondre.",
        "interaction": "choice",
        "locationMode": "trail",
        "hint2": "C’est un voilier de commerce : une goélette.",
        "choices": [
          "Une goélette",
          "Un chalutier",
          "Un remorqueur",
          "Un ferry"
        ],
        "routeInstruction": "Une fois sur les quais, repère le Miguel Caldentey depuis l’espace public sans entrer dans une zone portuaire interdite.",
        "audience": {
          "enfant": {
            "q": "Quel est le bon nom pour ce grand voilier : goélette, ferry ou remorqueur ?",
            "answers": [
              "goelette",
              "goélette",
              "Une goélette"
            ],
            "interaction": "choice",
            "choices": [
              "Une goélette",
              "Un chalutier",
              "Un remorqueur",
              "Un ferry"
            ],
            "hint": "C’est un voilier.",
            "hint2": "Le mot recherché est « goélette »."
          },
          "adulte": {
            "q": "Identifie la catégorie du Miguel Caldentey avant de lire la découverte.",
            "answers": [
              "goelette",
              "goélette",
              "Une goélette"
            ],
            "interaction": "text",
            "choices": [
              "Une goélette",
              "Un chalutier",
              "Un remorqueur",
              "Un ferry"
            ],
            "hint": "C’est un voilier.",
            "hint2": "Le mot recherché est « goélette »."
          },
          "ado": {
            "q": "Sur les quais, quel type de navire est le Miguel Caldentey ?",
            "answers": [
              "goelette",
              "goélette",
              "Une goélette"
            ],
            "choices": [
              "Une goélette",
              "Un chalutier",
              "Un remorqueur",
              "Un ferry"
            ],
            "interaction": "choice",
            "hint": "Regarde sa silhouette et le panneau patrimonial s’il est accessible.",
            "hint2": "C’est un voilier de commerce : une goélette."
          }
        },
        "validationFocus": "Vérifier sa présence/visibilité habituelle depuis le parcours ; prévoir une variante si le navire est déplacé.",
        "id": "pv-sentinelles-port-s02"
      },
      {
        "name": "Redoute du Fanal",
        "fact": "Le Fort Fanal fait partie des ouvrages destinés à défendre l’entrée du port ; la commune indique une construction en 1693 dans le système de fortification attribué à Vauban.",
        "type": "choice",
        "q": "Quelle fonction correspond le mieux à ce poste placé à l’entrée du port ?",
        "answers": [
          "defendre l entree du port",
          "défendre l entrée du port",
          "defense du port",
          "défense du port"
        ],
        "hint": "Observe sa position par rapport au chenal.",
        "token": "",
        "source": "https://www.port-vendres.com/actualites/1956-le-fort-fanal-desormais-propriete-de-la-commune-de-port-vendres",
        "gpsConfidence": "documented-work-coordinate-field-calibration-required",
        "access": "Extérieur / espace public ou observation depuis l’espace public.",
        "season": "Toute l’année, sous réserve des conditions locales et des éventuelles fermetures.",
        "photoBonus": false,
        "expertBonus": "Observe le lieu réel et vérifie le repère avant de répondre.",
        "interaction": "choice",
        "locationMode": "gps",
        "hint2": "Sa position en fait un ouvrage de défense de l’entrée du port.",
        "choices": [
          "Défendre l’entrée du port",
          "Stocker le vin",
          "Servir de gare",
          "Abriter un marché"
        ],
        "routeInstruction": "Depuis l’église et la rue du Soleil, suis l’itinéraire officiel vers la statue de la Vierge et la redoute du Fanal.",
        "lat": 42.521278,
        "lng": 3.113583,
        "radius": 120,
        "coordinateSource": "https://www.wikidata.org/wiki/Wikidata:WikiProject_Lighthouses/lists/lighthouses_by_country/France",
        "audience": {
          "enfant": {
            "q": "À quoi servait surtout ce fort : protéger l’entrée du port ou stocker du vin ?",
            "answers": [
              "defendre l entree du port",
              "défendre l entrée du port",
              "defense du port",
              "défense du port"
            ],
            "interaction": "choice",
            "choices": [
              "Défendre l’entrée du port",
              "Stocker le vin",
              "Servir de gare",
              "Abriter un marché"
            ],
            "hint": "Regarde le chenal.",
            "hint2": "Il surveille l’entrée du port."
          },
          "adulte": {
            "q": "Déduis de sa position la fonction stratégique principale du Fanal.",
            "answers": [
              "defendre l entree du port",
              "défendre l entrée du port",
              "defense du port",
              "défense du port"
            ],
            "interaction": "text",
            "choices": [
              "Défendre l’entrée du port",
              "Stocker le vin",
              "Servir de gare",
              "Abriter un marché"
            ],
            "hint": "Regarde le chenal.",
            "hint2": "Il surveille l’entrée du port."
          },
          "ado": {
            "q": "Quelle fonction correspond le mieux à ce poste placé à l’entrée du port ?",
            "answers": [
              "defendre l entree du port",
              "défendre l entrée du port",
              "defense du port",
              "défense du port"
            ],
            "choices": [
              "Défendre l’entrée du port",
              "Stocker le vin",
              "Servir de gare",
              "Abriter un marché"
            ],
            "interaction": "choice",
            "hint": "Observe sa position par rapport au chenal.",
            "hint2": "Sa position en fait un ouvrage de défense de l’entrée du port."
          }
        },
        "validationFocus": "Relever GNSS multi-téléphones, accès exact au point public, rayon et éventuelle impossibilité d’approcher la redoute.",
        "id": "pv-sentinelles-port-s03"
      },
      {
        "name": "Batterie de la Mauresque",
        "fact": "Le tracé officiel poursuit le sentier littoral du Fanal jusqu’à la batterie de la Mauresque avant de redescendre vers le cimetière.",
        "type": "text",
        "q": "Après le Fanal, quel repère défensif vient avant le cimetière sur le parcours officiel ?",
        "answers": [
          "batterie de la mauresque",
          "la mauresque",
          "mauresque"
        ],
        "hint": "Le nom contient « Mauresque ».",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/port-vendres-a-travers-lhistoire/",
        "gpsConfidence": "documented-work-coordinate",
        "access": "Extérieur / espace public ou observation depuis l’espace public.",
        "season": "Toute l’année, sous réserve des conditions locales et des éventuelles fermetures.",
        "photoBonus": false,
        "expertBonus": "Observe le lieu réel et vérifie le repère avant de répondre.",
        "interaction": "text",
        "locationMode": "trail",
        "hint2": "Il s’agit de la batterie de la Mauresque.",
        "routeInstruction": "Reviens sur le sentier littoral balisé en jaune et suis-le jusqu’à la batterie de la Mauresque. Reste sur le chemin autorisé.",
        "audience": {
          "enfant": {
            "q": "Quel lieu vient maintenant : la batterie de la Mauresque ou l’Obélisque ?",
            "answers": [
              "batterie de la mauresque",
              "la mauresque",
              "mauresque"
            ],
            "interaction": "choice",
            "choices": [
              "Batterie de la Mauresque",
              "Obélisque",
              "Gare"
            ],
            "hint": "Le nom contient « Mauresque ».",
            "hint2": "C’est la batterie de la Mauresque."
          },
          "adulte": {
            "q": "Nomme le repère militaire qui précède le cimetière dans l’ordre de marche.",
            "answers": [
              "batterie de la mauresque",
              "la mauresque",
              "mauresque"
            ],
            "interaction": "text",
            "choices": [
              "Batterie de la Mauresque",
              "Obélisque",
              "Gare"
            ],
            "hint": "Le nom contient « Mauresque ».",
            "hint2": "C’est la batterie de la Mauresque."
          },
          "ado": {
            "q": "Après le Fanal, quel repère défensif vient avant le cimetière sur le parcours officiel ?",
            "answers": [
              "batterie de la mauresque",
              "la mauresque",
              "mauresque"
            ],
            "interaction": "text",
            "hint": "Le nom contient « Mauresque ».",
            "hint2": "Il s’agit de la batterie de la Mauresque."
          }
        },
        "validationFocus": "Vérifier le balisage, l’état du sentier, les protections et l’endroit précis où une confirmation terrain est sûre.",
        "id": "pv-sentinelles-port-s04"
      },
      {
        "name": "Le Dôme et la place royale",
        "fact": "L’ensemble architectural de la place royale associe notamment l’Obélisque à l’ancienne caserne du Fer à Cheval, dont le Dôme est l’élément central conservé.",
        "type": "multi",
        "q": "Sélectionne les deux éléments qui appartiennent au même ensemble architectural ici.",
        "answers": [
          "le dome + l obelisque"
        ],
        "hint": "Les deux sont visibles autour de la même place.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/site-culturel/lensemble-architectural-de-lobelisque-le-dome-ses-jardins/",
        "gpsConfidence": "documented-work-coordinate",
        "access": "Extérieur / espace public ou observation depuis l’espace public.",
        "season": "Toute l’année, sous réserve des conditions locales et des éventuelles fermetures.",
        "photoBonus": false,
        "expertBonus": "Observe le lieu réel et vérifie le repère avant de répondre.",
        "interaction": "multi",
        "locationMode": "trail",
        "hint2": "Sélectionne Le Dôme et L’Obélisque.",
        "choices": [
          "Le Dôme",
          "L’Obélisque",
          "Le Fort Saint-Elme",
          "La Tour de la Massane"
        ],
        "multiAnswers": [
          "Le Dôme",
          "L’Obélisque"
        ],
        "routeInstruction": "Depuis le cimetière, suis l’avenue Jean Villa jusqu’au Dôme puis longe la place de l’Obélisque.",
        "audience": {
          "enfant": {
            "q": "Choisis les deux monuments qui vont ensemble sur cette place.",
            "choices": [
              "Le Dôme",
              "L’Obélisque",
              "Le Fort Saint-Elme",
              "La Tour de la Massane"
            ],
            "interaction": "multi",
            "answers": [
              "le dome + l obelisque"
            ],
            "hint": "Ils sont juste ici.",
            "hint2": "Le Dôme + L’Obélisque."
          },
          "adulte": {
            "q": "À partir de l’organisation réelle de la place, sélectionne les deux éléments du même ensemble architectural.",
            "choices": [
              "Le Dôme",
              "L’Obélisque",
              "Le Fort Saint-Elme",
              "La Tour de la Massane"
            ],
            "interaction": "text",
            "answers": [
              "le dome + l obelisque"
            ],
            "hint": "Écarte les monuments de Collioure et des Albères.",
            "hint2": "Le Dôme + L’Obélisque."
          },
          "ado": {
            "q": "Sélectionne les deux éléments qui appartiennent au même ensemble architectural ici.",
            "answers": [
              "le dome + l obelisque"
            ],
            "choices": [
              "Le Dôme",
              "L’Obélisque",
              "Le Fort Saint-Elme",
              "La Tour de la Massane"
            ],
            "interaction": "multi",
            "hint": "Les deux sont visibles autour de la même place.",
            "hint2": "Sélectionne Le Dôme et L’Obélisque."
          }
        },
        "validationFocus": "Confirmer que les deux éléments peuvent être lus ensemble depuis une zone piétonne sûre.",
        "id": "pv-sentinelles-port-s05"
      },
      {
        "name": "Obélisque de Port-Vendres",
        "fact": "L’Obélisque, haut de 33 mètres selon l’Office de tourisme, est orné de quatre bas-reliefs en bronze et de quatre trophées allégoriques évoquant les continents connus à l’époque.",
        "type": "numeric",
        "q": "Combien de bas-reliefs en bronze ornent le socle de l’Obélisque ?",
        "answers": [
          "4",
          "quatre"
        ],
        "hint": "Fais le tour visuellement sans entrer dans une zone interdite.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/site-culturel/obelisque/",
        "gpsConfidence": "documented-work-coordinate",
        "access": "Extérieur / espace public ou observation depuis l’espace public.",
        "season": "Toute l’année, sous réserve des conditions locales et des éventuelles fermetures.",
        "photoBonus": false,
        "expertBonus": "Observe le lieu réel et vérifie le repère avant de répondre.",
        "interaction": "numeric",
        "locationMode": "trail",
        "hint2": "Il y en a quatre.",
        "routeInstruction": "Reste sur la place publique et observe l’Obélisque depuis ses abords.",
        "audience": {
          "enfant": {
            "q": "Compte les grands bas-reliefs en bronze : combien y en a-t-il ?",
            "answers": [
              "4",
              "quatre"
            ],
            "interaction": "numeric",
            "hint": "Ils se répartissent autour du socle.",
            "hint2": "La réponse est 4."
          },
          "adulte": {
            "q": "Compte les bas-reliefs en bronze du socle sans utiliser l’indice.",
            "answers": [
              "4",
              "quatre"
            ],
            "interaction": "text",
            "hint": "Ils se répartissent autour du socle.",
            "hint2": "La réponse est 4."
          },
          "ado": {
            "q": "Combien de bas-reliefs en bronze ornent le socle de l’Obélisque ?",
            "answers": [
              "4",
              "quatre"
            ],
            "interaction": "numeric",
            "hint": "Fais le tour visuellement sans entrer dans une zone interdite.",
            "hint2": "Il y en a quatre."
          }
        },
        "validationFocus": "Vérifier qu’ils sont tous clairement observables sans franchir la grille et que les travaux éventuels ne gênent pas.",
        "id": "pv-sentinelles-port-s06"
      },
      {
        "name": "Place Castellane — fermeture de boucle",
        "fact": "Le circuit officiel quitte l’Obélisque par la rue Jules Pams, retrouve les quais, remonte à la place Castellane puis revient à la gare.",
        "type": "sequence",
        "q": "Reconstruis la fin de la boucle dans l’ordre.",
        "answers": [
          "obelisque > rue jules pams > quais > place castellane > gare"
        ],
        "hint": "Après l’Obélisque, la rue Jules Pams redescend vers les quais.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/port-vendres-a-travers-lhistoire/",
        "gpsConfidence": "documented-work-coordinate",
        "access": "Extérieur / espace public ou observation depuis l’espace public.",
        "season": "Toute l’année, sous réserve des conditions locales et des éventuelles fermetures.",
        "photoBonus": false,
        "expertBonus": "Observe le lieu réel et vérifie le repère avant de répondre.",
        "interaction": "sequence",
        "locationMode": "trail",
        "hint2": "Obélisque → Jules Pams → quais → Castellane → gare.",
        "choices": [
          "Obélisque",
          "Rue Jules Pams",
          "Quais",
          "Place Castellane",
          "Gare"
        ],
        "sequence": [
          "Obélisque",
          "Rue Jules Pams",
          "Quais",
          "Place Castellane",
          "Gare"
        ],
        "routeInstruction": "Suis le tracé officiel par la rue Jules Pams, les quais, la place Castellane puis la rue des Paquebots vers la gare.",
        "audience": {
          "enfant": {
            "q": "Remets les cinq derniers lieux dans l’ordre pour rentrer à la gare.",
            "answers": [
              "obelisque > rue jules pams > quais > place castellane > gare"
            ],
            "interaction": "sequence",
            "choices": [
              "Obélisque",
              "Rue Jules Pams",
              "Quais",
              "Place Castellane",
              "Gare"
            ],
            "sequence": [
              "Obélisque",
              "Rue Jules Pams",
              "Quais",
              "Place Castellane",
              "Gare"
            ],
            "hint": "Après l’Obélisque, Jules Pams.",
            "hint2": "Obélisque → Jules Pams → quais → Castellane → gare."
          },
          "adulte": {
            "q": "Reconstitue la fermeture complète de la boucle officielle.",
            "answers": [
              "obelisque > rue jules pams > quais > place castellane > gare"
            ],
            "interaction": "text",
            "choices": [
              "Obélisque",
              "Rue Jules Pams",
              "Quais",
              "Place Castellane",
              "Gare"
            ],
            "sequence": [
              "Obélisque",
              "Rue Jules Pams",
              "Quais",
              "Place Castellane",
              "Gare"
            ],
            "hint": "Après l’Obélisque, Jules Pams.",
            "hint2": "Obélisque → Jules Pams → quais → Castellane → gare."
          },
          "ado": {
            "q": "Reconstruis la fin de la boucle dans l’ordre.",
            "answers": [
              "obelisque > rue jules pams > quais > place castellane > gare"
            ],
            "choices": [
              "Obélisque",
              "Rue Jules Pams",
              "Quais",
              "Place Castellane",
              "Gare"
            ],
            "interaction": "sequence",
            "hint": "Après l’Obélisque, la rue Jules Pams redescend vers les quais.",
            "hint2": "Obélisque → Jules Pams → quais → Castellane → gare."
          }
        },
        "validationFocus": "Tester la traversée finale, les passages piétons et la cohérence du retour à la gare.",
        "id": "pv-sentinelles-port-s07"
      }
    ],
    "lastVerified": "2026-09-09",
    "sourceSummary": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/port-vendres-a-travers-lhistoire/",
    "safety": "Boucle urbaine et littorale : prudence sur les quais, escaliers, traversées et portions de sentier. Suivre le balisage jaune. Ne jamais entrer dans une zone portuaire ou militaire fermée.",
    "offline": true,
    "territoryId": "portvendres",
    "route": {
      "level": "facile",
      "levelLabel": "Facile",
      "distanceKm": 5.4,
      "distanceLabel": "5,4 km",
      "walkTime": "1 h 30",
      "gameTime": "≈ 2 h 30 – 3 h à tester",
      "ascentM": 124,
      "descentM": 124,
      "altMaxM": 35,
      "surface": "Quais, rues, escaliers et sentier littoral balisé",
      "accessibility": "Non qualifiée avant reconnaissance Explor’Action ; présence d’escaliers et de sentier.",
      "metricsStatus": "official-route-field-validation-required",
      "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/port-vendres-a-travers-lhistoire/",
      "note": "Métriques officielles : 5,4 km, +124 m / −124 m, 1 h 30, altitude max. 35 m. Les points de jeu et rayons GPS restent à reconnaître.",
      "playerDistance": "5,4 km",
      "playerAscent": "+124 m / −124 m",
      "playerWalk": "1 h 30 de marche officielle",
      "playerTerrain": "Ville, quais et sentier littoral",
      "playerNote": "Base documentaire officielle. Ne pas publier avant reconnaissance des passages, de la visibilité des ouvrages et des géofences.",
      "routeType": "Boucle",
      "officialBasis": "Port-Vendres – A travers l’histoire"
    },
    "teaser": "Des quais aux ouvrages défensifs, suis une boucle réelle et retrouve le rôle commun des sentinelles du port.",
    "briefing": "Le registre fictif ne se résout pas avec des dates apprises par cœur. Tu vas marcher sur le circuit historique officiel, lire la position des ouvrages, observer les monuments et reconstruire le chemin.",
    "objective": "Valider sept repères, débloquer trois cartes-indices et trouver le mot qui résume la fonction narrative du réseau.",
    "ending": "SENTINELLE. Le port n’est pas un décor figé : il est fait de passages, de protections, de signaux et de mémoires superposées.",
    "territoryFragment": "Signaux",
    "cardTerrain": "Quais • ville • sentier littoral",
    "cardTime": "≈ 2 h 30 – 3 h avec le jeu",
    "playerMetrics": [
      [
        "🥾",
        "5,4 km"
      ],
      [
        "↗",
        "+124 m / −124 m"
      ],
      [
        "⏱",
        "1 h 30 de marche officielle"
      ]
    ],
    "storyBeats": [
      {
        "title": "Le registre s’ouvre",
        "text": "Le circuit part de la gare : le jeu adopte le même ordre que l’itinéraire pédestre officiel."
      },
      {
        "title": "Le port travaille",
        "text": "Le Miguel Caldentey rappelle que Port-Vendres est d’abord un port vivant, pas seulement un décor patrimonial."
      },
      {
        "title": "Garder l’entrée",
        "text": "Le Fanal place la défense au contact direct du chenal."
      },
      {
        "title": "Une ligne de protection",
        "text": "La Mauresque prolonge la lecture militaire du littoral."
      },
      {
        "title": "La ville se met en scène",
        "text": "Le Dôme et la place royale font passer la mission de la défense à l’architecture monumentale."
      },
      {
        "title": "Quatre faces",
        "text": "Les quatre bas-reliefs de l’Obélisque obligent à tourner autour du monument et à regarder réellement."
      },
      {
        "title": "La boucle se referme",
        "text": "Le retour par Jules Pams, les quais et Castellane relie les différentes strates rencontrées."
      }
    ],
    "playerStatus": "development-research",
    "scenarioDisclaimer": "Le registre de signaux est fictif. Les faits et métriques sont sourcés ; l’observabilité, les accès et les coordonnées sont à valider sur le terrain.",
    "finalPrompt": "Quel mot désigne, dans l’histoire du jeu, ce qui veille, guide ou protège un passage ?",
    "clueCards": [
      {
        "unlockAt": 2,
        "title": "Carte 1 — Un port en mouvement",
        "text": "Les quais parlent d’échanges et de navigation : le premier signal vient de la mer."
      },
      {
        "unlockAt": 5,
        "title": "Carte 2 — Veiller sur l’entrée",
        "text": "Fanal et Mauresque donnent au littoral une fonction de surveillance et de protection."
      },
      {
        "unlockAt": 7,
        "title": "Carte 3 — Lire les signaux",
        "text": "Du fort au monument, plusieurs repères donnent des informations à ceux qui savent les regarder."
      }
    ],
    "developmentStatus": "ready-content-field-monitoring",
    "sourceCheckedAt": "2026-09-10",
    "fieldValidation": "monitoring-required",
    "validationTier": "ready-application-test"
  },
  {
    "id": "co-regards-collioure",
    "icon": "🎨",
    "title": "Les Regards de Collioure",
    "tag": "Fauvisme • Remparts • Point de vue",
    "duration": "1 h 02 de marche officielle • ≈ 2 h 15 – 3 h avec le jeu",
    "difficulty": "Facile",
    "story": "Un carnet fictif ne contient aucune couleur, seulement des points de vue. Pour comprendre ce manque, il faut lire Collioure avec les yeux du peintre, du défenseur et du marcheur.",
    "final": "REGARD",
    "steps": [
      {
        "name": "Château Royal — Boramar",
        "fact": "Le Château Royal occupe le centre de la baie de Collioure. L’Office de tourisme le présente comme un édifice surveillant la cité depuis le XIIIe siècle, devenu citadelle puis renforcé sous Vauban.",
        "type": "choice",
        "q": "En observant la baie depuis Boramar, où se place le Château Royal ?",
        "answers": [
          "au centre de la baie",
          "centre de la baie",
          "dans la baie"
        ],
        "hint": "Regarde la relation directe entre les remparts et la mer.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/site-culturel/chateau-royal-de-collioure/",
        "gpsConfidence": "verified-partner-work-coordinate-field-calibration-required",
        "access": "Extérieur / espace public ou observation depuis l’espace public.",
        "season": "Toute l’année, sous réserve des conditions locales et des éventuelles fermetures.",
        "photoBonus": false,
        "expertBonus": "Observe le lieu réel et vérifie le repère avant de répondre.",
        "interaction": "choice",
        "locationMode": "gps",
        "hint2": "Le château se dresse au centre de la baie.",
        "choices": [
          "Au centre de la baie",
          "Au sommet de la Madeloc",
          "Derrière la gare",
          "Sur la plage du Racou"
        ],
        "routeInstruction": "Départ plage du Boramar, au pied du Château Royal, comme sur la boucle officielle vers le Fort Saint-Elme.",
        "lat": 42.52583,
        "lng": 3.085149,
        "radius": 120,
        "coordinateSource": "https://www.outdooractive.com/fr/poi/pyrenees-mediterranee/chateau-royal-de-collioure/800254806/",
        "audience": {
          "enfant": {
            "q": "Où vois-tu le grand château : au milieu de la baie ou au sommet de la montagne ?",
            "answers": [
              "au centre de la baie",
              "centre de la baie",
              "dans la baie"
            ],
            "interaction": "choice",
            "choices": [
              "Au centre de la baie",
              "Au sommet de la Madeloc",
              "Derrière la gare",
              "Sur la plage du Racou"
            ],
            "hint": "Regarde la mer autour de lui.",
            "hint2": "Il est au centre de la baie."
          },
          "adulte": {
            "q": "Lis l’implantation du château dans le paysage et choisis sa position juste.",
            "answers": [
              "au centre de la baie",
              "centre de la baie",
              "dans la baie"
            ],
            "interaction": "text",
            "choices": [
              "Au centre de la baie",
              "Au sommet de la Madeloc",
              "Derrière la gare",
              "Sur la plage du Racou"
            ],
            "hint": "Regarde la mer autour de lui.",
            "hint2": "Il est au centre de la baie."
          },
          "ado": {
            "q": "En observant la baie depuis Boramar, où se place le Château Royal ?",
            "answers": [
              "au centre de la baie",
              "centre de la baie",
              "dans la baie"
            ],
            "choices": [
              "Au centre de la baie",
              "Au sommet de la Madeloc",
              "Derrière la gare",
              "Sur la plage du Racou"
            ],
            "interaction": "choice",
            "hint": "Regarde la relation directe entre les remparts et la mer.",
            "hint2": "Le château se dresse au centre de la baie."
          }
        },
        "validationFocus": "Calibrer le rayon sur Boramar sans imposer l’entrée payante du château.",
        "id": "co-regards-collioure-s01"
      },
      {
        "name": "Le Faubourg — regards fauves",
        "fact": "Les Chemins du Fauvisme s’appuient sur des reproductions d’œuvres réalisées par Henri Matisse et André Derain à Collioure pendant l’été 1905.",
        "type": "multi",
        "q": "Sélectionne les deux artistes au cœur du parcours fauve de 1905.",
        "answers": [
          "henri matisse + andre derain"
        ],
        "hint": "Deux noms seulement sont associés ici à l’été 1905.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/balade-les-chemins-du-fauvisme/",
        "gpsConfidence": "documented-work-coordinate",
        "access": "Extérieur / espace public ou observation depuis l’espace public.",
        "season": "Toute l’année, sous réserve des conditions locales et des éventuelles fermetures.",
        "photoBonus": false,
        "expertBonus": "Observe le lieu réel et vérifie le repère avant de répondre.",
        "interaction": "multi",
        "locationMode": "trail",
        "hint2": "Henri Matisse + André Derain.",
        "choices": [
          "Henri Matisse",
          "André Derain",
          "Aristide Maillol",
          "Pablo Picasso"
        ],
        "multiAnswers": [
          "Henri Matisse",
          "André Derain"
        ],
        "routeInstruction": "Longe le château vers le quartier du Faubourg. Utilise les reproductions du Chemin du Fauvisme comme repères visuels lorsqu’elles sont présentes.",
        "audience": {
          "enfant": {
            "q": "Choisis les deux peintres de l’été 1905 à Collioure.",
            "choices": [
              "Henri Matisse",
              "André Derain",
              "Aristide Maillol",
              "Pablo Picasso"
            ],
            "interaction": "multi",
            "answers": [
              "henri matisse + andre derain"
            ],
            "hint": "Matisse est l’un des deux.",
            "hint2": "Matisse + Derain."
          },
          "adulte": {
            "q": "Sans ouvrir le Journal, identifie les deux artistes dont les reproductions structurent le Chemin du Fauvisme.",
            "choices": [
              "Henri Matisse",
              "André Derain",
              "Aristide Maillol",
              "Pablo Picasso"
            ],
            "interaction": "text",
            "answers": [
              "henri matisse + andre derain"
            ],
            "hint": "Ils travaillent ici en 1905.",
            "hint2": "Henri Matisse + André Derain."
          },
          "ado": {
            "q": "Sélectionne les deux artistes au cœur du parcours fauve de 1905.",
            "answers": [
              "henri matisse + andre derain"
            ],
            "choices": [
              "Henri Matisse",
              "André Derain",
              "Aristide Maillol",
              "Pablo Picasso"
            ],
            "interaction": "multi",
            "hint": "Deux noms seulement sont associés ici à l’été 1905.",
            "hint2": "Henri Matisse + André Derain."
          }
        },
        "validationFocus": "Vérifier quels panneaux sont encore présents, visibles et lisibles sans gêner la circulation.",
        "id": "co-regards-collioure-s02"
      },
      {
        "name": "Panneau « Le Faubourg »",
        "fact": "La documentation de l’Office de tourisme identifie « Le Faubourg » comme le panneau n°2 des Chemins du Fauvisme.",
        "type": "numeric",
        "q": "Quel numéro porte le panneau « Le Faubourg » sur le parcours documenté ?",
        "answers": [
          "2",
          "deux"
        ],
        "hint": "Cherche le numéro associé au titre du panneau.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/balade-les-chemins-du-fauvisme/",
        "gpsConfidence": "documented-work-coordinate",
        "access": "Extérieur / espace public ou observation depuis l’espace public.",
        "season": "Toute l’année, sous réserve des conditions locales et des éventuelles fermetures.",
        "photoBonus": false,
        "expertBonus": "Observe le lieu réel et vérifie le repère avant de répondre.",
        "interaction": "numeric",
        "locationMode": "trail",
        "hint2": "C’est le panneau 2.",
        "routeInstruction": "Dans le Faubourg, repère la reproduction intitulée « Le Faubourg » si elle est présente. Ne bloque pas le passage dans les ruelles.",
        "audience": {
          "enfant": {
            "q": "Cherche le petit numéro du panneau « Le Faubourg ». Quel est-il ?",
            "answers": [
              "2",
              "deux"
            ],
            "interaction": "numeric",
            "hint": "Le nombre est très petit.",
            "hint2": "La réponse est 2."
          },
          "adulte": {
            "q": "Observe le repère du Chemin du Fauvisme et relève son numéro.",
            "answers": [
              "2",
              "deux"
            ],
            "interaction": "text",
            "hint": "Le nombre est très petit.",
            "hint2": "La réponse est 2."
          },
          "ado": {
            "q": "Quel numéro porte le panneau « Le Faubourg » sur le parcours documenté ?",
            "answers": [
              "2",
              "deux"
            ],
            "interaction": "numeric",
            "hint": "Cherche le numéro associé au titre du panneau.",
            "hint2": "C’est le panneau 2."
          }
        },
        "validationFocus": "Observation à confirmer impérativement sur place : numérotation, emplacement et lisibilité peuvent évoluer.",
        "id": "co-regards-collioure-s03"
      },
      {
        "name": "Du musée au moulin",
        "fact": "La boucle officielle quitte le Faubourg vers le Musée d’Art Moderne et le Cellier des Dominicains, monte au moulin puis poursuit vers le Fort Saint-Elme.",
        "type": "sequence",
        "q": "Remets les quatre repères dans l’ordre de montée.",
        "answers": [
          "musee d art moderne > cellier des dominicains > moulin > fort saint elme"
        ],
        "hint": "Le musée vient avant le moulin.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/balade-entre-le-chateau-royal-et-le-fort-st-elme/",
        "gpsConfidence": "documented-work-coordinate",
        "access": "Extérieur / espace public ou observation depuis l’espace public.",
        "season": "Toute l’année, sous réserve des conditions locales et des éventuelles fermetures.",
        "photoBonus": false,
        "expertBonus": "Observe le lieu réel et vérifie le repère avant de répondre.",
        "interaction": "sequence",
        "locationMode": "trail",
        "hint2": "Musée → Cellier → Moulin → Fort Saint-Elme.",
        "choices": [
          "Musée d’Art Moderne",
          "Cellier des Dominicains",
          "Moulin",
          "Fort Saint-Elme"
        ],
        "sequence": [
          "Musée d’Art Moderne",
          "Cellier des Dominicains",
          "Moulin",
          "Fort Saint-Elme"
        ],
        "routeInstruction": "Après le Faubourg, suis l’itinéraire officiel vers le musée, le Cellier des Dominicains puis le moulin.",
        "audience": {
          "enfant": {
            "q": "Touche les lieux dans l’ordre pour monter vers le fort.",
            "answers": [
              "musee d art moderne > cellier des dominicains > moulin > fort saint elme"
            ],
            "interaction": "sequence",
            "choices": [
              "Musée d’Art Moderne",
              "Cellier des Dominicains",
              "Moulin",
              "Fort Saint-Elme"
            ],
            "sequence": [
              "Musée d’Art Moderne",
              "Cellier des Dominicains",
              "Moulin",
              "Fort Saint-Elme"
            ],
            "hint": "Commence par le musée.",
            "hint2": "Musée → Cellier → Moulin → Fort."
          },
          "adulte": {
            "q": "Reconstitue la progression topographique de la boucle officielle.",
            "answers": [
              "musee d art moderne > cellier des dominicains > moulin > fort saint elme"
            ],
            "interaction": "text",
            "choices": [
              "Musée d’Art Moderne",
              "Cellier des Dominicains",
              "Moulin",
              "Fort Saint-Elme"
            ],
            "sequence": [
              "Musée d’Art Moderne",
              "Cellier des Dominicains",
              "Moulin",
              "Fort Saint-Elme"
            ],
            "hint": "Commence par le musée.",
            "hint2": "Musée → Cellier → Moulin → Fort."
          },
          "ado": {
            "q": "Remets les quatre repères dans l’ordre de montée.",
            "answers": [
              "musee d art moderne > cellier des dominicains > moulin > fort saint elme"
            ],
            "choices": [
              "Musée d’Art Moderne",
              "Cellier des Dominicains",
              "Moulin",
              "Fort Saint-Elme"
            ],
            "interaction": "sequence",
            "hint": "Le musée vient avant le moulin.",
            "hint2": "Musée → Cellier → Moulin → Fort Saint-Elme."
          }
        },
        "validationFocus": "Vérifier les traversées, escaliers/pentes et points où l’écran doit être rangé.",
        "id": "co-regards-collioure-s04"
      },
      {
        "name": "Moulin de Collioure",
        "fact": "Le moulin est un jalon de la boucle pédestre officielle entre le musée et le Fort Saint-Elme.",
        "type": "choice",
        "q": "Depuis ce jalon, quel ouvrage défensif constitue l’objectif de la montée officielle ?",
        "answers": [
          "fort saint elme",
          "fort saint-elme",
          "saint elme"
        ],
        "hint": "Il domine à la fois Collioure et Port-Vendres.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/balade-entre-le-chateau-royal-et-le-fort-st-elme/",
        "gpsConfidence": "documented-work-coordinate",
        "access": "Extérieur / espace public ou observation depuis l’espace public.",
        "season": "Toute l’année, sous réserve des conditions locales et des éventuelles fermetures.",
        "photoBonus": false,
        "expertBonus": "Observe le lieu réel et vérifie le repère avant de répondre.",
        "interaction": "choice",
        "locationMode": "trail",
        "hint2": "Le Fort Saint-Elme.",
        "choices": [
          "Fort Saint-Elme",
          "Château de Valmy",
          "Fort Fanal",
          "Tour de la Massane"
        ],
        "routeInstruction": "Au moulin, repère la direction du Fort Saint-Elme et poursuis uniquement par le chemin autorisé.",
        "audience": {
          "enfant": {
            "q": "Quel fort dois-tu rejoindre après le moulin ?",
            "answers": [
              "fort saint elme",
              "fort saint-elme",
              "saint elme"
            ],
            "interaction": "choice",
            "choices": [
              "Fort Saint-Elme",
              "Château de Valmy",
              "Fort Fanal",
              "Tour de la Massane"
            ],
            "hint": "Son nom commence par Saint…",
            "hint2": "Fort Saint-Elme."
          },
          "adulte": {
            "q": "Identifie l’ouvrage qui ferme la montée de cette boucle.",
            "answers": [
              "fort saint elme",
              "fort saint-elme",
              "saint elme"
            ],
            "interaction": "text",
            "choices": [
              "Fort Saint-Elme",
              "Château de Valmy",
              "Fort Fanal",
              "Tour de la Massane"
            ],
            "hint": "Son nom commence par Saint…",
            "hint2": "Fort Saint-Elme."
          },
          "ado": {
            "q": "Depuis ce jalon, quel ouvrage défensif constitue l’objectif de la montée officielle ?",
            "answers": [
              "fort saint elme",
              "fort saint-elme",
              "saint elme"
            ],
            "choices": [
              "Fort Saint-Elme",
              "Château de Valmy",
              "Fort Fanal",
              "Tour de la Massane"
            ],
            "interaction": "choice",
            "hint": "Il domine à la fois Collioure et Port-Vendres.",
            "hint2": "Le Fort Saint-Elme."
          }
        },
        "validationFocus": "Tester la lisibilité des directions et la sécurité sur la montée.",
        "id": "co-regards-collioure-s05"
      },
      {
        "name": "Fort Saint-Elme — extérieur",
        "fact": "Le Fort Saint-Elme est actuellement fermé à la visite et visible seulement de l’extérieur. L’Office de tourisme indique qu’au XVIe siècle, sous Charles Quint, un fort en étoile à six branches est construit autour d’une tour plus ancienne.",
        "type": "numeric",
        "q": "Combien de branches compte l’étoile décrite pour le fort du XVIe siècle ?",
        "answers": [
          "6",
          "six"
        ],
        "hint": "La source parle d’une étoile.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/site-culturel/fort-saint-elme/",
        "gpsConfidence": "documented-work-coordinate",
        "access": "Extérieur uniquement. Le Fort Saint-Elme est indiqué fermé pour travaux par l’Office de tourisme au 09/09/2026.",
        "season": "Toute l’année, sous réserve des conditions locales et des éventuelles fermetures.",
        "photoBonus": false,
        "expertBonus": "Observe le lieu réel et vérifie le repère avant de répondre.",
        "interaction": "numeric",
        "locationMode": "trail",
        "hint2": "Six branches.",
        "routeInstruction": "Reste à l’extérieur du Fort Saint-Elme et respecte toute fermeture de chemin ou de site.",
        "audience": {
          "enfant": {
            "q": "Le fort est décrit comme une étoile à combien de branches ?",
            "answers": [
              "6",
              "six"
            ],
            "interaction": "numeric",
            "hint": "C’est plus de cinq.",
            "hint2": "La réponse est 6."
          },
          "adulte": {
            "q": "Donne le nombre de branches de l’architecture en étoile attribuée au XVIe siècle.",
            "answers": [
              "6",
              "six"
            ],
            "interaction": "text",
            "hint": "C’est plus de cinq.",
            "hint2": "La réponse est 6."
          },
          "ado": {
            "q": "Combien de branches compte l’étoile décrite pour le fort du XVIe siècle ?",
            "answers": [
              "6",
              "six"
            ],
            "interaction": "numeric",
            "hint": "La source parle d’une étoile.",
            "hint2": "Six branches."
          }
        },
        "validationFocus": "Vérifier la situation des travaux et que le point d’arrêt extérieur demeure légal et sûr.",
        "id": "co-regards-collioure-s06"
      },
      {
        "name": "Retour vers Boramar",
        "fact": "La boucle officielle repart par le chemin du Coll de Mala Cara, rejoint la carrer de Saint-Elme, redescend au centre puis au bord de mer avant de revenir à Boramar.",
        "type": "sequence",
        "q": "Remets la descente finale dans l’ordre.",
        "answers": [
          "coll de mala cara > carrer de saint elme > centre de collioure > bord de mer > boramar"
        ],
        "hint": "Le Coll de Mala Cara lance le retour.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/balade-entre-le-chateau-royal-et-le-fort-st-elme/",
        "gpsConfidence": "documented-work-coordinate",
        "access": "Extérieur / espace public ou observation depuis l’espace public.",
        "season": "Toute l’année, sous réserve des conditions locales et des éventuelles fermetures.",
        "photoBonus": false,
        "expertBonus": "Observe le lieu réel et vérifie le repère avant de répondre.",
        "interaction": "sequence",
        "locationMode": "trail",
        "hint2": "Mala Cara → carrer Saint-Elme → centre → bord de mer → Boramar.",
        "choices": [
          "Coll de Mala Cara",
          "Carrer de Saint-Elme",
          "Centre de Collioure",
          "Bord de mer",
          "Boramar"
        ],
        "sequence": [
          "Coll de Mala Cara",
          "Carrer de Saint-Elme",
          "Centre de Collioure",
          "Bord de mer",
          "Boramar"
        ],
        "routeInstruction": "Pour le retour, suis le chemin du Coll de Mala Cara puis les rues indiquées par la boucle officielle jusqu’à Boramar.",
        "audience": {
          "enfant": {
            "q": "Remets les cinq repères dans l’ordre pour revenir à la mer.",
            "answers": [
              "coll de mala cara > carrer de saint elme > centre de collioure > bord de mer > boramar"
            ],
            "interaction": "sequence",
            "choices": [
              "Coll de Mala Cara",
              "Carrer de Saint-Elme",
              "Centre de Collioure",
              "Bord de mer",
              "Boramar"
            ],
            "sequence": [
              "Coll de Mala Cara",
              "Carrer de Saint-Elme",
              "Centre de Collioure",
              "Bord de mer",
              "Boramar"
            ],
            "hint": "Commence par le Coll de Mala Cara.",
            "hint2": "Mala Cara → Saint-Elme → centre → mer → Boramar."
          },
          "adulte": {
            "q": "Reconstitue la descente officielle jusqu’à Boramar.",
            "answers": [
              "coll de mala cara > carrer de saint elme > centre de collioure > bord de mer > boramar"
            ],
            "interaction": "text",
            "choices": [
              "Coll de Mala Cara",
              "Carrer de Saint-Elme",
              "Centre de Collioure",
              "Bord de mer",
              "Boramar"
            ],
            "sequence": [
              "Coll de Mala Cara",
              "Carrer de Saint-Elme",
              "Centre de Collioure",
              "Bord de mer",
              "Boramar"
            ],
            "hint": "Commence par le Coll de Mala Cara.",
            "hint2": "Mala Cara → Saint-Elme → centre → mer → Boramar."
          },
          "ado": {
            "q": "Remets la descente finale dans l’ordre.",
            "answers": [
              "coll de mala cara > carrer de saint elme > centre de collioure > bord de mer > boramar"
            ],
            "choices": [
              "Coll de Mala Cara",
              "Carrer de Saint-Elme",
              "Centre de Collioure",
              "Bord de mer",
              "Boramar"
            ],
            "interaction": "sequence",
            "hint": "Le Coll de Mala Cara lance le retour.",
            "hint2": "Mala Cara → carrer Saint-Elme → centre → bord de mer → Boramar."
          }
        },
        "validationFocus": "Reconnaître la descente complète, les croisements et les passages partagés avec les véhicules.",
        "id": "co-regards-collioure-s07"
      }
    ],
    "lastVerified": "2026-09-09",
    "sourceSummary": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/balade-entre-le-chateau-royal-et-le-fort-st-elme/",
    "safety": "Boucle urbaine avec montée vers le Fort Saint-Elme. Eau, chaussures adaptées et prudence dans les ruelles, escaliers et croisements. Le fort est actuellement annoncé fermé à la visite : rester à l’extérieur.",
    "offline": true,
    "territoryId": "collioure",
    "route": {
      "level": "facile",
      "levelLabel": "Facile",
      "distanceKm": 4.1,
      "distanceLabel": "4,1 km",
      "walkTime": "1 h 02",
      "gameTime": "≈ 2 h 15 – 3 h à tester",
      "ascentM": 163,
      "descentM": 166,
      "altMaxM": 145,
      "surface": "Ruelles, promenade littorale, montée sur chemins et voirie locale",
      "accessibility": "Non qualifiée avant reconnaissance ; pente et cheminement vers le fort.",
      "metricsStatus": "official-route-field-validation-required",
      "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/balade-entre-le-chateau-royal-et-le-fort-st-elme/",
      "note": "Métriques officielles actuelles : 4,1 km, +163 m / −166 m, 1 h 02, altitude max. 145 m.",
      "playerDistance": "4,1 km",
      "playerAscent": "+163 m / −166 m",
      "playerWalk": "1 h 02 de marche officielle",
      "playerTerrain": "Ville, ruelles et montée au Fort Saint-Elme",
      "playerNote": "Le Chemin du Fauvisme est utilisé comme contenu patrimonial, pas comme métrique de cette boucle. La page OTI du Fauvisme affiche une distance manifestement erronée ; la métrique 0,5 km n’est conservée qu’en recherche via le partenaire vérifié.",
      "routeType": "Boucle",
      "officialBasis": "Entre le Château Royal et le Fort Saint-Elme"
    },
    "teaser": "De Boramar au Fort Saint-Elme, change de point de vue : peinture, fortification et relief racontent une même baie.",
    "briefing": "Le carnet fictif a perdu ses couleurs. Tu ne dois pas les deviner sur l’écran : observe la baie, repère les reproductions fauves, suis la montée officielle et lis les remparts dans le paysage.",
    "objective": "Valider sept repères, relier trois manières de regarder Collioure et retrouver le mot de synthèse.",
    "ending": "REGARD. Collioure change selon l’endroit d’où on la lit : le peintre transforme la couleur, le fort contrôle l’horizon et le marcheur relie les deux.",
    "territoryFragment": "Regards",
    "cardTerrain": "Ruelles • montée • panorama",
    "cardTime": "≈ 2 h 15 – 3 h avec le jeu",
    "playerMetrics": [
      [
        "🥾",
        "4,1 km"
      ],
      [
        "↗",
        "+163 m / −166 m"
      ],
      [
        "⏱",
        "1 h 02 de marche officielle"
      ]
    ],
    "storyBeats": [
      {
        "title": "Un château dans la baie",
        "text": "Le premier indice n’est pas une date : c’est la manière dont les remparts occupent l’espace maritime."
      },
      {
        "title": "Deux peintres, un été",
        "text": "Matisse et Derain font du paysage de 1905 une expérience de couleur."
      },
      {
        "title": "Le panneau devient repère",
        "text": "Le Chemin du Fauvisme transforme la ville en galerie à ciel ouvert."
      },
      {
        "title": "Monter change la lecture",
        "text": "Musée, cellier, moulin puis fort : l’itinéraire fait progressivement prendre de la hauteur."
      },
      {
        "title": "La silhouette du fort",
        "text": "Depuis le moulin, la défense devient un objectif de marche."
      },
      {
        "title": "Une étoile au-dessus des baies",
        "text": "Saint-Elme relie géométrie militaire et panorama, sans exiger d’entrer dans le site fermé."
      },
      {
        "title": "Revenir avec un autre œil",
        "text": "Le retour vers Boramar traverse les mêmes paysages, mais la mission a changé la manière de les lire."
      }
    ],
    "playerStatus": "development-research",
    "scenarioDisclaimer": "Le carnet sans couleurs est fictif. Les faits et métriques sont sourcés. Les panneaux, accès et observations doivent être vérifiés sur place.",
    "finalPrompt": "Quel mot relie le peintre, le défenseur et le randonneur lorsqu’ils lisent le même paysage ?",
    "clueCards": [
      {
        "unlockAt": 2,
        "title": "Carte 1 — Le peintre",
        "text": "Le paysage n’est pas seulement vu : il est interprété."
      },
      {
        "unlockAt": 5,
        "title": "Carte 2 — Le défenseur",
        "text": "Prendre de la hauteur transforme la baie en espace à surveiller."
      },
      {
        "unlockAt": 7,
        "title": "Carte 3 — Le marcheur",
        "text": "En revenant vers la mer, tu reconnais les mêmes lieux sous un autre angle."
      }
    ],
    "developmentStatus": "ready-content-field-monitoring",
    "sourceCheckedAt": "2026-09-10",
    "fieldValidation": "monitoring-required",
    "validationTier": "ready-application-test"
  },
  {
    "id": "ar-fil-argeles",
    "icon": "🧭",
    "title": "Le Fil d’Argelès",
    "tag": "Village • Mémoire • Littoral • Racou",
    "duration": "2 h de marche officielle • ≈ 3 h 15 – 4 h avec le jeu",
    "difficulty": "Facile",
    "story": "Un fil fictif relie les différents visages d’Argelès. Il ne faut pas le chercher au sol : il apparaît chaque fois que le paysage change.",
    "final": "LIAISON",
    "steps": [
      {
        "name": "Valmy — départ de la boucle",
        "fact": "La balade officielle « Autour d’Argelès-sur-Mer » part du secteur de Valmy, descend vers le village puis rejoint la mer avant de revenir par le Racou et les vignes.",
        "type": "choice",
        "q": "Quel est le premier grand changement de paysage annoncé par l’itinéraire ?",
        "answers": [
          "du relief vers le village",
          "vers le village",
          "valmy vers le village",
          "Du secteur de Valmy vers le village"
        ],
        "hint": "Le circuit descend d’abord vers le cœur ancien.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/balade-autour-dargeles-sur-mer/",
        "gpsConfidence": "documented-work-coordinate",
        "access": "Extérieur / espace public ou observation depuis l’espace public.",
        "season": "Toute l’année, sous réserve des conditions locales et des éventuelles fermetures.",
        "photoBonus": false,
        "expertBonus": "Observe le lieu réel et vérifie le repère avant de répondre.",
        "interaction": "choice",
        "locationMode": "trail",
        "hint2": "Valmy → village.",
        "choices": [
          "Du secteur de Valmy vers le village",
          "Du village vers la Tour Madeloc",
          "Du port vers Paulilles",
          "De la plage vers Banyuls"
        ],
        "routeInstruction": "Depuis le parking de départ officiel, descends vers le camping Les Mimosas puis suis le PR® ARG8 vers le village.",
        "audience": {
          "enfant": {
            "q": "Où va la boucle après Valmy : vers le village ou vers Banyuls ?",
            "answers": [
              "du relief vers le village",
              "vers le village",
              "valmy vers le village",
              "Du secteur de Valmy vers le village"
            ],
            "interaction": "choice",
            "choices": [
              "Du secteur de Valmy vers le village",
              "Du village vers la Tour Madeloc",
              "Du port vers Paulilles",
              "De la plage vers Banyuls"
            ],
            "hint": "Elle descend.",
            "hint2": "Elle descend vers le village."
          },
          "adulte": {
            "q": "Identifie la première transition géographique du tracé officiel.",
            "answers": [
              "du relief vers le village",
              "vers le village",
              "valmy vers le village",
              "Du secteur de Valmy vers le village"
            ],
            "interaction": "text",
            "choices": [
              "Du secteur de Valmy vers le village",
              "Du village vers la Tour Madeloc",
              "Du port vers Paulilles",
              "De la plage vers Banyuls"
            ],
            "hint": "Elle descend.",
            "hint2": "Elle descend vers le village."
          },
          "ado": {
            "q": "Quel est le premier grand changement de paysage annoncé par l’itinéraire ?",
            "answers": [
              "du relief vers le village",
              "vers le village",
              "valmy vers le village",
              "Du secteur de Valmy vers le village"
            ],
            "choices": [
              "Du secteur de Valmy vers le village",
              "Du village vers la Tour Madeloc",
              "Du port vers Paulilles",
              "De la plage vers Banyuls"
            ],
            "interaction": "choice",
            "hint": "Le circuit descend d’abord vers le cœur ancien.",
            "hint2": "Valmy → village."
          }
        },
        "validationFocus": "Identifier précisément le parking de départ utilisé par la fiche officielle et contrôler l’accès.",
        "id": "ar-fil-argeles-s01"
      },
      {
        "name": "Casa de l’Albera",
        "fact": "La Casa de l’Albera est une maison traditionnelle consacrée au territoire d’Argelès et du massif de l’Albera : histoire, culture, patrimoine et savoir-faire.",
        "type": "choice",
        "q": "Quel territoire la Casa aide-t-elle à comprendre ?",
        "answers": [
          "argeles et le massif de l albera",
          "argeles et le massif des alberes",
          "massif de l albera",
          "les alberes"
        ],
        "hint": "Son nom contient déjà une partie de la réponse.",
        "token": "",
        "source": "https://www.argeles-sur-mer.com/cap-catalan/les-activites-culturelles/casa-de-l-albera/",
        "gpsConfidence": "municipal-coordinate-field-calibration-required",
        "access": "Extérieur / espace public ou observation depuis l’espace public.",
        "season": "Toute l’année, sous réserve des conditions locales et des éventuelles fermetures.",
        "photoBonus": false,
        "expertBonus": "Observe le lieu réel et vérifie le repère avant de répondre.",
        "interaction": "choice",
        "locationMode": "gps",
        "hint2": "Argelès et le massif de l’Albera.",
        "choices": [
          "Argelès et le massif de l’Albera",
          "La Camargue",
          "Le Canigou uniquement",
          "Le port de Marseille"
        ],
        "routeInstruction": "Entre dans le village par le porche Palmarole et rejoins la place des Castellans. L’énigme se fait depuis l’espace public ; la visite intérieure reste facultative.",
        "lat": 42.546895564,
        "lng": 3.021851778,
        "radius": 110,
        "coordinateSource": "https://www.ville-argelessurmer.fr/casa-de-l-albera-maison-du-patrimoine",
        "audience": {
          "enfant": {
            "q": "La Casa raconte surtout quel lieu : Argelès et les Albères ou Paris ?",
            "answers": [
              "argeles et le massif de l albera",
              "argeles et le massif des alberes",
              "massif de l albera",
              "les alberes"
            ],
            "interaction": "choice",
            "choices": [
              "Argelès et le massif de l’Albera",
              "La Camargue",
              "Le Canigou uniquement",
              "Le port de Marseille"
            ],
            "hint": "Lis son nom.",
            "hint2": "Argelès + le massif de l’Albera."
          },
          "adulte": {
            "q": "Identifie l’échelle territoriale présentée par la Casa de l’Albera.",
            "answers": [
              "argeles et le massif de l albera",
              "argeles et le massif des alberes",
              "massif de l albera",
              "les alberes"
            ],
            "interaction": "text",
            "choices": [
              "Argelès et le massif de l’Albera",
              "La Camargue",
              "Le Canigou uniquement",
              "Le port de Marseille"
            ],
            "hint": "Lis son nom.",
            "hint2": "Argelès + le massif de l’Albera."
          },
          "ado": {
            "q": "Quel territoire la Casa aide-t-elle à comprendre ?",
            "answers": [
              "argeles et le massif de l albera",
              "argeles et le massif des alberes",
              "massif de l albera",
              "les alberes"
            ],
            "choices": [
              "Argelès et le massif de l’Albera",
              "La Camargue",
              "Le Canigou uniquement",
              "Le port de Marseille"
            ],
            "interaction": "choice",
            "hint": "Son nom contient déjà une partie de la réponse.",
            "hint2": "Argelès et le massif de l’Albera."
          }
        },
        "validationFocus": "Calibrer la géofence sur la place publique sans rendre l’entrée payante nécessaire.",
        "id": "ar-fil-argeles-s02"
      },
      {
        "name": "Du village à la Massane",
        "fact": "Depuis la Casa de l’Albera, le tracé officiel emprunte les ruelles de Majorque et de la Concorde, descend la rue de la République puis atteint les berges de la Massane.",
        "type": "sequence",
        "q": "Remets la sortie du village dans l’ordre.",
        "answers": [
          "place des castellans > ruelles majorque concorde > rue de la republique > riviere la massane"
        ],
        "hint": "La rivière vient en dernier.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/balade-autour-dargeles-sur-mer/",
        "gpsConfidence": "documented-work-coordinate",
        "access": "Extérieur / espace public ou observation depuis l’espace public.",
        "season": "Toute l’année, sous réserve des conditions locales et des éventuelles fermetures.",
        "photoBonus": false,
        "expertBonus": "Observe le lieu réel et vérifie le repère avant de répondre.",
        "interaction": "sequence",
        "locationMode": "trail",
        "hint2": "Castellans → ruelles → République → Massane.",
        "choices": [
          "Place des Castellans",
          "Ruelles Majorque / Concorde",
          "Rue de la République",
          "Rivière la Massane"
        ],
        "sequence": [
          "Place des Castellans",
          "Ruelles Majorque / Concorde",
          "Rue de la République",
          "Rivière la Massane"
        ],
        "routeInstruction": "Suis les ruelles Majorque et Concorde puis la rue de la République vers la Massane.",
        "audience": {
          "enfant": {
            "q": "Remets les quatre repères dans l’ordre jusqu’à la rivière.",
            "answers": [
              "place des castellans > ruelles majorque concorde > rue de la republique > riviere la massane"
            ],
            "interaction": "sequence",
            "choices": [
              "Place des Castellans",
              "Ruelles Majorque / Concorde",
              "Rue de la République",
              "Rivière la Massane"
            ],
            "sequence": [
              "Place des Castellans",
              "Ruelles Majorque / Concorde",
              "Rue de la République",
              "Rivière la Massane"
            ],
            "hint": "Commence place des Castellans.",
            "hint2": "Castellans → ruelles → République → Massane."
          },
          "adulte": {
            "q": "Reconstitue la sortie du vieux village vers la Massane.",
            "answers": [
              "place des castellans > ruelles majorque concorde > rue de la republique > riviere la massane"
            ],
            "interaction": "text",
            "choices": [
              "Place des Castellans",
              "Ruelles Majorque / Concorde",
              "Rue de la République",
              "Rivière la Massane"
            ],
            "sequence": [
              "Place des Castellans",
              "Ruelles Majorque / Concorde",
              "Rue de la République",
              "Rivière la Massane"
            ],
            "hint": "Commence place des Castellans.",
            "hint2": "Castellans → ruelles → République → Massane."
          },
          "ado": {
            "q": "Remets la sortie du village dans l’ordre.",
            "answers": [
              "place des castellans > ruelles majorque concorde > rue de la republique > riviere la massane"
            ],
            "choices": [
              "Place des Castellans",
              "Ruelles Majorque / Concorde",
              "Rue de la République",
              "Rivière la Massane"
            ],
            "interaction": "sequence",
            "hint": "La rivière vient en dernier.",
            "hint2": "Castellans → ruelles → République → Massane."
          }
        },
        "validationFocus": "Reconnaître les traversées et les portions où l’usage du téléphone doit être déconseillé.",
        "id": "ar-fil-argeles-s03"
      },
      {
        "name": "Promenade Argelès Photo Nature",
        "fact": "Sur la promenade du front de mer, la fiche officielle signale l’exposition Argelès Photo Nature, composée d’environ une centaine de photographies en très grand format et visible saisonnièrement.",
        "type": "choice",
        "q": "Quel support accompagne la promenade et sert ici de repère ?",
        "answers": [
          "photographies grand format",
          "photos grand format",
          "photographies",
          "photos",
          "Des photographies grand format"
        ],
        "hint": "Regarde la promenade plutôt que la mer.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/balade-autour-dargeles-sur-mer/",
        "gpsConfidence": "documented-work-coordinate",
        "access": "Extérieur / espace public ou observation depuis l’espace public.",
        "season": "Exposition Photo Nature signalée d’avril à octobre sur la fiche de randonnée ; prévoir une énigme de remplacement hors saison.",
        "photoBonus": false,
        "expertBonus": "Observe le lieu réel et vérifie le repère avant de répondre.",
        "interaction": "choice",
        "locationMode": "trail",
        "hint2": "Ce sont des photographies grand format.",
        "choices": [
          "Des photographies grand format",
          "Des statues de marbre",
          "Des bornes romaines",
          "Des canons"
        ],
        "routeInstruction": "Après la route de la mer, rejoins le front de mer et prends à droite sur la promenade végétalisée.",
        "audience": {
          "enfant": {
            "q": "Qu’est-ce qui est exposé le long de la promenade : de grandes photos ou des canons ?",
            "answers": [
              "photographies grand format",
              "photos grand format",
              "photographies",
              "photos",
              "Des photographies grand format"
            ],
            "interaction": "choice",
            "choices": [
              "Des photographies grand format",
              "Des statues de marbre",
              "Des bornes romaines",
              "Des canons"
            ],
            "hint": "C’est une exposition.",
            "hint2": "Des photographies grand format."
          },
          "adulte": {
            "q": "Identifie le dispositif culturel qui accompagne le front de mer.",
            "answers": [
              "photographies grand format",
              "photos grand format",
              "photographies",
              "photos",
              "Des photographies grand format"
            ],
            "interaction": "text",
            "choices": [
              "Des photographies grand format",
              "Des statues de marbre",
              "Des bornes romaines",
              "Des canons"
            ],
            "hint": "C’est une exposition.",
            "hint2": "Des photographies grand format."
          },
          "ado": {
            "q": "Quel support accompagne la promenade et sert ici de repère ?",
            "answers": [
              "photographies grand format",
              "photos grand format",
              "photographies",
              "photos",
              "Des photographies grand format"
            ],
            "choices": [
              "Des photographies grand format",
              "Des statues de marbre",
              "Des bornes romaines",
              "Des canons"
            ],
            "interaction": "choice",
            "hint": "Regarde la promenade plutôt que la mer.",
            "hint2": "Ce sont des photographies grand format."
          }
        },
        "validationFocus": "Créer une variante hors saison et vérifier la programmation 2026/2027 avant publication.",
        "id": "ar-fil-argeles-s04"
      },
      {
        "name": "Passerelle et port",
        "fact": "Le tracé officiel franchit une passerelle depuis le front de mer, rejoint le port de plaisance puis suit les quais vers le sentier littoral.",
        "type": "choice",
        "q": "Après la promenade, quel espace vient immédiatement avant le Racou dans la logique de la boucle ?",
        "answers": [
          "le port",
          "port de plaisance",
          "les quais",
          "Le port de plaisance"
        ],
        "hint": "Tu franchis une passerelle pour le rejoindre.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/balade-autour-dargeles-sur-mer/",
        "gpsConfidence": "documented-work-coordinate",
        "access": "Extérieur / espace public ou observation depuis l’espace public.",
        "season": "Toute l’année, sous réserve des conditions locales et des éventuelles fermetures.",
        "photoBonus": false,
        "expertBonus": "Observe le lieu réel et vérifie le repère avant de répondre.",
        "interaction": "choice",
        "locationMode": "trail",
        "hint2": "Le port de plaisance.",
        "choices": [
          "Le port de plaisance",
          "La Tour de la Massane",
          "Saint-André",
          "Paulilles"
        ],
        "routeInstruction": "Franchis la passerelle, longe les quais puis passe la zone technique en restant dans les espaces autorisés.",
        "audience": {
          "enfant": {
            "q": "Après la passerelle, où passes-tu : au port ou à la Tour de la Massane ?",
            "answers": [
              "le port",
              "port de plaisance",
              "les quais",
              "Le port de plaisance"
            ],
            "interaction": "choice",
            "choices": [
              "Le port de plaisance",
              "La Tour de la Massane",
              "Saint-André",
              "Paulilles"
            ],
            "hint": "Il y a des quais.",
            "hint2": "Le port de plaisance."
          },
          "adulte": {
            "q": "Identifie le maillon qui relie le front de mer au Racou.",
            "answers": [
              "le port",
              "port de plaisance",
              "les quais",
              "Le port de plaisance"
            ],
            "interaction": "text",
            "choices": [
              "Le port de plaisance",
              "La Tour de la Massane",
              "Saint-André",
              "Paulilles"
            ],
            "hint": "Il y a des quais.",
            "hint2": "Le port de plaisance."
          },
          "ado": {
            "q": "Après la promenade, quel espace vient immédiatement avant le Racou dans la logique de la boucle ?",
            "answers": [
              "le port",
              "port de plaisance",
              "les quais",
              "Le port de plaisance"
            ],
            "choices": [
              "Le port de plaisance",
              "La Tour de la Massane",
              "Saint-André",
              "Paulilles"
            ],
            "interaction": "choice",
            "hint": "Tu franchis une passerelle pour le rejoindre.",
            "hint2": "Le port de plaisance."
          }
        },
        "validationFocus": "Contrôler la cohabitation piétons/vélos, la zone technique et les éventuelles déviations.",
        "id": "ar-fil-argeles-s05"
      },
      {
        "name": "Le Racou",
        "fact": "Le nom « Racou » signifie « le recoin » en catalan. Le quartier se situe à la charnière entre la plage de sable et le début de la côte rocheuse.",
        "type": "text",
        "q": "Que signifie « Racou » en catalan ?",
        "answers": [
          "le recoin",
          "recoin"
        ],
        "hint": "C’est un petit espace à l’écart.",
        "token": "",
        "source": "https://www.argeles-sur-mer.com/cap-mediteranee/le-racou/",
        "gpsConfidence": "documented-work-coordinate",
        "access": "Extérieur / espace public ou observation depuis l’espace public.",
        "season": "Toute l’année, sous réserve des conditions locales et des éventuelles fermetures.",
        "photoBonus": false,
        "expertBonus": "Observe le lieu réel et vérifie le repère avant de répondre.",
        "interaction": "text",
        "locationMode": "trail",
        "hint2": "Le recoin.",
        "routeInstruction": "Après la zone portuaire, rejoins le parking du Racou puis le secteur du hameau en restant sur l’itinéraire officiel.",
        "audience": {
          "enfant": {
            "q": "Le mot « Racou » veut dire quoi : « le recoin » ou « la montagne » ?",
            "answers": [
              "le recoin",
              "recoin"
            ],
            "interaction": "choice",
            "choices": [
              "Le recoin",
              "La montagne",
              "Le phare"
            ],
            "hint": "Pense à un endroit niché.",
            "hint2": "Le recoin."
          },
          "adulte": {
            "q": "Retrouve le sens catalan du nom du quartier.",
            "answers": [
              "le recoin",
              "recoin"
            ],
            "interaction": "text",
            "choices": [
              "Le recoin",
              "La montagne",
              "Le phare"
            ],
            "hint": "Pense à un endroit niché.",
            "hint2": "Le recoin."
          },
          "ado": {
            "q": "Que signifie « Racou » en catalan ?",
            "answers": [
              "le recoin",
              "recoin"
            ],
            "interaction": "text",
            "hint": "C’est un petit espace à l’écart.",
            "hint2": "Le recoin."
          }
        },
        "validationFocus": "Choisir un point d’arrêt qui respecte les riverains et ne bloque pas les ruelles.",
        "id": "ar-fil-argeles-s06"
      },
      {
        "name": "Retour par les vignes",
        "fact": "Depuis le Racou, la boucle officielle utilise une voie cyclable protégée, traverse prudemment la RD114, rejoint le chemin du Priou puis le secteur du Mas Côme et les vignes avant le retour.",
        "type": "sequence",
        "q": "Remets les cinq repères du retour dans l’ordre.",
        "answers": [
          "voie cyclable protegee > traversee rd114 > chemin du priou > vignes du mas come > parking de depart"
        ],
        "hint": "La traversée de la RD114 précède le chemin du Priou.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/balade-autour-dargeles-sur-mer/",
        "gpsConfidence": "documented-work-coordinate",
        "access": "Extérieur / espace public ou observation depuis l’espace public.",
        "season": "Toute l’année, sous réserve des conditions locales et des éventuelles fermetures.",
        "photoBonus": false,
        "expertBonus": "Observe le lieu réel et vérifie le repère avant de répondre.",
        "interaction": "sequence",
        "locationMode": "trail",
        "hint2": "Voie cyclable → RD114 → Priou → vignes → parking.",
        "choices": [
          "Voie cyclable protégée",
          "Traversée prudente de la RD114",
          "Chemin du Priou",
          "Vignes du Mas Côme",
          "Parking de départ"
        ],
        "sequence": [
          "Voie cyclable protégée",
          "Traversée prudente de la RD114",
          "Chemin du Priou",
          "Vignes du Mas Côme",
          "Parking de départ"
        ],
        "routeInstruction": "Respecte strictement la traversée de la RD114 puis suis le chemin du Priou et le retour par les vignes tel que décrit par la fiche officielle.",
        "audience": {
          "enfant": {
            "q": "Remets les repères dans l’ordre pour revenir au départ.",
            "answers": [
              "voie cyclable protegee > traversee rd114 > chemin du priou > vignes du mas come > parking de depart"
            ],
            "interaction": "sequence",
            "choices": [
              "Voie cyclable protégée",
              "Traversée prudente de la RD114",
              "Chemin du Priou",
              "Vignes du Mas Côme",
              "Parking de départ"
            ],
            "sequence": [
              "Voie cyclable protégée",
              "Traversée prudente de la RD114",
              "Chemin du Priou",
              "Vignes du Mas Côme",
              "Parking de départ"
            ],
            "hint": "La RD114 vient avant le Priou.",
            "hint2": "Voie cyclable → RD114 → Priou → vignes → parking."
          },
          "adulte": {
            "q": "Reconstitue le retour du Racou à Valmy en suivant les changements de voie.",
            "answers": [
              "voie cyclable protegee > traversee rd114 > chemin du priou > vignes du mas come > parking de depart"
            ],
            "interaction": "text",
            "choices": [
              "Voie cyclable protégée",
              "Traversée prudente de la RD114",
              "Chemin du Priou",
              "Vignes du Mas Côme",
              "Parking de départ"
            ],
            "sequence": [
              "Voie cyclable protégée",
              "Traversée prudente de la RD114",
              "Chemin du Priou",
              "Vignes du Mas Côme",
              "Parking de départ"
            ],
            "hint": "La RD114 vient avant le Priou.",
            "hint2": "Voie cyclable → RD114 → Priou → vignes → parking."
          },
          "ado": {
            "q": "Remets les cinq repères du retour dans l’ordre.",
            "answers": [
              "voie cyclable protegee > traversee rd114 > chemin du priou > vignes du mas come > parking de depart"
            ],
            "choices": [
              "Voie cyclable protégée",
              "Traversée prudente de la RD114",
              "Chemin du Priou",
              "Vignes du Mas Côme",
              "Parking de départ"
            ],
            "interaction": "sequence",
            "hint": "La traversée de la RD114 précède le chemin du Priou.",
            "hint2": "Voie cyclable → RD114 → Priou → vignes → parking."
          }
        },
        "validationFocus": "Point critique sécurité : reconnaissance de la RD114, visibilité, trafic, cheminement ferroviaire et toute déviation 2026.",
        "id": "ar-fil-argeles-s07"
      }
    ],
    "lastVerified": "2026-09-09",
    "sourceSummary": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/balade-autour-dargeles-sur-mer/",
    "safety": "Boucle longue malgré le faible dénivelé. Eau, protection solaire et chaussures confortables. Prudence aux traversées, aux zones partagées et en particulier à la RD114. Respecter toute modification du sentier littoral ou du dispositif incendie.",
    "offline": true,
    "territoryId": "argeles",
    "route": {
      "level": "facile",
      "levelLabel": "Facile",
      "distanceKm": 10.5,
      "distanceLabel": "10,5 km",
      "walkTime": "2 h",
      "gameTime": "≈ 3 h 15 – 4 h à tester",
      "ascentM": 105,
      "descentM": 105,
      "altMaxM": 59,
      "surface": "Village, berges, promenade littorale, quais, voie protégée, chemin de terre et vignes",
      "accessibility": "Non qualifiée avant reconnaissance ; longueur 10,5 km et plusieurs changements de surface/traversées.",
      "metricsStatus": "official-route-field-validation-required",
      "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/balade-autour-dargeles-sur-mer/",
      "note": "Métriques officielles : 10,5 km, +105 m / −105 m, 2 h, altitude max. 59 m.",
      "playerDistance": "10,5 km",
      "playerAscent": "+105 m / −105 m",
      "playerWalk": "2 h de marche officielle",
      "playerTerrain": "Village, plage, port, Racou et vignes",
      "playerNote": "La fiche officielle inclut des traversées et une exposition saisonnière. La reconnaissance terrain doit produire des variantes et un contrôle de sécurité précis.",
      "routeType": "Boucle",
      "officialBasis": "Autour d’Argelès-sur-Mer"
    },
    "teaser": "Du vieux village au Racou, suis une vraie boucle qui change sans cesse de paysage et retrouve ce qui relie tous ces visages.",
    "briefing": "Le fil fictif ne se voit pas. Tu dois l’inférer en passant du relief au village, de la Massane au front de mer, du port au Racou puis aux vignes. Les lieux de mémoire restent des lieux de respect : ils sont documentés dans le Journal, pas transformés en épreuves spectaculaires.",
    "objective": "Traverser sept changements de paysage, débloquer trois cartes-indices et nommer ce qui relie les différents Argelès.",
    "ending": "LIAISON. Argelès n’est pas coupé entre village et plage : rivière, port, Racou, mémoire et vignes composent un territoire continu.",
    "territoryFragment": "Fil",
    "cardTerrain": "Ville • littoral • chemin • vignes",
    "cardTime": "≈ 3 h 15 – 4 h avec le jeu",
    "playerMetrics": [
      [
        "🥾",
        "10,5 km"
      ],
      [
        "↗",
        "+105 m / −105 m"
      ],
      [
        "⏱",
        "2 h de marche officielle"
      ]
    ],
    "storyBeats": [
      {
        "title": "Quitter le relief",
        "text": "Le parcours commence au pied des Albères avant de se glisser dans le village."
      },
      {
        "title": "Comprendre le territoire",
        "text": "La Casa de l’Albera replace Argelès dans un massif, une histoire et des savoir-faire."
      },
      {
        "title": "La rivière comme couture",
        "text": "La Massane devient une ligne naturelle entre les quartiers traversés."
      },
      {
        "title": "Un musée sans murs",
        "text": "Photo Nature transforme temporairement la promenade en exposition à ciel ouvert."
      },
      {
        "title": "Le port fait la jonction",
        "text": "La passerelle et les quais conduisent du front de mer vers la côte rocheuse."
      },
      {
        "title": "Le recoin",
        "text": "Le Racou marque physiquement la transition entre sable et premiers reliefs rocheux."
      },
      {
        "title": "Retour par la terre",
        "text": "Le chemin du Priou et les vignes referment la boucle en ramenant le littoral vers le pied des Albères."
      }
    ],
    "playerStatus": "development-research",
    "scenarioDisclaimer": "Le « fil » est un dispositif narratif fictif. Les faits, la route et les métriques sont sourcés ; les traversées, points d’arrêt et énigmes restent à reconnaître.",
    "finalPrompt": "Quel mot décrit le mieux ce qui relie village, rivière, mer, Racou et vignes dans cette aventure ?",
    "clueCards": [
      {
        "unlockAt": 2,
        "title": "Carte 1 — Deux directions",
        "text": "Le parcours commence côté Albères mais vise la Méditerranée."
      },
      {
        "unlockAt": 5,
        "title": "Carte 2 — Des passages",
        "text": "Ruelles, rivière, passerelle et port assurent la continuité du trajet."
      },
      {
        "unlockAt": 7,
        "title": "Carte 3 — La boucle",
        "text": "Les vignes ramènent vers le départ : les paysages différents appartiennent au même territoire."
      }
    ],
    "developmentStatus": "ready-content-field-monitoring",
    "sourceCheckedAt": "2026-09-10",
    "fieldValidation": "monitoring-required",
    "validationTier": "ready-application-test"
  },
  {
    "id": "sa-sceau-pierres",
    "icon": "☀️",
    "title": "Le Sceau des Pierres",
    "tag": "Art roman • Architecture • Lecture du bâti",
    "duration": "Boucle à mesurer • cible ≈ 1 h – 1 h 30 avec le jeu",
    "difficulty": "Facile",
    "story": "Une fiche de relevé architectural fictive a perdu sa légende. Pour la reconstruire, il faut regarder la façade, les murs et les traces de l’ancienne abbaye comme un archéologue du quotidien.",
    "final": "PIERRE",
    "steps": [
      {
        "name": "Allée de la Liberté — point de départ",
        "fact": "La Maison de l’Art Roman, ouverte en 2003, est un centre d’interprétation consacré à l’ancien monastère bénédictin médiéval de Saint-André. Elle se trouve à côté de la mairie et de l’église.",
        "type": "choice",
        "q": "La Maison de l’Art Roman aide à comprendre quel ensemble disparu ou transformé ?",
        "answers": [
          "ancien monastere benedictin",
          "monastere benedictin",
          "ancien monastère bénédictin",
          "L’ancien monastère bénédictin"
        ],
        "hint": "Le cœur du village s’est développé autour de lui.",
        "token": "",
        "source": "https://www.saint-andre66.fr/maison-de-lart-roman/",
        "gpsConfidence": "official-benchmark-start-coordinate-not-exploraction-field-calibrated",
        "access": "Extérieur / espace public ou observation depuis l’espace public.",
        "season": "Toute l’année, sous réserve des conditions locales et des éventuelles fermetures.",
        "photoBonus": false,
        "expertBonus": "Observe le lieu réel et vérifie le repère avant de répondre.",
        "interaction": "choice",
        "locationMode": "gps",
        "hint2": "L’ancien monastère bénédictin.",
        "choices": [
          "L’ancien monastère bénédictin",
          "Une usine de dynamite",
          "Un port militaire",
          "Une mine de fer"
        ],
        "routeInstruction": "Rendez-vous allée de la Liberté, dans le secteur mairie / Maison de l’Art Roman / église. Le point exact doit être calibré en reconnaissance.",
        "lat": 42.5523,
        "lng": 2.9715,
        "radius": 100,
        "coordinateSource": "https://baludik.fr/parcours/2971-menace-sur-saint-andre/",
        "audience": {
          "enfant": {
            "q": "La Maison parle surtout de quoi : l’ancien monastère ou d’un port ?",
            "answers": [
              "ancien monastere benedictin",
              "monastere benedictin",
              "ancien monastère bénédictin",
              "L’ancien monastère bénédictin"
            ],
            "interaction": "choice",
            "choices": [
              "L’ancien monastère bénédictin",
              "Une usine de dynamite",
              "Un port militaire",
              "Une mine de fer"
            ],
            "hint": "Pense aux moines.",
            "hint2": "L’ancien monastère bénédictin."
          },
          "adulte": {
            "q": "Identifie l’ensemble historique que la Maison de l’Art Roman interprète.",
            "answers": [
              "ancien monastere benedictin",
              "monastere benedictin",
              "ancien monastère bénédictin",
              "L’ancien monastère bénédictin"
            ],
            "interaction": "text",
            "choices": [
              "L’ancien monastère bénédictin",
              "Une usine de dynamite",
              "Un port militaire",
              "Une mine de fer"
            ],
            "hint": "Pense aux moines.",
            "hint2": "L’ancien monastère bénédictin."
          },
          "ado": {
            "q": "La Maison de l’Art Roman aide à comprendre quel ensemble disparu ou transformé ?",
            "answers": [
              "ancien monastere benedictin",
              "monastere benedictin",
              "ancien monastère bénédictin",
              "L’ancien monastère bénédictin"
            ],
            "choices": [
              "L’ancien monastère bénédictin",
              "Une usine de dynamite",
              "Un port militaire",
              "Une mine de fer"
            ],
            "interaction": "choice",
            "hint": "Le cœur du village s’est développé autour de lui.",
            "hint2": "L’ancien monastère bénédictin."
          }
        },
        "validationFocus": "Le point GPS vient du départ du parcours officiel Baludik, pas d’un relevé Explor’Action ; recalibrage obligatoire.",
        "id": "sa-sceau-pierres-s01"
      },
      {
        "name": "Façade de l’église romane",
        "fact": "La façade conserve notamment un linteau sculpté en marbre et une fenêtre au cadre de marbre richement sculpté, éléments signalés par les sources patrimoniales locales.",
        "type": "multi",
        "q": "Sélectionne les deux éléments sculptés qui appartiennent réellement à cette façade.",
        "answers": [
          "linteau sculpte en marbre + fenetre au cadre de marbre sculpte"
        ],
        "hint": "Les deux réponses sont en pierre et sur la façade.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/explorer_la_destination_pyrenees_mediterranee/entrez-dans-lhistoire/route-de-lart-roman/",
        "gpsConfidence": "documented-work-coordinate",
        "access": "Extérieur / espace public ou observation depuis l’espace public.",
        "season": "Toute l’année, sous réserve des conditions locales et des éventuelles fermetures.",
        "photoBonus": false,
        "expertBonus": "Observe le lieu réel et vérifie le repère avant de répondre.",
        "interaction": "multi",
        "locationMode": "trail",
        "hint2": "Le linteau + la fenêtre encadrée de marbre.",
        "choices": [
          "Le linteau sculpté en marbre",
          "La fenêtre au cadre de marbre sculpté",
          "Un phare",
          "Une grue portuaire"
        ],
        "multiAnswers": [
          "Le linteau sculpté en marbre",
          "La fenêtre au cadre de marbre sculpté"
        ],
        "routeInstruction": "Place-toi dans l’espace public face à la façade. N’entre pas dans l’église pour résoudre cette étape.",
        "audience": {
          "enfant": {
            "q": "Choisis les deux éléments en pierre sculptée que tu vois sur la façade.",
            "choices": [
              "Le linteau sculpté en marbre",
              "La fenêtre au cadre de marbre sculpté",
              "Un phare",
              "Une grue portuaire"
            ],
            "interaction": "multi",
            "answers": [
              "linteau sculpte en marbre + fenetre au cadre de marbre sculpte"
            ],
            "hint": "Ils sont tous les deux en marbre.",
            "hint2": "Le linteau et la fenêtre."
          },
          "adulte": {
            "q": "Distingue, sur la façade, les deux éléments sculptés documentés par la Route de l’art roman.",
            "choices": [
              "Le linteau sculpté en marbre",
              "La fenêtre au cadre de marbre sculpté",
              "Un phare",
              "Une grue portuaire"
            ],
            "interaction": "text",
            "answers": [
              "linteau sculpte en marbre + fenetre au cadre de marbre sculpte"
            ],
            "hint": "Ils structurent les ouvertures.",
            "hint2": "Linteau + encadrement de fenêtre."
          },
          "ado": {
            "q": "Sélectionne les deux éléments sculptés qui appartiennent réellement à cette façade.",
            "answers": [
              "linteau sculpte en marbre + fenetre au cadre de marbre sculpte"
            ],
            "choices": [
              "Le linteau sculpté en marbre",
              "La fenêtre au cadre de marbre sculpté",
              "Un phare",
              "Une grue portuaire"
            ],
            "interaction": "multi",
            "hint": "Les deux réponses sont en pierre et sur la façade.",
            "hint2": "Le linteau + la fenêtre encadrée de marbre."
          }
        },
        "validationFocus": "Vérifier depuis quelle position les deux éléments sont lisibles et si une signalétique aide sans exiger l’entrée.",
        "id": "sa-sceau-pierres-s02"
      },
      {
        "name": "Le linteau de marbre",
        "fact": "Le linteau sculpté est daté du XIe siècle par la commune et l’Office de tourisme, qui le rapproche de celui de Saint-Génis-des-Fontaines.",
        "type": "choice",
        "q": "À quel siècle appartient le linteau indiqué par les sources locales ?",
        "answers": [
          "11",
          "xi",
          "xie",
          "xieme",
          "onzieme",
          "onzième",
          "XIe siècle"
        ],
        "hint": "Il appartient au premier âge de l’art roman local.",
        "token": "",
        "source": "https://www.saint-andre66.fr/decouvertes/",
        "gpsConfidence": "documented-work-coordinate",
        "access": "Extérieur / espace public ou observation depuis l’espace public.",
        "season": "Toute l’année, sous réserve des conditions locales et des éventuelles fermetures.",
        "photoBonus": false,
        "expertBonus": "Observe le lieu réel et vérifie le repère avant de répondre.",
        "interaction": "choice",
        "locationMode": "trail",
        "hint2": "XIe siècle.",
        "choices": [
          "XIe siècle",
          "XVe siècle",
          "XVIIIe siècle",
          "XXe siècle"
        ],
        "routeInstruction": "Observe le linteau depuis l’extérieur. La réponse doit être vérifiable grâce au cartel ou au support local retenu lors du playtest.",
        "audience": {
          "enfant": {
            "q": "Le linteau date surtout de quel siècle : XIe ou XXe ?",
            "answers": [
              "11",
              "xi",
              "xie",
              "xieme",
              "onzieme",
              "onzième",
              "XIe siècle"
            ],
            "interaction": "choice",
            "choices": [
              "XIe siècle",
              "XVe siècle",
              "XVIIIe siècle",
              "XXe siècle"
            ],
            "hint": "Il a près de mille ans.",
            "hint2": "XIe siècle."
          },
          "adulte": {
            "q": "Situe le linteau dans la chronologie de l’art roman local.",
            "answers": [
              "11",
              "xi",
              "xie",
              "xieme",
              "onzieme",
              "onzième",
              "XIe siècle"
            ],
            "interaction": "text",
            "choices": [
              "XIe siècle",
              "XVe siècle",
              "XVIIIe siècle",
              "XXe siècle"
            ],
            "hint": "Il a près de mille ans.",
            "hint2": "XIe siècle."
          },
          "ado": {
            "q": "À quel siècle appartient le linteau indiqué par les sources locales ?",
            "answers": [
              "11",
              "xi",
              "xie",
              "xieme",
              "onzieme",
              "onzième",
              "XIe siècle"
            ],
            "choices": [
              "XIe siècle",
              "XVe siècle",
              "XVIIIe siècle",
              "XXe siècle"
            ],
            "interaction": "choice",
            "hint": "Il appartient au premier âge de l’art roman local.",
            "hint2": "XIe siècle."
          }
        },
        "validationFocus": "Énigme documentaire à ne conserver que si le siècle est lisible sur un support accessible sur place.",
        "id": "sa-sceau-pierres-s03"
      },
      {
        "name": "Maçonnerie préromane — lecture du mur",
        "fact": "La mairie décrit sur une bonne hauteur des murs une maçonnerie préromane faite de gros galets de rivière disposés en arête de poisson, avec du mortier de chaux.",
        "type": "choice",
        "q": "Quel motif de pose dois-tu chercher dans les galets du mur ?",
        "answers": [
          "arete de poisson",
          "arête de poisson"
        ],
        "hint": "Le motif porte le nom d’une partie d’un poisson.",
        "token": "",
        "source": "https://www.saint-andre66.fr/eglise-romane/",
        "gpsConfidence": "documented-work-coordinate",
        "access": "Extérieur / espace public ou observation depuis l’espace public.",
        "season": "Toute l’année, sous réserve des conditions locales et des éventuelles fermetures.",
        "photoBonus": false,
        "expertBonus": "Observe le lieu réel et vérifie le repère avant de répondre.",
        "interaction": "choice",
        "locationMode": "trail",
        "hint2": "Arête de poisson.",
        "choices": [
          "Arête de poisson",
          "Damier noir et blanc",
          "Cercles concentriques",
          "Briques verticales"
        ],
        "routeInstruction": "Fais le tour extérieur uniquement par les cheminements publics et cherche une zone où la maçonnerie décrite est visible.",
        "audience": {
          "enfant": {
            "q": "Quel dessin font certains galets : une arête de poisson ou des cercles ?",
            "answers": [
              "arete de poisson",
              "arête de poisson"
            ],
            "interaction": "choice",
            "choices": [
              "Arête de poisson",
              "Damier noir et blanc",
              "Cercles concentriques",
              "Briques verticales"
            ],
            "hint": "Pense au squelette d’un poisson.",
            "hint2": "Arête de poisson."
          },
          "adulte": {
            "q": "Identifie le mode de pose caractéristique décrit pour les murs préromans.",
            "answers": [
              "arete de poisson",
              "arête de poisson"
            ],
            "interaction": "text",
            "choices": [
              "Arête de poisson",
              "Damier noir et blanc",
              "Cercles concentriques",
              "Briques verticales"
            ],
            "hint": "Pense au squelette d’un poisson.",
            "hint2": "Arête de poisson."
          },
          "ado": {
            "q": "Quel motif de pose dois-tu chercher dans les galets du mur ?",
            "answers": [
              "arete de poisson",
              "arête de poisson"
            ],
            "choices": [
              "Arête de poisson",
              "Damier noir et blanc",
              "Cercles concentriques",
              "Briques verticales"
            ],
            "interaction": "choice",
            "hint": "Le motif porte le nom d’une partie d’un poisson.",
            "hint2": "Arête de poisson."
          }
        },
        "validationFocus": "Étape terrain prioritaire : confirmer l’endroit exact où le motif est réellement observable sans ambiguïté.",
        "id": "sa-sceau-pierres-s04"
      },
      {
        "name": "Trois temps de l’abbaye",
        "fact": "Les sources locales placent l’origine du monastère au IXe siècle, une modernisation importante de l’église au XIe siècle et une consécration en 1121. Les sources divergent sur l’année précise de fondation (820 ou 823), donc le jeu retient volontairement le siècle.",
        "type": "sequence",
        "q": "Remets ces trois moments dans l’ordre chronologique.",
        "answers": [
          "fondation du monastere au ixe siecle > modernisation romane autour du xie siecle > consecration de l eglise en 1121"
        ],
        "hint": "Commence par l’origine du monastère.",
        "token": "",
        "source": "https://www.saint-andre66.fr/histoire-de-saint-andre-et-jumelage/",
        "gpsConfidence": "documented-work-coordinate",
        "access": "Extérieur / espace public ou observation depuis l’espace public.",
        "season": "Toute l’année, sous réserve des conditions locales et des éventuelles fermetures.",
        "photoBonus": false,
        "expertBonus": "Observe le lieu réel et vérifie le repère avant de répondre.",
        "interaction": "sequence",
        "locationMode": "trail",
        "hint2": "IXe → XIe → 1121.",
        "choices": [
          "Fondation du monastère au IXe siècle",
          "Modernisation romane autour du XIe siècle",
          "Consécration de l’église en 1121"
        ],
        "sequence": [
          "Fondation du monastère au IXe siècle",
          "Modernisation romane autour du XIe siècle",
          "Consécration de l’église en 1121"
        ],
        "routeInstruction": "Utilise les informations patrimoniales du secteur mairie / église / Maison de l’Art Roman ; ne cherche pas un point privé.",
        "audience": {
          "enfant": {
            "q": "Mets d’abord la fondation, puis les travaux romans, puis la consécration.",
            "answers": [
              "fondation du monastere au ixe siecle > modernisation romane autour du xie siecle > consecration de l eglise en 1121"
            ],
            "interaction": "sequence",
            "choices": [
              "Fondation du monastère au IXe siècle",
              "Modernisation romane autour du XIe siècle",
              "Consécration de l’église en 1121"
            ],
            "sequence": [
              "Fondation du monastère au IXe siècle",
              "Modernisation romane autour du XIe siècle",
              "Consécration de l’église en 1121"
            ],
            "hint": "Le IXe siècle vient en premier.",
            "hint2": "IXe → XIe → 1121."
          },
          "adulte": {
            "q": "Reconstitue la chronologie sans utiliser une année de fondation contestée entre les sources.",
            "answers": [
              "fondation du monastere au ixe siecle > modernisation romane autour du xie siecle > consecration de l eglise en 1121"
            ],
            "interaction": "text",
            "choices": [
              "Fondation du monastère au IXe siècle",
              "Modernisation romane autour du XIe siècle",
              "Consécration de l’église en 1121"
            ],
            "sequence": [
              "Fondation du monastère au IXe siècle",
              "Modernisation romane autour du XIe siècle",
              "Consécration de l’église en 1121"
            ],
            "hint": "Le IXe siècle vient en premier.",
            "hint2": "IXe → XIe → 1121."
          },
          "ado": {
            "q": "Remets ces trois moments dans l’ordre chronologique.",
            "answers": [
              "fondation du monastere au ixe siecle > modernisation romane autour du xie siecle > consecration de l eglise en 1121"
            ],
            "choices": [
              "Fondation du monastère au IXe siècle",
              "Modernisation romane autour du XIe siècle",
              "Consécration de l’église en 1121"
            ],
            "interaction": "sequence",
            "hint": "Commence par l’origine du monastère.",
            "hint2": "IXe → XIe → 1121."
          }
        },
        "validationFocus": "Faire relire la formulation par le service patrimoine en raison de la divergence 820/823.",
        "id": "sa-sceau-pierres-s05"
      },
      {
        "name": "Maison de l’Art Roman — synthèse",
        "fact": "Le centre d’interprétation expose des reproductions de sculptures de l’ancienne abbatiale et de pièces déplacées, dont des chapiteaux du XIIe siècle de l’ancien cloître.",
        "type": "text",
        "q": "Quel matériau commun relie le linteau, les sculptures et les galets que tu viens d’observer ?",
        "answers": [
          "pierre",
          "la pierre"
        ],
        "hint": "Marbre et galets appartiennent à la même grande famille de matière.",
        "token": "",
        "source": "https://www.saint-andre66.fr/maison-de-lart-roman/",
        "gpsConfidence": "documented-work-coordinate",
        "access": "Espace public extérieur ; entrée à la Maison facultative et soumise aux horaires d’ouverture.",
        "season": "Parcours extérieur possible toute l’année sous réserve locale ; Maison de l’Art Roman ouverte selon calendrier saisonnier officiel.",
        "photoBonus": false,
        "expertBonus": "Observe le lieu réel et vérifie le repère avant de répondre.",
        "interaction": "text",
        "locationMode": "trail",
        "hint2": "La pierre.",
        "routeInstruction": "Reviens vers la Maison de l’Art Roman pour fermer la micro-boucle. L’entrée reste facultative et dépend des horaires.",
        "audience": {
          "enfant": {
            "q": "Marbre + galets : quel grand mot les rassemble ?",
            "answers": [
              "pierre",
              "la pierre"
            ],
            "interaction": "text",
            "hint": "Le marbre en est une variété.",
            "hint2": "PIERRE."
          },
          "adulte": {
            "q": "Trouve la matière commune qui sert de fil conducteur à l’ensemble de l’aventure.",
            "answers": [
              "pierre",
              "la pierre"
            ],
            "interaction": "text",
            "hint": "Le marbre en est une variété.",
            "hint2": "PIERRE."
          },
          "ado": {
            "q": "Quel matériau commun relie le linteau, les sculptures et les galets que tu viens d’observer ?",
            "answers": [
              "pierre",
              "la pierre"
            ],
            "interaction": "text",
            "hint": "Marbre et galets appartiennent à la même grande famille de matière.",
            "hint2": "La pierre."
          }
        },
        "validationFocus": "Mesurer la boucle complète et vérifier qu’elle peut se terminer sans dépendre de l’ouverture du musée.",
        "id": "sa-sceau-pierres-s06"
      }
    ],
    "lastVerified": "2026-09-09",
    "sourceSummary": "https://www.saint-andre66.fr/eglise-romane/",
    "safety": "Micro-parcours urbain à reconnaître. Rester sur les espaces publics autour de la mairie et de l’église. L’entrée dans l’église ou la Maison de l’Art Roman ne doit jamais être nécessaire pour terminer la mission.",
    "offline": true,
    "territoryId": "standre",
    "route": {
      "level": "facile",
      "levelLabel": "Facile",
      "distanceKm": null,
      "distanceLabel": "À mesurer en reconnaissance",
      "walkTime": "À mesurer lors de la reconnaissance Explor’Action",
      "gameTime": "Cible ≈ 1 h – 1 h 30 à tester",
      "ascentM": null,
      "descentM": null,
      "altMaxM": null,
      "surface": "Rues et espaces publics du cœur historique",
      "accessibility": "À qualifier sur place. La Maison de l’Art Roman possède des dispositifs d’accessibilité, mais la mission extérieure doit être auditée indépendamment.",
      "metricsStatus": "field-required-no-invented-metric",
      "source": "https://www.saint-andre66.fr/eglise-romane/",
      "note": "Aucune distance/D+ Explor’Action n’est publiée à ce stade. Le parcours Baludik officiel local fait environ 1,06 km et 1 h 30, mais il ne sert que de benchmark : notre boucle originale doit être mesurée.",
      "playerDistance": "À mesurer",
      "playerAscent": "À mesurer",
      "playerWalk": "À mesurer",
      "playerTerrain": "Cœur historique urbain",
      "playerNote": "Benchmark externe ≈ 1,06 km pour un jeu local, non repris comme métrique Explor’Action. Mesure GNSS/podomètre et reconnaissance obligatoires.",
      "routeType": "Micro-boucle à construire",
      "officialBasis": "Patrimoine du cœur roman + benchmark de longueur, pas de tracé copié"
    },
    "teaser": "Pas de monstres ni de scénario copié : ici, la pierre elle-même devient l’interface du jeu.",
    "briefing": "Tu vas lire l’ancienne abbatiale comme un document. Le scénario ne reprend pas le parcours Baludik local : il s’appuie sur l’architecture, les matériaux et les sources communales. L’objectif est d’avoir plus souvent les yeux sur la façade que sur l’écran.",
    "objective": "Valider six lectures du bâti, débloquer trois cartes-indices et retrouver la matière qui relie tout l’édifice.",
    "ending": "PIERRE. Marbre sculpté, galets en arête de poisson, blocs remployés : l’histoire du lieu se lit directement dans sa matière.",
    "territoryFragment": "Pierre",
    "cardTerrain": "Cœur historique • extérieur",
    "cardTime": "≈ 1 h – 1 h 30 cible",
    "playerMetrics": [
      [
        "🥾",
        "Distance à mesurer"
      ],
      [
        "↗",
        "D+ à mesurer"
      ],
      [
        "⏱",
        "Cible 1 h – 1 h 30"
      ]
    ],
    "storyBeats": [
      {
        "title": "Un centre pour comprendre",
        "text": "La Maison de l’Art Roman donne le contexte de l’ancien monastère sans obliger le joueur à entrer."
      },
      {
        "title": "Lire la façade",
        "text": "Le linteau et l’encadrement de fenêtre montrent que la sculpture fait partie de l’architecture."
      },
      {
        "title": "Le temps dans le marbre",
        "text": "Le XIe siècle replace le linteau dans les premiers développements de la sculpture romane locale."
      },
      {
        "title": "Le mur parle",
        "text": "Les galets disposés en arête de poisson transforment la maçonnerie elle-même en indice de construction."
      },
      {
        "title": "Ne pas forcer une date",
        "text": "Les sources locales ne donnent pas toutes la même année de fondation : l’aventure retient le IXe siècle et documente l’incertitude."
      },
      {
        "title": "La matière rassemble tout",
        "text": "Le dernier mot ne vient pas d’une légende : il est sous les yeux depuis le début."
      }
    ],
    "playerStatus": "development-research",
    "scenarioDisclaimer": "La fiche de relevé perdue est fictive. Les informations architecturales sont sourcées. La distance, le dénivelé, l’accessibilité et l’observabilité restent à mesurer et valider.",
    "finalPrompt": "Marbre, galets et blocs : quel mot unique relie les matériaux observés pendant toute l’aventure ?",
    "clueCards": [
      {
        "unlockAt": 2,
        "title": "Carte 1 — Sculptée",
        "text": "Le fil conducteur est une matière que l’on peut tailler et sculpter."
      },
      {
        "unlockAt": 4,
        "title": "Carte 2 — Assemblée",
        "text": "Cette même famille de matière forme aussi les murs, sous forme de galets et de blocs."
      },
      {
        "unlockAt": 6,
        "title": "Carte 3 — Sous tes yeux",
        "text": "Le mot final n’est pas une date ni un personnage : c’est la matière du monument."
      }
    ],
    "developmentStatus": "ready-content-field-monitoring",
    "sourceCheckedAt": "2026-09-10",
    "fieldValidation": "monitoring-required",
    "validationTier": "ready-application-test"
  },
  {
    "id": "pv-cap-signaux",
    "icon": "🌊",
    "title": "Le Cap des Signaux",
    "tag": "Cap Béar • Littoral • Paulilles",
    "duration": "4 h de marche officielle • ≈ 5 h 30 – 6 h 30 avec le jeu",
    "difficulty": "Intermédiaire",
    "story": "Un carnet de veille maritime fictif ne comporte plus que sept marques. Pour les comprendre, il faut suivre le cap, lire les changements de relief et retrouver comment le littoral guide ou protège ceux qui le parcourent.",
    "final": "HORIZON",
    "steps": [
      {
        "name": "La Jetée — le premier signal",
        "fact": "La boucle officielle quitte le port par la Jetée et suit le balisage du sentier littoral avant de monter vers le Fort Béar.",
        "type": "sequence",
        "q": "Remets les trois premiers repères dans l’ordre de départ.",
        "answers": [
          "Port > Jetée > Fort Béar"
        ],
        "hint": "Le port vient avant la Jetée.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/grand-tour-du-cap-bear-par-paulilles/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "sequence",
        "locationMode": "trail",
        "hint2": "Port → Jetée → Fort Béar.",
        "routeInstruction": "Depuis l’Office de tourisme, contourne le port vers la Jetée puis suis le balisage littoral.",
        "audience": {
          "enfant": {
            "q": "En famille : Remets les trois premiers repères dans l’ordre de départ.",
            "answers": [
              "Port > Jetée > Fort Béar"
            ],
            "interaction": "sequence",
            "hint": "Le port vient avant la Jetée.",
            "hint2": "Port → Jetée → Fort Béar.",
            "choices": [
              "Port",
              "Jetée",
              "Fort Béar"
            ],
            "sequence": [
              "Port",
              "Jetée",
              "Fort Béar"
            ]
          },
          "adulte": {
            "q": "En autonomie : Remets les trois premiers repères dans l’ordre de départ.",
            "answers": [
              "Port > Jetée > Fort Béar"
            ],
            "interaction": "text",
            "hint": "Le port vient avant la Jetée.",
            "hint2": "Port → Jetée → Fort Béar.",
            "choices": [
              "Port",
              "Jetée",
              "Fort Béar"
            ],
            "sequence": [
              "Port",
              "Jetée",
              "Fort Béar"
            ]
          },
          "ado": {
            "q": "Remets les trois premiers repères dans l’ordre de départ.",
            "answers": [
              "Port > Jetée > Fort Béar"
            ],
            "choices": [
              "Port",
              "Jetée",
              "Fort Béar"
            ],
            "interaction": "sequence",
            "hint": "Le port vient avant la Jetée.",
            "hint2": "Port → Jetée → Fort Béar."
          }
        },
        "validationFocus": "Confirmer le meilleur point de départ joueur et la continuité du balisage.",
        "choices": [
          "Port",
          "Jetée",
          "Fort Béar"
        ],
        "sequence": [
          "Port",
          "Jetée",
          "Fort Béar"
        ],
        "id": "pv-cap-signaux-s01"
      },
      {
        "name": "Montée vers Fort Béar",
        "fact": "Depuis l’anse de la Jetée, la fiche officielle indique de prendre à droite le chemin montant vers Fort Béar.",
        "type": "choice",
        "q": "Après l’anse de la Jetée, quel repère devient l’objectif de la montée ?",
        "answers": [
          "fort bear",
          "fort béar",
          "Fort Béar"
        ],
        "hint": "Il porte le nom du cap.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/grand-tour-du-cap-bear-par-paulilles/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "choice",
        "locationMode": "trail",
        "hint2": "Fort Béar.",
        "routeInstruction": "Reste sur le cheminement officiel vers Fort Béar.",
        "audience": {
          "enfant": {
            "q": "En famille : Après l’anse de la Jetée, quel repère devient l’objectif de la montée ?",
            "answers": [
              "fort bear",
              "fort béar",
              "Fort Béar"
            ],
            "interaction": "choice",
            "hint": "Il porte le nom du cap.",
            "hint2": "Fort Béar.",
            "choices": [
              "Fort Béar",
              "Château Royal",
              "Tour de la Massane",
              "Racou"
            ]
          },
          "adulte": {
            "q": "En autonomie : Après l’anse de la Jetée, quel repère devient l’objectif de la montée ?",
            "answers": [
              "fort bear",
              "fort béar",
              "Fort Béar"
            ],
            "interaction": "text",
            "hint": "Il porte le nom du cap.",
            "hint2": "Fort Béar.",
            "choices": [
              "Fort Béar",
              "Château Royal",
              "Tour de la Massane",
              "Racou"
            ]
          },
          "ado": {
            "q": "Après l’anse de la Jetée, quel repère devient l’objectif de la montée ?",
            "answers": [
              "fort bear",
              "fort béar",
              "Fort Béar"
            ],
            "choices": [
              "Fort Béar",
              "Château Royal",
              "Tour de la Massane",
              "Racou"
            ],
            "interaction": "choice",
            "hint": "Il porte le nom du cap.",
            "hint2": "Fort Béar."
          }
        },
        "validationFocus": "Vérifier signalétique, pentes, exposition et possibilité de résoudre sans quitter le sentier.",
        "choices": [
          "Fort Béar",
          "Château Royal",
          "Tour de la Massane",
          "Racou"
        ],
        "id": "pv-cap-signaux-s02"
      },
      {
        "name": "Phare et bunkers — lire le cap",
        "fact": "La fiche officielle mentionne la possibilité de rejoindre le phare et les bunkers depuis le secteur de Fort Béar.",
        "type": "multi",
        "q": "Quels deux types de repères sont explicitement signalés autour de Fort Béar par la fiche officielle ?",
        "answers": [
          "phare + bunkers"
        ],
        "hint": "L’un guide la navigation, l’autre vient de la défense.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/grand-tour-du-cap-bear-par-paulilles/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "multi",
        "locationMode": "trail",
        "hint2": "Phare + bunkers.",
        "routeInstruction": "Ne prends que les accès autorisés ; aucun ouvrage fermé ne doit être franchi.",
        "audience": {
          "enfant": {
            "q": "En famille : Quels deux types de repères sont explicitement signalés autour de Fort Béar par la fiche officielle ?",
            "answers": [
              "phare + bunkers"
            ],
            "interaction": "multi",
            "hint": "L’un guide la navigation, l’autre vient de la défense.",
            "hint2": "Phare + bunkers.",
            "choices": [
              "Le phare",
              "Les bunkers",
              "Un cloître",
              "Un dolmen"
            ],
            "multiAnswers": [
              "Le phare",
              "Les bunkers"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quels deux types de repères sont explicitement signalés autour de Fort Béar par la fiche officielle ?",
            "answers": [
              "phare + bunkers"
            ],
            "interaction": "text",
            "hint": "L’un guide la navigation, l’autre vient de la défense.",
            "hint2": "Phare + bunkers.",
            "choices": [
              "Le phare",
              "Les bunkers",
              "Un cloître",
              "Un dolmen"
            ],
            "multiAnswers": [
              "Le phare",
              "Les bunkers"
            ]
          },
          "ado": {
            "q": "Quels deux types de repères sont explicitement signalés autour de Fort Béar par la fiche officielle ?",
            "answers": [
              "phare + bunkers"
            ],
            "choices": [
              "Le phare",
              "Les bunkers",
              "Un cloître",
              "Un dolmen"
            ],
            "interaction": "multi",
            "hint": "L’un guide la navigation, l’autre vient de la défense.",
            "hint2": "Phare + bunkers."
          }
        },
        "validationFocus": "Déterminer quels éléments sont réellement visibles depuis un point public stable.",
        "choices": [
          "Le phare",
          "Les bunkers",
          "Un cloître",
          "Un dolmen"
        ],
        "multiAnswers": [
          "Le phare",
          "Les bunkers"
        ],
        "id": "pv-cap-signaux-s03"
      },
      {
        "name": "Les criques du sentier littoral",
        "fact": "Le tronçon entre Fort Béar et Paulilles est décrit comme un sentier littoral assez escarpé passant par de petites criques.",
        "type": "choice",
        "q": "Quel mot décrit le mieux le terrain annoncé ici ?",
        "answers": [
          "escarpe",
          "escarpé"
        ],
        "hint": "Le relief devient plus marqué.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/grand-tour-du-cap-bear-par-paulilles/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "choice",
        "locationMode": "trail",
        "hint2": "Escarpé.",
        "routeInstruction": "Suis strictement le sentier littoral balisé vers Paulilles.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel mot décrit le mieux le terrain annoncé ici ?",
            "answers": [
              "escarpe",
              "escarpé"
            ],
            "interaction": "choice",
            "hint": "Le relief devient plus marqué.",
            "hint2": "Escarpé.",
            "choices": [
              "Escarpé",
              "Entièrement plat",
              "Urbain couvert",
              "Autoroutier"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quel mot décrit le mieux le terrain annoncé ici ?",
            "answers": [
              "escarpe",
              "escarpé"
            ],
            "interaction": "text",
            "hint": "Le relief devient plus marqué.",
            "hint2": "Escarpé.",
            "choices": [
              "Escarpé",
              "Entièrement plat",
              "Urbain couvert",
              "Autoroutier"
            ]
          },
          "ado": {
            "q": "Quel mot décrit le mieux le terrain annoncé ici ?",
            "answers": [
              "escarpe",
              "escarpé"
            ],
            "choices": [
              "Escarpé",
              "Entièrement plat",
              "Urbain couvert",
              "Autoroutier"
            ],
            "interaction": "choice",
            "hint": "Le relief devient plus marqué.",
            "hint2": "Escarpé."
          }
        },
        "validationFocus": "Reconnaître les passages délicats, zones glissantes et points où le téléphone doit rester rangé.",
        "choices": [
          "Escarpé",
          "Entièrement plat",
          "Urbain couvert",
          "Autoroutier"
        ],
        "id": "pv-cap-signaux-s04"
      },
      {
        "name": "Plage Bernardi — la respiration",
        "fact": "La randonnée officielle rejoint la plage Bernardi avant l’anse de Paulilles.",
        "type": "sequence",
        "q": "Dans quel ordre le parcours atteint-il ces deux sites ?",
        "answers": [
          "Plage Bernardi > Anse de Paulilles"
        ],
        "hint": "Bernardi vient avant Paulilles.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/grand-tour-du-cap-bear-par-paulilles/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": true,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "sequence",
        "locationMode": "trail",
        "hint2": "Bernardi → Paulilles.",
        "routeInstruction": "Continue sur le balisage jusqu’à Bernardi puis Paulilles.",
        "audience": {
          "enfant": {
            "q": "En famille : Dans quel ordre le parcours atteint-il ces deux sites ?",
            "answers": [
              "Plage Bernardi > Anse de Paulilles"
            ],
            "interaction": "sequence",
            "hint": "Bernardi vient avant Paulilles.",
            "hint2": "Bernardi → Paulilles.",
            "choices": [
              "Plage Bernardi",
              "Anse de Paulilles"
            ],
            "sequence": [
              "Plage Bernardi",
              "Anse de Paulilles"
            ]
          },
          "adulte": {
            "q": "En autonomie : Dans quel ordre le parcours atteint-il ces deux sites ?",
            "answers": [
              "Plage Bernardi > Anse de Paulilles"
            ],
            "interaction": "text",
            "hint": "Bernardi vient avant Paulilles.",
            "hint2": "Bernardi → Paulilles.",
            "choices": [
              "Plage Bernardi",
              "Anse de Paulilles"
            ],
            "sequence": [
              "Plage Bernardi",
              "Anse de Paulilles"
            ]
          },
          "ado": {
            "q": "Dans quel ordre le parcours atteint-il ces deux sites ?",
            "answers": [
              "Plage Bernardi > Anse de Paulilles"
            ],
            "choices": [
              "Plage Bernardi",
              "Anse de Paulilles"
            ],
            "interaction": "sequence",
            "hint": "Bernardi vient avant Paulilles.",
            "hint2": "Bernardi → Paulilles."
          }
        },
        "validationFocus": "Vérifier saisonnalité, fréquentation et emplacement d’une étape sans gêner les usages de plage.",
        "choices": [
          "Plage Bernardi",
          "Anse de Paulilles"
        ],
        "sequence": [
          "Plage Bernardi",
          "Anse de Paulilles"
        ],
        "id": "pv-cap-signaux-s05"
      },
      {
        "name": "Paulilles — le cap change de mémoire",
        "fact": "L’anse de Paulilles constitue le grand point de retournement du circuit ; la fiche officielle conduit ensuite vers le parking et la voie ferrée pour retrouver le balisage.",
        "type": "choice",
        "q": "Après l’anse de Paulilles, quel grand repère linéaire faut-il dépasser pour retrouver le retour ?",
        "answers": [
          "voie ferree",
          "voie ferrée",
          "ligne de chemin de fer",
          "La voie ferrée"
        ],
        "hint": "Le train traverse ce secteur.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/grand-tour-du-cap-bear-par-paulilles/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "choice",
        "locationMode": "trail",
        "hint2": "La voie ferrée.",
        "routeInstruction": "Depuis Paulilles, suis l’itinéraire officiel vers le parking puis la voie ferrée.",
        "audience": {
          "enfant": {
            "q": "En famille : Après l’anse de Paulilles, quel grand repère linéaire faut-il dépasser pour retrouver le retour ?",
            "answers": [
              "voie ferree",
              "voie ferrée",
              "ligne de chemin de fer",
              "La voie ferrée"
            ],
            "interaction": "choice",
            "hint": "Le train traverse ce secteur.",
            "hint2": "La voie ferrée.",
            "choices": [
              "La voie ferrée",
              "Une autoroute",
              "Un canal",
              "Une digue militaire"
            ]
          },
          "adulte": {
            "q": "En autonomie : Après l’anse de Paulilles, quel grand repère linéaire faut-il dépasser pour retrouver le retour ?",
            "answers": [
              "voie ferree",
              "voie ferrée",
              "ligne de chemin de fer",
              "La voie ferrée"
            ],
            "interaction": "text",
            "hint": "Le train traverse ce secteur.",
            "hint2": "La voie ferrée.",
            "choices": [
              "La voie ferrée",
              "Une autoroute",
              "Un canal",
              "Une digue militaire"
            ]
          },
          "ado": {
            "q": "Après l’anse de Paulilles, quel grand repère linéaire faut-il dépasser pour retrouver le retour ?",
            "answers": [
              "voie ferree",
              "voie ferrée",
              "ligne de chemin de fer",
              "La voie ferrée"
            ],
            "choices": [
              "La voie ferrée",
              "Une autoroute",
              "Un canal",
              "Une digue militaire"
            ],
            "interaction": "choice",
            "hint": "Le train traverse ce secteur.",
            "hint2": "La voie ferrée."
          }
        },
        "validationFocus": "Contrôler traversée/ouvrage ferroviaire, signalétique et sécurité exacte.",
        "choices": [
          "La voie ferrée",
          "Une autoroute",
          "Un canal",
          "Une digue militaire"
        ],
        "id": "pv-cap-signaux-s06"
      },
      {
        "name": "Retour par les vignes — refermer l’horizon",
        "fact": "Après Paulilles, le circuit revient à Port-Vendres par le Pont de l’Amour, le tunnel de la gare et la route Stratégique ; l’Office résume ce retour comme passant par les vignes au-dessus de Port-Vendres.",
        "type": "sequence",
        "q": "Choisis l’ordre final du retour.",
        "answers": [
          "Pont de l’Amour > Tunnel de la gare > Route Stratégique"
        ],
        "hint": "Le lotissement précède le tunnel.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/grand-tour-du-cap-bear-par-paulilles/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "sequence",
        "locationMode": "trail",
        "hint2": "Pont de l’Amour → tunnel de la gare → route Stratégique.",
        "routeInstruction": "Suis le balisage officiel jusqu’au Pont de l’Amour, puis le tunnel et la route Stratégique.",
        "audience": {
          "enfant": {
            "q": "En famille : Choisis l’ordre final du retour.",
            "answers": [
              "Pont de l’Amour > Tunnel de la gare > Route Stratégique"
            ],
            "interaction": "sequence",
            "hint": "Le lotissement précède le tunnel.",
            "hint2": "Pont de l’Amour → tunnel de la gare → route Stratégique.",
            "choices": [
              "Pont de l’Amour",
              "Tunnel de la gare",
              "Route Stratégique"
            ],
            "sequence": [
              "Pont de l’Amour",
              "Tunnel de la gare",
              "Route Stratégique"
            ]
          },
          "adulte": {
            "q": "En autonomie : Choisis l’ordre final du retour.",
            "answers": [
              "Pont de l’Amour > Tunnel de la gare > Route Stratégique"
            ],
            "interaction": "text",
            "hint": "Le lotissement précède le tunnel.",
            "hint2": "Pont de l’Amour → tunnel de la gare → route Stratégique.",
            "choices": [
              "Pont de l’Amour",
              "Tunnel de la gare",
              "Route Stratégique"
            ],
            "sequence": [
              "Pont de l’Amour",
              "Tunnel de la gare",
              "Route Stratégique"
            ]
          },
          "ado": {
            "q": "Choisis l’ordre final du retour.",
            "answers": [
              "Pont de l’Amour > Tunnel de la gare > Route Stratégique"
            ],
            "choices": [
              "Pont de l’Amour",
              "Tunnel de la gare",
              "Route Stratégique"
            ],
            "interaction": "sequence",
            "hint": "Le lotissement précède le tunnel.",
            "hint2": "Pont de l’Amour → tunnel de la gare → route Stratégique."
          }
        },
        "validationFocus": "Valider la fin de boucle et le point de final à l’écart de la circulation.",
        "choices": [
          "Pont de l’Amour",
          "Tunnel de la gare",
          "Route Stratégique"
        ],
        "sequence": [
          "Pont de l’Amour",
          "Tunnel de la gare",
          "Route Stratégique"
        ],
        "id": "pv-cap-signaux-s07"
      }
    ],
    "lastVerified": "2026-09-09",
    "sourceSummary": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/grand-tour-du-cap-bear-par-paulilles/",
    "safety": "Sentier littoral parfois escarpé : chaussures adaptées, eau, protection solaire, prudence au vent. Itinéraire officiellement déconseillé en forte tramontane. Aucun raccourci hors sentier.",
    "offline": true,
    "territoryId": "portvendres",
    "route": {
      "level": "intermédiaire",
      "levelLabel": "Intermédiaire",
      "distanceKm": 11.6,
      "distanceLabel": "11,6 km",
      "walkTime": "4 h",
      "gameTime": "≈ 5 h 30 – 6 h 30 avec le jeu",
      "ascentM": 371,
      "descentM": 351,
      "altMaxM": 109,
      "surface": "Port, sentier littoral escarpé, criques et retour par les vignes",
      "accessibility": "À qualifier en reconnaissance Explor’Action.",
      "metricsStatus": "official-route-field-validation-required",
      "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/grand-tour-du-cap-bear-par-paulilles/",
      "note": "Itinéraire déconseillé en forte tramontane selon l’Office de tourisme.",
      "playerDistance": "11,6 km",
      "playerAscent": "+371 m / −351 m",
      "playerWalk": "4 h de marche officielle",
      "playerTerrain": "Port, sentier littoral escarpé, criques et retour par les vignes",
      "playerNote": "Base officielle de randonnée. Publication bloquée jusqu’à reconnaissance terrain et playtest.",
      "routeType": "Boucle",
      "officialBasis": "Grand tour du Cap Béar par Paulilles",
      "durationLabel": "4 h de marche officielle • ≈ 5 h 30 – 6 h 30 avec le jeu"
    },
    "teaser": "Du port à Paulilles, franchis le Cap Béar comme une ligne de signaux entre mer, fortifications, criques et vignes.",
    "briefing": "Ici, les étapes ne doivent jamais t’inciter à quitter le sentier. La côte elle-même est le plateau de jeu : relief, ouvrages, plage et retour par la terre.",
    "objective": "Relier sept repères du grand tour et reconstruire la logique du cap.",
    "ending": "HORIZON. Du phare au retour par les vignes, chaque repère change ton rapport entre mer et terre.",
    "territoryFragment": "HORIZON",
    "cardTerrain": "Port, sentier littoral escarpé, criques et retour par les vignes",
    "cardTime": "≈ 5 h 30 – 6 h 30 avec le jeu",
    "playerMetrics": [
      [
        "🥾",
        "11,6 km"
      ],
      [
        "↗",
        "+371 m / −351 m"
      ],
      [
        "⏱",
        "4 h de marche officielle"
      ]
    ],
    "storyBeats": [
      {
        "title": "Le port derrière toi",
        "text": "La Jetée transforme le port en seuil."
      },
      {
        "title": "Le relief prend la parole",
        "text": "Fort Béar apparaît parce que la côte s’élève."
      },
      {
        "title": "Deux fonctions du cap",
        "text": "Phare et bunkers rappellent guidage et défense."
      },
      {
        "title": "La côte devient physique",
        "text": "Les criques imposent de lire le terrain avant l’écran."
      },
      {
        "title": "Une plage comme respiration",
        "text": "Bernardi marque une pause entre rocher et site de Paulilles."
      },
      {
        "title": "Le grand retournement",
        "text": "Paulilles ouvre le retour vers la terre."
      },
      {
        "title": "Mer et vignes réunies",
        "text": "La boucle se ferme au-dessus du port."
      }
    ],
    "playerStatus": "development-research",
    "scenarioDisclaimer": "Le registre de veille est fictif ; itinéraire et métriques viennent de l’Office de tourisme. Les observations exactes et les points de jeu doivent être validés sur place.",
    "finalPrompt": "Quel mot désigne la ligne lointaine que marins et marcheurs utilisent pour se repérer ?",
    "clueCards": [
      {
        "unlockAt": 2,
        "title": "Carte 1 — Veiller",
        "text": "Le cap porte des ouvrages qui regardent vers la mer."
      },
      {
        "unlockAt": 5,
        "title": "Carte 2 — Franchir",
        "text": "Le sentier oblige à suivre la forme réelle de la côte."
      },
      {
        "unlockAt": 7,
        "title": "Carte 3 — Regarder loin",
        "text": "Le mot final est ce que la mer dessine devant toi."
      }
    ],
    "developmentStatus": "ready-content-field-monitoring",
    "sourceCheckedAt": "2026-09-10",
    "fieldValidation": "monitoring-required",
    "validationTier": "ready-application-test"
  },
  {
    "id": "pv-muletiers-schiste",
    "icon": "🍇",
    "title": "Les Muletiers de Schiste",
    "tag": "Vignes • Cols • Chemins anciens",
    "duration": "4 h de marche officielle • ≈ 5 h – 6 h avec le jeu",
    "difficulty": "Facile",
    "story": "Une cargaison fictive doit regagner Port-Vendres sans carte moderne. Les joueurs reconstruisent la logique d’un ancien passage entre vignoble, cols et Cosprons.",
    "final": "PASSAGE",
    "steps": [
      {
        "name": "Castellane — quitter le port",
        "fact": "La randonnée part de l’Office de tourisme, monte place de la Castellane puis emprunte la route Stratégique.",
        "type": "sequence",
        "q": "Reconstruis le départ de la boucle.",
        "answers": [
          "Office de tourisme > Place de la Castellane > Route Stratégique"
        ],
        "hint": "La place vient avant la route.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/randonnee-dans-les-vignes/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "sequence",
        "locationMode": "trail",
        "hint2": "Office → Castellane → route Stratégique.",
        "routeInstruction": "Suis l’enchaînement officiel vers la route Stratégique.",
        "audience": {
          "enfant": {
            "q": "En famille : Reconstruis le départ de la boucle.",
            "answers": [
              "Office de tourisme > Place de la Castellane > Route Stratégique"
            ],
            "interaction": "sequence",
            "hint": "La place vient avant la route.",
            "hint2": "Office → Castellane → route Stratégique.",
            "choices": [
              "Office de tourisme",
              "Place de la Castellane",
              "Route Stratégique"
            ],
            "sequence": [
              "Office de tourisme",
              "Place de la Castellane",
              "Route Stratégique"
            ]
          },
          "adulte": {
            "q": "En autonomie : Reconstruis le départ de la boucle.",
            "answers": [
              "Office de tourisme > Place de la Castellane > Route Stratégique"
            ],
            "interaction": "text",
            "hint": "La place vient avant la route.",
            "hint2": "Office → Castellane → route Stratégique.",
            "choices": [
              "Office de tourisme",
              "Place de la Castellane",
              "Route Stratégique"
            ],
            "sequence": [
              "Office de tourisme",
              "Place de la Castellane",
              "Route Stratégique"
            ]
          },
          "ado": {
            "q": "Reconstruis le départ de la boucle.",
            "answers": [
              "Office de tourisme > Place de la Castellane > Route Stratégique"
            ],
            "choices": [
              "Office de tourisme",
              "Place de la Castellane",
              "Route Stratégique"
            ],
            "interaction": "sequence",
            "hint": "La place vient avant la route.",
            "hint2": "Office → Castellane → route Stratégique."
          }
        },
        "validationFocus": "Confirmer sur place la formulation, l’observabilité, le point exact et la sécurité.",
        "choices": [
          "Office de tourisme",
          "Place de la Castellane",
          "Route Stratégique"
        ],
        "sequence": [
          "Office de tourisme",
          "Place de la Castellane",
          "Route Stratégique"
        ],
        "id": "pv-muletiers-schiste-s01"
      },
      {
        "name": "Val de Pinte — suivre l’eau",
        "fact": "La fiche indique de tourner sur le chemin du Val de Pinte puis de suivre le ruisseau.",
        "type": "choice",
        "q": "Quel élément naturel sert ici de compagnon de cheminement ?",
        "answers": [
          "ruisseau",
          "le ruisseau"
        ],
        "hint": "C’est un petit cours d’eau.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/randonnee-dans-les-vignes/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "choice",
        "locationMode": "trail",
        "hint2": "Le ruisseau.",
        "routeInstruction": "Prends le chemin du Val de Pinte et reste sur l’itinéraire décrit.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel élément naturel sert ici de compagnon de cheminement ?",
            "answers": [
              "ruisseau",
              "le ruisseau"
            ],
            "interaction": "choice",
            "hint": "C’est un petit cours d’eau.",
            "hint2": "Le ruisseau.",
            "choices": [
              "Le ruisseau",
              "La mer",
              "Une falaise",
              "Un lac"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quel élément naturel sert ici de compagnon de cheminement ?",
            "answers": [
              "ruisseau",
              "le ruisseau"
            ],
            "interaction": "text",
            "hint": "C’est un petit cours d’eau.",
            "hint2": "Le ruisseau.",
            "choices": [
              "Le ruisseau",
              "La mer",
              "Une falaise",
              "Un lac"
            ]
          },
          "ado": {
            "q": "Quel élément naturel sert ici de compagnon de cheminement ?",
            "answers": [
              "ruisseau",
              "le ruisseau"
            ],
            "choices": [
              "Le ruisseau",
              "La mer",
              "Une falaise",
              "Un lac"
            ],
            "interaction": "choice",
            "hint": "C’est un petit cours d’eau.",
            "hint2": "Le ruisseau."
          }
        },
        "validationFocus": "Vérifier débit/saisonnalité : la réponse ne doit pas dépendre de la présence visible d’eau.",
        "choices": [
          "Le ruisseau",
          "La mer",
          "Une falaise",
          "Un lac"
        ],
        "id": "pv-muletiers-schiste-s02"
      },
      {
        "name": "Sous la D914 — changer de niveau",
        "fact": "Après une montée, l’itinéraire passe par un tunnel sous la D914 avant de rejoindre un chemin en lacets.",
        "type": "choice",
        "q": "Quel ouvrage permet de passer sous la D914 ?",
        "answers": [
          "tunnel",
          "un tunnel"
        ],
        "hint": "On passe dessous.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/randonnee-dans-les-vignes/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "choice",
        "locationMode": "trail",
        "hint2": "Un tunnel.",
        "routeInstruction": "Emprunte uniquement le passage officiel sous la D914.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel ouvrage permet de passer sous la D914 ?",
            "answers": [
              "tunnel",
              "un tunnel"
            ],
            "interaction": "choice",
            "hint": "On passe dessous.",
            "hint2": "Un tunnel.",
            "choices": [
              "Un tunnel",
              "Une passerelle maritime",
              "Un bac",
              "Un téléphérique"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quel ouvrage permet de passer sous la D914 ?",
            "answers": [
              "tunnel",
              "un tunnel"
            ],
            "interaction": "text",
            "hint": "On passe dessous.",
            "hint2": "Un tunnel.",
            "choices": [
              "Un tunnel",
              "Une passerelle maritime",
              "Un bac",
              "Un téléphérique"
            ]
          },
          "ado": {
            "q": "Quel ouvrage permet de passer sous la D914 ?",
            "answers": [
              "tunnel",
              "un tunnel"
            ],
            "choices": [
              "Un tunnel",
              "Une passerelle maritime",
              "Un bac",
              "Un téléphérique"
            ],
            "interaction": "choice",
            "hint": "On passe dessous.",
            "hint2": "Un tunnel."
          }
        },
        "validationFocus": "Audit sécurité du tunnel, visibilité et partage d’usage.",
        "choices": [
          "Un tunnel",
          "Une passerelle maritime",
          "Un bac",
          "Un téléphérique"
        ],
        "id": "pv-muletiers-schiste-s03"
      },
      {
        "name": "Coll d’en Raixat — prendre de la hauteur",
        "fact": "Le chemin en lacets conduit d’abord au coll d’en Raixat puis au coll de Mala Cara.",
        "type": "sequence",
        "q": "Quel col vient en premier ?",
        "answers": [
          "Coll d’en Raixat > Coll de Mala Cara"
        ],
        "hint": "Raixat précède Mala Cara dans la fiche.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/randonnee-dans-les-vignes/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "sequence",
        "locationMode": "trail",
        "hint2": "Raixat → Mala Cara.",
        "routeInstruction": "Suis les lacets et le balisage vers les deux cols.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel col vient en premier ?",
            "answers": [
              "Coll d’en Raixat > Coll de Mala Cara"
            ],
            "interaction": "sequence",
            "hint": "Raixat précède Mala Cara dans la fiche.",
            "hint2": "Raixat → Mala Cara.",
            "choices": [
              "Coll d’en Raixat",
              "Coll de Mala Cara"
            ],
            "sequence": [
              "Coll d’en Raixat",
              "Coll de Mala Cara"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quel col vient en premier ?",
            "answers": [
              "Coll d’en Raixat > Coll de Mala Cara"
            ],
            "interaction": "text",
            "hint": "Raixat précède Mala Cara dans la fiche.",
            "hint2": "Raixat → Mala Cara.",
            "choices": [
              "Coll d’en Raixat",
              "Coll de Mala Cara"
            ],
            "sequence": [
              "Coll d’en Raixat",
              "Coll de Mala Cara"
            ]
          },
          "ado": {
            "q": "Quel col vient en premier ?",
            "answers": [
              "Coll d’en Raixat > Coll de Mala Cara"
            ],
            "choices": [
              "Coll d’en Raixat",
              "Coll de Mala Cara"
            ],
            "interaction": "sequence",
            "hint": "Raixat précède Mala Cara dans la fiche.",
            "hint2": "Raixat → Mala Cara."
          }
        },
        "validationFocus": "Confirmer noms sur signalétique et éventuelles variantes de graphie.",
        "choices": [
          "Coll d’en Raixat",
          "Coll de Mala Cara"
        ],
        "sequence": [
          "Coll d’en Raixat",
          "Coll de Mala Cara"
        ],
        "id": "pv-muletiers-schiste-s04"
      },
      {
        "name": "Mala Cara — lire les terrasses",
        "fact": "Le circuit se déroule dans le vignoble de Port-Vendres et offre des vues depuis les cols.",
        "type": "choice",
        "q": "Quel paysage cultivé structure principalement cette mission ?",
        "answers": [
          "vignes",
          "vignoble",
          "les vignes"
        ],
        "hint": "Le titre de la randonnée le dit.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/randonnee-dans-les-vignes/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": true,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "choice",
        "locationMode": "trail",
        "hint2": "Les vignes.",
        "routeInstruction": "Reste sur le chemin ; ne traverse aucune parcelle cultivée.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel paysage cultivé structure principalement cette mission ?",
            "answers": [
              "vignes",
              "vignoble",
              "les vignes"
            ],
            "interaction": "choice",
            "hint": "Le titre de la randonnée le dit.",
            "hint2": "Les vignes.",
            "choices": [
              "Les vignes",
              "Des rizières",
              "Une forêt de pins uniquement",
              "Des vergers de pommiers"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quel paysage cultivé structure principalement cette mission ?",
            "answers": [
              "vignes",
              "vignoble",
              "les vignes"
            ],
            "interaction": "text",
            "hint": "Le titre de la randonnée le dit.",
            "hint2": "Les vignes.",
            "choices": [
              "Les vignes",
              "Des rizières",
              "Une forêt de pins uniquement",
              "Des vergers de pommiers"
            ]
          },
          "ado": {
            "q": "Quel paysage cultivé structure principalement cette mission ?",
            "answers": [
              "vignes",
              "vignoble",
              "les vignes"
            ],
            "choices": [
              "Les vignes",
              "Des rizières",
              "Une forêt de pins uniquement",
              "Des vergers de pommiers"
            ],
            "interaction": "choice",
            "hint": "Le titre de la randonnée le dit.",
            "hint2": "Les vignes."
          }
        },
        "validationFocus": "Créer sur place une vraie énigme d’observation des terrasses sans entrer dans les vignes.",
        "choices": [
          "Les vignes",
          "Des rizières",
          "Une forêt de pins uniquement",
          "Des vergers de pommiers"
        ],
        "id": "pv-muletiers-schiste-s05"
      },
      {
        "name": "Col de Perdiguer — vers Cosprons",
        "fact": "L’itinéraire se dirige vers le col de Perdiguer puis descend dans les vignes du rec de Cosprons jusqu’au village.",
        "type": "sequence",
        "q": "Remets ces repères dans le sens de la descente.",
        "answers": [
          "Col de Perdiguer > Vignes du rec de Cosprons > Village de Cosprons"
        ],
        "hint": "Le col est le point haut.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/randonnee-dans-les-vignes/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "sequence",
        "locationMode": "trail",
        "hint2": "Perdiguer → vignes → Cosprons.",
        "routeInstruction": "Suis le chemin indiqué vers le col puis Cosprons.",
        "audience": {
          "enfant": {
            "q": "En famille : Remets ces repères dans le sens de la descente.",
            "answers": [
              "Col de Perdiguer > Vignes du rec de Cosprons > Village de Cosprons"
            ],
            "interaction": "sequence",
            "hint": "Le col est le point haut.",
            "hint2": "Perdiguer → vignes → Cosprons.",
            "choices": [
              "Col de Perdiguer",
              "Vignes du rec de Cosprons",
              "Village de Cosprons"
            ],
            "sequence": [
              "Col de Perdiguer",
              "Vignes du rec de Cosprons",
              "Village de Cosprons"
            ]
          },
          "adulte": {
            "q": "En autonomie : Remets ces repères dans le sens de la descente.",
            "answers": [
              "Col de Perdiguer > Vignes du rec de Cosprons > Village de Cosprons"
            ],
            "interaction": "text",
            "hint": "Le col est le point haut.",
            "hint2": "Perdiguer → vignes → Cosprons.",
            "choices": [
              "Col de Perdiguer",
              "Vignes du rec de Cosprons",
              "Village de Cosprons"
            ],
            "sequence": [
              "Col de Perdiguer",
              "Vignes du rec de Cosprons",
              "Village de Cosprons"
            ]
          },
          "ado": {
            "q": "Remets ces repères dans le sens de la descente.",
            "answers": [
              "Col de Perdiguer > Vignes du rec de Cosprons > Village de Cosprons"
            ],
            "choices": [
              "Col de Perdiguer",
              "Vignes du rec de Cosprons",
              "Village de Cosprons"
            ],
            "interaction": "sequence",
            "hint": "Le col est le point haut.",
            "hint2": "Perdiguer → vignes → Cosprons."
          }
        },
        "validationFocus": "Confirmer sur place la formulation, l’observabilité, le point exact et la sécurité.",
        "choices": [
          "Col de Perdiguer",
          "Vignes du rec de Cosprons",
          "Village de Cosprons"
        ],
        "sequence": [
          "Col de Perdiguer",
          "Vignes du rec de Cosprons",
          "Village de Cosprons"
        ],
        "id": "pv-muletiers-schiste-s06"
      },
      {
        "name": "Chemin des muletiers — la trace ancienne",
        "fact": "Le retour vers Port-Vendres emprunte l’ancien chemin muletier de Cosprons, aujourd’hui balisé en jaune.",
        "type": "choice",
        "q": "Quel ancien usage donne son nom au chemin de retour ?",
        "answers": [
          "muletiers",
          "les muletiers",
          "muletier"
        ],
        "hint": "Les animaux de bât transportaient les charges.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/randonnee-dans-les-vignes/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "choice",
        "locationMode": "trail",
        "hint2": "Les muletiers.",
        "routeInstruction": "Depuis Cosprons, suis le balisage jaune de l’ancien chemin muletier vers Port-Vendres.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel ancien usage donne son nom au chemin de retour ?",
            "answers": [
              "muletiers",
              "les muletiers",
              "muletier"
            ],
            "interaction": "choice",
            "hint": "Les animaux de bât transportaient les charges.",
            "hint2": "Les muletiers.",
            "choices": [
              "Les muletiers",
              "Les pêcheurs au chalut",
              "Les aviateurs",
              "Les mineurs"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quel ancien usage donne son nom au chemin de retour ?",
            "answers": [
              "muletiers",
              "les muletiers",
              "muletier"
            ],
            "interaction": "text",
            "hint": "Les animaux de bât transportaient les charges.",
            "hint2": "Les muletiers.",
            "choices": [
              "Les muletiers",
              "Les pêcheurs au chalut",
              "Les aviateurs",
              "Les mineurs"
            ]
          },
          "ado": {
            "q": "Quel ancien usage donne son nom au chemin de retour ?",
            "answers": [
              "muletiers",
              "les muletiers",
              "muletier"
            ],
            "choices": [
              "Les muletiers",
              "Les pêcheurs au chalut",
              "Les aviateurs",
              "Les mineurs"
            ],
            "interaction": "choice",
            "hint": "Les animaux de bât transportaient les charges.",
            "hint2": "Les muletiers."
          }
        },
        "validationFocus": "Reconnaître revêtement, pente, croisements et points de fatigue avant de choisir l’emplacement du final.",
        "choices": [
          "Les muletiers",
          "Les pêcheurs au chalut",
          "Les aviateurs",
          "Les mineurs"
        ],
        "id": "pv-muletiers-schiste-s07"
      }
    ],
    "lastVerified": "2026-09-09",
    "sourceSummary": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/randonnee-dans-les-vignes/",
    "safety": "Hydratation, chaussures de marche, chapeau et coupe-vent. Respect absolu des agriculteurs, des parcelles et des fruits. Rester sur les chemins balisés.",
    "offline": true,
    "territoryId": "portvendres",
    "route": {
      "level": "facile",
      "levelLabel": "Facile",
      "distanceKm": 8.8,
      "distanceLabel": "8,8 km",
      "walkTime": "4 h",
      "gameTime": "≈ 5 h – 6 h avec le jeu",
      "ascentM": 314,
      "descentM": 313,
      "altMaxM": 246,
      "surface": "Vignes, chemins en lacets, cols et ancien chemin muletier",
      "accessibility": "À qualifier en reconnaissance Explor’Action.",
      "metricsStatus": "official-route-field-validation-required",
      "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/randonnee-dans-les-vignes/",
      "note": "Métriques reprises de la fiche officielle ; géofences, observabilité et temps avec jeu restent à reconnaître.",
      "playerDistance": "8,8 km",
      "playerAscent": "+314 m / −313 m",
      "playerWalk": "4 h de marche officielle",
      "playerTerrain": "Vignes, chemins en lacets, cols et ancien chemin muletier",
      "playerNote": "Base officielle de randonnée. Publication bloquée jusqu’à reconnaissance terrain et playtest.",
      "routeType": "Boucle",
      "officialBasis": "Randonnée dans les vignes",
      "durationLabel": "4 h de marche officielle • ≈ 5 h – 6 h avec le jeu"
    },
    "teaser": "Quitte le port, monte dans les vignes et retrouve le chemin des muletiers par lequel la terre rejoignait la ville.",
    "briefing": "Cette mission repose sur une vraie boucle de randonnée. Aucun fruit n’est cueilli, aucune parcelle n’est traversée : le vignoble se découvre depuis les chemins autorisés.",
    "objective": "Retrouver la chaîne de passage Castellane → cols → Cosprons → chemin muletier.",
    "ending": "PASSAGE. Le vignoble n’est pas seulement un décor : chemins, cols et anciens usages organisent la circulation entre les pentes et le port.",
    "territoryFragment": "PASSAGE",
    "cardTerrain": "Vignes, chemins en lacets, cols et ancien chemin muletier",
    "cardTime": "≈ 5 h – 6 h avec le jeu",
    "playerMetrics": [
      [
        "🥾",
        "8,8 km"
      ],
      [
        "↗",
        "+314 m / −313 m"
      ],
      [
        "⏱",
        "4 h de marche officielle"
      ]
    ],
    "storyBeats": [
      {
        "title": "Sortir du port",
        "text": "La Castellane devient la porte vers le vignoble."
      },
      {
        "title": "Suivre le vallon",
        "text": "Le Val de Pinte donne une première ligne naturelle."
      },
      {
        "title": "Passer sous la route",
        "text": "Le tunnel marque le passage du réseau moderne au chemin de pente."
      },
      {
        "title": "Les cols en série",
        "text": "Raixat et Mala Cara structurent le relief."
      },
      {
        "title": "Lire les terrasses",
        "text": "Le vignoble explique pourquoi ces chemins existent."
      },
      {
        "title": "Descendre vers Cosprons",
        "text": "Perdiguer transforme la montée en retour."
      },
      {
        "title": "La mémoire du chemin",
        "text": "Le chemin muletier referme la boucle."
      }
    ],
    "playerStatus": "development-research",
    "scenarioDisclaimer": "La cargaison est fictive. Le tracé, les métriques et l’existence du chemin muletier sont sourcés ; les énigmes d’observation seront calibrées en reconnaissance.",
    "finalPrompt": "Quel mot résume ce que représentent cols, tunnel et chemin muletier dans cette aventure ?",
    "clueCards": [
      {
        "unlockAt": 2,
        "title": "Carte 1 — Entre deux mondes",
        "text": "Le parcours quitte les quais pour gagner les pentes."
      },
      {
        "unlockAt": 5,
        "title": "Carte 2 — Franchir",
        "text": "Un col est un lieu où le relief laisse passer."
      },
      {
        "unlockAt": 7,
        "title": "Carte 3 — Une voie ancienne",
        "text": "Le dernier chemin servait déjà à circuler avant le jeu."
      }
    ],
    "developmentStatus": "ready-content-field-monitoring",
    "sourceCheckedAt": "2026-09-10",
    "fieldValidation": "monitoring-required",
    "validationTier": "ready-application-test"
  },
  {
    "id": "pv-ligne-forts",
    "icon": "🛡️",
    "title": "Expédition spéciale — La Ligne des Forts",
    "tag": "EXPÉDITION • Fortifications • Endurance",
    "duration": "8 h de marche officielle • ≈ 9 h 30–12 h avec le jeu",
    "difficulty": "Difficile",
    "story": "Sept fragments d’un réseau défensif fictif doivent être remis en relation. Pour y parvenir, il faut marcher de fort en col, de batterie en tour, puis redescendre par Cosprons.",
    "final": "RESEAU",
    "steps": [
      {
        "name": "Route Stratégique — entrer dans le réseau",
        "fact": "Le Chemin des forts quitte Port-Vendres par la Castellane, la route Stratégique et le Val de Pinte.",
        "type": "sequence",
        "q": "Quel enchaînement lance la longue boucle ?",
        "answers": [
          "Castellane > Route Stratégique > Val de Pinte"
        ],
        "hint": "La place précède la route.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/le-chemin-des-forts/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "sequence",
        "locationMode": "trail",
        "hint2": "Castellane → route Stratégique → Val de Pinte.",
        "routeInstruction": "Départ Office de tourisme, puis Castellane et route Stratégique.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel enchaînement lance la longue boucle ?",
            "answers": [
              "Castellane > Route Stratégique > Val de Pinte"
            ],
            "interaction": "sequence",
            "hint": "La place précède la route.",
            "hint2": "Castellane → route Stratégique → Val de Pinte.",
            "choices": [
              "Castellane",
              "Route Stratégique",
              "Val de Pinte"
            ],
            "sequence": [
              "Castellane",
              "Route Stratégique",
              "Val de Pinte"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quel enchaînement lance la longue boucle ?",
            "answers": [
              "Castellane > Route Stratégique > Val de Pinte"
            ],
            "interaction": "text",
            "hint": "La place précède la route.",
            "hint2": "Castellane → route Stratégique → Val de Pinte.",
            "choices": [
              "Castellane",
              "Route Stratégique",
              "Val de Pinte"
            ],
            "sequence": [
              "Castellane",
              "Route Stratégique",
              "Val de Pinte"
            ]
          },
          "ado": {
            "q": "Quel enchaînement lance la longue boucle ?",
            "answers": [
              "Castellane > Route Stratégique > Val de Pinte"
            ],
            "choices": [
              "Castellane",
              "Route Stratégique",
              "Val de Pinte"
            ],
            "interaction": "sequence",
            "hint": "La place précède la route.",
            "hint2": "Castellane → route Stratégique → Val de Pinte."
          }
        },
        "validationFocus": "Confirmer sur place la formulation, l’observabilité, le point exact et la sécurité.",
        "choices": [
          "Castellane",
          "Route Stratégique",
          "Val de Pinte"
        ],
        "sequence": [
          "Castellane",
          "Route Stratégique",
          "Val de Pinte"
        ],
        "id": "pv-ligne-forts-s01"
      },
      {
        "name": "Fort Dugommier — première sentinelle haute",
        "fact": "La boucle rejoint Fort Dugommier avant les cols d’en Raixat, de Mala Cara et de Mollo.",
        "type": "choice",
        "q": "Quel ouvrage fortifié précède la série de cols dans la fiche officielle ?",
        "answers": [
          "fort dugommier",
          "Dugommier"
        ],
        "hint": "Son nom est celui d’un fort.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/le-chemin-des-forts/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "choice",
        "locationMode": "trail",
        "hint2": "Fort Dugommier.",
        "routeInstruction": "Reste sur le sentier vers Fort Dugommier puis suis le balisage des cols.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel ouvrage fortifié précède la série de cols dans la fiche officielle ?",
            "answers": [
              "fort dugommier",
              "Dugommier"
            ],
            "interaction": "choice",
            "hint": "Son nom est celui d’un fort.",
            "hint2": "Fort Dugommier.",
            "choices": [
              "Fort Dugommier",
              "Fort Béar",
              "Château de Valmy",
              "Fort Lagarde"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quel ouvrage fortifié précède la série de cols dans la fiche officielle ?",
            "answers": [
              "fort dugommier",
              "Dugommier"
            ],
            "interaction": "text",
            "hint": "Son nom est celui d’un fort.",
            "hint2": "Fort Dugommier.",
            "choices": [
              "Fort Dugommier",
              "Fort Béar",
              "Château de Valmy",
              "Fort Lagarde"
            ]
          },
          "ado": {
            "q": "Quel ouvrage fortifié précède la série de cols dans la fiche officielle ?",
            "answers": [
              "fort dugommier",
              "Dugommier"
            ],
            "choices": [
              "Fort Dugommier",
              "Fort Béar",
              "Château de Valmy",
              "Fort Lagarde"
            ],
            "interaction": "choice",
            "hint": "Son nom est celui d’un fort.",
            "hint2": "Fort Dugommier."
          }
        },
        "validationFocus": "Vérifier accès légal autour du fort et position du point joueur sans pénétration.",
        "choices": [
          "Fort Dugommier",
          "Fort Béar",
          "Château de Valmy",
          "Fort Lagarde"
        ],
        "id": "pv-ligne-forts-s02"
      },
      {
        "name": "Raixat → Mala Cara → Mollo",
        "fact": "La fiche décrit une progression par le coll d’en Raixat, le col de Mala Cara puis le col de Mollo.",
        "type": "sequence",
        "q": "Remets les trois cols dans l’ordre du parcours.",
        "answers": [
          "Coll d’en Raixat > Col de Mala Cara > Col de Mollo"
        ],
        "hint": "Raixat ouvre la série.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/le-chemin-des-forts/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "sequence",
        "locationMode": "trail",
        "hint2": "Raixat → Mala Cara → Mollo.",
        "routeInstruction": "Suis le balisage officiel des cols.",
        "audience": {
          "enfant": {
            "q": "En famille : Remets les trois cols dans l’ordre du parcours.",
            "answers": [
              "Coll d’en Raixat > Col de Mala Cara > Col de Mollo"
            ],
            "interaction": "sequence",
            "hint": "Raixat ouvre la série.",
            "hint2": "Raixat → Mala Cara → Mollo.",
            "choices": [
              "Coll d’en Raixat",
              "Col de Mala Cara",
              "Col de Mollo"
            ],
            "sequence": [
              "Coll d’en Raixat",
              "Col de Mala Cara",
              "Col de Mollo"
            ]
          },
          "adulte": {
            "q": "En autonomie : Remets les trois cols dans l’ordre du parcours.",
            "answers": [
              "Coll d’en Raixat > Col de Mala Cara > Col de Mollo"
            ],
            "interaction": "text",
            "hint": "Raixat ouvre la série.",
            "hint2": "Raixat → Mala Cara → Mollo.",
            "choices": [
              "Coll d’en Raixat",
              "Col de Mala Cara",
              "Col de Mollo"
            ],
            "sequence": [
              "Coll d’en Raixat",
              "Col de Mala Cara",
              "Col de Mollo"
            ]
          },
          "ado": {
            "q": "Remets les trois cols dans l’ordre du parcours.",
            "answers": [
              "Coll d’en Raixat > Col de Mala Cara > Col de Mollo"
            ],
            "choices": [
              "Coll d’en Raixat",
              "Col de Mala Cara",
              "Col de Mollo"
            ],
            "interaction": "sequence",
            "hint": "Raixat ouvre la série.",
            "hint2": "Raixat → Mala Cara → Mollo."
          }
        },
        "validationFocus": "Confirmer panneaux, variantes toponymiques et embranchements.",
        "choices": [
          "Coll d’en Raixat",
          "Col de Mala Cara",
          "Col de Mollo"
        ],
        "sequence": [
          "Coll d’en Raixat",
          "Col de Mala Cara",
          "Col de Mollo"
        ],
        "id": "pv-ligne-forts-s03"
      },
      {
        "name": "Taillefer — le système monte",
        "fact": "Depuis le col de Mollo, le sentier monte aux casernes de Taillefer puis au col de Taillefer.",
        "type": "sequence",
        "q": "Quel repère vient avant le col de Taillefer ?",
        "answers": [
          "Casernes de Taillefer > Col de Taillefer"
        ],
        "hint": "On atteint d’abord les bâtiments.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/le-chemin-des-forts/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "sequence",
        "locationMode": "trail",
        "hint2": "Casernes → col.",
        "routeInstruction": "Ne quitte pas le sentier balisé vers Taillefer.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel repère vient avant le col de Taillefer ?",
            "answers": [
              "Casernes de Taillefer > Col de Taillefer"
            ],
            "interaction": "sequence",
            "hint": "On atteint d’abord les bâtiments.",
            "hint2": "Casernes → col.",
            "choices": [
              "Casernes de Taillefer",
              "Col de Taillefer"
            ],
            "sequence": [
              "Casernes de Taillefer",
              "Col de Taillefer"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quel repère vient avant le col de Taillefer ?",
            "answers": [
              "Casernes de Taillefer > Col de Taillefer"
            ],
            "interaction": "text",
            "hint": "On atteint d’abord les bâtiments.",
            "hint2": "Casernes → col.",
            "choices": [
              "Casernes de Taillefer",
              "Col de Taillefer"
            ],
            "sequence": [
              "Casernes de Taillefer",
              "Col de Taillefer"
            ]
          },
          "ado": {
            "q": "Quel repère vient avant le col de Taillefer ?",
            "answers": [
              "Casernes de Taillefer > Col de Taillefer"
            ],
            "choices": [
              "Casernes de Taillefer",
              "Col de Taillefer"
            ],
            "interaction": "sequence",
            "hint": "On atteint d’abord les bâtiments.",
            "hint2": "Casernes → col."
          }
        },
        "validationFocus": "Évaluer ruines, chutes de pierres et distance de sécurité.",
        "choices": [
          "Casernes de Taillefer",
          "Col de Taillefer"
        ],
        "sequence": [
          "Casernes de Taillefer",
          "Col de Taillefer"
        ],
        "id": "pv-ligne-forts-s04"
      },
      {
        "name": "Tour Madeloc — le signal",
        "fact": "Le Chemin des forts monte ensuite à la Tour Madeloc, point culminant majeur du réseau traversé.",
        "type": "choice",
        "q": "Quel type de repère domine cette partie de l’itinéraire ?",
        "answers": [
          "tour",
          "tour a signaux",
          "tour à signaux",
          "la tour madeloc",
          "Une tour à signaux"
        ],
        "hint": "Son nom est Madeloc.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/le-chemin-des-forts/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": true,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "choice",
        "locationMode": "trail",
        "hint2": "Une tour à signaux.",
        "routeInstruction": "Monte uniquement si conditions météo et accès le permettent.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel type de repère domine cette partie de l’itinéraire ?",
            "answers": [
              "tour",
              "tour a signaux",
              "tour à signaux",
              "la tour madeloc",
              "Une tour à signaux"
            ],
            "interaction": "choice",
            "hint": "Son nom est Madeloc.",
            "hint2": "Une tour à signaux.",
            "choices": [
              "Une tour à signaux",
              "Un phare portuaire",
              "Une abbaye",
              "Un dolmen"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quel type de repère domine cette partie de l’itinéraire ?",
            "answers": [
              "tour",
              "tour a signaux",
              "tour à signaux",
              "la tour madeloc",
              "Une tour à signaux"
            ],
            "interaction": "text",
            "hint": "Son nom est Madeloc.",
            "hint2": "Une tour à signaux.",
            "choices": [
              "Une tour à signaux",
              "Un phare portuaire",
              "Une abbaye",
              "Un dolmen"
            ]
          },
          "ado": {
            "q": "Quel type de repère domine cette partie de l’itinéraire ?",
            "answers": [
              "tour",
              "tour a signaux",
              "tour à signaux",
              "la tour madeloc",
              "Une tour à signaux"
            ],
            "choices": [
              "Une tour à signaux",
              "Un phare portuaire",
              "Une abbaye",
              "Un dolmen"
            ],
            "interaction": "choice",
            "hint": "Son nom est Madeloc.",
            "hint2": "Une tour à signaux."
          }
        },
        "validationFocus": "Bloquer la mission si risque incendie/vent ou fermeture ; calibrer une alternative avant sommet.",
        "choices": [
          "Une tour à signaux",
          "Un phare portuaire",
          "Une abbaye",
          "Un dolmen"
        ],
        "id": "pv-ligne-forts-s05"
      },
      {
        "name": "Batterie 500 → Galline",
        "fact": "La descente de la Madeloc passe par les Batteries 500 puis la Batterie de la Galline sur la route des crêtes.",
        "type": "sequence",
        "q": "Dans quel ordre apparaissent ces deux ouvrages ?",
        "answers": [
          "Batteries 500 > Batterie de la Galline"
        ],
        "hint": "La fiche place les Batteries 500 juste après la tour.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/le-chemin-des-forts/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "sequence",
        "locationMode": "trail",
        "hint2": "Batteries 500 → Galline.",
        "routeInstruction": "Descends par la route et les chemins officiels sans entrer dans les ouvrages.",
        "audience": {
          "enfant": {
            "q": "En famille : Dans quel ordre apparaissent ces deux ouvrages ?",
            "answers": [
              "Batteries 500 > Batterie de la Galline"
            ],
            "interaction": "sequence",
            "hint": "La fiche place les Batteries 500 juste après la tour.",
            "hint2": "Batteries 500 → Galline.",
            "choices": [
              "Batteries 500",
              "Batterie de la Galline"
            ],
            "sequence": [
              "Batteries 500",
              "Batterie de la Galline"
            ]
          },
          "adulte": {
            "q": "En autonomie : Dans quel ordre apparaissent ces deux ouvrages ?",
            "answers": [
              "Batteries 500 > Batterie de la Galline"
            ],
            "interaction": "text",
            "hint": "La fiche place les Batteries 500 juste après la tour.",
            "hint2": "Batteries 500 → Galline.",
            "choices": [
              "Batteries 500",
              "Batterie de la Galline"
            ],
            "sequence": [
              "Batteries 500",
              "Batterie de la Galline"
            ]
          },
          "ado": {
            "q": "Dans quel ordre apparaissent ces deux ouvrages ?",
            "answers": [
              "Batteries 500 > Batterie de la Galline"
            ],
            "choices": [
              "Batteries 500",
              "Batterie de la Galline"
            ],
            "interaction": "sequence",
            "hint": "La fiche place les Batteries 500 juste après la tour.",
            "hint2": "Batteries 500 → Galline."
          }
        },
        "validationFocus": "Confirmer sur place la formulation, l’observabilité, le point exact et la sécurité.",
        "choices": [
          "Batteries 500",
          "Batterie de la Galline"
        ],
        "sequence": [
          "Batteries 500",
          "Batterie de la Galline"
        ],
        "id": "pv-ligne-forts-s06"
      },
      {
        "name": "Cosprons — le retour humain",
        "fact": "Après la crête, le parcours rejoint Cosprons puis reprend l’ancien chemin des muletiers vers Port-Vendres.",
        "type": "sequence",
        "q": "Quel enchaînement clôt la grande boucle ?",
        "answers": [
          "Cosprons > Chemin des muletiers > Port-Vendres"
        ],
        "hint": "Le village vient avant le chemin de retour.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/le-chemin-des-forts/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "sequence",
        "locationMode": "trail",
        "hint2": "Cosprons → chemin muletier → Port-Vendres.",
        "routeInstruction": "Suis Cosprons puis le balisage jaune de retour.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel enchaînement clôt la grande boucle ?",
            "answers": [
              "Cosprons > Chemin des muletiers > Port-Vendres"
            ],
            "interaction": "sequence",
            "hint": "Le village vient avant le chemin de retour.",
            "hint2": "Cosprons → chemin muletier → Port-Vendres.",
            "choices": [
              "Cosprons",
              "Chemin des muletiers",
              "Port-Vendres"
            ],
            "sequence": [
              "Cosprons",
              "Chemin des muletiers",
              "Port-Vendres"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quel enchaînement clôt la grande boucle ?",
            "answers": [
              "Cosprons > Chemin des muletiers > Port-Vendres"
            ],
            "interaction": "text",
            "hint": "Le village vient avant le chemin de retour.",
            "hint2": "Cosprons → chemin muletier → Port-Vendres.",
            "choices": [
              "Cosprons",
              "Chemin des muletiers",
              "Port-Vendres"
            ],
            "sequence": [
              "Cosprons",
              "Chemin des muletiers",
              "Port-Vendres"
            ]
          },
          "ado": {
            "q": "Quel enchaînement clôt la grande boucle ?",
            "answers": [
              "Cosprons > Chemin des muletiers > Port-Vendres"
            ],
            "choices": [
              "Cosprons",
              "Chemin des muletiers",
              "Port-Vendres"
            ],
            "interaction": "sequence",
            "hint": "Le village vient avant le chemin de retour.",
            "hint2": "Cosprons → chemin muletier → Port-Vendres."
          }
        },
        "validationFocus": "Tester fatigue, durée réelle avec jeu et nécessité d’un point d’abandon sécurisé.",
        "choices": [
          "Cosprons",
          "Chemin des muletiers",
          "Port-Vendres"
        ],
        "sequence": [
          "Cosprons",
          "Chemin des muletiers",
          "Port-Vendres"
        ],
        "id": "pv-ligne-forts-s07"
      }
    ],
    "lastVerified": "2026-09-09",
    "sourceSummary": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/le-chemin-des-forts/",
    "safety": "Difficile, 19 km et près de 900 m D+. Eau, nourriture, chaussures adaptées, coupe-vent. Déconseillé par vent fort. Vérifier chaque jour accès massif et risque incendie. Prévoir abandon/retour sûr.",
    "offline": true,
    "territoryId": "portvendres",
    "route": {
      "level": "difficile",
      "levelLabel": "Difficile",
      "distanceKm": 19,
      "distanceLabel": "19,0 km",
      "walkTime": "8 h",
      "gameTime": "≈ 9 h – 10 h 30 avec le jeu",
      "ascentM": 884,
      "descentM": 883,
      "altMaxM": 626,
      "surface": "Longue boucle montagneuse, forts, cols, crêtes, Cosprons et chemin muletier",
      "accessibility": "À qualifier en reconnaissance Explor’Action.",
      "metricsStatus": "official-route-field-validation-required",
      "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/le-chemin-des-forts/",
      "note": "Boucle exigeante, déconseillée par vent fort.",
      "playerDistance": "19,0 km",
      "playerAscent": "+884 m / −883 m",
      "playerWalk": "8 h de marche officielle",
      "playerTerrain": "Longue boucle montagneuse, forts, cols, crêtes, Cosprons et chemin muletier",
      "playerNote": "Base officielle de randonnée. Publication bloquée jusqu’à reconnaissance terrain et playtest.",
      "routeType": "Boucle",
      "officialBasis": "Le Chemin des forts",
      "durationLabel": "8 h de marche officielle • ≈ 9 h – 10 h 30 avec le jeu"
    },
    "teaser": "Une vraie grande randonnée de 19 km transforme les fortifications de la Côte Vermeille en réseau à décrypter.",
    "briefing": "C’est une aventure longue. Le score ne compte jamais face au vent, à la chaleur, au risque incendie ou à la fatigue. Un organisateur doit pouvoir neutraliser le sommet et prévoir un abandon sûr.",
    "objective": "Relier forts, cols, batteries et tour sans perdre le fil du réseau défensif.",
    "ending": "RESEAU. Aucun ouvrage ne raconte tout seul la défense du territoire : c’est leur position relative qui forme le système.",
    "territoryFragment": "RESEAU",
    "cardTerrain": "Longue boucle montagneuse, forts, cols, crêtes, Cosprons et chemin muletier",
    "cardTime": "≈ 9 h – 10 h 30 avec le jeu",
    "playerMetrics": [
      [
        "🥾",
        "19,0 km"
      ],
      [
        "↗",
        "+884 m / −883 m"
      ],
      [
        "⏱",
        "8 h de marche officielle"
      ]
    ],
    "storyBeats": [
      {
        "title": "La ligne commence",
        "text": "Port-Vendres pousse le joueur vers les hauteurs."
      },
      {
        "title": "Premier verrou",
        "text": "Dugommier montre que la défense se place sur les passages."
      },
      {
        "title": "Trois cols",
        "text": "Le relief organise le réseau autant que les constructions."
      },
      {
        "title": "Taillefer",
        "text": "Casernes et col matérialisent une présence militaire sur la crête."
      },
      {
        "title": "Le signal majeur",
        "text": "La Madeloc rassemble la lecture du panorama."
      },
      {
        "title": "Les batteries",
        "text": "La descente révèle d’autres positions du système."
      },
      {
        "title": "Retour par Cosprons",
        "text": "La boucle rejoint enfin les chemins civils du territoire."
      }
    ],
    "playerStatus": "development-research",
    "scenarioDisclaimer": "Les fragments défensifs sont un dispositif narratif. Itinéraire et métriques sont officiels ; la jouabilité sur une journée complète doit être réellement testée avant toute publication.",
    "finalPrompt": "Quel mot décrit le mieux un ensemble de forts, cols, batteries et signaux qui fonctionnent les uns avec les autres ?",
    "clueCards": [
      {
        "unlockAt": 2,
        "title": "Carte 1 — Plusieurs positions",
        "text": "Un seul fort ne suffit pas."
      },
      {
        "unlockAt": 5,
        "title": "Carte 2 — Reliés par le relief",
        "text": "Cols et crêtes mettent les ouvrages en relation."
      },
      {
        "unlockAt": 7,
        "title": "Carte 3 — Un système",
        "text": "Le final cherche un mot pour un ensemble connecté."
      }
    ],
    "developmentStatus": "ready-content-field-monitoring",
    "sourceCheckedAt": "2026-09-10",
    "fieldValidation": "monitoring-required",
    "expedition": true,
    "validationTier": "ready-application-test"
  },
  {
    "id": "co-code-fauve",
    "icon": "🎨",
    "title": "Le Code Fauve",
    "tag": "Fauvisme • Couleur • Déambulation",
    "duration": "1 h 30 sur la fiche officielle • distance à remesurer • ≈ 1 h 45 – 2 h 15 avec le jeu",
    "difficulty": "Facile",
    "story": "Un nuancier fictif a perdu toutes ses couleurs. Chaque panneau du Chemin du Fauvisme donne un angle pour comprendre pourquoi Collioure a été un laboratoire pictural en 1905.",
    "final": "COULEUR",
    "steps": [
      {
        "name": "Panneau 1 — Collioure, 1905",
        "fact": "Le Chemin du Fauvisme s’appuie sur neuf reproductions d’œuvres de Matisse et Derain réalisées pendant l’été 1905.",
        "type": "numeric",
        "q": "Combien d’œuvres le parcours officiel annonce-t-il à découvrir ?",
        "answers": [
          "9",
          "neuf"
        ],
        "hint": "C’est moins de dix.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/balade-les-chemins-du-fauvisme/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "numeric",
        "locationMode": "trail",
        "hint2": "Neuf.",
        "routeInstruction": "Repère le premier panneau sans bloquer le passage.",
        "audience": {
          "enfant": {
            "q": "En famille : Combien d’œuvres le parcours officiel annonce-t-il à découvrir ?",
            "answers": [
              "9",
              "neuf"
            ],
            "interaction": "numeric",
            "hint": "C’est moins de dix.",
            "hint2": "Neuf."
          },
          "adulte": {
            "q": "En autonomie : Combien d’œuvres le parcours officiel annonce-t-il à découvrir ?",
            "answers": [
              "9",
              "neuf"
            ],
            "interaction": "text",
            "hint": "C’est moins de dix.",
            "hint2": "Neuf."
          },
          "ado": {
            "q": "Combien d’œuvres le parcours officiel annonce-t-il à découvrir ?",
            "answers": [
              "9",
              "neuf"
            ],
            "interaction": "numeric",
            "hint": "C’est moins de dix.",
            "hint2": "Neuf."
          }
        },
        "validationFocus": "Confirmer nombre réel de panneaux encore présents et leur état en 2026.",
        "id": "co-code-fauve-s01"
      },
      {
        "name": "Le Faubourg — changer la couleur",
        "fact": "Le parcours présente notamment « Le Faubourg de Collioure » d’André Derain.",
        "type": "choice",
        "q": "Quel peintre est associé au panneau « Le Faubourg de Collioure » ?",
        "answers": [
          "andre derain",
          "andré derain",
          "Derain"
        ],
        "hint": "Ce n’est pas Matisse.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/balade-les-chemins-du-fauvisme/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "choice",
        "locationMode": "trail",
        "hint2": "André Derain.",
        "routeInstruction": "Suis le parcours urbain vers le panneau du Faubourg.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel peintre est associé au panneau « Le Faubourg de Collioure » ?",
            "answers": [
              "andre derain",
              "andré derain",
              "Derain"
            ],
            "interaction": "choice",
            "hint": "Ce n’est pas Matisse.",
            "hint2": "André Derain.",
            "choices": [
              "André Derain",
              "Henri Matisse",
              "Aristide Maillol",
              "Pablo Picasso"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quel peintre est associé au panneau « Le Faubourg de Collioure » ?",
            "answers": [
              "andre derain",
              "andré derain",
              "Derain"
            ],
            "interaction": "text",
            "hint": "Ce n’est pas Matisse.",
            "hint2": "André Derain.",
            "choices": [
              "André Derain",
              "Henri Matisse",
              "Aristide Maillol",
              "Pablo Picasso"
            ]
          },
          "ado": {
            "q": "Quel peintre est associé au panneau « Le Faubourg de Collioure » ?",
            "answers": [
              "andre derain",
              "andré derain",
              "Derain"
            ],
            "choices": [
              "André Derain",
              "Henri Matisse",
              "Aristide Maillol",
              "Pablo Picasso"
            ],
            "interaction": "choice",
            "hint": "Ce n’est pas Matisse.",
            "hint2": "André Derain."
          }
        },
        "validationFocus": "Créer sur place une question d’observation sur cadrage/couleurs sans demander de reproduire une œuvre.",
        "choices": [
          "André Derain",
          "Henri Matisse",
          "Aristide Maillol",
          "Pablo Picasso"
        ],
        "id": "co-code-fauve-s02"
      },
      {
        "name": "Barques à Collioure — le motif",
        "fact": "La liste officielle comprend « Barques à Collioure, 1905 » d’Henri Matisse.",
        "type": "choice",
        "q": "Quel sujet donne son titre à cette œuvre ?",
        "answers": [
          "barques",
          "les barques",
          "Des barques"
        ],
        "hint": "Regarde la baie et le titre du panneau.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/balade-les-chemins-du-fauvisme/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "choice",
        "locationMode": "trail",
        "hint2": "Les barques.",
        "routeInstruction": "Reste dans les espaces publics du front de baie.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel sujet donne son titre à cette œuvre ?",
            "answers": [
              "barques",
              "les barques",
              "Des barques"
            ],
            "interaction": "choice",
            "hint": "Regarde la baie et le titre du panneau.",
            "hint2": "Les barques.",
            "choices": [
              "Des barques",
              "Une tour",
              "Un train",
              "Une forêt"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quel sujet donne son titre à cette œuvre ?",
            "answers": [
              "barques",
              "les barques",
              "Des barques"
            ],
            "interaction": "text",
            "hint": "Regarde la baie et le titre du panneau.",
            "hint2": "Les barques.",
            "choices": [
              "Des barques",
              "Une tour",
              "Un train",
              "Une forêt"
            ]
          },
          "ado": {
            "q": "Quel sujet donne son titre à cette œuvre ?",
            "answers": [
              "barques",
              "les barques",
              "Des barques"
            ],
            "choices": [
              "Des barques",
              "Une tour",
              "Un train",
              "Une forêt"
            ],
            "interaction": "choice",
            "hint": "Regarde la baie et le titre du panneau.",
            "hint2": "Les barques."
          }
        },
        "validationFocus": "Confirmer sur place la formulation, l’observabilité, le point exact et la sécurité.",
        "choices": [
          "Des barques",
          "Une tour",
          "Un train",
          "Une forêt"
        ],
        "id": "co-code-fauve-s03"
      },
      {
        "name": "Le Phare — confronter peinture et réel",
        "fact": "Le parcours comprend « Le Phare de Collioure » d’André Derain.",
        "type": "choice",
        "q": "Quel type de repère côtier est au centre de ce titre ?",
        "answers": [
          "phare",
          "le phare",
          "Un phare"
        ],
        "hint": "Il guide depuis la côte.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/balade-les-chemins-du-fauvisme/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "choice",
        "locationMode": "trail",
        "hint2": "Le phare.",
        "routeInstruction": "Observe le paysage réel depuis le panneau correspondant.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel type de repère côtier est au centre de ce titre ?",
            "answers": [
              "phare",
              "le phare",
              "Un phare"
            ],
            "interaction": "choice",
            "hint": "Il guide depuis la côte.",
            "hint2": "Le phare.",
            "choices": [
              "Un phare",
              "Un moulin",
              "Un dolmen",
              "Un cloître"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quel type de repère côtier est au centre de ce titre ?",
            "answers": [
              "phare",
              "le phare",
              "Un phare"
            ],
            "interaction": "text",
            "hint": "Il guide depuis la côte.",
            "hint2": "Le phare.",
            "choices": [
              "Un phare",
              "Un moulin",
              "Un dolmen",
              "Un cloître"
            ]
          },
          "ado": {
            "q": "Quel type de repère côtier est au centre de ce titre ?",
            "answers": [
              "phare",
              "le phare",
              "Un phare"
            ],
            "choices": [
              "Un phare",
              "Un moulin",
              "Un dolmen",
              "Un cloître"
            ],
            "interaction": "choice",
            "hint": "Il guide depuis la côte.",
            "hint2": "Le phare."
          }
        },
        "validationFocus": "Vérifier quel élément réel est visible depuis le panneau et construire la version terrain définitive.",
        "choices": [
          "Un phare",
          "Un moulin",
          "Un dolmen",
          "Un cloître"
        ],
        "id": "co-code-fauve-s04"
      },
      {
        "name": "Deux artistes — une même ville",
        "fact": "Matisse arrive à Collioure en mai 1905 puis invite André Derain à le rejoindre ; ils travaillent intensément en plein air.",
        "type": "multi",
        "q": "Quels deux artistes structurent ce parcours ?",
        "answers": [
          "matisse + derain"
        ],
        "hint": "Ils sont deux.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/balade-les-chemins-du-fauvisme/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "multi",
        "locationMode": "trail",
        "hint2": "Matisse + Derain.",
        "routeInstruction": "Continue la déambulation entre les reproductions.",
        "audience": {
          "enfant": {
            "q": "En famille : Quels deux artistes structurent ce parcours ?",
            "answers": [
              "matisse + derain"
            ],
            "interaction": "multi",
            "hint": "Ils sont deux.",
            "hint2": "Matisse + Derain.",
            "choices": [
              "Henri Matisse",
              "André Derain",
              "Claude Monet",
              "Aristide Maillol"
            ],
            "multiAnswers": [
              "Henri Matisse",
              "André Derain"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quels deux artistes structurent ce parcours ?",
            "answers": [
              "matisse + derain"
            ],
            "interaction": "text",
            "hint": "Ils sont deux.",
            "hint2": "Matisse + Derain.",
            "choices": [
              "Henri Matisse",
              "André Derain",
              "Claude Monet",
              "Aristide Maillol"
            ],
            "multiAnswers": [
              "Henri Matisse",
              "André Derain"
            ]
          },
          "ado": {
            "q": "Quels deux artistes structurent ce parcours ?",
            "answers": [
              "matisse + derain"
            ],
            "choices": [
              "Henri Matisse",
              "André Derain",
              "Claude Monet",
              "Aristide Maillol"
            ],
            "interaction": "multi",
            "hint": "Ils sont deux.",
            "hint2": "Matisse + Derain."
          }
        },
        "validationFocus": "Confirmer sur place la formulation, l’observabilité, le point exact et la sécurité.",
        "choices": [
          "Henri Matisse",
          "André Derain",
          "Claude Monet",
          "Aristide Maillol"
        ],
        "multiAnswers": [
          "Henri Matisse",
          "André Derain"
        ],
        "id": "co-code-fauve-s05"
      },
      {
        "name": "La Moulade — sortir du cadre scolaire",
        "fact": "La liste officielle comprend aussi « La Moulade » de Matisse et « Les toits de Collioure ».",
        "type": "multi",
        "q": "Quels deux sujets appartiennent réellement à la liste du parcours ?",
        "answers": [
          "la moulade + les toits de collioure"
        ],
        "hint": "Les deux parlent de Collioure.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/balade-les-chemins-du-fauvisme/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "multi",
        "locationMode": "trail",
        "hint2": "La Moulade + Les toits.",
        "routeInstruction": "Suis les panneaux sans transformer la mission en questionnaire de musée.",
        "audience": {
          "enfant": {
            "q": "En famille : Quels deux sujets appartiennent réellement à la liste du parcours ?",
            "answers": [
              "la moulade + les toits de collioure"
            ],
            "interaction": "multi",
            "hint": "Les deux parlent de Collioure.",
            "hint2": "La Moulade + Les toits.",
            "choices": [
              "La Moulade",
              "Les toits de Collioure",
              "La Tour Eiffel",
              "Le Mont-Saint-Michel"
            ],
            "multiAnswers": [
              "La Moulade",
              "Les toits de Collioure"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quels deux sujets appartiennent réellement à la liste du parcours ?",
            "answers": [
              "la moulade + les toits de collioure"
            ],
            "interaction": "text",
            "hint": "Les deux parlent de Collioure.",
            "hint2": "La Moulade + Les toits.",
            "choices": [
              "La Moulade",
              "Les toits de Collioure",
              "La Tour Eiffel",
              "Le Mont-Saint-Michel"
            ],
            "multiAnswers": [
              "La Moulade",
              "Les toits de Collioure"
            ]
          },
          "ado": {
            "q": "Quels deux sujets appartiennent réellement à la liste du parcours ?",
            "answers": [
              "la moulade + les toits de collioure"
            ],
            "choices": [
              "La Moulade",
              "Les toits de Collioure",
              "La Tour Eiffel",
              "Le Mont-Saint-Michel"
            ],
            "interaction": "multi",
            "hint": "Les deux parlent de Collioure.",
            "hint2": "La Moulade + Les toits."
          }
        },
        "validationFocus": "Confirmer sur place la formulation, l’observabilité, le point exact et la sécurité.",
        "choices": [
          "La Moulade",
          "Les toits de Collioure",
          "La Tour Eiffel",
          "Le Mont-Saint-Michel"
        ],
        "multiAnswers": [
          "La Moulade",
          "Les toits de Collioure"
        ],
        "id": "co-code-fauve-s06"
      },
      {
        "name": "Village et mer — recomposer le regard",
        "fact": "La dernière liste officielle citée comprend « Collioure, le village et la mer, 1905 ».",
        "type": "choice",
        "q": "Quels deux grands éléments sont explicitement réunis dans ce titre ?",
        "answers": [
          "village et mer",
          "le village et la mer"
        ],
        "hint": "Lis le titre comme une synthèse.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/balade-les-chemins-du-fauvisme/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "choice",
        "locationMode": "trail",
        "hint2": "Le village et la mer.",
        "routeInstruction": "Choisis un point final où le vrai paysage peut être comparé au parcours artistique.",
        "audience": {
          "enfant": {
            "q": "En famille : Quels deux grands éléments sont explicitement réunis dans ce titre ?",
            "answers": [
              "village et mer",
              "le village et la mer"
            ],
            "interaction": "choice",
            "hint": "Lis le titre comme une synthèse.",
            "hint2": "Le village et la mer.",
            "choices": [
              "Le village et la mer",
              "La montagne et Paris",
              "Le désert et la neige",
              "La gare et l’aéroport"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quels deux grands éléments sont explicitement réunis dans ce titre ?",
            "answers": [
              "village et mer",
              "le village et la mer"
            ],
            "interaction": "text",
            "hint": "Lis le titre comme une synthèse.",
            "hint2": "Le village et la mer.",
            "choices": [
              "Le village et la mer",
              "La montagne et Paris",
              "Le désert et la neige",
              "La gare et l’aéroport"
            ]
          },
          "ado": {
            "q": "Quels deux grands éléments sont explicitement réunis dans ce titre ?",
            "answers": [
              "village et mer",
              "le village et la mer"
            ],
            "choices": [
              "Le village et la mer",
              "La montagne et Paris",
              "Le désert et la neige",
              "La gare et l’aéroport"
            ],
            "interaction": "choice",
            "hint": "Lis le titre comme une synthèse.",
            "hint2": "Le village et la mer."
          }
        },
        "validationFocus": "Field-test final panorama and crowd flow.",
        "choices": [
          "Le village et la mer",
          "La montagne et Paris",
          "Le désert et la neige",
          "La gare et l’aéroport"
        ],
        "id": "co-code-fauve-s07"
      }
    ],
    "lastVerified": "2026-09-09",
    "sourceSummary": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/balade-les-chemins-du-fauvisme/",
    "safety": "Parcours urbain : prudence dans les ruelles et zones très fréquentées. Aucun panneau ne doit obliger à rester au milieu d’un passage.",
    "offline": true,
    "territoryId": "collioure",
    "route": {
      "level": "facile",
      "levelLabel": "Facile",
      "distanceKm": null,
      "distanceLabel": "À remesurer",
      "walkTime": "1 h 30",
      "gameTime": "≈ 1 h 45 – 2 h 15 avec le jeu",
      "ascentM": 8,
      "descentM": 9,
      "altMaxM": 8,
      "surface": "Ruelles et front de baie, parcours artistique urbain",
      "accessibility": "À qualifier en reconnaissance Explor’Action.",
      "metricsStatus": "official-time-elevation-distance-anomaly-field-measurement-required",
      "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/balade-les-chemins-du-fauvisme/",
      "note": "L’Office de tourisme annonce 1 h 30, +8 m / −9 m mais affiche 463,1 km, valeur manifestement incohérente pour cette déambulation de 9 œuvres. Explor’Action ne publie donc aucune distance avant mesure terrain.",
      "playerDistance": "À remesurer",
      "playerAscent": "+8 m / −9 m (fiche officielle)",
      "playerWalk": "1 h 30 de marche officielle",
      "playerTerrain": "Ruelles et front de baie, parcours artistique urbain",
      "playerNote": "Durée et faibles dénivelés documentés ; distance volontairement masquée jusqu’à remesure car la fiche officielle contient une anomalie manifeste.",
      "routeType": "Boucle",
      "officialBasis": "Chemins du Fauvisme",
      "durationLabel": "1 h 30 de marche officielle • ≈ 1 h 45 – 2 h 15 avec le jeu"
    },
    "teaser": "Ne cherche pas les couleurs dans une fiche : marche de panneau en panneau et compare les œuvres au paysage réel.",
    "briefing": "Cette mission utilise le Chemin du Fauvisme sans copier une visite guidée. Les énigmes doivent faire lever les yeux et comparer cadrages, sujets et paysage.",
    "objective": "Débloquer sept fragments de lecture du Fauvisme et trouver ce que les peintres ont libéré.",
    "ending": "COULEUR. Le Fauvisme n’efface pas Collioure : il transforme la façon de traduire sa lumière, ses barques, ses toits et sa mer.",
    "territoryFragment": "COULEUR",
    "cardTerrain": "Ruelles et front de baie, parcours artistique urbain",
    "cardTime": "≈ 1 h 45 – 2 h 15 avec le jeu",
    "playerMetrics": [
      [
        "🥾",
        "À remesurer"
      ],
      [
        "↗",
        "+8 m / −9 m"
      ],
      [
        "⏱",
        "1 h 30 (fiche officielle)"
      ]
    ],
    "storyBeats": [
      {
        "title": "Neuf fenêtres",
        "text": "Le parcours transforme les rues en galerie."
      },
      {
        "title": "Derain entre en scène",
        "text": "Un même village produit des regards différents."
      },
      {
        "title": "Les barques comme motif",
        "text": "Le quotidien devient sujet de peinture."
      },
      {
        "title": "Le phare déplacé par le regard",
        "text": "Le repère réel change dans la toile."
      },
      {
        "title": "Deux artistes",
        "text": "La révolution visuelle est aussi un dialogue."
      },
      {
        "title": "Le village se fragmente",
        "text": "Toits, criques et rues deviennent des morceaux de composition."
      },
      {
        "title": "Village et mer réunis",
        "text": "Le paysage réel redevient le grand final."
      }
    ],
    "playerStatus": "development-research",
    "scenarioDisclaimer": "Le nuancier perdu est fictif. Les neuf œuvres et le contexte 1905 sont sourcés. La distance affichée par l’Office étant manifestement erronée, la métrique doit être remesurée avant publication.",
    "finalPrompt": "Quel mot est au cœur d’un mouvement qui libère les tons et transforme la lumière en langage ?",
    "clueCards": [
      {
        "unlockAt": 2,
        "title": "Carte 1 — Pas seulement dessiner",
        "text": "Le sujet réel reste reconnaissable, mais son traitement change."
      },
      {
        "unlockAt": 5,
        "title": "Carte 2 — Une révolution visuelle",
        "text": "Matisse et Derain expérimentent surtout par les tons."
      },
      {
        "unlockAt": 7,
        "title": "Carte 3 — Le nuancier perdu",
        "text": "Le mot final est ce que le carnet fictif avait perdu."
      }
    ],
    "developmentStatus": "ready-content-field-monitoring",
    "sourceCheckedAt": "2026-09-10",
    "fieldValidation": "monitoring-required",
    "validationTier": "ready-application-test"
  },
  {
    "id": "co-hauts-toits",
    "icon": "⛰️",
    "title": "Au-dessus des Toits",
    "tag": "Vignes • Panorama • Patrimoine",
    "duration": "3 h 02 de marche officielle • ≈ 4 h 15 – 5 h avec le jeu",
    "difficulty": "Intermédiaire",
    "story": "Une carte fictive de Collioure a perdu ses courbes de niveau. Pour la reconstruire, il faut quitter les quais, traverser les terrasses, lire les hauteurs puis retrouver la mer.",
    "final": "RELIEF",
    "steps": [
      {
        "name": "Rue du Temple — quitter la baie",
        "fact": "La boucle quitte le centre par la rue du Temple, passe sous la voie ferrée puis suit la rue de la Galère vers Consolation.",
        "type": "sequence",
        "q": "Remets les trois repères du départ dans l’ordre.",
        "answers": [
          "Rue du Temple > Passage sous la voie ferrée > Rue de la Galère"
        ],
        "hint": "Le Temple vient en premier.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/les-hauts-de-collioure/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "sequence",
        "locationMode": "trail",
        "hint2": "Temple → voie ferrée → Galère.",
        "routeInstruction": "Suis le chemin de Consolation indiqué par la fiche officielle.",
        "audience": {
          "enfant": {
            "q": "En famille : Remets les trois repères du départ dans l’ordre.",
            "answers": [
              "Rue du Temple > Passage sous la voie ferrée > Rue de la Galère"
            ],
            "interaction": "sequence",
            "hint": "Le Temple vient en premier.",
            "hint2": "Temple → voie ferrée → Galère.",
            "choices": [
              "Rue du Temple",
              "Passage sous la voie ferrée",
              "Rue de la Galère"
            ],
            "sequence": [
              "Rue du Temple",
              "Passage sous la voie ferrée",
              "Rue de la Galère"
            ]
          },
          "adulte": {
            "q": "En autonomie : Remets les trois repères du départ dans l’ordre.",
            "answers": [
              "Rue du Temple > Passage sous la voie ferrée > Rue de la Galère"
            ],
            "interaction": "text",
            "hint": "Le Temple vient en premier.",
            "hint2": "Temple → voie ferrée → Galère.",
            "choices": [
              "Rue du Temple",
              "Passage sous la voie ferrée",
              "Rue de la Galère"
            ],
            "sequence": [
              "Rue du Temple",
              "Passage sous la voie ferrée",
              "Rue de la Galère"
            ]
          },
          "ado": {
            "q": "Remets les trois repères du départ dans l’ordre.",
            "answers": [
              "Rue du Temple > Passage sous la voie ferrée > Rue de la Galère"
            ],
            "choices": [
              "Rue du Temple",
              "Passage sous la voie ferrée",
              "Rue de la Galère"
            ],
            "interaction": "sequence",
            "hint": "Le Temple vient en premier.",
            "hint2": "Temple → voie ferrée → Galère."
          }
        },
        "validationFocus": "Confirmer sur place la formulation, l’observabilité, le point exact et la sécurité.",
        "choices": [
          "Rue du Temple",
          "Passage sous la voie ferrée",
          "Rue de la Galère"
        ],
        "sequence": [
          "Rue du Temple",
          "Passage sous la voie ferrée",
          "Rue de la Galère"
        ],
        "id": "co-hauts-toits-s01"
      },
      {
        "name": "Vignes en terrasses — lire la pente",
        "fact": "La randonnée s’élève au milieu des vignes en terrasses en quittant le bourg.",
        "type": "choice",
        "q": "Quelle forme d’agriculture accompagne la montée ?",
        "answers": [
          "vignes en terrasses",
          "vignoble en terrasses",
          "vignes",
          "Des vignes en terrasses"
        ],
        "hint": "Les murs retiennent des niveaux successifs.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/les-hauts-de-collioure/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "choice",
        "locationMode": "trail",
        "hint2": "Les vignes en terrasses.",
        "routeInstruction": "Reste sur la petite route et les sentiers autorisés.",
        "audience": {
          "enfant": {
            "q": "En famille : Quelle forme d’agriculture accompagne la montée ?",
            "answers": [
              "vignes en terrasses",
              "vignoble en terrasses",
              "vignes",
              "Des vignes en terrasses"
            ],
            "interaction": "choice",
            "hint": "Les murs retiennent des niveaux successifs.",
            "hint2": "Les vignes en terrasses.",
            "choices": [
              "Des vignes en terrasses",
              "Des rizières",
              "Une plaine céréalière",
              "Un verger urbain"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quelle forme d’agriculture accompagne la montée ?",
            "answers": [
              "vignes en terrasses",
              "vignoble en terrasses",
              "vignes",
              "Des vignes en terrasses"
            ],
            "interaction": "text",
            "hint": "Les murs retiennent des niveaux successifs.",
            "hint2": "Les vignes en terrasses.",
            "choices": [
              "Des vignes en terrasses",
              "Des rizières",
              "Une plaine céréalière",
              "Un verger urbain"
            ]
          },
          "ado": {
            "q": "Quelle forme d’agriculture accompagne la montée ?",
            "answers": [
              "vignes en terrasses",
              "vignoble en terrasses",
              "vignes",
              "Des vignes en terrasses"
            ],
            "choices": [
              "Des vignes en terrasses",
              "Des rizières",
              "Une plaine céréalière",
              "Un verger urbain"
            ],
            "interaction": "choice",
            "hint": "Les murs retiennent des niveaux successifs.",
            "hint2": "Les vignes en terrasses."
          }
        },
        "validationFocus": "Construire une observation réelle des terrasses sans entrée dans les parcelles.",
        "choices": [
          "Des vignes en terrasses",
          "Des rizières",
          "Une plaine céréalière",
          "Un verger urbain"
        ],
        "id": "co-hauts-toits-s02"
      },
      {
        "name": "Notre-Dame-de-Consolation — le seuil calme",
        "fact": "L’ermitage Notre-Dame-de-Consolation figure parmi les grands repères de la randonnée.",
        "type": "choice",
        "q": "Quel type de lieu patrimonial marque cette partie de la montée ?",
        "answers": [
          "ermitage",
          "un ermitage",
          "notre dame de consolation"
        ],
        "hint": "Le nom est Notre-Dame-de-Consolation.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/les-hauts-de-collioure/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "choice",
        "locationMode": "trail",
        "hint2": "Un ermitage.",
        "routeInstruction": "Rejoins le secteur de Consolation en respectant les accès.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel type de lieu patrimonial marque cette partie de la montée ?",
            "answers": [
              "ermitage",
              "un ermitage",
              "notre dame de consolation"
            ],
            "interaction": "choice",
            "hint": "Le nom est Notre-Dame-de-Consolation.",
            "hint2": "Un ermitage.",
            "choices": [
              "Un ermitage",
              "Un port industriel",
              "Un phare",
              "Un dolmen"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quel type de lieu patrimonial marque cette partie de la montée ?",
            "answers": [
              "ermitage",
              "un ermitage",
              "notre dame de consolation"
            ],
            "interaction": "text",
            "hint": "Le nom est Notre-Dame-de-Consolation.",
            "hint2": "Un ermitage.",
            "choices": [
              "Un ermitage",
              "Un port industriel",
              "Un phare",
              "Un dolmen"
            ]
          },
          "ado": {
            "q": "Quel type de lieu patrimonial marque cette partie de la montée ?",
            "answers": [
              "ermitage",
              "un ermitage",
              "notre dame de consolation"
            ],
            "choices": [
              "Un ermitage",
              "Un port industriel",
              "Un phare",
              "Un dolmen"
            ],
            "interaction": "choice",
            "hint": "Le nom est Notre-Dame-de-Consolation.",
            "hint2": "Un ermitage."
          }
        },
        "validationFocus": "Confirmer sur place la formulation, l’observabilité, le point exact et la sécurité.",
        "choices": [
          "Un ermitage",
          "Un port industriel",
          "Un phare",
          "Un dolmen"
        ],
        "id": "co-hauts-toits-s03"
      },
      {
        "name": "Table d’orientation — reprendre la baie",
        "fact": "La fiche de randonnée associe une table d’orientation aux hauts de Collioure.",
        "type": "choice",
        "q": "Quel outil de terrain sert à nommer ce que l’on voit dans le panorama ?",
        "answers": [
          "table d orientation",
          "table d’orientation",
          "Une table d’orientation"
        ],
        "hint": "Elle met des noms sur l’horizon.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/les-hauts-de-collioure/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "choice",
        "locationMode": "trail",
        "hint2": "La table d’orientation.",
        "routeInstruction": "Utilise la table si elle est accessible sans quitter le tracé.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel outil de terrain sert à nommer ce que l’on voit dans le panorama ?",
            "answers": [
              "table d orientation",
              "table d’orientation",
              "Une table d’orientation"
            ],
            "interaction": "choice",
            "hint": "Elle met des noms sur l’horizon.",
            "hint2": "La table d’orientation.",
            "choices": [
              "Une table d’orientation",
              "Un feu tricolore",
              "Une borne de quai",
              "Une vitrine"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quel outil de terrain sert à nommer ce que l’on voit dans le panorama ?",
            "answers": [
              "table d orientation",
              "table d’orientation",
              "Une table d’orientation"
            ],
            "interaction": "text",
            "hint": "Elle met des noms sur l’horizon.",
            "hint2": "La table d’orientation.",
            "choices": [
              "Une table d’orientation",
              "Un feu tricolore",
              "Une borne de quai",
              "Une vitrine"
            ]
          },
          "ado": {
            "q": "Quel outil de terrain sert à nommer ce que l’on voit dans le panorama ?",
            "answers": [
              "table d orientation",
              "table d’orientation",
              "Une table d’orientation"
            ],
            "choices": [
              "Une table d’orientation",
              "Un feu tricolore",
              "Une borne de quai",
              "Une vitrine"
            ],
            "interaction": "choice",
            "hint": "Elle met des noms sur l’horizon.",
            "hint2": "La table d’orientation."
          }
        },
        "validationFocus": "Vérifier présence, état et panorama réellement lisible.",
        "choices": [
          "Une table d’orientation",
          "Un feu tricolore",
          "Une borne de quai",
          "Une vitrine"
        ],
        "id": "co-hauts-toits-s04"
      },
      {
        "name": "Fort Dugommier — le paysage se défend",
        "fact": "Fort Dugommier est un repère documenté de cette boucle des hauteurs.",
        "type": "choice",
        "q": "Quel type d’ouvrage apparaît sur la partie haute ?",
        "answers": [
          "fort",
          "fort dugommier",
          "un fort"
        ],
        "hint": "Dugommier.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/les-hauts-de-collioure/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "choice",
        "locationMode": "trail",
        "hint2": "Un fort.",
        "routeInstruction": "Observe depuis l’espace autorisé ; aucune entrée dans un ouvrage fermé.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel type d’ouvrage apparaît sur la partie haute ?",
            "answers": [
              "fort",
              "fort dugommier",
              "un fort"
            ],
            "interaction": "choice",
            "hint": "Dugommier.",
            "hint2": "Un fort.",
            "choices": [
              "Un fort",
              "Une abbaye",
              "Un aquarium",
              "Un casino"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quel type d’ouvrage apparaît sur la partie haute ?",
            "answers": [
              "fort",
              "fort dugommier",
              "un fort"
            ],
            "interaction": "text",
            "hint": "Dugommier.",
            "hint2": "Un fort.",
            "choices": [
              "Un fort",
              "Une abbaye",
              "Un aquarium",
              "Un casino"
            ]
          },
          "ado": {
            "q": "Quel type d’ouvrage apparaît sur la partie haute ?",
            "answers": [
              "fort",
              "fort dugommier",
              "un fort"
            ],
            "choices": [
              "Un fort",
              "Une abbaye",
              "Un aquarium",
              "Un casino"
            ],
            "interaction": "choice",
            "hint": "Dugommier.",
            "hint2": "Un fort."
          }
        },
        "validationFocus": "Confirmer sur place la formulation, l’observabilité, le point exact et la sécurité.",
        "choices": [
          "Un fort",
          "Une abbaye",
          "Un aquarium",
          "Un casino"
        ],
        "id": "co-hauts-toits-s05"
      },
      {
        "name": "Moulin — amorcer la descente",
        "fact": "Le retour officiel passe au niveau du moulin puis descend par une série d’escaliers vers le musée d’Art moderne.",
        "type": "sequence",
        "q": "Quel ordre correspond au retour vers la ville ?",
        "answers": [
          "Moulin > Escaliers > Musée d’Art moderne"
        ],
        "hint": "Le moulin vient avant les escaliers.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/les-hauts-de-collioure/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "sequence",
        "locationMode": "trail",
        "hint2": "Moulin → escaliers → musée.",
        "routeInstruction": "Redescends par le cheminement officiel.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel ordre correspond au retour vers la ville ?",
            "answers": [
              "Moulin > Escaliers > Musée d’Art moderne"
            ],
            "interaction": "sequence",
            "hint": "Le moulin vient avant les escaliers.",
            "hint2": "Moulin → escaliers → musée.",
            "choices": [
              "Moulin",
              "Escaliers",
              "Musée d’Art moderne"
            ],
            "sequence": [
              "Moulin",
              "Escaliers",
              "Musée d’Art moderne"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quel ordre correspond au retour vers la ville ?",
            "answers": [
              "Moulin > Escaliers > Musée d’Art moderne"
            ],
            "interaction": "text",
            "hint": "Le moulin vient avant les escaliers.",
            "hint2": "Moulin → escaliers → musée.",
            "choices": [
              "Moulin",
              "Escaliers",
              "Musée d’Art moderne"
            ],
            "sequence": [
              "Moulin",
              "Escaliers",
              "Musée d’Art moderne"
            ]
          },
          "ado": {
            "q": "Quel ordre correspond au retour vers la ville ?",
            "answers": [
              "Moulin > Escaliers > Musée d’Art moderne"
            ],
            "choices": [
              "Moulin",
              "Escaliers",
              "Musée d’Art moderne"
            ],
            "interaction": "sequence",
            "hint": "Le moulin vient avant les escaliers.",
            "hint2": "Moulin → escaliers → musée."
          }
        },
        "validationFocus": "Audit marches, glissance, fatigue et fréquentation.",
        "choices": [
          "Moulin",
          "Escaliers",
          "Musée d’Art moderne"
        ],
        "sequence": [
          "Moulin",
          "Escaliers",
          "Musée d’Art moderne"
        ],
        "id": "co-hauts-toits-s06"
      },
      {
        "name": "Anse de la Balette — retrouver la mer",
        "fact": "Après le musée, la fiche rejoint les quais de l’Anse de la Balette puis revient vers le point de départ.",
        "type": "choice",
        "q": "Quel milieu retrouve-t-on en fin de boucle ?",
        "answers": [
          "mer",
          "littoral",
          "la mer"
        ],
        "hint": "La boucle redescend jusqu’aux quais.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/les-hauts-de-collioure/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": true,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "choice",
        "locationMode": "trail",
        "hint2": "La mer.",
        "routeInstruction": "Termine par les quais et le retour urbain.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel milieu retrouve-t-on en fin de boucle ?",
            "answers": [
              "mer",
              "littoral",
              "la mer"
            ],
            "interaction": "choice",
            "hint": "La boucle redescend jusqu’aux quais.",
            "hint2": "La mer.",
            "choices": [
              "La mer",
              "Une haute crête",
              "Une forêt fermée",
              "Un lac alpin"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quel milieu retrouve-t-on en fin de boucle ?",
            "answers": [
              "mer",
              "littoral",
              "la mer"
            ],
            "interaction": "text",
            "hint": "La boucle redescend jusqu’aux quais.",
            "hint2": "La mer.",
            "choices": [
              "La mer",
              "Une haute crête",
              "Une forêt fermée",
              "Un lac alpin"
            ]
          },
          "ado": {
            "q": "Quel milieu retrouve-t-on en fin de boucle ?",
            "answers": [
              "mer",
              "littoral",
              "la mer"
            ],
            "choices": [
              "La mer",
              "Une haute crête",
              "Une forêt fermée",
              "Un lac alpin"
            ],
            "interaction": "choice",
            "hint": "La boucle redescend jusqu’aux quais.",
            "hint2": "La mer."
          }
        },
        "validationFocus": "Confirmer sur place la formulation, l’observabilité, le point exact et la sécurité.",
        "choices": [
          "La mer",
          "Une haute crête",
          "Une forêt fermée",
          "Un lac alpin"
        ],
        "id": "co-hauts-toits-s07"
      }
    ],
    "lastVerified": "2026-09-09",
    "sourceSummary": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/les-hauts-de-collioure/",
    "safety": "Randonnée de 9,6 km et +401 m. Eau, chaussures adaptées, protection solaire. Prudence dans les escaliers et sur les chemins. Respect des vignes et propriétés.",
    "offline": true,
    "territoryId": "collioure",
    "route": {
      "level": "intermédiaire",
      "levelLabel": "Intermédiaire",
      "distanceKm": 9.6,
      "distanceLabel": "9,6 km",
      "walkTime": "3 h 02",
      "gameTime": "≈ 4 h 15 – 5 h avec le jeu",
      "ascentM": 401,
      "descentM": 401,
      "altMaxM": 246,
      "surface": "Ruelles, vignes en terrasses, chemins, ermitage, forts et retour urbain",
      "accessibility": "À qualifier en reconnaissance Explor’Action.",
      "metricsStatus": "official-route-field-validation-required",
      "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/les-hauts-de-collioure/",
      "note": "Métriques reprises de la fiche officielle ; géofences, observabilité et temps avec jeu restent à reconnaître.",
      "playerDistance": "9,6 km",
      "playerAscent": "+401 m / −401 m",
      "playerWalk": "3 h 02 de marche officielle",
      "playerTerrain": "Ruelles, vignes en terrasses, chemins, ermitage, forts et retour urbain",
      "playerNote": "Base officielle de randonnée. Publication bloquée jusqu’à reconnaissance terrain et playtest.",
      "routeType": "Boucle",
      "officialBasis": "Les Hauts de Collioure",
      "durationLabel": "3 h 02 de marche officielle • ≈ 4 h 15 – 5 h avec le jeu"
    },
    "teaser": "Prends de la hauteur au-dessus de Collioure et découvre comment vignes, ermitage, forts et moulin organisent le paysage.",
    "briefing": "Le changement d’altitude est la mécanique de cette aventure : chaque étape doit montrer quelque chose que l’étape précédente ne permettait pas encore de comprendre.",
    "objective": "Lire sept transformations du paysage entre baie et hauteurs.",
    "ending": "RELIEF. À Collioure, la mer n’est jamais séparée des pentes : les terrasses, les forts et les chemins dessinent ensemble le paysage.",
    "territoryFragment": "RELIEF",
    "cardTerrain": "Ruelles, vignes en terrasses, chemins, ermitage, forts et retour urbain",
    "cardTime": "≈ 4 h 15 – 5 h avec le jeu",
    "playerMetrics": [
      [
        "🥾",
        "9,6 km"
      ],
      [
        "↗",
        "+401 m / −401 m"
      ],
      [
        "⏱",
        "3 h 02 de marche officielle"
      ]
    ],
    "storyBeats": [
      {
        "title": "Quitter la baie",
        "text": "Les ruelles deviennent une rampe vers les hauteurs."
      },
      {
        "title": "La pente cultivée",
        "text": "Les terrasses montrent comment l’homme travaille le relief."
      },
      {
        "title": "Une halte sur la montée",
        "text": "Consolation apporte un autre usage de la montagne."
      },
      {
        "title": "Nommer l’horizon",
        "text": "La table d’orientation transforme la vue en carte."
      },
      {
        "title": "Défendre depuis le haut",
        "text": "Dugommier utilise le relief comme avantage."
      },
      {
        "title": "Redescendre par les traces humaines",
        "text": "Moulin et escaliers reconduisent vers la ville."
      },
      {
        "title": "La mer retrouvée",
        "text": "L’anse clôt la lecture verticale du territoire."
      }
    ],
    "playerStatus": "development-research",
    "scenarioDisclaimer": "La carte aux courbes effacées est fictive. Les lieux et métriques viennent de la fiche officielle ; les points de jeu exacts restent à reconnaître.",
    "finalPrompt": "Quel mot désigne la forme du terrain que la mission t’a fait lire en montant puis en redescendant ?",
    "clueCards": [
      {
        "unlockAt": 2,
        "title": "Carte 1 — Des niveaux",
        "text": "Les vignes sont installées en terrasses."
      },
      {
        "unlockAt": 5,
        "title": "Carte 2 — Prendre de la hauteur",
        "text": "Panorama et fort dépendent de la position."
      },
      {
        "unlockAt": 7,
        "title": "Carte 3 — Monter / descendre",
        "text": "Le mot final décrit la forme du terrain."
      }
    ],
    "developmentStatus": "ready-content-field-monitoring",
    "sourceCheckedAt": "2026-09-10",
    "fieldValidation": "monitoring-required",
    "validationTier": "ready-application-test"
  },
  {
    "id": "co-signal-madeloc",
    "icon": "📡",
    "title": "Le Signal de la Madeloc",
    "tag": "Crêtes • Signal • Panorama",
    "duration": "6 h 30 de marche officielle • ≈ 8 h–9 h 30 avec le jeu",
    "difficulty": "Difficile",
    "story": "Un message fictif semble avoir été envoyé depuis la crête, mais il manque les relais. Le joueur doit reconstruire une chaîne faite de lieux spirituels, positions militaires, cols et panorama.",
    "final": "SIGNAL",
    "steps": [
      {
        "name": "Collioure — le départ bas",
        "fact": "La randonnée part du front de mer puis quitte le bourg par la rue du Temple, la voie ferrée et le chemin de Consolation.",
        "type": "sequence",
        "q": "Quel ordre fait passer de la baie aux pentes ?",
        "answers": [
          "Front de mer > Rue du Temple > Chemin de Consolation"
        ],
        "hint": "La mer est le point bas.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/massif-de-la-madeloc/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "sequence",
        "locationMode": "trail",
        "hint2": "Front de mer → rue du Temple → Consolation.",
        "routeInstruction": "Suis l’itinéraire officiel en quittant le bourg.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel ordre fait passer de la baie aux pentes ?",
            "answers": [
              "Front de mer > Rue du Temple > Chemin de Consolation"
            ],
            "interaction": "sequence",
            "hint": "La mer est le point bas.",
            "hint2": "Front de mer → rue du Temple → Consolation.",
            "choices": [
              "Front de mer",
              "Rue du Temple",
              "Chemin de Consolation"
            ],
            "sequence": [
              "Front de mer",
              "Rue du Temple",
              "Chemin de Consolation"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quel ordre fait passer de la baie aux pentes ?",
            "answers": [
              "Front de mer > Rue du Temple > Chemin de Consolation"
            ],
            "interaction": "text",
            "hint": "La mer est le point bas.",
            "hint2": "Front de mer → rue du Temple → Consolation.",
            "choices": [
              "Front de mer",
              "Rue du Temple",
              "Chemin de Consolation"
            ],
            "sequence": [
              "Front de mer",
              "Rue du Temple",
              "Chemin de Consolation"
            ]
          },
          "ado": {
            "q": "Quel ordre fait passer de la baie aux pentes ?",
            "answers": [
              "Front de mer > Rue du Temple > Chemin de Consolation"
            ],
            "choices": [
              "Front de mer",
              "Rue du Temple",
              "Chemin de Consolation"
            ],
            "interaction": "sequence",
            "hint": "La mer est le point bas.",
            "hint2": "Front de mer → rue du Temple → Consolation."
          }
        },
        "validationFocus": "Confirmer sur place la formulation, l’observabilité, le point exact et la sécurité.",
        "choices": [
          "Front de mer",
          "Rue du Temple",
          "Chemin de Consolation"
        ],
        "sequence": [
          "Front de mer",
          "Rue du Temple",
          "Chemin de Consolation"
        ],
        "id": "co-signal-madeloc-s01"
      },
      {
        "name": "Consolation — spiritualité dans le massif",
        "fact": "Notre-Dame-de-Consolation est l’un des repères majeurs avant la montée vers les crêtes de Madeloc.",
        "type": "choice",
        "q": "Quel type de site précède la haute montagne ?",
        "answers": [
          "ermitage",
          "un ermitage"
        ],
        "hint": "Notre-Dame-de-Consolation.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/massif-de-la-madeloc/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "choice",
        "locationMode": "trail",
        "hint2": "Un ermitage.",
        "routeInstruction": "Respecte les lieux et reste sur les accès autorisés.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel type de site précède la haute montagne ?",
            "answers": [
              "ermitage",
              "un ermitage"
            ],
            "interaction": "choice",
            "hint": "Notre-Dame-de-Consolation.",
            "hint2": "Un ermitage.",
            "choices": [
              "Un ermitage",
              "Un port de commerce",
              "Un aérodrome",
              "Un dolmen"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quel type de site précède la haute montagne ?",
            "answers": [
              "ermitage",
              "un ermitage"
            ],
            "interaction": "text",
            "hint": "Notre-Dame-de-Consolation.",
            "hint2": "Un ermitage.",
            "choices": [
              "Un ermitage",
              "Un port de commerce",
              "Un aérodrome",
              "Un dolmen"
            ]
          },
          "ado": {
            "q": "Quel type de site précède la haute montagne ?",
            "answers": [
              "ermitage",
              "un ermitage"
            ],
            "choices": [
              "Un ermitage",
              "Un port de commerce",
              "Un aérodrome",
              "Un dolmen"
            ],
            "interaction": "choice",
            "hint": "Notre-Dame-de-Consolation.",
            "hint2": "Un ermitage."
          }
        },
        "validationFocus": "Confirmer sur place la formulation, l’observabilité, le point exact et la sécurité.",
        "choices": [
          "Un ermitage",
          "Un port de commerce",
          "Un aérodrome",
          "Un dolmen"
        ],
        "id": "co-signal-madeloc-s02"
      },
      {
        "name": "Batterie 500 — l’empreinte militaire",
        "fact": "La fiche du massif mentionne la Batterie 500 parmi les points patrimoniaux du parcours.",
        "type": "choice",
        "q": "Quel mot décrit ce type d’ouvrage ?",
        "answers": [
          "batterie",
          "batterie militaire",
          "une batterie",
          "Une batterie militaire"
        ],
        "hint": "Elle appartient au vocabulaire défensif.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/massif-de-la-madeloc/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "choice",
        "locationMode": "trail",
        "hint2": "Une batterie militaire.",
        "routeInstruction": "Aucune entrée dans des structures non sécurisées.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel mot décrit ce type d’ouvrage ?",
            "answers": [
              "batterie",
              "batterie militaire",
              "une batterie",
              "Une batterie militaire"
            ],
            "interaction": "choice",
            "hint": "Elle appartient au vocabulaire défensif.",
            "hint2": "Une batterie militaire.",
            "choices": [
              "Une batterie militaire",
              "Un monastère",
              "Un marché",
              "Un lavoir"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quel mot décrit ce type d’ouvrage ?",
            "answers": [
              "batterie",
              "batterie militaire",
              "une batterie",
              "Une batterie militaire"
            ],
            "interaction": "text",
            "hint": "Elle appartient au vocabulaire défensif.",
            "hint2": "Une batterie militaire.",
            "choices": [
              "Une batterie militaire",
              "Un monastère",
              "Un marché",
              "Un lavoir"
            ]
          },
          "ado": {
            "q": "Quel mot décrit ce type d’ouvrage ?",
            "answers": [
              "batterie",
              "batterie militaire",
              "une batterie",
              "Une batterie militaire"
            ],
            "choices": [
              "Une batterie militaire",
              "Un monastère",
              "Un marché",
              "Un lavoir"
            ],
            "interaction": "choice",
            "hint": "Elle appartient au vocabulaire défensif.",
            "hint2": "Une batterie militaire."
          }
        },
        "validationFocus": "Vérifier précisément visibilité et statut d’accès.",
        "choices": [
          "Une batterie militaire",
          "Un monastère",
          "Un marché",
          "Un lavoir"
        ],
        "id": "co-signal-madeloc-s03"
      },
      {
        "name": "Col de la Serre — le territoire s’ouvre",
        "fact": "Le col de la Serre figure parmi les repères du massif avant les secteurs de Taillefer et Madeloc.",
        "type": "choice",
        "q": "Quel type de forme de relief est un « col » ?",
        "answers": [
          "passage entre reliefs",
          "passage",
          "un passage",
          "Un passage entre reliefs"
        ],
        "hint": "C’est un point de passage en hauteur.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/massif-de-la-madeloc/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "choice",
        "locationMode": "trail",
        "hint2": "Un passage entre reliefs.",
        "routeInstruction": "Suis le balisage sans couper les lacets.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel type de forme de relief est un « col » ?",
            "answers": [
              "passage entre reliefs",
              "passage",
              "un passage",
              "Un passage entre reliefs"
            ],
            "interaction": "choice",
            "hint": "C’est un point de passage en hauteur.",
            "hint2": "Un passage entre reliefs.",
            "choices": [
              "Un passage entre reliefs",
              "Une plage",
              "Un quai",
              "Une grotte marine"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quel type de forme de relief est un « col » ?",
            "answers": [
              "passage entre reliefs",
              "passage",
              "un passage",
              "Un passage entre reliefs"
            ],
            "interaction": "text",
            "hint": "C’est un point de passage en hauteur.",
            "hint2": "Un passage entre reliefs.",
            "choices": [
              "Un passage entre reliefs",
              "Une plage",
              "Un quai",
              "Une grotte marine"
            ]
          },
          "ado": {
            "q": "Quel type de forme de relief est un « col » ?",
            "answers": [
              "passage entre reliefs",
              "passage",
              "un passage",
              "Un passage entre reliefs"
            ],
            "choices": [
              "Un passage entre reliefs",
              "Une plage",
              "Un quai",
              "Une grotte marine"
            ],
            "interaction": "choice",
            "hint": "C’est un point de passage en hauteur.",
            "hint2": "Un passage entre reliefs."
          }
        },
        "validationFocus": "Confirmer sur place la formulation, l’observabilité, le point exact et la sécurité.",
        "choices": [
          "Un passage entre reliefs",
          "Une plage",
          "Un quai",
          "Une grotte marine"
        ],
        "id": "co-signal-madeloc-s04"
      },
      {
        "name": "Taillefer — approcher le signal",
        "fact": "La Batterie de Taillefer fait partie du réseau de repères militaires avant la Tour Madeloc.",
        "type": "sequence",
        "q": "Quel enchaînement logique mène au signal majeur ?",
        "answers": [
          "Batterie de Taillefer > Tour de la Madeloc"
        ],
        "hint": "La batterie précède la tour.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/massif-de-la-madeloc/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "sequence",
        "locationMode": "trail",
        "hint2": "Taillefer → Madeloc.",
        "routeInstruction": "Poursuis selon l’itinéraire officiel et les conditions du jour.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel enchaînement logique mène au signal majeur ?",
            "answers": [
              "Batterie de Taillefer > Tour de la Madeloc"
            ],
            "interaction": "sequence",
            "hint": "La batterie précède la tour.",
            "hint2": "Taillefer → Madeloc.",
            "choices": [
              "Batterie de Taillefer",
              "Tour de la Madeloc"
            ],
            "sequence": [
              "Batterie de Taillefer",
              "Tour de la Madeloc"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quel enchaînement logique mène au signal majeur ?",
            "answers": [
              "Batterie de Taillefer > Tour de la Madeloc"
            ],
            "interaction": "text",
            "hint": "La batterie précède la tour.",
            "hint2": "Taillefer → Madeloc.",
            "choices": [
              "Batterie de Taillefer",
              "Tour de la Madeloc"
            ],
            "sequence": [
              "Batterie de Taillefer",
              "Tour de la Madeloc"
            ]
          },
          "ado": {
            "q": "Quel enchaînement logique mène au signal majeur ?",
            "answers": [
              "Batterie de Taillefer > Tour de la Madeloc"
            ],
            "choices": [
              "Batterie de Taillefer",
              "Tour de la Madeloc"
            ],
            "interaction": "sequence",
            "hint": "La batterie précède la tour.",
            "hint2": "Taillefer → Madeloc."
          }
        },
        "validationFocus": "Confirmer sur place la formulation, l’observabilité, le point exact et la sécurité.",
        "choices": [
          "Batterie de Taillefer",
          "Tour de la Madeloc"
        ],
        "sequence": [
          "Batterie de Taillefer",
          "Tour de la Madeloc"
        ],
        "id": "co-signal-madeloc-s05"
      },
      {
        "name": "Tour de la Madeloc — trois baies",
        "fact": "Depuis la Madeloc, l’Office souligne le panorama sur Collioure, Port-Vendres et Banyuls.",
        "type": "multi",
        "q": "Quelles trois communes côtières sont explicitement citées dans le panorama ?",
        "answers": [
          "collioure + port-vendres + banyuls"
        ],
        "hint": "Trois étapes de la Côte Vermeille.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/massif-de-la-madeloc/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": true,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "multi",
        "locationMode": "trail",
        "hint2": "Collioure + Port-Vendres + Banyuls-sur-Mer.",
        "routeInstruction": "N’atteins la tour que si l’accès, la météo et le vent sont compatibles.",
        "audience": {
          "enfant": {
            "q": "En famille : Quelles trois communes côtières sont explicitement citées dans le panorama ?",
            "answers": [
              "collioure + port-vendres + banyuls"
            ],
            "interaction": "multi",
            "hint": "Trois étapes de la Côte Vermeille.",
            "hint2": "Collioure + Port-Vendres + Banyuls-sur-Mer.",
            "choices": [
              "Collioure",
              "Port-Vendres",
              "Banyuls-sur-Mer",
              "Perpignan"
            ],
            "multiAnswers": [
              "Collioure",
              "Port-Vendres",
              "Banyuls-sur-Mer"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quelles trois communes côtières sont explicitement citées dans le panorama ?",
            "answers": [
              "collioure + port-vendres + banyuls"
            ],
            "interaction": "text",
            "hint": "Trois étapes de la Côte Vermeille.",
            "hint2": "Collioure + Port-Vendres + Banyuls-sur-Mer.",
            "choices": [
              "Collioure",
              "Port-Vendres",
              "Banyuls-sur-Mer",
              "Perpignan"
            ],
            "multiAnswers": [
              "Collioure",
              "Port-Vendres",
              "Banyuls-sur-Mer"
            ]
          },
          "ado": {
            "q": "Quelles trois communes côtières sont explicitement citées dans le panorama ?",
            "answers": [
              "collioure + port-vendres + banyuls"
            ],
            "choices": [
              "Collioure",
              "Port-Vendres",
              "Banyuls-sur-Mer",
              "Perpignan"
            ],
            "interaction": "multi",
            "hint": "Trois étapes de la Côte Vermeille.",
            "hint2": "Collioure + Port-Vendres + Banyuls-sur-Mer."
          }
        },
        "validationFocus": "Prévoir une version de repli sans sommet.",
        "choices": [
          "Collioure",
          "Port-Vendres",
          "Banyuls-sur-Mer",
          "Perpignan"
        ],
        "multiAnswers": [
          "Collioure",
          "Port-Vendres",
          "Banyuls-sur-Mer"
        ],
        "id": "co-signal-madeloc-s06"
      },
      {
        "name": "Contour du massif — revenir sans tricher",
        "fact": "Le circuit contourne le massif par Formingo et Vallauria avant de revenir sur l’itinéraire de départ.",
        "type": "multi",
        "q": "Quels deux noms de passage sont cités pour contourner le massif ?",
        "answers": [
          "formingo + vallauria"
        ],
        "hint": "Les deux sont dans la description du contournement.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/massif-de-la-madeloc/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "multi",
        "locationMode": "trail",
        "hint2": "Formingo + Vallauria.",
        "routeInstruction": "Suis le retour officiel ; ne crée aucun raccourci hors sentier.",
        "audience": {
          "enfant": {
            "q": "En famille : Quels deux noms de passage sont cités pour contourner le massif ?",
            "answers": [
              "formingo + vallauria"
            ],
            "interaction": "multi",
            "hint": "Les deux sont dans la description du contournement.",
            "hint2": "Formingo + Vallauria.",
            "choices": [
              "Formingo",
              "Vallauria",
              "Racou",
              "Paulilles"
            ],
            "multiAnswers": [
              "Formingo",
              "Vallauria"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quels deux noms de passage sont cités pour contourner le massif ?",
            "answers": [
              "formingo + vallauria"
            ],
            "interaction": "text",
            "hint": "Les deux sont dans la description du contournement.",
            "hint2": "Formingo + Vallauria.",
            "choices": [
              "Formingo",
              "Vallauria",
              "Racou",
              "Paulilles"
            ],
            "multiAnswers": [
              "Formingo",
              "Vallauria"
            ]
          },
          "ado": {
            "q": "Quels deux noms de passage sont cités pour contourner le massif ?",
            "answers": [
              "formingo + vallauria"
            ],
            "choices": [
              "Formingo",
              "Vallauria",
              "Racou",
              "Paulilles"
            ],
            "interaction": "multi",
            "hint": "Les deux sont dans la description du contournement.",
            "hint2": "Formingo + Vallauria."
          }
        },
        "validationFocus": "Reconnaître bifurcations et zones où un mauvais embranchement est probable.",
        "choices": [
          "Formingo",
          "Vallauria",
          "Racou",
          "Paulilles"
        ],
        "multiAnswers": [
          "Formingo",
          "Vallauria"
        ],
        "id": "co-signal-madeloc-s07"
      }
    ],
    "lastVerified": "2026-09-09",
    "sourceSummary": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/massif-de-la-madeloc/",
    "safety": "16,5 km, +963 m : équipement de randonnée, eau, nourriture, coupe-vent. Vérifier météo, accès au massif et risque incendie. Éviter l’ascension de la tour par vent fort.",
    "offline": true,
    "territoryId": "collioure",
    "route": {
      "level": "difficile",
      "levelLabel": "Difficile",
      "distanceKm": 16.5,
      "distanceLabel": "16,5 km",
      "walkTime": "6 h 30",
      "gameTime": "≈ 7 h 45 – 9 h avec le jeu",
      "ascentM": 963,
      "descentM": 962,
      "altMaxM": 626,
      "surface": "Longue randonnée de montagne, vignes, crêtes, batteries et Tour Madeloc",
      "accessibility": "À qualifier en reconnaissance Explor’Action.",
      "metricsStatus": "official-route-field-validation-required",
      "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/massif-de-la-madeloc/",
      "note": "L’Office recommande d’éviter l’ascension à la tour par vent fort.",
      "playerDistance": "16,5 km",
      "playerAscent": "+963 m / −962 m",
      "playerWalk": "6 h 30 de marche officielle",
      "playerTerrain": "Longue randonnée de montagne, vignes, crêtes, batteries et Tour Madeloc",
      "playerNote": "Base officielle de randonnée. Publication bloquée jusqu’à reconnaissance terrain et playtest.",
      "routeType": "Boucle",
      "officialBasis": "Massif de la Madeloc",
      "durationLabel": "6 h 30 de marche officielle • ≈ 7 h 45 – 9 h avec le jeu"
    },
    "teaser": "Monte de la baie jusqu’à la Madeloc et comprends pourquoi les hauteurs ont servi autant à voir qu’à transmettre.",
    "briefing": "Mission longue et engagée : elle doit pouvoir être automatiquement déconseillée quand le massif est fermé, le risque incendie élevé ou la tramontane forte.",
    "objective": "Reconstituer la chaîne de repères qui mène de Collioure à la Tour Madeloc.",
    "ending": "SIGNAL. Depuis la crête, les distances changent de sens : les villages de la côte apparaissent comme les points d’un même territoire.",
    "territoryFragment": "SIGNAL",
    "cardTerrain": "Longue randonnée de montagne, vignes, crêtes, batteries et Tour Madeloc",
    "cardTime": "≈ 7 h 45 – 9 h avec le jeu",
    "playerMetrics": [
      [
        "🥾",
        "16,5 km"
      ],
      [
        "↗",
        "+963 m / −962 m"
      ],
      [
        "⏱",
        "6 h 30 de marche officielle"
      ]
    ],
    "storyBeats": [
      {
        "title": "Le zéro de la carte",
        "text": "La mer donne le point bas."
      },
      {
        "title": "Consolation",
        "text": "La montagne n’est pas uniquement militaire."
      },
      {
        "title": "Batterie 500",
        "text": "La défense prend place sur le relief."
      },
      {
        "title": "Le col",
        "text": "Le passage naturel organise la progression."
      },
      {
        "title": "Taillefer",
        "text": "Les ouvrages se rapprochent du signal majeur."
      },
      {
        "title": "La Madeloc",
        "text": "Trois baies deviennent lisibles d’un seul regard."
      },
      {
        "title": "Contourner le massif",
        "text": "Le retour prouve qu’une montagne se lit aussi par ses passages."
      }
    ],
    "playerStatus": "development-research",
    "scenarioDisclaimer": "Le message envoyé depuis la crête est fictif. Les repères et métriques sont officiels ; les énigmes doivent être playtestées sur l’itinéraire réel.",
    "finalPrompt": "Quel mot relie une tour à signaux, la visibilité et l’idée de transmettre au loin ?",
    "clueCards": [
      {
        "unlockAt": 2,
        "title": "Carte 1 — Voir",
        "text": "La hauteur augmente la portée du regard."
      },
      {
        "unlockAt": 5,
        "title": "Carte 2 — Relayer",
        "text": "Les positions militaires et les tours s’inscrivent dans une chaîne."
      },
      {
        "unlockAt": 7,
        "title": "Carte 3 — Transmettre",
        "text": "Le mot final voyage d’un point à l’autre."
      }
    ],
    "developmentStatus": "ready-content-field-monitoring",
    "sourceCheckedAt": "2026-09-10",
    "fieldValidation": "monitoring-required",
    "validationTier": "ready-application-test"
  },
  {
    "id": "ar-ligne-bleue",
    "icon": "🏖️",
    "title": "La Ligne Bleue",
    "tag": "Littoral • Port • Photo",
    "duration": "2 h de marche officielle • ≈ 2 h 45 – 3 h 30 avec le jeu",
    "difficulty": "Facile",
    "story": "Une ligne fictive a été tracée le long de la mer mais personne ne sait ce qu’elle relie. Le joueur avance du port à la promenade, franchit la Massane et construit une mémoire du rivage.",
    "final": "RIVAGE",
    "steps": [
      {
        "name": "Port — départ au bord de l’eau",
        "fact": "La promenade officielle démarre au port et longe les quais avant de rejoindre la passerelle sur la Massane.",
        "type": "choice",
        "q": "Quel milieu donne le départ de cette balade ?",
        "answers": [
          "port",
          "le port"
        ],
        "hint": "Des quais et des bateaux.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/balade-promenade-du-front-de-mer/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "choice",
        "locationMode": "trail",
        "hint2": "Le port.",
        "routeInstruction": "Reste sur les espaces piétons et zones partagées.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel milieu donne le départ de cette balade ?",
            "answers": [
              "port",
              "le port"
            ],
            "interaction": "choice",
            "hint": "Des quais et des bateaux.",
            "hint2": "Le port.",
            "choices": [
              "Le port",
              "Une crête",
              "Un col",
              "Un ermitage"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quel milieu donne le départ de cette balade ?",
            "answers": [
              "port",
              "le port"
            ],
            "interaction": "text",
            "hint": "Des quais et des bateaux.",
            "hint2": "Le port.",
            "choices": [
              "Le port",
              "Une crête",
              "Un col",
              "Un ermitage"
            ]
          },
          "ado": {
            "q": "Quel milieu donne le départ de cette balade ?",
            "answers": [
              "port",
              "le port"
            ],
            "choices": [
              "Le port",
              "Une crête",
              "Un col",
              "Un ermitage"
            ],
            "interaction": "choice",
            "hint": "Des quais et des bateaux.",
            "hint2": "Le port."
          }
        },
        "validationFocus": "Confirmer sur place la formulation, l’observabilité, le point exact et la sécurité.",
        "choices": [
          "Le port",
          "Une crête",
          "Un col",
          "Un ermitage"
        ],
        "id": "ar-ligne-bleue-s01"
      },
      {
        "name": "Barque catalane — mémoire maritime",
        "fact": "La fiche officielle signale une barque catalane parmi les points d’intérêt du front de mer.",
        "type": "choice",
        "q": "Quel type d’embarcation patrimoniale est signalé ici ?",
        "answers": [
          "barque catalane",
          "une barque catalane"
        ],
        "hint": "Elle porte le nom du territoire.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/balade-promenade-du-front-de-mer/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "choice",
        "locationMode": "trail",
        "hint2": "Une barque catalane.",
        "routeInstruction": "Observe sans franchir les zones portuaires.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel type d’embarcation patrimoniale est signalé ici ?",
            "answers": [
              "barque catalane",
              "une barque catalane"
            ],
            "interaction": "choice",
            "hint": "Elle porte le nom du territoire.",
            "hint2": "Une barque catalane.",
            "choices": [
              "Une barque catalane",
              "Une gondole vénitienne",
              "Un drakkar",
              "Un sous-marin"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quel type d’embarcation patrimoniale est signalé ici ?",
            "answers": [
              "barque catalane",
              "une barque catalane"
            ],
            "interaction": "text",
            "hint": "Elle porte le nom du territoire.",
            "hint2": "Une barque catalane.",
            "choices": [
              "Une barque catalane",
              "Une gondole vénitienne",
              "Un drakkar",
              "Un sous-marin"
            ]
          },
          "ado": {
            "q": "Quel type d’embarcation patrimoniale est signalé ici ?",
            "answers": [
              "barque catalane",
              "une barque catalane"
            ],
            "choices": [
              "Une barque catalane",
              "Une gondole vénitienne",
              "Un drakkar",
              "Un sous-marin"
            ],
            "interaction": "choice",
            "hint": "Elle porte le nom du territoire.",
            "hint2": "Une barque catalane."
          }
        },
        "validationFocus": "Confirmer sur place la formulation, l’observabilité, le point exact et la sécurité.",
        "choices": [
          "Une barque catalane",
          "Une gondole vénitienne",
          "Un drakkar",
          "Un sous-marin"
        ],
        "id": "ar-ligne-bleue-s02"
      },
      {
        "name": "Passerelle — franchir la Massane",
        "fact": "La promenade utilise une passerelle du port pour franchir la Massane.",
        "type": "choice",
        "q": "Quel élément naturel la passerelle permet-elle de traverser ?",
        "answers": [
          "massane",
          "la massane",
          "rivière massane"
        ],
        "hint": "C’est la rivière d’Argelès.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/balade-promenade-du-front-de-mer/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "choice",
        "locationMode": "trail",
        "hint2": "La Massane.",
        "routeInstruction": "Traverse uniquement par la passerelle aménagée.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel élément naturel la passerelle permet-elle de traverser ?",
            "answers": [
              "massane",
              "la massane",
              "rivière massane"
            ],
            "interaction": "choice",
            "hint": "C’est la rivière d’Argelès.",
            "hint2": "La Massane.",
            "choices": [
              "La Massane",
              "Le Tech",
              "La Seine",
              "Un canal maritime"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quel élément naturel la passerelle permet-elle de traverser ?",
            "answers": [
              "massane",
              "la massane",
              "rivière massane"
            ],
            "interaction": "text",
            "hint": "C’est la rivière d’Argelès.",
            "hint2": "La Massane.",
            "choices": [
              "La Massane",
              "Le Tech",
              "La Seine",
              "Un canal maritime"
            ]
          },
          "ado": {
            "q": "Quel élément naturel la passerelle permet-elle de traverser ?",
            "answers": [
              "massane",
              "la massane",
              "rivière massane"
            ],
            "choices": [
              "La Massane",
              "Le Tech",
              "La Seine",
              "Un canal maritime"
            ],
            "interaction": "choice",
            "hint": "C’est la rivière d’Argelès.",
            "hint2": "La Massane."
          }
        },
        "validationFocus": "Vérifier flux vélos/piétons et emplacement de l’étape.",
        "choices": [
          "La Massane",
          "Le Tech",
          "La Seine",
          "Un canal maritime"
        ],
        "id": "ar-ligne-bleue-s03"
      },
      {
        "name": "Photo Nature — exposition sans murs",
        "fact": "La fiche conseille de prendre le temps de découvrir les expositions d’Argelès Photo Nature.",
        "type": "choice",
        "q": "Quel format culturel accompagne la promenade ?",
        "answers": [
          "exposition photo",
          "photographie",
          "photo nature",
          "Une exposition photographique"
        ],
        "hint": "Le nom contient « Photo ».",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/balade-promenade-du-front-de-mer/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": true,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "choice",
        "locationMode": "trail",
        "hint2": "Une exposition photographique.",
        "routeInstruction": "Les contenus exposés peuvent changer : l’énigme finale devra porter sur un élément permanent ou être saisonnière.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel format culturel accompagne la promenade ?",
            "answers": [
              "exposition photo",
              "photographie",
              "photo nature",
              "Une exposition photographique"
            ],
            "interaction": "choice",
            "hint": "Le nom contient « Photo ».",
            "hint2": "Une exposition photographique.",
            "choices": [
              "Une exposition photographique",
              "Un opéra",
              "Une foire automobile",
              "Un musée souterrain"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quel format culturel accompagne la promenade ?",
            "answers": [
              "exposition photo",
              "photographie",
              "photo nature",
              "Une exposition photographique"
            ],
            "interaction": "text",
            "hint": "Le nom contient « Photo ».",
            "hint2": "Une exposition photographique.",
            "choices": [
              "Une exposition photographique",
              "Un opéra",
              "Une foire automobile",
              "Un musée souterrain"
            ]
          },
          "ado": {
            "q": "Quel format culturel accompagne la promenade ?",
            "answers": [
              "exposition photo",
              "photographie",
              "photo nature",
              "Une exposition photographique"
            ],
            "choices": [
              "Une exposition photographique",
              "Un opéra",
              "Une foire automobile",
              "Un musée souterrain"
            ],
            "interaction": "choice",
            "hint": "Le nom contient « Photo ».",
            "hint2": "Une exposition photographique."
          }
        },
        "validationFocus": "Vérifier calendrier 2026-2027 et prévoir variante hors exposition.",
        "choices": [
          "Une exposition photographique",
          "Un opéra",
          "Une foire automobile",
          "Un musée souterrain"
        ],
        "id": "ar-ligne-bleue-s04"
      },
      {
        "name": "Esplanade Charles Trenet — respirer",
        "fact": "La promenade atteint l’esplanade Charles Trenet, où la fiche mentionne des fontaines et des équipements de promenade.",
        "type": "choice",
        "q": "Quel nom porte l’esplanade citée par l’itinéraire ?",
        "answers": [
          "charles trenet",
          "esplanade charles trenet"
        ],
        "hint": "Un célèbre chanteur français.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/balade-promenade-du-front-de-mer/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "choice",
        "locationMode": "trail",
        "hint2": "Charles Trenet.",
        "routeInstruction": "Choisis un point d’arrêt qui n’entrave pas les flux.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel nom porte l’esplanade citée par l’itinéraire ?",
            "answers": [
              "charles trenet",
              "esplanade charles trenet"
            ],
            "interaction": "choice",
            "hint": "Un célèbre chanteur français.",
            "hint2": "Charles Trenet.",
            "choices": [
              "Charles Trenet",
              "Aristide Maillol",
              "Vauban",
              "Louis XIV"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quel nom porte l’esplanade citée par l’itinéraire ?",
            "answers": [
              "charles trenet",
              "esplanade charles trenet"
            ],
            "interaction": "text",
            "hint": "Un célèbre chanteur français.",
            "hint2": "Charles Trenet.",
            "choices": [
              "Charles Trenet",
              "Aristide Maillol",
              "Vauban",
              "Louis XIV"
            ]
          },
          "ado": {
            "q": "Quel nom porte l’esplanade citée par l’itinéraire ?",
            "answers": [
              "charles trenet",
              "esplanade charles trenet"
            ],
            "choices": [
              "Charles Trenet",
              "Aristide Maillol",
              "Vauban",
              "Louis XIV"
            ],
            "interaction": "choice",
            "hint": "Un célèbre chanteur français.",
            "hint2": "Charles Trenet."
          }
        },
        "validationFocus": "Confirmer sur place la formulation, l’observabilité, le point exact et la sécurité.",
        "choices": [
          "Charles Trenet",
          "Aristide Maillol",
          "Vauban",
          "Louis XIV"
        ],
        "id": "ar-ligne-bleue-s05"
      },
      {
        "name": "Sous les pins — option de prolongement",
        "fact": "La fiche indique qu’il est possible de poursuivre sous les pins vers le camping le Roussillonnais, avec une difficulté accrue pour les personnes à mobilité réduite à cause du sable.",
        "type": "multi",
        "q": "Quels deux éléments rendent cette prolongation particulière ?",
        "answers": [
          "pins + sable"
        ],
        "hint": "Un arbre + un sol.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/balade-promenade-du-front-de-mer/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "multi",
        "locationMode": "trail",
        "hint2": "Pins + sable.",
        "routeInstruction": "La mission principale n’impose pas le prolongement si le sable rend le passage inadapté.",
        "audience": {
          "enfant": {
            "q": "En famille : Quels deux éléments rendent cette prolongation particulière ?",
            "answers": [
              "pins + sable"
            ],
            "interaction": "multi",
            "hint": "Un arbre + un sol.",
            "hint2": "Pins + sable.",
            "choices": [
              "Les pins",
              "Le sable",
              "La neige",
              "Un tunnel ferroviaire"
            ],
            "multiAnswers": [
              "Les pins",
              "Le sable"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quels deux éléments rendent cette prolongation particulière ?",
            "answers": [
              "pins + sable"
            ],
            "interaction": "text",
            "hint": "Un arbre + un sol.",
            "hint2": "Pins + sable.",
            "choices": [
              "Les pins",
              "Le sable",
              "La neige",
              "Un tunnel ferroviaire"
            ],
            "multiAnswers": [
              "Les pins",
              "Le sable"
            ]
          },
          "ado": {
            "q": "Quels deux éléments rendent cette prolongation particulière ?",
            "answers": [
              "pins + sable"
            ],
            "choices": [
              "Les pins",
              "Le sable",
              "La neige",
              "Un tunnel ferroviaire"
            ],
            "interaction": "multi",
            "hint": "Un arbre + un sol.",
            "hint2": "Pins + sable."
          }
        },
        "validationFocus": "Qualifier accessibilité réellement et décider si cette étape reste optionnelle.",
        "choices": [
          "Les pins",
          "Le sable",
          "La neige",
          "Un tunnel ferroviaire"
        ],
        "multiAnswers": [
          "Les pins",
          "Le sable"
        ],
        "id": "ar-ligne-bleue-s06"
      },
      {
        "name": "Retour par la même ligne — reconnaître plutôt que découvrir",
        "fact": "La promenade est un aller-retour : la fiche demande de reprendre le chemin en sens inverse en respectant les zones séparées entre vélos et piétons.",
        "type": "choice",
        "q": "Quel type d’itinéraire termine cette mission ?",
        "answers": [
          "aller retour",
          "aller-retour",
          "Un aller-retour"
        ],
        "hint": "On revient par le même axe.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/balade-promenade-du-front-de-mer/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "choice",
        "locationMode": "trail",
        "hint2": "Un aller-retour.",
        "routeInstruction": "Reviens par le même chemin en respectant les espaces vélo/piétons.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel type d’itinéraire termine cette mission ?",
            "answers": [
              "aller retour",
              "aller-retour",
              "Un aller-retour"
            ],
            "interaction": "choice",
            "hint": "On revient par le même axe.",
            "hint2": "Un aller-retour.",
            "choices": [
              "Un aller-retour",
              "Une boucle de montagne",
              "Une traversée en bateau",
              "Un circuit fermé par télécabine"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quel type d’itinéraire termine cette mission ?",
            "answers": [
              "aller retour",
              "aller-retour",
              "Un aller-retour"
            ],
            "interaction": "text",
            "hint": "On revient par le même axe.",
            "hint2": "Un aller-retour.",
            "choices": [
              "Un aller-retour",
              "Une boucle de montagne",
              "Une traversée en bateau",
              "Un circuit fermé par télécabine"
            ]
          },
          "ado": {
            "q": "Quel type d’itinéraire termine cette mission ?",
            "answers": [
              "aller retour",
              "aller-retour",
              "Un aller-retour"
            ],
            "choices": [
              "Un aller-retour",
              "Une boucle de montagne",
              "Une traversée en bateau",
              "Un circuit fermé par télécabine"
            ],
            "interaction": "choice",
            "hint": "On revient par le même axe.",
            "hint2": "Un aller-retour."
          }
        },
        "validationFocus": "Tester si le retour peut accueillir une mécanique mémoire sans répétition.",
        "choices": [
          "Un aller-retour",
          "Une boucle de montagne",
          "Une traversée en bateau",
          "Un circuit fermé par télécabine"
        ],
        "id": "ar-ligne-bleue-s07"
      }
    ],
    "lastVerified": "2026-09-09",
    "sourceSummary": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/balade-promenade-du-front-de-mer/",
    "safety": "Promenade très facile mais exposée au soleil et à la fréquentation. Respecter les zones vélo/piétons. Le sable peut réduire l’accessibilité sur le prolongement optionnel.",
    "offline": true,
    "territoryId": "argeles",
    "route": {
      "level": "facile",
      "levelLabel": "Facile",
      "distanceKm": 5.1,
      "distanceLabel": "5,1 km",
      "walkTime": "2 h",
      "gameTime": "≈ 2 h 45 – 3 h 30 avec le jeu",
      "ascentM": 24,
      "descentM": 24,
      "altMaxM": 6,
      "surface": "Port, promenade littorale et aller-retour très plat",
      "accessibility": "À qualifier en reconnaissance Explor’Action.",
      "metricsStatus": "official-route-field-validation-required",
      "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/balade-promenade-du-front-de-mer/",
      "note": "Métriques reprises de la fiche officielle ; géofences, observabilité et temps avec jeu restent à reconnaître. La source classe la promenade « Très facile » ; Explor’Action la regroupe dans son niveau physique Facile, conformément aux trois niveaux du produit.",
      "playerDistance": "5,1 km",
      "playerAscent": "+24 m / −24 m",
      "playerWalk": "2 h de marche officielle",
      "playerTerrain": "Port, promenade littorale et aller-retour très plat",
      "playerNote": "Base officielle de randonnée. Publication bloquée jusqu’à reconnaissance terrain et playtest.",
      "routeType": "Boucle",
      "officialBasis": "Promenade du Front de Mer",
      "durationLabel": "2 h de marche officielle • ≈ 2 h 45 – 3 h 30 avec le jeu"
    },
    "teaser": "Une aventure familiale et très accessible physiquement pour lire le front de mer autrement qu’en simple promenade.",
    "briefing": "Le défi est de rendre une promenade plate réellement ludique : observation, franchissement, exposition et mémoire du retour, sans forcer le joueur à courir ni à chercher des détails dangereux.",
    "objective": "Identifier sept marqueurs du front de mer et comprendre ce qui compose un rivage vivant.",
    "ending": "RIVAGE. Port, rivière, passerelle, photos et promenade forment une frontière habitée entre ville et Méditerranée.",
    "territoryFragment": "RIVAGE",
    "cardTerrain": "Port, promenade littorale et aller-retour très plat",
    "cardTime": "≈ 2 h 45 – 3 h 30 avec le jeu",
    "playerMetrics": [
      [
        "🥾",
        "5,1 km"
      ],
      [
        "↗",
        "+24 m / −24 m"
      ],
      [
        "⏱",
        "2 h de marche officielle"
      ]
    ],
    "storyBeats": [
      {
        "title": "Le port comme origine",
        "text": "Le littoral commence par un lieu de travail et de navigation."
      },
      {
        "title": "Une barque comme mémoire",
        "text": "Le patrimoine maritime donne une profondeur au décor."
      },
      {
        "title": "Franchir la rivière",
        "text": "La Massane coupe et relie à la fois."
      },
      {
        "title": "Une galerie en plein air",
        "text": "Le front de mer peut aussi porter de la culture."
      },
      {
        "title": "L’esplanade",
        "text": "Le rivage devient espace public."
      },
      {
        "title": "Le sable change l’accessibilité",
        "text": "Le terrain réel impose ses limites."
      },
      {
        "title": "Revenir autrement",
        "text": "L’aller-retour transforme la mémoire du trajet en mécanique de jeu."
      }
    ],
    "playerStatus": "development-research",
    "scenarioDisclaimer": "La ligne fictive est narrative. Les métriques et le tracé principal viennent de l’Office ; l’exposition Photo Nature et l’accessibilité doivent être recontrôlées selon la saison.",
    "finalPrompt": "Quel mot désigne la zone où la terre habitée rencontre directement la mer ?",
    "clueCards": [
      {
        "unlockAt": 2,
        "title": "Carte 1 — Bateaux",
        "text": "Le premier indice vient du port."
      },
      {
        "unlockAt": 5,
        "title": "Carte 2 — Promenade",
        "text": "Le deuxième vient de l’espace entre ville et plage."
      },
      {
        "unlockAt": 7,
        "title": "Carte 3 — Terre + mer",
        "text": "Le mot final nomme cette interface."
      }
    ],
    "developmentStatus": "ready-content-field-monitoring",
    "sourceCheckedAt": "2026-09-10",
    "fieldValidation": "monitoring-required",
    "validationTier": "ready-application-test"
  },
  {
    "id": "ar-pierres-valmy",
    "icon": "🪨",
    "title": "Les Pierres de Valmy",
    "tag": "Dolmen • Forêt • Temps long",
    "duration": "1 h 30 de marche officielle • ≈ 2 h 30 – 3 h avec le jeu",
    "difficulty": "Facile",
    "story": "Une chronologie fictive s’est brisée en plusieurs fragments. La marche entre Valmy et la Cova de l’Alarb oblige à relier paysage actuel, mégalithisme et usages présents du terrain.",
    "final": "MEMOIRE",
    "steps": [
      {
        "name": "Valmy — ouvrir la chronologie",
        "fact": "La balade officielle part du parking du Château de Valmy et propose un voyage de plus de 5000 ans entre le domaine et le dolmen.",
        "type": "choice",
        "q": "Quelle idée temporelle structure cette balade ?",
        "answers": [
          "plus de 5000 ans",
          "5000 ans",
          "cinq mille ans"
        ],
        "hint": "Le nombre est dans la présentation officielle.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/balade-le-dolmen-de-la-cova-de-lalarb/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "choice",
        "locationMode": "trail",
        "hint2": "Plus de 5000 ans.",
        "routeInstruction": "Départ Valmy, puis direction camping Les Mimosas selon le tracé.",
        "audience": {
          "enfant": {
            "q": "En famille : Quelle idée temporelle structure cette balade ?",
            "answers": [
              "plus de 5000 ans",
              "5000 ans",
              "cinq mille ans"
            ],
            "interaction": "choice",
            "hint": "Le nombre est dans la présentation officielle.",
            "hint2": "Plus de 5000 ans.",
            "choices": [
              "Plus de 5000 ans",
              "50 ans",
              "Un siècle seulement",
              "L’époque contemporaine uniquement"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quelle idée temporelle structure cette balade ?",
            "answers": [
              "plus de 5000 ans",
              "5000 ans",
              "cinq mille ans"
            ],
            "interaction": "text",
            "hint": "Le nombre est dans la présentation officielle.",
            "hint2": "Plus de 5000 ans.",
            "choices": [
              "Plus de 5000 ans",
              "50 ans",
              "Un siècle seulement",
              "L’époque contemporaine uniquement"
            ]
          },
          "ado": {
            "q": "Quelle idée temporelle structure cette balade ?",
            "answers": [
              "plus de 5000 ans",
              "5000 ans",
              "cinq mille ans"
            ],
            "choices": [
              "Plus de 5000 ans",
              "50 ans",
              "Un siècle seulement",
              "L’époque contemporaine uniquement"
            ],
            "interaction": "choice",
            "hint": "Le nombre est dans la présentation officielle.",
            "hint2": "Plus de 5000 ans."
          }
        },
        "validationFocus": "Confirmer sur place la formulation, l’observabilité, le point exact et la sécurité.",
        "choices": [
          "Plus de 5000 ans",
          "50 ans",
          "Un siècle seulement",
          "L’époque contemporaine uniquement"
        ],
        "id": "ar-pierres-valmy-s01"
      },
      {
        "name": "Passage à gué — PR ARG2",
        "fact": "Au passage à gué, la fiche indique de prendre la piste DFCI-AL n°42 et de suivre les bornes PR ARG2.",
        "type": "multi",
        "q": "Quels deux repères de navigation sont donnés ici ?",
        "answers": [
          "dfci al42 + pr arg2"
        ],
        "hint": "Une piste + un code PR.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/balade-le-dolmen-de-la-cova-de-lalarb/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "multi",
        "locationMode": "trail",
        "hint2": "DFCI-AL 42 + PR ARG2.",
        "routeInstruction": "Suis les bornes directionnelles et ne coupe pas les pistes.",
        "audience": {
          "enfant": {
            "q": "En famille : Quels deux repères de navigation sont donnés ici ?",
            "answers": [
              "dfci al42 + pr arg2"
            ],
            "interaction": "multi",
            "hint": "Une piste + un code PR.",
            "hint2": "DFCI-AL 42 + PR ARG2.",
            "choices": [
              "DFCI-AL n°42",
              "PR ARG2",
              "GR20",
              "EV1"
            ],
            "multiAnswers": [
              "DFCI-AL n°42",
              "PR ARG2"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quels deux repères de navigation sont donnés ici ?",
            "answers": [
              "dfci al42 + pr arg2"
            ],
            "interaction": "text",
            "hint": "Une piste + un code PR.",
            "hint2": "DFCI-AL 42 + PR ARG2.",
            "choices": [
              "DFCI-AL n°42",
              "PR ARG2",
              "GR20",
              "EV1"
            ],
            "multiAnswers": [
              "DFCI-AL n°42",
              "PR ARG2"
            ]
          },
          "ado": {
            "q": "Quels deux repères de navigation sont donnés ici ?",
            "answers": [
              "dfci al42 + pr arg2"
            ],
            "choices": [
              "DFCI-AL n°42",
              "PR ARG2",
              "GR20",
              "EV1"
            ],
            "interaction": "multi",
            "hint": "Une piste + un code PR.",
            "hint2": "DFCI-AL 42 + PR ARG2."
          }
        },
        "validationFocus": "Confirmer sur place la formulation, l’observabilité, le point exact et la sécurité.",
        "choices": [
          "DFCI-AL n°42",
          "PR ARG2",
          "GR20",
          "EV1"
        ],
        "multiAnswers": [
          "DFCI-AL n°42",
          "PR ARG2"
        ],
        "id": "ar-pierres-valmy-s02"
      },
      {
        "name": "Mas Peyrot — Valmy en contrebas",
        "fact": "Après Mas Peyrot, la fiche précise que l’on surplombe le Château de Valmy.",
        "type": "choice",
        "q": "Quel site se retrouve en contrebas après la montée ?",
        "answers": [
          "chateau de valmy",
          "château de valmy",
          "Valmy",
          "Le Château de Valmy"
        ],
        "hint": "C’est le lieu du départ.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/balade-le-dolmen-de-la-cova-de-lalarb/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "choice",
        "locationMode": "trail",
        "hint2": "Le Château de Valmy.",
        "routeInstruction": "Continue sur le tracé en respectant les pistes.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel site se retrouve en contrebas après la montée ?",
            "answers": [
              "chateau de valmy",
              "château de valmy",
              "Valmy",
              "Le Château de Valmy"
            ],
            "interaction": "choice",
            "hint": "C’est le lieu du départ.",
            "hint2": "Le Château de Valmy.",
            "choices": [
              "Le Château de Valmy",
              "Le Fort Saint-Elme",
              "Paulilles",
              "L’église de Saint-André"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quel site se retrouve en contrebas après la montée ?",
            "answers": [
              "chateau de valmy",
              "château de valmy",
              "Valmy",
              "Le Château de Valmy"
            ],
            "interaction": "text",
            "hint": "C’est le lieu du départ.",
            "hint2": "Le Château de Valmy.",
            "choices": [
              "Le Château de Valmy",
              "Le Fort Saint-Elme",
              "Paulilles",
              "L’église de Saint-André"
            ]
          },
          "ado": {
            "q": "Quel site se retrouve en contrebas après la montée ?",
            "answers": [
              "chateau de valmy",
              "château de valmy",
              "Valmy",
              "Le Château de Valmy"
            ],
            "choices": [
              "Le Château de Valmy",
              "Le Fort Saint-Elme",
              "Paulilles",
              "L’église de Saint-André"
            ],
            "interaction": "choice",
            "hint": "C’est le lieu du départ.",
            "hint2": "Le Château de Valmy."
          }
        },
        "validationFocus": "Confirmer sur place la formulation, l’observabilité, le point exact et la sécurité.",
        "choices": [
          "Le Château de Valmy",
          "Le Fort Saint-Elme",
          "Paulilles",
          "L’église de Saint-André"
        ],
        "id": "ar-pierres-valmy-s03"
      },
      {
        "name": "Forêt de chênes-lièges — entrer dans un autre milieu",
        "fact": "Le chemin vers la Cova de l’Alarb s’enfonce dans une forêt de chênes-lièges.",
        "type": "choice",
        "q": "Quel arbre caractérise le milieu cité par la fiche ?",
        "answers": [
          "chene liege",
          "chêne-liège",
          "chênes-lièges",
          "Le chêne-liège"
        ],
        "hint": "Son écorce fournit le liège.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/balade-le-dolmen-de-la-cova-de-lalarb/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "choice",
        "locationMode": "trail",
        "hint2": "Le chêne-liège.",
        "routeInstruction": "Reste sur le chemin balisé vers le dolmen.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel arbre caractérise le milieu cité par la fiche ?",
            "answers": [
              "chene liege",
              "chêne-liège",
              "chênes-lièges",
              "Le chêne-liège"
            ],
            "interaction": "choice",
            "hint": "Son écorce fournit le liège.",
            "hint2": "Le chêne-liège.",
            "choices": [
              "Le chêne-liège",
              "Le sapin",
              "Le bouleau blanc",
              "Le palmier dattier"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quel arbre caractérise le milieu cité par la fiche ?",
            "answers": [
              "chene liege",
              "chêne-liège",
              "chênes-lièges",
              "Le chêne-liège"
            ],
            "interaction": "text",
            "hint": "Son écorce fournit le liège.",
            "hint2": "Le chêne-liège.",
            "choices": [
              "Le chêne-liège",
              "Le sapin",
              "Le bouleau blanc",
              "Le palmier dattier"
            ]
          },
          "ado": {
            "q": "Quel arbre caractérise le milieu cité par la fiche ?",
            "answers": [
              "chene liege",
              "chêne-liège",
              "chênes-lièges",
              "Le chêne-liège"
            ],
            "choices": [
              "Le chêne-liège",
              "Le sapin",
              "Le bouleau blanc",
              "Le palmier dattier"
            ],
            "interaction": "choice",
            "hint": "Son écorce fournit le liège.",
            "hint2": "Le chêne-liège."
          }
        },
        "validationFocus": "Confirmer sur place la formulation, l’observabilité, le point exact et la sécurité.",
        "choices": [
          "Le chêne-liège",
          "Le sapin",
          "Le bouleau blanc",
          "Le palmier dattier"
        ],
        "id": "ar-pierres-valmy-s04"
      },
      {
        "name": "Cova de l’Alarb — le monument ancien",
        "fact": "Le dolmen de la Cova de l’Alarb est le cœur archéologique de cette balade familiale.",
        "type": "choice",
        "q": "À quelle grande famille de monument appartient la Cova de l’Alarb ?",
        "answers": [
          "dolmen",
          "un dolmen"
        ],
        "hint": "Une chambre mégalithique.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/balade-le-dolmen-de-la-cova-de-lalarb/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": true,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "choice",
        "locationMode": "trail",
        "hint2": "Un dolmen.",
        "routeInstruction": "Observe sans grimper sur le monument ni déplacer de pierre.",
        "audience": {
          "enfant": {
            "q": "En famille : À quelle grande famille de monument appartient la Cova de l’Alarb ?",
            "answers": [
              "dolmen",
              "un dolmen"
            ],
            "interaction": "choice",
            "hint": "Une chambre mégalithique.",
            "hint2": "Un dolmen.",
            "choices": [
              "Un dolmen",
              "Un fort",
              "Un phare",
              "Un aqueduc"
            ]
          },
          "adulte": {
            "q": "En autonomie : À quelle grande famille de monument appartient la Cova de l’Alarb ?",
            "answers": [
              "dolmen",
              "un dolmen"
            ],
            "interaction": "text",
            "hint": "Une chambre mégalithique.",
            "hint2": "Un dolmen.",
            "choices": [
              "Un dolmen",
              "Un fort",
              "Un phare",
              "Un aqueduc"
            ]
          },
          "ado": {
            "q": "À quelle grande famille de monument appartient la Cova de l’Alarb ?",
            "answers": [
              "dolmen",
              "un dolmen"
            ],
            "choices": [
              "Un dolmen",
              "Un fort",
              "Un phare",
              "Un aqueduc"
            ],
            "interaction": "choice",
            "hint": "Une chambre mégalithique.",
            "hint2": "Un dolmen."
          }
        },
        "validationFocus": "Définir une zone de respect et une énigme non intrusive.",
        "choices": [
          "Un dolmen",
          "Un fort",
          "Un phare",
          "Un aqueduc"
        ],
        "id": "ar-pierres-valmy-s05"
      },
      {
        "name": "Clôtures — le jeu doit respecter le lieu",
        "fact": "La fiche officielle demande d’utiliser les poignées pour ouvrir certaines clôtures et de les refermer impérativement.",
        "type": "choice",
        "q": "Quelle règle est explicitement demandée après le passage ?",
        "answers": [
          "refermer les clotures",
          "refermer les clôtures",
          "les refermer"
        ],
        "hint": "On laisse le lieu comme on l’a trouvé.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/balade-le-dolmen-de-la-cova-de-lalarb/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "choice",
        "locationMode": "trail",
        "hint2": "Refermer les clôtures.",
        "routeInstruction": "Utilise les poignées prévues et referme immédiatement.",
        "audience": {
          "enfant": {
            "q": "En famille : Quelle règle est explicitement demandée après le passage ?",
            "answers": [
              "refermer les clotures",
              "refermer les clôtures",
              "les refermer"
            ],
            "interaction": "choice",
            "hint": "On laisse le lieu comme on l’a trouvé.",
            "hint2": "Refermer les clôtures.",
            "choices": [
              "Refermer les clôtures",
              "Les laisser ouvertes",
              "Passer à travers les vignes",
              "Déplacer les fils"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quelle règle est explicitement demandée après le passage ?",
            "answers": [
              "refermer les clotures",
              "refermer les clôtures",
              "les refermer"
            ],
            "interaction": "text",
            "hint": "On laisse le lieu comme on l’a trouvé.",
            "hint2": "Refermer les clôtures.",
            "choices": [
              "Refermer les clôtures",
              "Les laisser ouvertes",
              "Passer à travers les vignes",
              "Déplacer les fils"
            ]
          },
          "ado": {
            "q": "Quelle règle est explicitement demandée après le passage ?",
            "answers": [
              "refermer les clotures",
              "refermer les clôtures",
              "les refermer"
            ],
            "choices": [
              "Refermer les clôtures",
              "Les laisser ouvertes",
              "Passer à travers les vignes",
              "Déplacer les fils"
            ],
            "interaction": "choice",
            "hint": "On laisse le lieu comme on l’a trouvé.",
            "hint2": "Refermer les clôtures."
          }
        },
        "validationFocus": "Confirmer sur place la formulation, l’observabilité, le point exact et la sécurité.",
        "choices": [
          "Refermer les clôtures",
          "Les laisser ouvertes",
          "Passer à travers les vignes",
          "Déplacer les fils"
        ],
        "id": "ar-pierres-valmy-s06"
      },
      {
        "name": "Retour par le vignoble — raccorder les époques",
        "fact": "Le retour longe le vignoble, passe les caves puis rejoint le parking de Valmy.",
        "type": "sequence",
        "q": "Quel ordre clôt la boucle ?",
        "answers": [
          "Vignoble > Caves > Parking de Valmy"
        ],
        "hint": "Les caves précèdent le parking.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/balade-le-dolmen-de-la-cova-de-lalarb/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "sequence",
        "locationMode": "trail",
        "hint2": "Vignoble → caves → Valmy.",
        "routeInstruction": "Suis la clôture et les chemins officiels jusqu’au parking.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel ordre clôt la boucle ?",
            "answers": [
              "Vignoble > Caves > Parking de Valmy"
            ],
            "interaction": "sequence",
            "hint": "Les caves précèdent le parking.",
            "hint2": "Vignoble → caves → Valmy.",
            "choices": [
              "Vignoble",
              "Caves",
              "Parking de Valmy"
            ],
            "sequence": [
              "Vignoble",
              "Caves",
              "Parking de Valmy"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quel ordre clôt la boucle ?",
            "answers": [
              "Vignoble > Caves > Parking de Valmy"
            ],
            "interaction": "text",
            "hint": "Les caves précèdent le parking.",
            "hint2": "Vignoble → caves → Valmy.",
            "choices": [
              "Vignoble",
              "Caves",
              "Parking de Valmy"
            ],
            "sequence": [
              "Vignoble",
              "Caves",
              "Parking de Valmy"
            ]
          },
          "ado": {
            "q": "Quel ordre clôt la boucle ?",
            "answers": [
              "Vignoble > Caves > Parking de Valmy"
            ],
            "choices": [
              "Vignoble",
              "Caves",
              "Parking de Valmy"
            ],
            "interaction": "sequence",
            "hint": "Les caves précèdent le parking.",
            "hint2": "Vignoble → caves → Valmy."
          }
        },
        "validationFocus": "Confirmer sur place la formulation, l’observabilité, le point exact et la sécurité.",
        "choices": [
          "Vignoble",
          "Caves",
          "Parking de Valmy"
        ],
        "sequence": [
          "Vignoble",
          "Caves",
          "Parking de Valmy"
        ],
        "id": "ar-pierres-valmy-s07"
      }
    ],
    "lastVerified": "2026-09-09",
    "sourceSummary": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/balade-le-dolmen-de-la-cova-de-lalarb/",
    "safety": "Respecter pistes, balisage et clôtures ; les refermer impérativement. Ne pas monter sur le dolmen. Eau et chaussures adaptées. Vérifier accès au massif et risque incendie.",
    "offline": true,
    "territoryId": "argeles",
    "route": {
      "level": "facile",
      "levelLabel": "Facile",
      "distanceKm": 3.6,
      "distanceLabel": "3,6 km",
      "walkTime": "1 h 30",
      "gameTime": "≈ 2 h 30 – 3 h avec le jeu",
      "ascentM": 150,
      "descentM": 149,
      "altMaxM": 170,
      "surface": "Parc de Valmy, piste DFCI, chênes-lièges, dolmen, clôtures et vignoble",
      "accessibility": "À qualifier en reconnaissance Explor’Action.",
      "metricsStatus": "official-route-field-validation-required",
      "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/balade-le-dolmen-de-la-cova-de-lalarb/",
      "note": "Métriques reprises de la fiche officielle ; géofences, observabilité et temps avec jeu restent à reconnaître.",
      "playerDistance": "3,6 km",
      "playerAscent": "+150 m / −149 m",
      "playerWalk": "1 h 30 de marche officielle",
      "playerTerrain": "Parc de Valmy, piste DFCI, chênes-lièges, dolmen, clôtures et vignoble",
      "playerNote": "Base officielle de randonnée. Publication bloquée jusqu’à reconnaissance terrain et playtest.",
      "routeType": "Boucle",
      "officialBasis": "Le Dolmen de la Cova de l’Alarb",
      "durationLabel": "1 h 30 de marche officielle • ≈ 2 h 30 – 3 h avec le jeu"
    },
    "teaser": "En 3,6 km, passe du domaine de Valmy à un dolmen et traverse plus de cinq millénaires de présence humaine.",
    "briefing": "Ici, le monument n’est jamais un support de grimpe. Les règles de clôture, de propriété et de respect archéologique font partie du gameplay.",
    "objective": "Reconstituer sept marqueurs du temps et rapporter la chronologie à Valmy.",
    "ending": "MEMOIRE. Le paysage garde des traces très différentes : monument mégalithique, forêt, vignoble, château et chemins actuels se superposent.",
    "territoryFragment": "MEMOIRE",
    "cardTerrain": "Parc de Valmy, piste DFCI, chênes-lièges, dolmen, clôtures et vignoble",
    "cardTime": "≈ 2 h 30 – 3 h avec le jeu",
    "playerMetrics": [
      [
        "🥾",
        "3,6 km"
      ],
      [
        "↗",
        "+150 m / −149 m"
      ],
      [
        "⏱",
        "1 h 30 de marche officielle"
      ]
    ],
    "storyBeats": [
      {
        "title": "Commencer aujourd’hui",
        "text": "Valmy donne le point de départ contemporain."
      },
      {
        "title": "Suivre les codes du terrain",
        "text": "DFCI et PR rappellent que la randonnée a ses propres règles."
      },
      {
        "title": "Regarder en arrière",
        "text": "Le château devient un repère de distance."
      },
      {
        "title": "Changer de milieu",
        "text": "La forêt de chênes-lièges prépare l’arrivée au monument."
      },
      {
        "title": "Plus de cinq millénaires",
        "text": "Le dolmen fait basculer la chronologie."
      },
      {
        "title": "Respecter le passage",
        "text": "Les clôtures rappellent que le territoire est aussi travaillé et géré."
      },
      {
        "title": "Revenir par le vignoble",
        "text": "Le présent referme la boucle autour du passé."
      }
    ],
    "playerStatus": "development-research",
    "scenarioDisclaimer": "La chronologie brisée est fictive. La boucle, les 3,6 km, le dénivelé et les consignes de clôtures viennent de l’Office de tourisme.",
    "finalPrompt": "Quel mot désigne ce que le territoire conserve lorsqu’il garde les traces de plusieurs époques ?",
    "clueCards": [
      {
        "unlockAt": 2,
        "title": "Carte 1 — Des traces",
        "text": "La piste moderne côtoie des lieux bien plus anciens."
      },
      {
        "unlockAt": 5,
        "title": "Carte 2 — Un monument très ancien",
        "text": "Le dolmen fait survivre une présence humaine lointaine."
      },
      {
        "unlockAt": 7,
        "title": "Carte 3 — Se souvenir par les lieux",
        "text": "Le mot final désigne ce que le paysage conserve."
      }
    ],
    "developmentStatus": "ready-content-field-monitoring",
    "sourceCheckedAt": "2026-09-10",
    "fieldValidation": "monitoring-required",
    "validationTier": "ready-application-test"
  },
  {
    "id": "ar-vigie-massane",
    "icon": "🗼",
    "title": "La Vigie de la Massane",
    "tag": "Montagne • Tour • Panorama",
    "duration": "5 h 30 de marche officielle • ≈ 6 h 45 – 8 h avec le jeu",
    "difficulty": "Difficile",
    "story": "Un signal fictif venu de la montagne ne peut être compris qu’en remontant toute la chaîne de repères entre Valmy, les dolmens, la fontaine et la tour.",
    "final": "VIGIE",
    "steps": [
      {
        "name": "Valmy — départ vers les Albères",
        "fact": "La randonnée officielle vers la Tour de la Massane part de Valmy et rejoint les pistes au-dessus du domaine.",
        "type": "choice",
        "q": "Quel site sert de point de départ à la boucle ?",
        "answers": [
          "valmy",
          "chateau de valmy",
          "château de valmy"
        ],
        "hint": "Le château donne son nom au parc.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/la-tour-de-la-massane/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "choice",
        "locationMode": "trail",
        "hint2": "Valmy.",
        "routeInstruction": "Départ au parking du Parc de Valmy.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel site sert de point de départ à la boucle ?",
            "answers": [
              "valmy",
              "chateau de valmy",
              "château de valmy"
            ],
            "interaction": "choice",
            "hint": "Le château donne son nom au parc.",
            "hint2": "Valmy.",
            "choices": [
              "Valmy",
              "Port-Vendres",
              "Paulilles",
              "Saint-André"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quel site sert de point de départ à la boucle ?",
            "answers": [
              "valmy",
              "chateau de valmy",
              "château de valmy"
            ],
            "interaction": "text",
            "hint": "Le château donne son nom au parc.",
            "hint2": "Valmy.",
            "choices": [
              "Valmy",
              "Port-Vendres",
              "Paulilles",
              "Saint-André"
            ]
          },
          "ado": {
            "q": "Quel site sert de point de départ à la boucle ?",
            "answers": [
              "valmy",
              "chateau de valmy",
              "château de valmy"
            ],
            "choices": [
              "Valmy",
              "Port-Vendres",
              "Paulilles",
              "Saint-André"
            ],
            "interaction": "choice",
            "hint": "Le château donne son nom au parc.",
            "hint2": "Valmy."
          }
        },
        "validationFocus": "Confirmer sur place la formulation, l’observabilité, le point exact et la sécurité.",
        "choices": [
          "Valmy",
          "Port-Vendres",
          "Paulilles",
          "Saint-André"
        ],
        "id": "ar-vigie-massane-s01"
      },
      {
        "name": "Cova de l’Alarb — première profondeur",
        "fact": "L’itinéraire passe par le dolmen de la Cova de l’Alarb avant de poursuivre vers un second dolmen.",
        "type": "choice",
        "q": "Quel type de monument rencontre-t-on avant la haute montée ?",
        "answers": [
          "dolmen",
          "un dolmen"
        ],
        "hint": "Monument mégalithique.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/la-tour-de-la-massane/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "choice",
        "locationMode": "trail",
        "hint2": "Un dolmen.",
        "routeInstruction": "Respecte les abords et le balisage.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel type de monument rencontre-t-on avant la haute montée ?",
            "answers": [
              "dolmen",
              "un dolmen"
            ],
            "interaction": "choice",
            "hint": "Monument mégalithique.",
            "hint2": "Un dolmen.",
            "choices": [
              "Un dolmen",
              "Un phare",
              "Une batterie côtière",
              "Un casino"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quel type de monument rencontre-t-on avant la haute montée ?",
            "answers": [
              "dolmen",
              "un dolmen"
            ],
            "interaction": "text",
            "hint": "Monument mégalithique.",
            "hint2": "Un dolmen.",
            "choices": [
              "Un dolmen",
              "Un phare",
              "Une batterie côtière",
              "Un casino"
            ]
          },
          "ado": {
            "q": "Quel type de monument rencontre-t-on avant la haute montée ?",
            "answers": [
              "dolmen",
              "un dolmen"
            ],
            "choices": [
              "Un dolmen",
              "Un phare",
              "Une batterie côtière",
              "Un casino"
            ],
            "interaction": "choice",
            "hint": "Monument mégalithique.",
            "hint2": "Un dolmen."
          }
        },
        "validationFocus": "Confirmer sur place la formulation, l’observabilité, le point exact et la sécurité.",
        "choices": [
          "Un dolmen",
          "Un phare",
          "Une batterie côtière",
          "Un casino"
        ],
        "id": "ar-vigie-massane-s02"
      },
      {
        "name": "Els Collets de Cotlliure — deuxième mégalithe",
        "fact": "La fiche indique ensuite le dolmen dels Collets de Cotlliure, à 274 m, avant de poursuivre la montée.",
        "type": "sequence",
        "q": "Quel dolmen vient en second sur l’ascension ?",
        "answers": [
          "Cova de l’Alarb > Els Collets de Cotlliure"
        ],
        "hint": "La Cova vient d’abord.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/la-tour-de-la-massane/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "sequence",
        "locationMode": "trail",
        "hint2": "Cova → Els Collets.",
        "routeInstruction": "Suis le sentier balisé entre les deux dolmens.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel dolmen vient en second sur l’ascension ?",
            "answers": [
              "Cova de l’Alarb > Els Collets de Cotlliure"
            ],
            "interaction": "sequence",
            "hint": "La Cova vient d’abord.",
            "hint2": "Cova → Els Collets.",
            "choices": [
              "Cova de l’Alarb",
              "Els Collets de Cotlliure"
            ],
            "sequence": [
              "Cova de l’Alarb",
              "Els Collets de Cotlliure"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quel dolmen vient en second sur l’ascension ?",
            "answers": [
              "Cova de l’Alarb > Els Collets de Cotlliure"
            ],
            "interaction": "text",
            "hint": "La Cova vient d’abord.",
            "hint2": "Cova → Els Collets.",
            "choices": [
              "Cova de l’Alarb",
              "Els Collets de Cotlliure"
            ],
            "sequence": [
              "Cova de l’Alarb",
              "Els Collets de Cotlliure"
            ]
          },
          "ado": {
            "q": "Quel dolmen vient en second sur l’ascension ?",
            "answers": [
              "Cova de l’Alarb > Els Collets de Cotlliure"
            ],
            "choices": [
              "Cova de l’Alarb",
              "Els Collets de Cotlliure"
            ],
            "interaction": "sequence",
            "hint": "La Cova vient d’abord.",
            "hint2": "Cova → Els Collets."
          }
        },
        "validationFocus": "Confirmer sur place la formulation, l’observabilité, le point exact et la sécurité.",
        "choices": [
          "Cova de l’Alarb",
          "Els Collets de Cotlliure"
        ],
        "sequence": [
          "Cova de l’Alarb",
          "Els Collets de Cotlliure"
        ],
        "id": "ar-vigie-massane-s03"
      },
      {
        "name": "Font Sant Andreu — le point d’eau nommé",
        "fact": "La randonnée passe devant la Font Sant Andreu avant de rejoindre la crête vers la tour.",
        "type": "choice",
        "q": "Quel type de repère est « Font Sant Andreu » ?",
        "answers": [
          "fontaine",
          "source",
          "font",
          "Une fontaine / source"
        ],
        "hint": "« Font » désigne un point d’eau.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/la-tour-de-la-massane/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "choice",
        "locationMode": "trail",
        "hint2": "Une fontaine / source.",
        "routeInstruction": "Ne compte jamais sur une source naturelle comme eau potable sans information officielle.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel type de repère est « Font Sant Andreu » ?",
            "answers": [
              "fontaine",
              "source",
              "font",
              "Une fontaine / source"
            ],
            "interaction": "choice",
            "hint": "« Font » désigne un point d’eau.",
            "hint2": "Une fontaine / source.",
            "choices": [
              "Une fontaine / source",
              "Un fort",
              "Une plage",
              "Une gare"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quel type de repère est « Font Sant Andreu » ?",
            "answers": [
              "fontaine",
              "source",
              "font",
              "Une fontaine / source"
            ],
            "interaction": "text",
            "hint": "« Font » désigne un point d’eau.",
            "hint2": "Une fontaine / source.",
            "choices": [
              "Une fontaine / source",
              "Un fort",
              "Une plage",
              "Une gare"
            ]
          },
          "ado": {
            "q": "Quel type de repère est « Font Sant Andreu » ?",
            "answers": [
              "fontaine",
              "source",
              "font",
              "Une fontaine / source"
            ],
            "choices": [
              "Une fontaine / source",
              "Un fort",
              "Une plage",
              "Une gare"
            ],
            "interaction": "choice",
            "hint": "« Font » désigne un point d’eau.",
            "hint2": "Une fontaine / source."
          }
        },
        "validationFocus": "Confirmer sur place la formulation, l’observabilité, le point exact et la sécurité.",
        "choices": [
          "Une fontaine / source",
          "Un fort",
          "Une plage",
          "Une gare"
        ],
        "id": "ar-vigie-massane-s04"
      },
      {
        "name": "Tour de la Massane — la vigie",
        "fact": "La Tour de la Massane, tour médiévale du XIIIe siècle, servit de tour de guet et de repère depuis la mer.",
        "type": "multi",
        "q": "Quelles deux fonctions sont données par la source patrimoniale ?",
        "answers": [
          "tour de guet + repere depuis la mer"
        ],
        "hint": "Surveiller + être vu.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/site-culturel/tour-de-la-massane/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": true,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "multi",
        "locationMode": "trail",
        "hint2": "Guet + repère depuis la mer.",
        "routeInstruction": "Atteins la tour uniquement si l’accès au massif et la météo sont favorables.",
        "audience": {
          "enfant": {
            "q": "En famille : Quelles deux fonctions sont données par la source patrimoniale ?",
            "answers": [
              "tour de guet + repere depuis la mer"
            ],
            "interaction": "multi",
            "hint": "Surveiller + être vu.",
            "hint2": "Guet + repère depuis la mer.",
            "choices": [
              "Tour de guet",
              "Repère depuis la mer",
              "Moulin à farine",
              "Cloître monastique"
            ],
            "multiAnswers": [
              "Tour de guet",
              "Repère depuis la mer"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quelles deux fonctions sont données par la source patrimoniale ?",
            "answers": [
              "tour de guet + repere depuis la mer"
            ],
            "interaction": "text",
            "hint": "Surveiller + être vu.",
            "hint2": "Guet + repère depuis la mer.",
            "choices": [
              "Tour de guet",
              "Repère depuis la mer",
              "Moulin à farine",
              "Cloître monastique"
            ],
            "multiAnswers": [
              "Tour de guet",
              "Repère depuis la mer"
            ]
          },
          "ado": {
            "q": "Quelles deux fonctions sont données par la source patrimoniale ?",
            "answers": [
              "tour de guet + repere depuis la mer"
            ],
            "choices": [
              "Tour de guet",
              "Repère depuis la mer",
              "Moulin à farine",
              "Cloître monastique"
            ],
            "interaction": "multi",
            "hint": "Surveiller + être vu.",
            "hint2": "Guet + repère depuis la mer."
          }
        },
        "validationFocus": "Prévoir blocage dynamique selon arrêté/risque incendie et vent.",
        "choices": [
          "Tour de guet",
          "Repère depuis la mer",
          "Moulin à farine",
          "Cloître monastique"
        ],
        "multiAnswers": [
          "Tour de guet",
          "Repère depuis la mer"
        ],
        "id": "ar-vigie-massane-s05"
      },
      {
        "name": "Coll del Pomer — quitter la vigie",
        "fact": "Depuis la tour, la fiche redescend au Coll del Pomer avant de poursuivre vers le Roc del Grill.",
        "type": "sequence",
        "q": "Quel ordre suit la descente après la tour ?",
        "answers": [
          "Tour de la Massane > Coll del Pomer > Roc del Grill"
        ],
        "hint": "Le col vient avant le roc.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/la-tour-de-la-massane/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "sequence",
        "locationMode": "trail",
        "hint2": "Tour → Pomer → Roc del Grill.",
        "routeInstruction": "Suis le chemin officiel ; certains sentiers cartographiés ne sont pas praticables selon la fiche.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel ordre suit la descente après la tour ?",
            "answers": [
              "Tour de la Massane > Coll del Pomer > Roc del Grill"
            ],
            "interaction": "sequence",
            "hint": "Le col vient avant le roc.",
            "hint2": "Tour → Pomer → Roc del Grill.",
            "choices": [
              "Tour de la Massane",
              "Coll del Pomer",
              "Roc del Grill"
            ],
            "sequence": [
              "Tour de la Massane",
              "Coll del Pomer",
              "Roc del Grill"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quel ordre suit la descente après la tour ?",
            "answers": [
              "Tour de la Massane > Coll del Pomer > Roc del Grill"
            ],
            "interaction": "text",
            "hint": "Le col vient avant le roc.",
            "hint2": "Tour → Pomer → Roc del Grill.",
            "choices": [
              "Tour de la Massane",
              "Coll del Pomer",
              "Roc del Grill"
            ],
            "sequence": [
              "Tour de la Massane",
              "Coll del Pomer",
              "Roc del Grill"
            ]
          },
          "ado": {
            "q": "Quel ordre suit la descente après la tour ?",
            "answers": [
              "Tour de la Massane > Coll del Pomer > Roc del Grill"
            ],
            "choices": [
              "Tour de la Massane",
              "Coll del Pomer",
              "Roc del Grill"
            ],
            "interaction": "sequence",
            "hint": "Le col vient avant le roc.",
            "hint2": "Tour → Pomer → Roc del Grill."
          }
        },
        "validationFocus": "Identifier les embranchements à risque d’erreur.",
        "choices": [
          "Tour de la Massane",
          "Coll del Pomer",
          "Roc del Grill"
        ],
        "sequence": [
          "Tour de la Massane",
          "Coll del Pomer",
          "Roc del Grill"
        ],
        "id": "ar-vigie-massane-s06"
      },
      {
        "name": "Saint-Laurent — retour par une autre histoire",
        "fact": "La descente rejoint la chapelle Saint-Laurent puis les pistes menant à Valmy.",
        "type": "choice",
        "q": "Quel type de patrimoine termine la descente avant le retour à Valmy ?",
        "answers": [
          "chapelle",
          "chapelle saint-laurent",
          "saint-laurent",
          "Une chapelle"
        ],
        "hint": "Saint-Laurent.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/la-tour-de-la-massane/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "choice",
        "locationMode": "trail",
        "hint2": "Une chapelle.",
        "routeInstruction": "Reviens par les pistes officielles vers Valmy.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel type de patrimoine termine la descente avant le retour à Valmy ?",
            "answers": [
              "chapelle",
              "chapelle saint-laurent",
              "saint-laurent",
              "Une chapelle"
            ],
            "interaction": "choice",
            "hint": "Saint-Laurent.",
            "hint2": "Une chapelle.",
            "choices": [
              "Une chapelle",
              "Un phare",
              "Une gare",
              "Un dolmen marin"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quel type de patrimoine termine la descente avant le retour à Valmy ?",
            "answers": [
              "chapelle",
              "chapelle saint-laurent",
              "saint-laurent",
              "Une chapelle"
            ],
            "interaction": "text",
            "hint": "Saint-Laurent.",
            "hint2": "Une chapelle.",
            "choices": [
              "Une chapelle",
              "Un phare",
              "Une gare",
              "Un dolmen marin"
            ]
          },
          "ado": {
            "q": "Quel type de patrimoine termine la descente avant le retour à Valmy ?",
            "answers": [
              "chapelle",
              "chapelle saint-laurent",
              "saint-laurent",
              "Une chapelle"
            ],
            "choices": [
              "Une chapelle",
              "Un phare",
              "Une gare",
              "Un dolmen marin"
            ],
            "interaction": "choice",
            "hint": "Saint-Laurent.",
            "hint2": "Une chapelle."
          }
        },
        "validationFocus": "Confirmer sur place la formulation, l’observabilité, le point exact et la sécurité.",
        "choices": [
          "Une chapelle",
          "Un phare",
          "Une gare",
          "Un dolmen marin"
        ],
        "id": "ar-vigie-massane-s07"
      }
    ],
    "lastVerified": "2026-09-09",
    "sourceSummary": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/la-tour-de-la-massane/",
    "safety": "12,5 km et près de 800 m D+. Équipement montagne, eau, nourriture, coupe-vent. Vérifier accès au massif et carte du risque incendie le jour même. Prudence au vent à la tour.",
    "offline": true,
    "territoryId": "argeles",
    "route": {
      "level": "difficile",
      "levelLabel": "Difficile",
      "distanceKm": 12.5,
      "distanceLabel": "12,5 km",
      "walkTime": "5 h 30",
      "gameTime": "≈ 6 h 45 – 8 h avec le jeu",
      "ascentM": 792,
      "descentM": 795,
      "altMaxM": 767,
      "surface": "Massif des Albères, dolmens, forêt, crête, Tour de la Massane et chapelle",
      "accessibility": "À qualifier en reconnaissance Explor’Action.",
      "metricsStatus": "official-route-field-validation-required",
      "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/la-tour-de-la-massane/",
      "note": "Itinéraire PDIPR ; accès massif et risque incendie à contrôler le jour même.",
      "playerDistance": "12,5 km",
      "playerAscent": "+792 m / −795 m",
      "playerWalk": "5 h 30 de marche officielle",
      "playerTerrain": "Massif des Albères, dolmens, forêt, crête, Tour de la Massane et chapelle",
      "playerNote": "Base officielle de randonnée. Publication bloquée jusqu’à reconnaissance terrain et playtest.",
      "routeType": "Boucle",
      "officialBasis": "La Tour de la Massane",
      "durationLabel": "5 h 30 de marche officielle • ≈ 6 h 45 – 8 h avec le jeu"
    },
    "teaser": "Une vraie randonnée de montagne vers l’un des grands belvédères des Albères, avec archéologie et patrimoine en chemin.",
    "briefing": "La mission doit pouvoir disparaître du catalogue jouable dès qu’un arrêté ferme le massif. Aucun score ne justifie une montée par canicule, vent violent ou risque incendie.",
    "objective": "Atteindre sept repères sans perdre la lecture du territoire entre mer et montagne.",
    "ending": "VIGIE. Depuis la Massane, les traces humaines changent d’échelle : dolmens, chemins, chapelle et côte deviennent les éléments d’une même carte.",
    "territoryFragment": "VIGIE",
    "cardTerrain": "Massif des Albères, dolmens, forêt, crête, Tour de la Massane et chapelle",
    "cardTime": "≈ 6 h 45 – 8 h avec le jeu",
    "playerMetrics": [
      [
        "🥾",
        "12,5 km"
      ],
      [
        "↗",
        "+792 m / −795 m"
      ],
      [
        "⏱",
        "5 h 30 de marche officielle"
      ]
    ],
    "storyBeats": [
      {
        "title": "Valmy comme base",
        "text": "La montagne se lit depuis son pied."
      },
      {
        "title": "Première trace ancienne",
        "text": "La Cova de l’Alarb introduit le temps long."
      },
      {
        "title": "Deuxième dolmen",
        "text": "La montée relie plusieurs marques mégalithiques."
      },
      {
        "title": "Font Sant Andreu",
        "text": "Un repère d’eau précède la crête."
      },
      {
        "title": "La vigie",
        "text": "La tour transforme la côte en panorama."
      },
      {
        "title": "Le col du retour",
        "text": "La descente suit d’autres lignes du relief."
      },
      {
        "title": "Saint-Laurent",
        "text": "Le patrimoine religieux accompagne le retour à Valmy."
      }
    ],
    "playerStatus": "development-research",
    "scenarioDisclaimer": "Le signal fictif est narratif. Le parcours et les métriques sont officiels et inscrits au PDIPR selon la fiche ; les points de jeu restent à reconnaître.",
    "finalPrompt": "Quel mot désigne un poste élevé d’où l’on surveille et observe un vaste territoire ?",
    "clueCards": [
      {
        "unlockAt": 2,
        "title": "Carte 1 — Monter",
        "text": "Chaque étape donne plus de hauteur."
      },
      {
        "unlockAt": 5,
        "title": "Carte 2 — Guetter",
        "text": "La tour a servi à surveiller."
      },
      {
        "unlockAt": 7,
        "title": "Carte 3 — Un poste élevé",
        "text": "Le mot final désigne cette fonction."
      }
    ],
    "developmentStatus": "ready-content-field-monitoring",
    "sourceCheckedAt": "2026-09-10",
    "fieldValidation": "monitoring-required",
    "validationTier": "ready-application-test"
  },
  {
    "id": "sa-chroniques-abbaye",
    "icon": "📜",
    "title": "Les Chroniques de l’Abbaye",
    "tag": "Monastère • Chronologie • Mémoire",
    "duration": "Métriques à mesurer • ≈ 1 h 15 – 1 h 45 à tester",
    "difficulty": "Facile",
    "story": "Les pages fictives d’une chronique ont été mélangées. Le joueur doit remettre huit siècles d’histoire dans le bon ordre en parcourant le noyau où l’ancien monastère a façonné le village.",
    "final": "CHRONIQUE",
    "steps": [
      {
        "name": "823 — le premier ancrage",
        "fact": "La commune situe la fondation du monastère bénédictin Sant Andreu de la Sureda par l’abbé Miro en 823.",
        "type": "numeric",
        "q": "Quelle année de fondation retient l’histoire municipale ?",
        "answers": [
          "823"
        ],
        "hint": "VIIIe siècle finissant / IXe siècle naissant : trois chiffres.",
        "token": "",
        "source": "https://www.saint-andre66.fr/histoire-de-saint-andre-et-jumelage/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "numeric",
        "locationMode": "trail",
        "hint2": "823.",
        "routeInstruction": "Commence dans le secteur mairie / Maison de l’Art Roman / église ; point exact à fixer.",
        "audience": {
          "enfant": {
            "q": "En famille : Quelle année de fondation retient l’histoire municipale ?",
            "answers": [
              "823"
            ],
            "interaction": "numeric",
            "hint": "VIIIe siècle finissant / IXe siècle naissant : trois chiffres.",
            "hint2": "823."
          },
          "adulte": {
            "q": "En autonomie : Quelle année de fondation retient l’histoire municipale ?",
            "answers": [
              "823"
            ],
            "interaction": "text",
            "hint": "VIIIe siècle finissant / IXe siècle naissant : trois chiffres.",
            "hint2": "823."
          },
          "ado": {
            "q": "Quelle année de fondation retient l’histoire municipale ?",
            "answers": [
              "823"
            ],
            "interaction": "numeric",
            "hint": "VIIIe siècle finissant / IXe siècle naissant : trois chiffres.",
            "hint2": "823."
          }
        },
        "validationFocus": "Choisir un support extérieur où cette date est réellement disponible ou transformer la question en découverte post-énigme.",
        "id": "sa-chroniques-abbaye-s01"
      },
      {
        "name": "Sant Marti de la Vall — avant le site actuel",
        "fact": "Selon la mairie, le monastère fut d’abord situé à Sant Marti de la Vall avant d’être déplacé quelques années plus tard sur le site actuel près de la rivière de Taxo.",
        "type": "sequence",
        "q": "Remets les deux implantations dans l’ordre historique.",
        "answers": [
          "Sant Marti de la Vall > Site actuel près de la rivière de Taxo"
        ],
        "hint": "Le site actuel vient en second.",
        "token": "",
        "source": "https://www.saint-andre66.fr/histoire-de-saint-andre-et-jumelage/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "sequence",
        "locationMode": "trail",
        "hint2": "Sant Marti → site actuel.",
        "routeInstruction": "Cette étape est narrative dans le cœur du village ; aucun déplacement hors parcours vers l’ancien site non localisé pour le jeu.",
        "audience": {
          "enfant": {
            "q": "En famille : Remets les deux implantations dans l’ordre historique.",
            "answers": [
              "Sant Marti de la Vall > Site actuel près de la rivière de Taxo"
            ],
            "interaction": "sequence",
            "hint": "Le site actuel vient en second.",
            "hint2": "Sant Marti → site actuel.",
            "choices": [
              "Sant Marti de la Vall",
              "Site actuel près de la rivière de Taxo"
            ],
            "sequence": [
              "Sant Marti de la Vall",
              "Site actuel près de la rivière de Taxo"
            ]
          },
          "adulte": {
            "q": "En autonomie : Remets les deux implantations dans l’ordre historique.",
            "answers": [
              "Sant Marti de la Vall > Site actuel près de la rivière de Taxo"
            ],
            "interaction": "text",
            "hint": "Le site actuel vient en second.",
            "hint2": "Sant Marti → site actuel.",
            "choices": [
              "Sant Marti de la Vall",
              "Site actuel près de la rivière de Taxo"
            ],
            "sequence": [
              "Sant Marti de la Vall",
              "Site actuel près de la rivière de Taxo"
            ]
          },
          "ado": {
            "q": "Remets les deux implantations dans l’ordre historique.",
            "answers": [
              "Sant Marti de la Vall > Site actuel près de la rivière de Taxo"
            ],
            "choices": [
              "Sant Marti de la Vall",
              "Site actuel près de la rivière de Taxo"
            ],
            "interaction": "sequence",
            "hint": "Le site actuel vient en second.",
            "hint2": "Sant Marti → site actuel."
          }
        },
        "validationFocus": "Confirmer sur place la formulation, l’observabilité, le point exact et la sécurité.",
        "choices": [
          "Sant Marti de la Vall",
          "Site actuel près de la rivière de Taxo"
        ],
        "sequence": [
          "Sant Marti de la Vall",
          "Site actuel près de la rivière de Taxo"
        ],
        "id": "sa-chroniques-abbaye-s02"
      },
      {
        "name": "Protection impériale — 823",
        "fact": "Un précepte de juin 823 place l’abbaye et ses biens sous la protection de l’empereur Louis le Pieux et lui accorde l’immunité.",
        "type": "choice",
        "q": "Quel pouvoir protège alors l’abbaye selon le document cité par la commune ?",
        "answers": [
          "empereur",
          "l empereur",
          "Louis le Pieux"
        ],
        "hint": "Louis le Pieux.",
        "token": "",
        "source": "https://www.saint-andre66.fr/histoire-de-saint-andre-et-jumelage/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "choice",
        "locationMode": "trail",
        "hint2": "L’empereur.",
        "routeInstruction": "Reste dans le cœur historique ; la mission raconte un document, pas un lieu supplémentaire.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel pouvoir protège alors l’abbaye selon le document cité par la commune ?",
            "answers": [
              "empereur",
              "l empereur",
              "Louis le Pieux"
            ],
            "interaction": "choice",
            "hint": "Louis le Pieux.",
            "hint2": "L’empereur.",
            "choices": [
              "L’empereur",
              "Le maire moderne",
              "Un amiral",
              "Un peintre"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quel pouvoir protège alors l’abbaye selon le document cité par la commune ?",
            "answers": [
              "empereur",
              "l empereur",
              "Louis le Pieux"
            ],
            "interaction": "text",
            "hint": "Louis le Pieux.",
            "hint2": "L’empereur.",
            "choices": [
              "L’empereur",
              "Le maire moderne",
              "Un amiral",
              "Un peintre"
            ]
          },
          "ado": {
            "q": "Quel pouvoir protège alors l’abbaye selon le document cité par la commune ?",
            "answers": [
              "empereur",
              "l empereur",
              "Louis le Pieux"
            ],
            "choices": [
              "L’empereur",
              "Le maire moderne",
              "Un amiral",
              "Un peintre"
            ],
            "interaction": "choice",
            "hint": "Louis le Pieux.",
            "hint2": "L’empereur."
          }
        },
        "validationFocus": "Confirmer sur place la formulation, l’observabilité, le point exact et la sécurité.",
        "choices": [
          "L’empereur",
          "Le maire moderne",
          "Un amiral",
          "Un peintre"
        ],
        "id": "sa-chroniques-abbaye-s03"
      },
      {
        "name": "1109 — changer de dépendance",
        "fact": "En 1109, l’abbaye de Saint-André est soumise au monastère de Sainte-Marie de Lagrasse selon la chronologie municipale.",
        "type": "choice",
        "q": "À quel monastère Saint-André est-il rattaché en 1109 ?",
        "answers": [
          "sainte marie de lagrasse",
          "sainte-marie de lagrasse",
          "lagrasse"
        ],
        "hint": "Le nom finit par Lagrasse.",
        "token": "",
        "source": "https://www.saint-andre66.fr/histoire-de-saint-andre-et-jumelage/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "choice",
        "locationMode": "trail",
        "hint2": "Sainte-Marie de Lagrasse.",
        "routeInstruction": "Associer cette étape à un point extérieur stable après reconnaissance.",
        "audience": {
          "enfant": {
            "q": "En famille : À quel monastère Saint-André est-il rattaché en 1109 ?",
            "answers": [
              "sainte marie de lagrasse",
              "sainte-marie de lagrasse",
              "lagrasse"
            ],
            "interaction": "choice",
            "hint": "Le nom finit par Lagrasse.",
            "hint2": "Sainte-Marie de Lagrasse.",
            "choices": [
              "Sainte-Marie de Lagrasse",
              "Saint-Michel de Cuxa",
              "Montserrat",
              "Cluny"
            ]
          },
          "adulte": {
            "q": "En autonomie : À quel monastère Saint-André est-il rattaché en 1109 ?",
            "answers": [
              "sainte marie de lagrasse",
              "sainte-marie de lagrasse",
              "lagrasse"
            ],
            "interaction": "text",
            "hint": "Le nom finit par Lagrasse.",
            "hint2": "Sainte-Marie de Lagrasse.",
            "choices": [
              "Sainte-Marie de Lagrasse",
              "Saint-Michel de Cuxa",
              "Montserrat",
              "Cluny"
            ]
          },
          "ado": {
            "q": "À quel monastère Saint-André est-il rattaché en 1109 ?",
            "answers": [
              "sainte marie de lagrasse",
              "sainte-marie de lagrasse",
              "lagrasse"
            ],
            "choices": [
              "Sainte-Marie de Lagrasse",
              "Saint-Michel de Cuxa",
              "Montserrat",
              "Cluny"
            ],
            "interaction": "choice",
            "hint": "Le nom finit par Lagrasse.",
            "hint2": "Sainte-Marie de Lagrasse."
          }
        },
        "validationFocus": "Confirmer sur place la formulation, l’observabilité, le point exact et la sécurité.",
        "choices": [
          "Sainte-Marie de Lagrasse",
          "Saint-Michel de Cuxa",
          "Montserrat",
          "Cluny"
        ],
        "id": "sa-chroniques-abbaye-s04"
      },
      {
        "name": "1121 — l’église consacrée",
        "fact": "L’église abbatiale est partiellement reconstruite puis consacrée en 1121 ; la page de l’église donne la date précise du 16 novembre 1121.",
        "type": "numeric",
        "q": "Quelle année marque la consécration de l’église reconstruite ?",
        "answers": [
          "1121"
        ],
        "hint": "Elle est au XIIe siècle.",
        "token": "",
        "source": "https://www.saint-andre66.fr/eglise-romane/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "numeric",
        "locationMode": "trail",
        "hint2": "1121.",
        "routeInstruction": "Place-toi dans l’espace public autour de l’église.",
        "audience": {
          "enfant": {
            "q": "En famille : Quelle année marque la consécration de l’église reconstruite ?",
            "answers": [
              "1121"
            ],
            "interaction": "numeric",
            "hint": "Elle est au XIIe siècle.",
            "hint2": "1121."
          },
          "adulte": {
            "q": "En autonomie : Quelle année marque la consécration de l’église reconstruite ?",
            "answers": [
              "1121"
            ],
            "interaction": "text",
            "hint": "Elle est au XIIe siècle.",
            "hint2": "1121."
          },
          "ado": {
            "q": "Quelle année marque la consécration de l’église reconstruite ?",
            "answers": [
              "1121"
            ],
            "interaction": "numeric",
            "hint": "Elle est au XIIe siècle.",
            "hint2": "1121."
          }
        },
        "validationFocus": "Confirmer sur place la formulation, l’observabilité, le point exact et la sécurité.",
        "id": "sa-chroniques-abbaye-s05"
      },
      {
        "name": "XIIIe siècle — le déclin",
        "fact": "La mairie indique que le monastère commence à décliner vers le XIIIe siècle.",
        "type": "choice",
        "q": "À partir de quel siècle le déclin est-il situé ?",
        "answers": [
          "13",
          "xiiie",
          "xiii",
          "13e siecle",
          "xiiie siècle"
        ],
        "hint": "Après la consécration de 1121.",
        "token": "",
        "source": "https://www.saint-andre66.fr/histoire-de-saint-andre-et-jumelage/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "choice",
        "locationMode": "trail",
        "hint2": "XIIIe siècle.",
        "routeInstruction": "L’étape doit devenir une lecture de frise ou de déplacement une fois le terrain reconnu.",
        "audience": {
          "enfant": {
            "q": "En famille : À partir de quel siècle le déclin est-il situé ?",
            "answers": [
              "13",
              "xiiie",
              "xiii",
              "13e siecle",
              "xiiie siècle"
            ],
            "interaction": "choice",
            "hint": "Après la consécration de 1121.",
            "hint2": "XIIIe siècle.",
            "choices": [
              "XIIIe siècle",
              "IXe siècle",
              "XVIIIe siècle",
              "XXe siècle"
            ]
          },
          "adulte": {
            "q": "En autonomie : À partir de quel siècle le déclin est-il situé ?",
            "answers": [
              "13",
              "xiiie",
              "xiii",
              "13e siecle",
              "xiiie siècle"
            ],
            "interaction": "text",
            "hint": "Après la consécration de 1121.",
            "hint2": "XIIIe siècle.",
            "choices": [
              "XIIIe siècle",
              "IXe siècle",
              "XVIIIe siècle",
              "XXe siècle"
            ]
          },
          "ado": {
            "q": "À partir de quel siècle le déclin est-il situé ?",
            "answers": [
              "13",
              "xiiie",
              "xiii",
              "13e siecle",
              "xiiie siècle"
            ],
            "choices": [
              "XIIIe siècle",
              "IXe siècle",
              "XVIIIe siècle",
              "XXe siècle"
            ],
            "interaction": "choice",
            "hint": "Après la consécration de 1121.",
            "hint2": "XIIIe siècle."
          }
        },
        "validationFocus": "Confirmer sur place la formulation, l’observabilité, le point exact et la sécurité.",
        "choices": [
          "XIIIe siècle",
          "IXe siècle",
          "XVIIIe siècle",
          "XXe siècle"
        ],
        "id": "sa-chroniques-abbaye-s06"
      },
      {
        "name": "1592 → Révolution — la dernière transformation",
        "fact": "En 1592, Saint-André est uni à l’abbaye d’Arles-sur-Tech, lien qui subsiste jusqu’à la Révolution française.",
        "type": "sequence",
        "q": "Remets les deux jalons finaux dans l’ordre.",
        "answers": [
          "Union à Arles-sur-Tech en 1592 > Révolution française"
        ],
        "hint": "1592 vient avant la Révolution.",
        "token": "",
        "source": "https://www.saint-andre66.fr/histoire-de-saint-andre-et-jumelage/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "sequence",
        "locationMode": "trail",
        "hint2": "1592 → Révolution française.",
        "routeInstruction": "Final dans le cœur historique, sans nécessité d’entrer dans un bâtiment.",
        "audience": {
          "enfant": {
            "q": "En famille : Remets les deux jalons finaux dans l’ordre.",
            "answers": [
              "Union à Arles-sur-Tech en 1592 > Révolution française"
            ],
            "interaction": "sequence",
            "hint": "1592 vient avant la Révolution.",
            "hint2": "1592 → Révolution française.",
            "choices": [
              "Union à Arles-sur-Tech en 1592",
              "Révolution française"
            ],
            "sequence": [
              "Union à Arles-sur-Tech en 1592",
              "Révolution française"
            ]
          },
          "adulte": {
            "q": "En autonomie : Remets les deux jalons finaux dans l’ordre.",
            "answers": [
              "Union à Arles-sur-Tech en 1592 > Révolution française"
            ],
            "interaction": "text",
            "hint": "1592 vient avant la Révolution.",
            "hint2": "1592 → Révolution française.",
            "choices": [
              "Union à Arles-sur-Tech en 1592",
              "Révolution française"
            ],
            "sequence": [
              "Union à Arles-sur-Tech en 1592",
              "Révolution française"
            ]
          },
          "ado": {
            "q": "Remets les deux jalons finaux dans l’ordre.",
            "answers": [
              "Union à Arles-sur-Tech en 1592 > Révolution française"
            ],
            "choices": [
              "Union à Arles-sur-Tech en 1592",
              "Révolution française"
            ],
            "interaction": "sequence",
            "hint": "1592 vient avant la Révolution.",
            "hint2": "1592 → Révolution française."
          }
        },
        "validationFocus": "Confirmer sur place la formulation, l’observabilité, le point exact et la sécurité.",
        "choices": [
          "Union à Arles-sur-Tech en 1592",
          "Révolution française"
        ],
        "sequence": [
          "Union à Arles-sur-Tech en 1592",
          "Révolution française"
        ],
        "id": "sa-chroniques-abbaye-s07"
      }
    ],
    "lastVerified": "2026-09-09",
    "sourceSummary": "https://www.saint-andre66.fr/histoire-de-saint-andre-et-jumelage/",
    "safety": "Micro-parcours urbain. Traversées, trottoirs et accessibilité à auditer. Aucune entrée dans l’église ou un bâtiment ne doit être indispensable.",
    "offline": true,
    "territoryId": "standre",
    "route": {
      "level": "facile",
      "levelLabel": "Facile",
      "distanceKm": null,
      "distanceLabel": "À mesurer en reconnaissance",
      "walkTime": "À mesurer lors de la reconnaissance Explor’Action",
      "gameTime": "≈ 1 h 15 – 1 h 45 à tester",
      "ascentM": null,
      "descentM": null,
      "altMaxM": null,
      "surface": "Cœur historique autour de l’ancienne abbatiale",
      "accessibility": "À qualifier sur place.",
      "metricsStatus": "field-required-no-invented-metric",
      "source": "https://www.saint-andre66.fr/histoire-de-saint-andre-et-jumelage/",
      "note": "La mairie documente l’histoire, mais ne publie pas une boucle pédestre correspondant à cette mission. La distance, D+/D− et les points exacts seront relevés sur place.",
      "playerDistance": "À mesurer",
      "playerAscent": "À mesurer",
      "playerWalk": "À mesurer",
      "playerTerrain": "Cœur historique autour de l’ancienne abbatiale",
      "playerNote": "Aucune métrique pédestre Explor’Action n’est publiée avant mesure réelle.",
      "routeType": "Micro-boucle à construire",
      "officialBasis": "Histoire municipale de l’abbaye + espaces publics du cœur ancien",
      "durationLabel": "Métriques à mesurer • ≈ 1 h 15 – 1 h 45 à tester"
    },
    "teaser": "Une micro-aventure historique qui transforme les dates en récit de fondation, protection, reconstruction, déclin et transformation.",
    "briefing": "Les dates sourcées servent de colonne vertébrale, mais la reconnaissance devra remplacer les questions trop documentaires par des indices réellement ancrés dans le bâti et l’espace.",
    "objective": "Reconstituer les grands jalons de l’abbaye sans inventer les zones disparues.",
    "ending": "CHRONIQUE. Le village actuel est le résultat de transformations successives : fondation, déplacements, protections, reconstructions et unions ont laissé un héritage durable.",
    "territoryFragment": "CHRONIQUE",
    "cardTerrain": "Cœur historique autour de l’ancienne abbatiale",
    "cardTime": "≈ 1 h 15 – 1 h 45 à tester",
    "playerMetrics": [
      [
        "🥾",
        "À mesurer"
      ],
      [
        "↗",
        "À mesurer"
      ],
      [
        "⏱",
        "À mesurer"
      ]
    ],
    "storyBeats": [
      {
        "title": "Le commencement",
        "text": "823 donne un premier point fixe."
      },
      {
        "title": "Un monastère qui se déplace",
        "text": "Le site actuel n’est pas la première implantation citée."
      },
      {
        "title": "Sous protection",
        "text": "Le pouvoir impérial garantit alors biens et immunité."
      },
      {
        "title": "Nouvelle dépendance",
        "text": "1109 rattache Saint-André à Lagrasse."
      },
      {
        "title": "1121",
        "text": "La consécration donne un nouveau jalon au monument."
      },
      {
        "title": "Le déclin",
        "text": "Le récit change au XIIIe siècle."
      },
      {
        "title": "Une histoire qui continue",
        "text": "1592 puis la Révolution transforment encore le statut du lieu."
      }
    ],
    "playerStatus": "development-research",
    "scenarioDisclaimer": "Les pages mélangées sont fictives. La chronologie vient de la mairie. Le tracé et toutes les métriques pédestres restent volontairement à mesurer.",
    "finalPrompt": "Quel mot désigne un récit qui consigne des événements dans leur ordre au fil du temps ?",
    "clueCards": [
      {
        "unlockAt": 2,
        "title": "Carte 1 — Des dates",
        "text": "Les jalons n’ont de sens que dans l’ordre."
      },
      {
        "unlockAt": 5,
        "title": "Carte 2 — Des transformations",
        "text": "Chaque époque modifie le statut ou le bâtiment."
      },
      {
        "unlockAt": 7,
        "title": "Carte 3 — Un récit du temps",
        "text": "Le mot final est un type de récit historique."
      }
    ],
    "developmentStatus": "ready-content-field-monitoring",
    "sourceCheckedAt": "2026-09-10",
    "fieldValidation": "monitoring-required",
    "validationTier": "ready-application-test"
  },
  {
    "id": "sa-pierres-images",
    "icon": "🖼️",
    "title": "Des Pierres aux Images",
    "tag": "Art • Médiation • Patrimoine",
    "duration": "Métriques à mesurer • ≈ 1 h 15 – 1 h 45 à tester",
    "difficulty": "Facile",
    "story": "Un conservateur fictif a perdu les liens entre objet réel, reproduction, exposition et modèle 3D. Le joueur doit retrouver comment un même village raconte son patrimoine avec plusieurs langages.",
    "final": "TRANSMISSION",
    "steps": [
      {
        "name": "Chevet et Hôtel de Ville — deux époques face à face",
        "fact": "La Galerie d’Art municipale est installée au premier étage de l’Hôtel de Ville, situé face au chevet de l’église romane.",
        "type": "choice",
        "q": "Quel bâtiment moderne fait face au chevet de l’église selon la mairie ?",
        "answers": [
          "hotel de ville",
          "hôtel de ville",
          "mairie",
          "L’Hôtel de Ville"
        ],
        "hint": "C’est aussi la mairie.",
        "token": "",
        "source": "https://www.saint-andre66.fr/decouvertes/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "choice",
        "locationMode": "trail",
        "hint2": "L’Hôtel de Ville.",
        "routeInstruction": "Résous depuis l’espace public ; l’entrée dans la mairie reste facultative.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel bâtiment moderne fait face au chevet de l’église selon la mairie ?",
            "answers": [
              "hotel de ville",
              "hôtel de ville",
              "mairie",
              "L’Hôtel de Ville"
            ],
            "interaction": "choice",
            "hint": "C’est aussi la mairie.",
            "hint2": "L’Hôtel de Ville.",
            "choices": [
              "L’Hôtel de Ville",
              "La gare",
              "Le phare",
              "Le château royal"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quel bâtiment moderne fait face au chevet de l’église selon la mairie ?",
            "answers": [
              "hotel de ville",
              "hôtel de ville",
              "mairie",
              "L’Hôtel de Ville"
            ],
            "interaction": "text",
            "hint": "C’est aussi la mairie.",
            "hint2": "L’Hôtel de Ville.",
            "choices": [
              "L’Hôtel de Ville",
              "La gare",
              "Le phare",
              "Le château royal"
            ]
          },
          "ado": {
            "q": "Quel bâtiment moderne fait face au chevet de l’église selon la mairie ?",
            "answers": [
              "hotel de ville",
              "hôtel de ville",
              "mairie",
              "L’Hôtel de Ville"
            ],
            "choices": [
              "L’Hôtel de Ville",
              "La gare",
              "Le phare",
              "Le château royal"
            ],
            "interaction": "choice",
            "hint": "C’est aussi la mairie.",
            "hint2": "L’Hôtel de Ville."
          }
        },
        "validationFocus": "Choisir un emplacement sûr permettant de voir réellement la relation mairie/chevet.",
        "choices": [
          "L’Hôtel de Ville",
          "La gare",
          "Le phare",
          "Le château royal"
        ],
        "id": "sa-pierres-images-s01"
      },
      {
        "name": "Galerie municipale — l’art change chaque mois",
        "fact": "La Galerie d’Art accueille chaque mois des expositions temporaires de peintures, sculptures ou photographies.",
        "type": "multi",
        "q": "Quels trois médiums sont explicitement cités par la mairie ?",
        "answers": [
          "peintures + sculptures + photos"
        ],
        "hint": "Trois arts visuels.",
        "token": "",
        "source": "https://www.saint-andre66.fr/decouvertes/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "multi",
        "locationMode": "trail",
        "hint2": "Peintures + sculptures + photos.",
        "routeInstruction": "L’énigme doit rester faisable de l’extérieur si la galerie est fermée.",
        "audience": {
          "enfant": {
            "q": "En famille : Quels trois médiums sont explicitement cités par la mairie ?",
            "answers": [
              "peintures + sculptures + photos"
            ],
            "interaction": "multi",
            "hint": "Trois arts visuels.",
            "hint2": "Peintures + sculptures + photos.",
            "choices": [
              "Peintures",
              "Sculptures",
              "Photos",
              "Courses automobiles"
            ],
            "multiAnswers": [
              "Peintures",
              "Sculptures",
              "Photos"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quels trois médiums sont explicitement cités par la mairie ?",
            "answers": [
              "peintures + sculptures + photos"
            ],
            "interaction": "text",
            "hint": "Trois arts visuels.",
            "hint2": "Peintures + sculptures + photos.",
            "choices": [
              "Peintures",
              "Sculptures",
              "Photos",
              "Courses automobiles"
            ],
            "multiAnswers": [
              "Peintures",
              "Sculptures",
              "Photos"
            ]
          },
          "ado": {
            "q": "Quels trois médiums sont explicitement cités par la mairie ?",
            "answers": [
              "peintures + sculptures + photos"
            ],
            "choices": [
              "Peintures",
              "Sculptures",
              "Photos",
              "Courses automobiles"
            ],
            "interaction": "multi",
            "hint": "Trois arts visuels.",
            "hint2": "Peintures + sculptures + photos."
          }
        },
        "validationFocus": "Créer un fallback permanent sur signalétique extérieure.",
        "choices": [
          "Peintures",
          "Sculptures",
          "Photos",
          "Courses automobiles"
        ],
        "multiAnswers": [
          "Peintures",
          "Sculptures",
          "Photos"
        ],
        "id": "sa-pierres-images-s02"
      },
      {
        "name": "Mario Chichorro — une salle permanente",
        "fact": "Une salle de la galerie est réservée de manière permanente aux œuvres singulières et colorées de Mario Chichorro.",
        "type": "choice",
        "q": "Quel artiste possède cet espace permanent ?",
        "answers": [
          "mario chichorro",
          "chichorro"
        ],
        "hint": "Son prénom est Mario.",
        "token": "",
        "source": "https://www.saint-andre66.fr/decouvertes/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "choice",
        "locationMode": "trail",
        "hint2": "Mario Chichorro.",
        "routeInstruction": "Visite intérieure uniquement en bonus aux horaires d’ouverture ; réponse principale à rendre possible autrement.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel artiste possède cet espace permanent ?",
            "answers": [
              "mario chichorro",
              "chichorro"
            ],
            "interaction": "choice",
            "hint": "Son prénom est Mario.",
            "hint2": "Mario Chichorro.",
            "choices": [
              "Mario Chichorro",
              "Henri Matisse",
              "André Derain",
              "Aristide Maillol"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quel artiste possède cet espace permanent ?",
            "answers": [
              "mario chichorro",
              "chichorro"
            ],
            "interaction": "text",
            "hint": "Son prénom est Mario.",
            "hint2": "Mario Chichorro.",
            "choices": [
              "Mario Chichorro",
              "Henri Matisse",
              "André Derain",
              "Aristide Maillol"
            ]
          },
          "ado": {
            "q": "Quel artiste possède cet espace permanent ?",
            "answers": [
              "mario chichorro",
              "chichorro"
            ],
            "choices": [
              "Mario Chichorro",
              "Henri Matisse",
              "André Derain",
              "Aristide Maillol"
            ],
            "interaction": "choice",
            "hint": "Son prénom est Mario.",
            "hint2": "Mario Chichorro."
          }
        },
        "validationFocus": "Confirmer sur place la formulation, l’observabilité, le point exact et la sécurité.",
        "choices": [
          "Mario Chichorro",
          "Henri Matisse",
          "André Derain",
          "Aristide Maillol"
        ],
        "id": "sa-pierres-images-s03"
      },
      {
        "name": "Maison de l’Art Roman — interpréter plutôt que collectionner",
        "fact": "La Maison de l’Art Roman est un centre d’interprétation de l’ancien monastère, avec reproductions de sculptures, bornes interactives et ressources pédagogiques.",
        "type": "multi",
        "q": "Quels deux outils de médiation sont explicitement proposés ?",
        "answers": [
          "bornes interactives + fiches pedagogiques"
        ],
        "hint": "Un écran + des supports papier.",
        "token": "",
        "source": "https://www.saint-andre66.fr/maison-de-lart-roman/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "multi",
        "locationMode": "trail",
        "hint2": "Bornes interactives + fiches pédagogiques.",
        "routeInstruction": "Le passage intérieur reste facultatif pour le gameplay public.",
        "audience": {
          "enfant": {
            "q": "En famille : Quels deux outils de médiation sont explicitement proposés ?",
            "answers": [
              "bornes interactives + fiches pedagogiques"
            ],
            "interaction": "multi",
            "hint": "Un écran + des supports papier.",
            "hint2": "Bornes interactives + fiches pédagogiques.",
            "choices": [
              "Bornes interactives",
              "Fiches pédagogiques",
              "Télescope astronomique",
              "Simulateur de bateau"
            ],
            "multiAnswers": [
              "Bornes interactives",
              "Fiches pédagogiques"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quels deux outils de médiation sont explicitement proposés ?",
            "answers": [
              "bornes interactives + fiches pedagogiques"
            ],
            "interaction": "text",
            "hint": "Un écran + des supports papier.",
            "hint2": "Bornes interactives + fiches pédagogiques.",
            "choices": [
              "Bornes interactives",
              "Fiches pédagogiques",
              "Télescope astronomique",
              "Simulateur de bateau"
            ],
            "multiAnswers": [
              "Bornes interactives",
              "Fiches pédagogiques"
            ]
          },
          "ado": {
            "q": "Quels deux outils de médiation sont explicitement proposés ?",
            "answers": [
              "bornes interactives + fiches pedagogiques"
            ],
            "choices": [
              "Bornes interactives",
              "Fiches pédagogiques",
              "Télescope astronomique",
              "Simulateur de bateau"
            ],
            "interaction": "multi",
            "hint": "Un écran + des supports papier.",
            "hint2": "Bornes interactives + fiches pédagogiques."
          }
        },
        "validationFocus": "Confirmer sur place la formulation, l’observabilité, le point exact et la sécurité.",
        "choices": [
          "Bornes interactives",
          "Fiches pédagogiques",
          "Télescope astronomique",
          "Simulateur de bateau"
        ],
        "multiAnswers": [
          "Bornes interactives",
          "Fiches pédagogiques"
        ],
        "id": "sa-pierres-images-s04"
      },
      {
        "name": "Chapiteaux du cloître — montrer l’absent",
        "fact": "La Maison présente notamment des reproductions de chapiteaux du XIIe siècle de l’ancien cloître de Saint-André.",
        "type": "choice",
        "q": "Quelle partie de l’ancien monastère est évoquée par ces chapiteaux ?",
        "answers": [
          "cloitre",
          "cloître",
          "ancien cloitre",
          "Le cloître"
        ],
        "hint": "Un espace monastique organisé autour d’une cour.",
        "token": "",
        "source": "https://www.saint-andre66.fr/maison-de-lart-roman/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "choice",
        "locationMode": "trail",
        "hint2": "Le cloître.",
        "routeInstruction": "Le jeu ne doit pas inventer l’emplacement exact du cloître disparu.",
        "audience": {
          "enfant": {
            "q": "En famille : Quelle partie de l’ancien monastère est évoquée par ces chapiteaux ?",
            "answers": [
              "cloitre",
              "cloître",
              "ancien cloitre",
              "Le cloître"
            ],
            "interaction": "choice",
            "hint": "Un espace monastique organisé autour d’une cour.",
            "hint2": "Le cloître.",
            "choices": [
              "Le cloître",
              "Le phare",
              "Le port",
              "La tour de guet"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quelle partie de l’ancien monastère est évoquée par ces chapiteaux ?",
            "answers": [
              "cloitre",
              "cloître",
              "ancien cloitre",
              "Le cloître"
            ],
            "interaction": "text",
            "hint": "Un espace monastique organisé autour d’une cour.",
            "hint2": "Le cloître.",
            "choices": [
              "Le cloître",
              "Le phare",
              "Le port",
              "La tour de guet"
            ]
          },
          "ado": {
            "q": "Quelle partie de l’ancien monastère est évoquée par ces chapiteaux ?",
            "answers": [
              "cloitre",
              "cloître",
              "ancien cloitre",
              "Le cloître"
            ],
            "choices": [
              "Le cloître",
              "Le phare",
              "Le port",
              "La tour de guet"
            ],
            "interaction": "choice",
            "hint": "Un espace monastique organisé autour d’une cour.",
            "hint2": "Le cloître."
          }
        },
        "validationFocus": "Confirmer sur place la formulation, l’observabilité, le point exact et la sécurité.",
        "choices": [
          "Le cloître",
          "Le phare",
          "Le port",
          "La tour de guet"
        ],
        "id": "sa-pierres-images-s05"
      },
      {
        "name": "Terrae Cognitae — passer en 3D",
        "fact": "La commune valorise un projet de photogrammétrie et de drones permettant d’explorer gratuitement en 3D des monuments, abbayes, églises, châteaux ou ermitages.",
        "type": "multi",
        "q": "Quelles deux technologies sont citées pour produire ces explorations ?",
        "answers": [
          "photogrammetrie + drones"
        ],
        "hint": "Une technique d’images + un appareil volant.",
        "token": "",
        "source": "https://www.saint-andre66.fr/terrae-cognitae/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "multi",
        "locationMode": "trail",
        "hint2": "Photogrammétrie + drones.",
        "routeInstruction": "Aucun usage du téléphone 3D n’est obligatoire en extérieur ; le projet sert de découverte culturelle.",
        "audience": {
          "enfant": {
            "q": "En famille : Quelles deux technologies sont citées pour produire ces explorations ?",
            "answers": [
              "photogrammetrie + drones"
            ],
            "interaction": "multi",
            "hint": "Une technique d’images + un appareil volant.",
            "hint2": "Photogrammétrie + drones.",
            "choices": [
              "Photogrammétrie",
              "Drones",
              "Rayons X médicaux",
              "Sonar sous-marin"
            ],
            "multiAnswers": [
              "Photogrammétrie",
              "Drones"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quelles deux technologies sont citées pour produire ces explorations ?",
            "answers": [
              "photogrammetrie + drones"
            ],
            "interaction": "text",
            "hint": "Une technique d’images + un appareil volant.",
            "hint2": "Photogrammétrie + drones.",
            "choices": [
              "Photogrammétrie",
              "Drones",
              "Rayons X médicaux",
              "Sonar sous-marin"
            ],
            "multiAnswers": [
              "Photogrammétrie",
              "Drones"
            ]
          },
          "ado": {
            "q": "Quelles deux technologies sont citées pour produire ces explorations ?",
            "answers": [
              "photogrammetrie + drones"
            ],
            "choices": [
              "Photogrammétrie",
              "Drones",
              "Rayons X médicaux",
              "Sonar sous-marin"
            ],
            "interaction": "multi",
            "hint": "Une technique d’images + un appareil volant.",
            "hint2": "Photogrammétrie + drones."
          }
        },
        "validationFocus": "Confirmer sur place la formulation, l’observabilité, le point exact et la sécurité.",
        "choices": [
          "Photogrammétrie",
          "Drones",
          "Rayons X médicaux",
          "Sonar sous-marin"
        ],
        "multiAnswers": [
          "Photogrammétrie",
          "Drones"
        ],
        "id": "sa-pierres-images-s06"
      },
      {
        "name": "Du chevet à l’image — synthèse",
        "fact": "À Saint-André, le même patrimoine peut être lu par le bâti réel, l’interprétation muséale, l’art contemporain et la modélisation 3D.",
        "type": "choice",
        "q": "Quel mot commun décrit le fait de rendre un patrimoine compréhensible par plusieurs supports ?",
        "answers": [
          "mediation",
          "médiation",
          "transmission"
        ],
        "hint": "Il s’agit de transmettre et expliquer.",
        "token": "",
        "source": "https://www.saint-andre66.fr/maison-de-lart-roman/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "choice",
        "locationMode": "trail",
        "hint2": "Médiation.",
        "routeInstruction": "Final dans l’espace public entre mairie, Maison de l’Art Roman et église.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel mot commun décrit le fait de rendre un patrimoine compréhensible par plusieurs supports ?",
            "answers": [
              "mediation",
              "médiation",
              "transmission"
            ],
            "interaction": "choice",
            "hint": "Il s’agit de transmettre et expliquer.",
            "hint2": "Médiation.",
            "choices": [
              "Médiation",
              "Dissimulation",
              "Compétition",
              "Navigation maritime"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quel mot commun décrit le fait de rendre un patrimoine compréhensible par plusieurs supports ?",
            "answers": [
              "mediation",
              "médiation",
              "transmission"
            ],
            "interaction": "text",
            "hint": "Il s’agit de transmettre et expliquer.",
            "hint2": "Médiation.",
            "choices": [
              "Médiation",
              "Dissimulation",
              "Compétition",
              "Navigation maritime"
            ]
          },
          "ado": {
            "q": "Quel mot commun décrit le fait de rendre un patrimoine compréhensible par plusieurs supports ?",
            "answers": [
              "mediation",
              "médiation",
              "transmission"
            ],
            "choices": [
              "Médiation",
              "Dissimulation",
              "Compétition",
              "Navigation maritime"
            ],
            "interaction": "choice",
            "hint": "Il s’agit de transmettre et expliquer.",
            "hint2": "Médiation."
          }
        },
        "validationFocus": "Vérifier que la conclusion reste concrète et pas trop abstraite pour le public enfant.",
        "choices": [
          "Médiation",
          "Dissimulation",
          "Compétition",
          "Navigation maritime"
        ],
        "id": "sa-pierres-images-s07"
      }
    ],
    "lastVerified": "2026-09-09",
    "sourceSummary": "https://www.saint-andre66.fr/decouvertes/",
    "safety": "Cœur urbain. Les intérieurs municipaux ont des horaires ; la mission doit rester terminable quand ils sont fermés. Prudence aux traversées et accès PMR à qualifier.",
    "offline": true,
    "territoryId": "standre",
    "route": {
      "level": "facile",
      "levelLabel": "Facile",
      "distanceKm": null,
      "distanceLabel": "À mesurer en reconnaissance",
      "walkTime": "À mesurer lors de la reconnaissance Explor’Action",
      "gameTime": "≈ 1 h 15 – 1 h 45 à tester",
      "ascentM": null,
      "descentM": null,
      "altMaxM": null,
      "surface": "Cœur de village : mairie, galerie, Maison de l’Art Roman et abords de l’église",
      "accessibility": "À qualifier sur place.",
      "metricsStatus": "field-required-no-invented-metric",
      "source": "https://www.saint-andre66.fr/decouvertes/",
      "note": "Mission hybride culture/patrimoine à construire dans les espaces publics. Les horaires des lieux intérieurs ne doivent jamais empêcher de finir la mission.",
      "playerDistance": "À mesurer",
      "playerAscent": "À mesurer",
      "playerWalk": "À mesurer",
      "playerTerrain": "Cœur de village : mairie, galerie, Maison de l’Art Roman et abords de l’église",
      "playerNote": "Aucune métrique pédestre Explor’Action n’est publiée avant mesure réelle.",
      "routeType": "Micro-boucle à construire",
      "officialBasis": "Équipements culturels municipaux + Terrae Cognitae",
      "durationLabel": "Métriques à mesurer • ≈ 1 h 15 – 1 h 45 à tester"
    },
    "teaser": "De l’église à la galerie, découvre comment Saint-André fait dialoguer art roman, création contemporaine et nouvelles technologies.",
    "briefing": "Le cœur de mission reste extérieur. Les intérieurs sont des bonus culturels selon horaires, jamais des verrous de progression.",
    "objective": "Relier sept formes de médiation culturelle sans dépendre des expositions temporaires.",
    "ending": "TRANSMISSION. Le patrimoine reste vivant lorsqu’il peut être regardé, expliqué, reproduit et réinterprété par plusieurs générations.",
    "territoryFragment": "TRANSMISSION",
    "cardTerrain": "Cœur de village : mairie, galerie, Maison de l’Art Roman et abords de l’église",
    "cardTime": "≈ 1 h 15 – 1 h 45 à tester",
    "playerMetrics": [
      [
        "🥾",
        "À mesurer"
      ],
      [
        "↗",
        "À mesurer"
      ],
      [
        "⏱",
        "À mesurer"
      ]
    ],
    "storyBeats": [
      {
        "title": "Deux façades se répondent",
        "text": "Mairie et église ouvrent le dialogue entre présent et passé."
      },
      {
        "title": "L’art change",
        "text": "Les expositions temporaires renouvellent le regard."
      },
      {
        "title": "Un artiste reste",
        "text": "Mario Chichorro donne aussi un ancrage permanent."
      },
      {
        "title": "Interpréter le roman",
        "text": "La Maison ne collectionne pas seulement : elle explique."
      },
      {
        "title": "Montrer ce qui a disparu",
        "text": "Les reproductions de chapiteaux rendent lisible l’ancien cloître."
      },
      {
        "title": "Le patrimoine en 3D",
        "text": "La photogrammétrie ouvre un autre mode d’accès."
      },
      {
        "title": "Un même objectif",
        "text": "Tous ces dispositifs servent à transmettre."
      }
    ],
    "playerStatus": "development-research",
    "scenarioDisclaimer": "Le conservateur fictif est narratif. Les équipements, l’exposition permanente Mario Chichorro et Terrae Cognitae sont documentés par la mairie. Le tracé et les métriques restent à mesurer.",
    "finalPrompt": "Quel mot résume le passage d’un patrimoine d’une époque ou d’une personne à une autre ?",
    "clueCards": [
      {
        "unlockAt": 2,
        "title": "Carte 1 — Montrer",
        "text": "Une exposition rend des œuvres accessibles."
      },
      {
        "unlockAt": 5,
        "title": "Carte 2 — Expliquer",
        "text": "La Maison de l’Art Roman interprète le monument."
      },
      {
        "unlockAt": 7,
        "title": "Carte 3 — Faire passer",
        "text": "Le mot final décrit le fait de faire parvenir un héritage aux suivants."
      }
    ],
    "developmentStatus": "ready-content-field-monitoring",
    "sourceCheckedAt": "2026-09-10",
    "fieldValidation": "monitoring-required",
    "validationTier": "ready-application-test"
  },
  {
    "id": "sa-portes-albere",
    "icon": "🧭",
    "title": "Les Portes de l’Albère",
    "tag": "Orientation • Piémont • Liaison",
    "duration": "Métriques à mesurer • ≈ 1 h 30 – 2 h à tester",
    "difficulty": "Facile",
    "story": "Une boussole fictive ne donne plus le nord : elle n’indique que des noms de rues et deux directions de l’EV8. Le joueur doit comprendre comment Saint-André s’ouvre vers le massif et les territoires voisins.",
    "final": "ORIENTATION",
    "steps": [
      {
        "name": "Allée de la Liberté — sortir du noyau",
        "fact": "La liaison officielle vers l’EV8 part de l’Allée de la Liberté puis tourne rue du Miloussa.",
        "type": "sequence",
        "q": "Quel enchaînement ouvre le corridor documenté ?",
        "answers": [
          "Allée de la Liberté > Rue du Miloussa"
        ],
        "hint": "Le départ est devant la mairie.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/liaison-mairie-de-saint-andre-ev8-sorede/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "sequence",
        "locationMode": "trail",
        "hint2": "Allée de la Liberté → rue du Miloussa.",
        "routeInstruction": "Prototype piéton : n’utiliser ce corridor qu’après reconnaissance des trottoirs et traversées.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel enchaînement ouvre le corridor documenté ?",
            "answers": [
              "Allée de la Liberté > Rue du Miloussa"
            ],
            "interaction": "sequence",
            "hint": "Le départ est devant la mairie.",
            "hint2": "Allée de la Liberté → rue du Miloussa.",
            "choices": [
              "Allée de la Liberté",
              "Rue du Miloussa"
            ],
            "sequence": [
              "Allée de la Liberté",
              "Rue du Miloussa"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quel enchaînement ouvre le corridor documenté ?",
            "answers": [
              "Allée de la Liberté > Rue du Miloussa"
            ],
            "interaction": "text",
            "hint": "Le départ est devant la mairie.",
            "hint2": "Allée de la Liberté → rue du Miloussa.",
            "choices": [
              "Allée de la Liberté",
              "Rue du Miloussa"
            ],
            "sequence": [
              "Allée de la Liberté",
              "Rue du Miloussa"
            ]
          },
          "ado": {
            "q": "Quel enchaînement ouvre le corridor documenté ?",
            "answers": [
              "Allée de la Liberté > Rue du Miloussa"
            ],
            "choices": [
              "Allée de la Liberté",
              "Rue du Miloussa"
            ],
            "interaction": "sequence",
            "hint": "Le départ est devant la mairie.",
            "hint2": "Allée de la Liberté → rue du Miloussa."
          }
        },
        "validationFocus": "Vérifier continuité piétonne ; la source est cyclable, pas pédestre.",
        "choices": [
          "Allée de la Liberté",
          "Rue du Miloussa"
        ],
        "sequence": [
          "Allée de la Liberté",
          "Rue du Miloussa"
        ],
        "id": "sa-portes-albere-s01"
      },
      {
        "name": "Route Nationale — le passage partagé",
        "fact": "La fiche cyclable rejoint la Route Nationale puis demande de tourner à droite.",
        "type": "choice",
        "q": "Quel type de voie impose ici un contrôle de sécurité renforcé ?",
        "answers": [
          "route nationale",
          "la route nationale"
        ],
        "hint": "Le nom lui-même indique une voie routière.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/liaison-mairie-de-saint-andre-ev8-sorede/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "choice",
        "locationMode": "trail",
        "hint2": "La Route Nationale.",
        "routeInstruction": "Ne publier aucune étape ici tant que traversées et trottoirs n’ont pas été reconnus.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel type de voie impose ici un contrôle de sécurité renforcé ?",
            "answers": [
              "route nationale",
              "la route nationale"
            ],
            "interaction": "choice",
            "hint": "Le nom lui-même indique une voie routière.",
            "hint2": "La Route Nationale.",
            "choices": [
              "La Route Nationale",
              "Un sentier forestier fermé",
              "Une plage",
              "Un quai"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quel type de voie impose ici un contrôle de sécurité renforcé ?",
            "answers": [
              "route nationale",
              "la route nationale"
            ],
            "interaction": "text",
            "hint": "Le nom lui-même indique une voie routière.",
            "hint2": "La Route Nationale.",
            "choices": [
              "La Route Nationale",
              "Un sentier forestier fermé",
              "Une plage",
              "Un quai"
            ]
          },
          "ado": {
            "q": "Quel type de voie impose ici un contrôle de sécurité renforcé ?",
            "answers": [
              "route nationale",
              "la route nationale"
            ],
            "choices": [
              "La Route Nationale",
              "Un sentier forestier fermé",
              "Une plage",
              "Un quai"
            ],
            "interaction": "choice",
            "hint": "Le nom lui-même indique une voie routière.",
            "hint2": "La Route Nationale."
          }
        },
        "validationFocus": "Audit circulation impératif ; déplacer l’étape si nécessaire.",
        "choices": [
          "La Route Nationale",
          "Un sentier forestier fermé",
          "Une plage",
          "Un quai"
        ],
        "id": "sa-portes-albere-s02"
      },
      {
        "name": "Rue des Albères — le massif entre dans le jeu",
        "fact": "Le corridor tourne ensuite rue des Albères.",
        "type": "choice",
        "q": "Quel massif est directement évoqué par le nom de cette rue ?",
        "answers": [
          "alberes",
          "albères",
          "les alberes",
          "les albères"
        ],
        "hint": "Le village est au pied de ce massif.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/liaison-mairie-de-saint-andre-ev8-sorede/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "choice",
        "locationMode": "trail",
        "hint2": "Les Albères.",
        "routeInstruction": "Repérer en reconnaissance si un point de vue réel sur le massif peut remplacer la simple question de nom.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel massif est directement évoqué par le nom de cette rue ?",
            "answers": [
              "alberes",
              "albères",
              "les alberes",
              "les albères"
            ],
            "interaction": "choice",
            "hint": "Le village est au pied de ce massif.",
            "hint2": "Les Albères.",
            "choices": [
              "Les Albères",
              "Les Alpes",
              "Les Vosges",
              "Le Jura"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quel massif est directement évoqué par le nom de cette rue ?",
            "answers": [
              "alberes",
              "albères",
              "les alberes",
              "les albères"
            ],
            "interaction": "text",
            "hint": "Le village est au pied de ce massif.",
            "hint2": "Les Albères.",
            "choices": [
              "Les Albères",
              "Les Alpes",
              "Les Vosges",
              "Le Jura"
            ]
          },
          "ado": {
            "q": "Quel massif est directement évoqué par le nom de cette rue ?",
            "answers": [
              "alberes",
              "albères",
              "les alberes",
              "les albères"
            ],
            "choices": [
              "Les Albères",
              "Les Alpes",
              "Les Vosges",
              "Le Jura"
            ],
            "interaction": "choice",
            "hint": "Le village est au pied de ce massif.",
            "hint2": "Les Albères."
          }
        },
        "validationFocus": "Priorité : transformer en énigme panoramique réelle si visibilité suffisante.",
        "choices": [
          "Les Albères",
          "Les Alpes",
          "Les Vosges",
          "Le Jura"
        ],
        "id": "sa-portes-albere-s03"
      },
      {
        "name": "Rue des Mimosas — le corridor tourne",
        "fact": "Après la rue des Albères, la fiche indique la rue des Mimosas.",
        "type": "sequence",
        "q": "Quel ordre est documenté ?",
        "answers": [
          "Rue des Albères > Rue des Mimosas > Rue Joan Cayrol"
        ],
        "hint": "Mimosas se place au milieu.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/liaison-mairie-de-saint-andre-ev8-sorede/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "sequence",
        "locationMode": "trail",
        "hint2": "Albères → Mimosas → Joan Cayrol.",
        "routeInstruction": "Rester sur les cheminements piétons réellement disponibles.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel ordre est documenté ?",
            "answers": [
              "Rue des Albères > Rue des Mimosas > Rue Joan Cayrol"
            ],
            "interaction": "sequence",
            "hint": "Mimosas se place au milieu.",
            "hint2": "Albères → Mimosas → Joan Cayrol.",
            "choices": [
              "Rue des Albères",
              "Rue des Mimosas",
              "Rue Joan Cayrol"
            ],
            "sequence": [
              "Rue des Albères",
              "Rue des Mimosas",
              "Rue Joan Cayrol"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quel ordre est documenté ?",
            "answers": [
              "Rue des Albères > Rue des Mimosas > Rue Joan Cayrol"
            ],
            "interaction": "text",
            "hint": "Mimosas se place au milieu.",
            "hint2": "Albères → Mimosas → Joan Cayrol.",
            "choices": [
              "Rue des Albères",
              "Rue des Mimosas",
              "Rue Joan Cayrol"
            ],
            "sequence": [
              "Rue des Albères",
              "Rue des Mimosas",
              "Rue Joan Cayrol"
            ]
          },
          "ado": {
            "q": "Quel ordre est documenté ?",
            "answers": [
              "Rue des Albères > Rue des Mimosas > Rue Joan Cayrol"
            ],
            "choices": [
              "Rue des Albères",
              "Rue des Mimosas",
              "Rue Joan Cayrol"
            ],
            "interaction": "sequence",
            "hint": "Mimosas se place au milieu.",
            "hint2": "Albères → Mimosas → Joan Cayrol."
          }
        },
        "validationFocus": "Confirmer sur place la formulation, l’observabilité, le point exact et la sécurité.",
        "choices": [
          "Rue des Albères",
          "Rue des Mimosas",
          "Rue Joan Cayrol"
        ],
        "sequence": [
          "Rue des Albères",
          "Rue des Mimosas",
          "Rue Joan Cayrol"
        ],
        "id": "sa-portes-albere-s04"
      },
      {
        "name": "Rue Joan Cayrol — approcher la sortie",
        "fact": "La liaison rejoint la rue Joan Cayrol puis poursuit jusqu’à Sorède et l’EV8.",
        "type": "choice",
        "q": "Quel grand itinéraire cyclable devient l’objectif du corridor ?",
        "answers": [
          "ev8",
          "eurovelo 8",
          "EV8"
        ],
        "hint": "Deux lettres/chiffres.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/liaison-mairie-de-saint-andre-ev8-sorede/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "choice",
        "locationMode": "trail",
        "hint2": "EV8.",
        "routeInstruction": "Ne pas confondre l’itinéraire vélo avec une validation pédestre.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel grand itinéraire cyclable devient l’objectif du corridor ?",
            "answers": [
              "ev8",
              "eurovelo 8",
              "EV8"
            ],
            "interaction": "choice",
            "hint": "Deux lettres/chiffres.",
            "hint2": "EV8.",
            "choices": [
              "EV8",
              "GR20",
              "Autoroute A9",
              "Canal du Midi"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quel grand itinéraire cyclable devient l’objectif du corridor ?",
            "answers": [
              "ev8",
              "eurovelo 8",
              "EV8"
            ],
            "interaction": "text",
            "hint": "Deux lettres/chiffres.",
            "hint2": "EV8.",
            "choices": [
              "EV8",
              "GR20",
              "Autoroute A9",
              "Canal du Midi"
            ]
          },
          "ado": {
            "q": "Quel grand itinéraire cyclable devient l’objectif du corridor ?",
            "answers": [
              "ev8",
              "eurovelo 8",
              "EV8"
            ],
            "choices": [
              "EV8",
              "GR20",
              "Autoroute A9",
              "Canal du Midi"
            ],
            "interaction": "choice",
            "hint": "Deux lettres/chiffres.",
            "hint2": "EV8."
          }
        },
        "validationFocus": "Confirmer sur place la formulation, l’observabilité, le point exact et la sécurité.",
        "choices": [
          "EV8",
          "GR20",
          "Autoroute A9",
          "Canal du Midi"
        ],
        "id": "sa-portes-albere-s05"
      },
      {
        "name": "Interface EV8 — choisir une direction",
        "fact": "La fiche précise que l’EV8 part à gauche vers Argelès et à droite vers Le Boulou.",
        "type": "multi",
        "q": "Quelles deux destinations sont explicitement données depuis l’interface EV8 ?",
        "answers": [
          "argeles + le boulou"
        ],
        "hint": "Une vers la côte, l’autre vers l’intérieur.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/liaison-mairie-de-saint-andre-ev8-sorede/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "multi",
        "locationMode": "trail",
        "hint2": "Argelès + Le Boulou.",
        "routeInstruction": "Le point final exact doit être choisi hors flux cyclable.",
        "audience": {
          "enfant": {
            "q": "En famille : Quelles deux destinations sont explicitement données depuis l’interface EV8 ?",
            "answers": [
              "argeles + le boulou"
            ],
            "interaction": "multi",
            "hint": "Une vers la côte, l’autre vers l’intérieur.",
            "hint2": "Argelès + Le Boulou.",
            "choices": [
              "Argelès",
              "Le Boulou",
              "Banyuls",
              "Cerbère"
            ],
            "multiAnswers": [
              "Argelès",
              "Le Boulou"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quelles deux destinations sont explicitement données depuis l’interface EV8 ?",
            "answers": [
              "argeles + le boulou"
            ],
            "interaction": "text",
            "hint": "Une vers la côte, l’autre vers l’intérieur.",
            "hint2": "Argelès + Le Boulou.",
            "choices": [
              "Argelès",
              "Le Boulou",
              "Banyuls",
              "Cerbère"
            ],
            "multiAnswers": [
              "Argelès",
              "Le Boulou"
            ]
          },
          "ado": {
            "q": "Quelles deux destinations sont explicitement données depuis l’interface EV8 ?",
            "answers": [
              "argeles + le boulou"
            ],
            "choices": [
              "Argelès",
              "Le Boulou",
              "Banyuls",
              "Cerbère"
            ],
            "interaction": "multi",
            "hint": "Une vers la côte, l’autre vers l’intérieur.",
            "hint2": "Argelès + Le Boulou."
          }
        },
        "validationFocus": "Identifier un espace sûr pour l’énigme et le demi-tour.",
        "choices": [
          "Argelès",
          "Le Boulou",
          "Banyuls",
          "Cerbère"
        ],
        "multiAnswers": [
          "Argelès",
          "Le Boulou"
        ],
        "id": "sa-portes-albere-s06"
      },
      {
        "name": "Retour vers Saint-André — la porte du massif",
        "fact": "La commune décrit Saint-André comme situé sur le piémont nord des Albères, proche d’Argelès et porte d’entrée d’un arrière-pays au pied du massif.",
        "type": "choice",
        "q": "Quel mot de paysage décrit la position du village au pied d’un relief ?",
        "answers": [
          "piemont",
          "piémont"
        ],
        "hint": "C’est la zone au pied d’un massif.",
        "token": "",
        "source": "https://www.saint-andre66.fr/decouvertes/",
        "gpsConfidence": "field-coordinate-required",
        "access": "Extérieur / cheminement à confirmer en reconnaissance Explor’Action.",
        "season": "Sous réserve des conditions locales, fermetures, météo et réglementation en vigueur.",
        "photoBonus": false,
        "expertBonus": "Résous l’étape à partir du lieu réel avant de consulter la découverte.",
        "interaction": "choice",
        "locationMode": "trail",
        "hint2": "Piémont.",
        "routeInstruction": "Le retour Explor’Action sera défini après reconnaissance pour éviter une simple répétition de l’aller.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel mot de paysage décrit la position du village au pied d’un relief ?",
            "answers": [
              "piemont",
              "piémont"
            ],
            "interaction": "choice",
            "hint": "C’est la zone au pied d’un massif.",
            "hint2": "Piémont.",
            "choices": [
              "Piémont",
              "Estuaire",
              "Atoll",
              "Delta"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quel mot de paysage décrit la position du village au pied d’un relief ?",
            "answers": [
              "piemont",
              "piémont"
            ],
            "interaction": "text",
            "hint": "C’est la zone au pied d’un massif.",
            "hint2": "Piémont.",
            "choices": [
              "Piémont",
              "Estuaire",
              "Atoll",
              "Delta"
            ]
          },
          "ado": {
            "q": "Quel mot de paysage décrit la position du village au pied d’un relief ?",
            "answers": [
              "piemont",
              "piémont"
            ],
            "choices": [
              "Piémont",
              "Estuaire",
              "Atoll",
              "Delta"
            ],
            "interaction": "choice",
            "hint": "C’est la zone au pied d’un massif.",
            "hint2": "Piémont."
          }
        },
        "validationFocus": "Concevoir une vraie boucle de retour si le réseau piéton le permet.",
        "choices": [
          "Piémont",
          "Estuaire",
          "Atoll",
          "Delta"
        ],
        "id": "sa-portes-albere-s07"
      }
    ],
    "lastVerified": "2026-09-09",
    "sourceSummary": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/liaison-mairie-de-saint-andre-ev8-sorede/",
    "safety": "Prototype à reconnaître à pied. La source est une liaison cyclable sur voies partagées : prudence maximale aux routes et traversées. Ne pas publier avant audit piéton complet.",
    "offline": true,
    "territoryId": "standre",
    "route": {
      "level": "facile",
      "levelLabel": "Facile",
      "distanceKm": null,
      "distanceLabel": "À mesurer en reconnaissance",
      "walkTime": "À mesurer lors de la reconnaissance Explor’Action",
      "gameTime": "≈ 1 h 30 – 2 h à tester",
      "ascentM": null,
      "descentM": null,
      "altMaxM": null,
      "surface": "Rues du village puis liaison documentée vers l’interface EV8",
      "accessibility": "À qualifier sur place.",
      "metricsStatus": "field-required-no-invented-metric",
      "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/liaison-mairie-de-saint-andre-ev8-sorede/",
      "note": "La source officielle décrit une liaison cyclable de 2,2 km (+28/-3 m), pas une randonnée pédestre. Explor’Action ne reprend donc pas ces chiffres comme métriques joueur : le corridor doit être reconnu à pied et mesuré indépendamment.",
      "playerDistance": "À mesurer",
      "playerAscent": "À mesurer",
      "playerWalk": "À mesurer",
      "playerTerrain": "Rues du village puis liaison documentée vers l’interface EV8",
      "playerNote": "Aucune métrique pédestre Explor’Action n’est publiée avant mesure réelle.",
      "routeType": "Aller-retour / boucle Explor’Action à définir",
      "officialBasis": "Liaison cyclable officielle Mairie de Saint-André – EV8 Sorède utilisée uniquement comme corridor documentaire",
      "durationLabel": "Métriques à mesurer • ≈ 1 h 30 – 2 h à tester"
    },
    "teaser": "Sors du cœur historique et transforme un corridor réel vers l’EV8 en aventure d’orientation entre village, plaine et Albères.",
    "briefing": "La source de base est cyclable. Elle ne doit jamais être présentée comme une randonnée pédestre validée. La reconnaissance doit vérifier trottoirs, traversées, sécurité et possibilité de créer une vraie boucle à pied.",
    "objective": "Relier sept repères directionnels et comprendre la position de Saint-André au piémont des Albères.",
    "ending": "ORIENTATION. Le village n’est pas isolé : ses rues et l’EV8 l’inscrivent dans un réseau de directions entre massif, côte et plaine.",
    "territoryFragment": "ORIENTATION",
    "cardTerrain": "Rues du village puis liaison documentée vers l’interface EV8",
    "cardTime": "≈ 1 h 30 – 2 h à tester",
    "playerMetrics": [
      [
        "🥾",
        "À mesurer"
      ],
      [
        "↗",
        "À mesurer"
      ],
      [
        "⏱",
        "À mesurer"
      ]
    ],
    "storyBeats": [
      {
        "title": "Quitter la place",
        "text": "L’Allée de la Liberté ouvre le corridor."
      },
      {
        "title": "La route impose la prudence",
        "text": "L’orientation n’a de sens que si le passage est sûr."
      },
      {
        "title": "Le massif dans un nom",
        "text": "Rue des Albères annonce le relief voisin."
      },
      {
        "title": "Une séquence de rues",
        "text": "Le joueur reconstruit le corridor sans GPS fictif."
      },
      {
        "title": "Rejoindre un grand axe",
        "text": "Joan Cayrol conduit vers l’EV8."
      },
      {
        "title": "Deux directions",
        "text": "Argelès et Le Boulou montrent deux ouvertures du territoire."
      },
      {
        "title": "Comprendre le piémont",
        "text": "Le retour donne enfin un mot à la position de Saint-André."
      }
    ],
    "playerStatus": "development-research",
    "scenarioDisclaimer": "La boussole défaillante est fictive. Les rues et directions sont sourcées par la fiche EV8, mais aucune métrique cyclable n’est réutilisée comme métrique pédestre Explor’Action.",
    "finalPrompt": "Quel mot décrit l’action de se situer et de choisir une direction à partir de repères ?",
    "clueCards": [
      {
        "unlockAt": 2,
        "title": "Carte 1 — Choisir son passage",
        "text": "Les rues imposent des décisions."
      },
      {
        "unlockAt": 5,
        "title": "Carte 2 — Un axe plus large",
        "text": "L’EV8 relie le village à d’autres destinations."
      },
      {
        "unlockAt": 7,
        "title": "Carte 3 — Se situer",
        "text": "Le mot final est une compétence de déplacement."
      }
    ],
    "developmentStatus": "ready-content-field-monitoring",
    "sourceCheckedAt": "2026-09-10",
    "fieldValidation": "monitoring-required",
    "validationTier": "ready-application-test"
  },
  {
    "id": "ba-ligne-rivage",
    "territoryId": "banyuls",
    "icon": "🌊",
    "title": "La Ligne du Rivage",
    "tag": "QUASI-PLAT • Mer • Art • Sciences",
    "duration": "1 h 30 de marche officielle • ≈ 2 h–2 h 45 avec le jeu",
    "difficulty": "Facile",
    "story": "Une ligne lumineuse traverse Banyuls des Elmes au Troc. FAFA te demande de suivre la mer sans quitter le fil qui relie art, port et sciences.",
    "final": "RIVAGE",
    "steps": [
      {
        "name": "Plage des Elmes",
        "fact": "Le parcours officiel part de la plage des Elmes et rejoint le centre de Banyuls.",
        "type": "choice",
        "q": "Quel élément naturel accompagne presque tout le parcours ?",
        "answers": [
          "la mer"
        ],
        "hint": "Observe le lieu réel avant de répondre.",
        "hint2": "Réponse attendue : la mer.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/e-12-sentier-littoral-guide-oti-banyuls-sur-mer-plage-des-elmes-plage-du-troc/",
        "gpsConfidence": "route-documented-no-false-geofence",
        "access": "Espace public / itinéraire documenté, sous réserve des conditions locales.",
        "season": "Toute l’année sous réserve météo, travaux et risque incendie.",
        "photoBonus": false,
        "expertBonus": "Privilégie l’observation et le terrain à l’écran.",
        "interaction": "choice",
        "locationMode": "trail",
        "routeInstruction": "Pars des Elmes vers le centre.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel élément naturel accompagne presque tout le parcours ?",
            "answers": [
              "la mer"
            ],
            "interaction": "choice",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : la mer.",
            "choices": [
              "La mer",
              "Une forêt",
              "Un lac"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quel élément naturel accompagne presque tout le parcours ?",
            "answers": [
              "la mer"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : la mer.",
            "choices": [
              "La mer",
              "Une forêt",
              "Un lac"
            ]
          },
          "ado": {
            "q": "Quel élément naturel accompagne presque tout le parcours ?",
            "answers": [
              "la mer"
            ],
            "choices": [
              "La mer",
              "Une forêt",
              "Un lac"
            ],
            "interaction": "choice",
            "hint": "Observe le lieu réel avant de répondre.",
            "hint2": "Réponse attendue : la mer."
          }
        },
        "validationFocus": "Contrôler le repère et les conditions locales avant publication définitive.",
        "choices": [
          "La mer",
          "Une forêt",
          "Un lac"
        ],
        "id": "ba-ligne-rivage-s01"
      },
      {
        "name": "Cap d’Osne",
        "fact": "Le parcours passe par le Cap d’Osne avant de descendre vers la plage centrale.",
        "type": "text",
        "q": "Quel repère vient avant la plage centrale ?",
        "answers": [
          "cap d osne"
        ],
        "hint": "Observe le lieu réel avant de répondre.",
        "hint2": "Réponse attendue : cap d osne.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/e-12-sentier-littoral-guide-oti-banyuls-sur-mer-plage-des-elmes-plage-du-troc/",
        "gpsConfidence": "route-documented-no-false-geofence",
        "access": "Espace public / itinéraire documenté, sous réserve des conditions locales.",
        "season": "Toute l’année sous réserve météo, travaux et risque incendie.",
        "photoBonus": false,
        "expertBonus": "Privilégie l’observation et le terrain à l’écran.",
        "interaction": "text",
        "locationMode": "trail",
        "routeInstruction": "Suis le trottoir vers le Cap d’Osne.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel repère vient avant la plage centrale ?",
            "answers": [
              "cap d osne"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : cap d osne."
          },
          "adulte": {
            "q": "En autonomie : Quel repère vient avant la plage centrale ?",
            "answers": [
              "cap d osne"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : cap d osne."
          },
          "ado": {
            "q": "Quel repère vient avant la plage centrale ?",
            "answers": [
              "cap d osne"
            ],
            "interaction": "text",
            "hint": "Observe le lieu réel avant de répondre.",
            "hint2": "Réponse attendue : cap d osne."
          }
        },
        "validationFocus": "Contrôler le repère et les conditions locales avant publication définitive.",
        "id": "ba-ligne-rivage-s02"
      },
      {
        "name": "Office de tourisme — Maillol",
        "fact": "Une œuvre de Maillol est visible devant l’Office de tourisme.",
        "type": "text",
        "q": "Quel artiste local est associé à l’œuvre observée ici ?",
        "answers": [
          "maillol"
        ],
        "hint": "Observe le lieu réel avant de répondre.",
        "hint2": "Réponse attendue : maillol.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/e-12-sentier-littoral-guide-oti-banyuls-sur-mer-plage-des-elmes-plage-du-troc/",
        "gpsConfidence": "route-documented-no-false-geofence",
        "access": "Espace public / itinéraire documenté, sous réserve des conditions locales.",
        "season": "Toute l’année sous réserve météo, travaux et risque incendie.",
        "photoBonus": false,
        "expertBonus": "Privilégie l’observation et le terrain à l’écran.",
        "interaction": "text",
        "locationMode": "trail",
        "routeInstruction": "Continue sur le front de mer.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel artiste local est associé à l’œuvre observée ici ?",
            "answers": [
              "maillol"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : maillol."
          },
          "adulte": {
            "q": "En autonomie : Quel artiste local est associé à l’œuvre observée ici ?",
            "answers": [
              "maillol"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : maillol."
          },
          "ado": {
            "q": "Quel artiste local est associé à l’œuvre observée ici ?",
            "answers": [
              "maillol"
            ],
            "interaction": "text",
            "hint": "Observe le lieu réel avant de répondre.",
            "hint2": "Réponse attendue : maillol."
          }
        },
        "validationFocus": "Contrôler le repère et les conditions locales avant publication définitive.",
        "id": "ba-ligne-rivage-s03"
      },
      {
        "name": "Allées Maillol",
        "fact": "Les allées Maillol conduisent vers le Laboratoire Arago.",
        "type": "sequence",
        "q": "Remets l’ordre : Office → Allées Maillol → Laboratoire.",
        "answers": [
          "office > allees maillol > laboratoire"
        ],
        "hint": "Observe le lieu réel avant de répondre.",
        "hint2": "Réponse attendue : office > allees maillol > laboratoire.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/e-12-sentier-littoral-guide-oti-banyuls-sur-mer-plage-des-elmes-plage-du-troc/",
        "gpsConfidence": "route-documented-no-false-geofence",
        "access": "Espace public / itinéraire documenté, sous réserve des conditions locales.",
        "season": "Toute l’année sous réserve météo, travaux et risque incendie.",
        "photoBonus": false,
        "expertBonus": "Privilégie l’observation et le terrain à l’écran.",
        "interaction": "sequence",
        "locationMode": "trail",
        "routeInstruction": "Suis les allées Maillol.",
        "audience": {
          "enfant": {
            "q": "En famille : Remets l’ordre : Office → Allées Maillol → Laboratoire.",
            "answers": [
              "office > allees maillol > laboratoire"
            ],
            "interaction": "sequence",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : office > allees maillol > laboratoire.",
            "choices": [
              "Office",
              "Allées Maillol",
              "Laboratoire"
            ],
            "sequence": [
              "Office",
              "Allées Maillol",
              "Laboratoire"
            ]
          },
          "adulte": {
            "q": "En autonomie : Remets l’ordre : Office → Allées Maillol → Laboratoire.",
            "answers": [
              "office > allees maillol > laboratoire"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : office > allees maillol > laboratoire."
          },
          "ado": {
            "q": "Remets l’ordre : Office → Allées Maillol → Laboratoire.",
            "answers": [
              "office > allees maillol > laboratoire"
            ],
            "interaction": "sequence",
            "hint": "Observe le lieu réel avant de répondre.",
            "hint2": "Réponse attendue : office > allees maillol > laboratoire.",
            "choices": [
              "Office",
              "Allées Maillol",
              "Laboratoire"
            ],
            "sequence": [
              "Office",
              "Allées Maillol",
              "Laboratoire"
            ]
          }
        },
        "validationFocus": "Contrôler le repère et les conditions locales avant publication définitive.",
        "id": "ba-ligne-rivage-s04",
        "choices": [
          "Office",
          "Allées Maillol",
          "Laboratoire"
        ],
        "sequence": [
          "Office",
          "Allées Maillol",
          "Laboratoire"
        ]
      },
      {
        "name": "Laboratoire Arago",
        "fact": "La station marine de Banyuls est liée à Henri de Lacaze-Duthiers.",
        "type": "choice",
        "q": "Quel domaine domine ici : sciences marines ou aviation ?",
        "answers": [
          "sciences marines"
        ],
        "hint": "Observe le lieu réel avant de répondre.",
        "hint2": "Réponse attendue : sciences marines.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/e-12-sentier-littoral-guide-oti-banyuls-sur-mer-plage-des-elmes-plage-du-troc/",
        "gpsConfidence": "route-documented-no-false-geofence",
        "access": "Espace public / itinéraire documenté, sous réserve des conditions locales.",
        "season": "Toute l’année sous réserve météo, travaux et risque incendie.",
        "photoBonus": false,
        "expertBonus": "Privilégie l’observation et le terrain à l’écran.",
        "interaction": "choice",
        "locationMode": "trail",
        "routeInstruction": "Reste sur la promenade aménagée.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel domaine domine ici : sciences marines ou aviation ?",
            "answers": [
              "sciences marines"
            ],
            "interaction": "choice",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : sciences marines.",
            "choices": [
              "Sciences marines",
              "Aviation",
              "Chemin de fer"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quel domaine domine ici : sciences marines ou aviation ?",
            "answers": [
              "sciences marines"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : sciences marines.",
            "choices": [
              "Sciences marines",
              "Aviation",
              "Chemin de fer"
            ]
          },
          "ado": {
            "q": "Quel domaine domine ici : sciences marines ou aviation ?",
            "answers": [
              "sciences marines"
            ],
            "choices": [
              "Sciences marines",
              "Aviation",
              "Chemin de fer"
            ],
            "interaction": "choice",
            "hint": "Observe le lieu réel avant de répondre.",
            "hint2": "Réponse attendue : sciences marines."
          }
        },
        "validationFocus": "Contrôler le repère et les conditions locales avant publication définitive.",
        "choices": [
          "Sciences marines",
          "Aviation",
          "Chemin de fer"
        ],
        "id": "ba-ligne-rivage-s05"
      },
      {
        "name": "Plage du Troc",
        "fact": "Le parcours officiel se termine vers la plage du Troc.",
        "type": "text",
        "q": "Quel mot final résume le fil suivi ?",
        "answers": [
          "rivage"
        ],
        "hint": "Observe le lieu réel avant de répondre.",
        "hint2": "Réponse attendue : rivage.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/e-12-sentier-littoral-guide-oti-banyuls-sur-mer-plage-des-elmes-plage-du-troc/",
        "gpsConfidence": "route-documented-no-false-geofence",
        "access": "Espace public / itinéraire documenté, sous réserve des conditions locales.",
        "season": "Toute l’année sous réserve météo, travaux et risque incendie.",
        "photoBonus": false,
        "expertBonus": "Privilégie l’observation et le terrain à l’écran.",
        "interaction": "text",
        "locationMode": "trail",
        "routeInstruction": "Rejoins le Troc par le cheminement officiel.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel mot final résume le fil suivi ?",
            "answers": [
              "rivage"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : rivage."
          },
          "adulte": {
            "q": "En autonomie : Quel mot final résume le fil suivi ?",
            "answers": [
              "rivage"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : rivage."
          },
          "ado": {
            "q": "Quel mot final résume le fil suivi ?",
            "answers": [
              "rivage"
            ],
            "interaction": "text",
            "hint": "Observe le lieu réel avant de répondre.",
            "hint2": "Réponse attendue : rivage."
          }
        },
        "validationFocus": "Contrôler le repère et les conditions locales avant publication définitive.",
        "id": "ba-ligne-rivage-s06"
      }
    ],
    "teaser": "Une ligne lumineuse traverse Banyuls des Elmes au Troc. FAFA te demande de suivre la mer sans quitter le fil qui relie art, port et sciences.",
    "briefing": "Une ligne lumineuse traverse Banyuls des Elmes au Troc. FAFA te demande de suivre la mer sans quitter le fil qui relie art, port et sciences.",
    "objective": "Relier les repères du front de mer en privilégiant une expérience accessible et continue.",
    "ending": "La baie devient une carte : plage, art, port et science s’alignent dans un même paysage.",
    "territoryFragment": "RIVAGE",
    "cardTerrain": "Front de mer des Elmes au Troc",
    "cardTime": "1 h 30 de marche officielle • ≈ 2 h–2 h 45 avec le jeu",
    "playerMetrics": [
      [
        "🥾",
        "2,8 km"
      ],
      [
        "↗",
        "+77 m / −73 m"
      ],
      [
        "⏱",
        "1 h 30 marche"
      ]
    ],
    "storyBeats": [
      {
        "title": "Plage des Elmes",
        "text": "Le parcours officiel part de la plage des Elmes et rejoint le centre de Banyuls."
      },
      {
        "title": "Cap d’Osne",
        "text": "Le parcours passe par le Cap d’Osne avant de descendre vers la plage centrale."
      },
      {
        "title": "Office de tourisme — Maillol",
        "text": "Une œuvre de Maillol est visible devant l’Office de tourisme."
      },
      {
        "title": "Allées Maillol",
        "text": "Les allées Maillol conduisent vers le Laboratoire Arago."
      },
      {
        "title": "Laboratoire Arago",
        "text": "La station marine de Banyuls est liée à Henri de Lacaze-Duthiers."
      },
      {
        "title": "Plage du Troc",
        "text": "Le parcours officiel se termine vers la plage du Troc."
      }
    ],
    "playerStatus": "ready",
    "scenarioDisclaimer": "Scénario Explor’Action fictif ; faits et itinéraires issus des sources indiquées. Les conditions locales peuvent évoluer.",
    "finalPrompt": "Quel mot résume cette aventure ? Réponse : RIVAGE.",
    "clueCards": [
      {
        "unlockAt": 2,
        "title": "Carte 1 — Observe",
        "text": "Le terrain donne le premier indice."
      },
      {
        "unlockAt": 3,
        "title": "Carte 2 — Relie",
        "text": "Relie les repères déjà traversés."
      },
      {
        "unlockAt": 6,
        "title": "Carte 3 — Synthèse",
        "text": "Le fragment final est « RIVAGE »."
      }
    ],
    "developmentStatus": "ready-content-field-monitoring",
    "sourceCheckedAt": "2026-09-10",
    "fieldValidation": "monitoring-required",
    "officialBasis": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/e-12-sentier-littoral-guide-oti-banyuls-sur-mer-plage-des-elmes-plage-du-troc/",
    "routeType": "Traversée pédestre",
    "expedition": false,
    "flatRoute": true,
    "safetyWarning": "Parcours littoral : prudence aux escaliers et traversées.",
    "route": {
      "level": "facile",
      "levelLabel": "Facile",
      "distanceKm": 2.8,
      "distanceLabel": "2,8 km",
      "walkTime": "1 h 30",
      "gameTime": "≈ 2 h–2 h 45",
      "ascentM": 77,
      "descentM": 73,
      "altMaxM": null,
      "surface": "Front de mer des Elmes au Troc",
      "accessibility": "À confirmer selon escaliers et passages du sentier littoral.",
      "metricsStatus": "official-route-field-monitoring",
      "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/e-12-sentier-littoral-guide-oti-banyuls-sur-mer-plage-des-elmes-plage-du-troc/",
      "note": "Métriques issues de la fiche officielle ; conditions locales à contrôler le jour du départ.",
      "playerDistance": "2,8 km",
      "playerAscent": "+77 m / −73 m",
      "playerWalk": "1 h 30 de marche officielle",
      "playerTerrain": "Sentier littoral et front de mer",
      "playerNote": "Parcours côtier à faible dénivelé relatif, avec escaliers et passages littoraux possibles.",
      "routeType": "Traversée pédestre",
      "officialBasis": "Sentier littoral Les Elmes → Le Troc"
    },
    "validationTier": "ready-application-test"
  },
  {
    "id": "ba-expedition-walter",
    "territoryId": "banyuls",
    "icon": "🧭",
    "title": "Expédition spéciale — La Trace de Walter Benjamin",
    "tag": "EXPÉDITION • Mémoire • Crêtes • Frontière",
    "duration": "6 h 30 de marche officielle • ≈ 8 h 30–11 h avec le jeu",
    "difficulty": "Difficile",
    "story": "Une expédition de mémoire suit les traces de Walter Benjamin et de la Retirada jusqu’aux crêtes frontalières. Le jeu reste sobre : ici, l’histoire prime sur le score.",
    "final": "MÉMOIRE",
    "steps": [
      {
        "name": "Mémorial Lisa et Hans Fittko",
        "fact": "Le départ documenté passe par le mémorial Lisa et Hans Fittko.",
        "type": "choice",
        "q": "Quel mot doit guider cette mission : mémoire ou compétition ?",
        "answers": [
          "memoire"
        ],
        "hint": "Observe le lieu réel avant de répondre.",
        "hint2": "Réponse attendue : memoire.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/sur-les-traces-de-walter-benjamin-et-de-la-retirada/",
        "gpsConfidence": "route-documented-no-false-geofence",
        "access": "Espace public / itinéraire documenté, sous réserve des conditions locales.",
        "season": "Toute l’année sous réserve météo, travaux et risque incendie.",
        "photoBonus": false,
        "expertBonus": "Privilégie l’observation et le terrain à l’écran.",
        "interaction": "choice",
        "locationMode": "trail",
        "routeInstruction": "Depuis Banyuls, rejoins le mémorial.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel mot doit guider cette mission : mémoire ou compétition ?",
            "answers": [
              "memoire"
            ],
            "interaction": "choice",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : memoire.",
            "choices": [
              "Mémoire",
              "Compétition"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quel mot doit guider cette mission : mémoire ou compétition ?",
            "answers": [
              "memoire"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : memoire.",
            "choices": [
              "Mémoire",
              "Compétition"
            ]
          },
          "ado": {
            "q": "Quel mot doit guider cette mission : mémoire ou compétition ?",
            "answers": [
              "memoire"
            ],
            "choices": [
              "Mémoire",
              "Compétition"
            ],
            "interaction": "choice",
            "hint": "Observe le lieu réel avant de répondre.",
            "hint2": "Réponse attendue : memoire."
          }
        },
        "validationFocus": "Contrôler le repère et les conditions locales avant publication définitive.",
        "choices": [
          "Mémoire",
          "Compétition"
        ],
        "id": "ba-expedition-walter-s01"
      },
      {
        "name": "Col del Bast",
        "fact": "L’itinéraire monte vers le col del Bast avant les crêtes.",
        "type": "text",
        "q": "Quel type de relief franchis-tu ici ?",
        "answers": [
          "col"
        ],
        "hint": "Observe le lieu réel avant de répondre.",
        "hint2": "Réponse attendue : col.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/sur-les-traces-de-walter-benjamin-et-de-la-retirada/",
        "gpsConfidence": "route-documented-no-false-geofence",
        "access": "Espace public / itinéraire documenté, sous réserve des conditions locales.",
        "season": "Toute l’année sous réserve météo, travaux et risque incendie.",
        "photoBonus": false,
        "expertBonus": "Privilégie l’observation et le terrain à l’écran.",
        "interaction": "text",
        "locationMode": "trail",
        "routeInstruction": "Suis le tracé officiel vers le col del Bast.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel type de relief franchis-tu ici ?",
            "answers": [
              "col"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : col."
          },
          "adulte": {
            "q": "En autonomie : Quel type de relief franchis-tu ici ?",
            "answers": [
              "col"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : col."
          },
          "ado": {
            "q": "Quel type de relief franchis-tu ici ?",
            "answers": [
              "col"
            ],
            "interaction": "text",
            "hint": "Observe le lieu réel avant de répondre.",
            "hint2": "Réponse attendue : col."
          }
        },
        "validationFocus": "Contrôler le repère et les conditions locales avant publication définitive.",
        "id": "ba-expedition-walter-s02"
      },
      {
        "name": "Col de Rumpissar",
        "fact": "Le sentier atteint le col de Rumpissar avant de poursuivre sur les crêtes.",
        "type": "text",
        "q": "Quel repère vient après le col del Bast ?",
        "answers": [
          "col de rumpissar"
        ],
        "hint": "Observe le lieu réel avant de répondre.",
        "hint2": "Réponse attendue : col de rumpissar.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/sur-les-traces-de-walter-benjamin-et-de-la-retirada/",
        "gpsConfidence": "route-documented-no-false-geofence",
        "access": "Espace public / itinéraire documenté, sous réserve des conditions locales.",
        "season": "Toute l’année sous réserve météo, travaux et risque incendie.",
        "photoBonus": false,
        "expertBonus": "Privilégie l’observation et le terrain à l’écran.",
        "interaction": "text",
        "locationMode": "trail",
        "routeInstruction": "Reste sur le sentier balisé.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel repère vient après le col del Bast ?",
            "answers": [
              "col de rumpissar"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : col de rumpissar."
          },
          "adulte": {
            "q": "En autonomie : Quel repère vient après le col del Bast ?",
            "answers": [
              "col de rumpissar"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : col de rumpissar."
          },
          "ado": {
            "q": "Quel repère vient après le col del Bast ?",
            "answers": [
              "col de rumpissar"
            ],
            "interaction": "text",
            "hint": "Observe le lieu réel avant de répondre.",
            "hint2": "Réponse attendue : col de rumpissar."
          }
        },
        "validationFocus": "Contrôler le repère et les conditions locales avant publication définitive.",
        "id": "ba-expedition-walter-s03"
      },
      {
        "name": "Crêtes",
        "fact": "Le parcours suit les crêtes vers Querroig et le col des Bélitres.",
        "type": "multi",
        "q": "Sélectionne les deux repères de crête cités par la fiche officielle.",
        "answers": [
          "querroig + belitres"
        ],
        "hint": "Observe le lieu réel avant de répondre.",
        "hint2": "Réponse attendue : querroig + belitres.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/sur-les-traces-de-walter-benjamin-et-de-la-retirada/",
        "gpsConfidence": "route-documented-no-false-geofence",
        "access": "Espace public / itinéraire documenté, sous réserve des conditions locales.",
        "season": "Toute l’année sous réserve météo, travaux et risque incendie.",
        "photoBonus": false,
        "expertBonus": "Privilégie l’observation et le terrain à l’écran.",
        "interaction": "multi",
        "locationMode": "trail",
        "routeInstruction": "Poursuis uniquement si météo et accès sont sûrs.",
        "audience": {
          "enfant": {
            "q": "En famille : Sélectionne les deux repères de crête cités par la fiche officielle.",
            "answers": [
              "querroig + belitres"
            ],
            "interaction": "multi",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : querroig + belitres.",
            "choices": [
              "Querroig",
              "Col des Bélitres",
              "Valmy",
              "Paulilles"
            ],
            "multiAnswers": [
              "Querroig",
              "Col des Bélitres"
            ]
          },
          "adulte": {
            "q": "En autonomie : Sélectionne les deux repères de crête cités par la fiche officielle.",
            "answers": [
              "querroig + belitres"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : querroig + belitres.",
            "choices": [
              "Querroig",
              "Col des Bélitres",
              "Valmy",
              "Paulilles"
            ]
          },
          "ado": {
            "q": "Sélectionne les deux repères de crête cités par la fiche officielle.",
            "answers": [
              "querroig + belitres"
            ],
            "choices": [
              "Querroig",
              "Col des Bélitres",
              "Valmy",
              "Paulilles"
            ],
            "interaction": "multi",
            "hint": "Observe le lieu réel avant de répondre.",
            "hint2": "Réponse attendue : querroig + belitres.",
            "multiAnswers": [
              "Querroig",
              "Col des Bélitres"
            ]
          }
        },
        "validationFocus": "Contrôler le repère et les conditions locales avant publication définitive.",
        "choices": [
          "Querroig",
          "Col des Bélitres",
          "Valmy",
          "Paulilles"
        ],
        "id": "ba-expedition-walter-s04",
        "multiAnswers": [
          "Querroig",
          "Col des Bélitres"
        ]
      },
      {
        "name": "Col des Bélitres",
        "fact": "Le col des Bélitres est un point majeur du parcours mémoriel frontalier.",
        "type": "text",
        "q": "Quel thème relie ce col à l’histoire du parcours ?",
        "answers": [
          "frontiere"
        ],
        "hint": "Observe le lieu réel avant de répondre.",
        "hint2": "Réponse attendue : frontiere.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/sur-les-traces-de-walter-benjamin-et-de-la-retirada/",
        "gpsConfidence": "route-documented-no-false-geofence",
        "access": "Espace public / itinéraire documenté, sous réserve des conditions locales.",
        "season": "Toute l’année sous réserve météo, travaux et risque incendie.",
        "photoBonus": false,
        "expertBonus": "Privilégie l’observation et le terrain à l’écran.",
        "interaction": "text",
        "locationMode": "trail",
        "routeInstruction": "Suis le balisage officiel vers la frontière.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel thème relie ce col à l’histoire du parcours ?",
            "answers": [
              "frontiere"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : frontiere."
          },
          "adulte": {
            "q": "En autonomie : Quel thème relie ce col à l’histoire du parcours ?",
            "answers": [
              "frontiere"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : frontiere."
          },
          "ado": {
            "q": "Quel thème relie ce col à l’histoire du parcours ?",
            "answers": [
              "frontiere"
            ],
            "interaction": "text",
            "hint": "Observe le lieu réel avant de répondre.",
            "hint2": "Réponse attendue : frontiere."
          }
        },
        "validationFocus": "Contrôler le repère et les conditions locales avant publication définitive.",
        "id": "ba-expedition-walter-s05"
      },
      {
        "name": "Portbou / option retour",
        "fact": "La fiche prévoit une arrivée possible à Portbou et un retour en train.",
        "type": "choice",
        "q": "Quel moyen de retour est explicitement proposé ?",
        "answers": [
          "train"
        ],
        "hint": "Observe le lieu réel avant de répondre.",
        "hint2": "Réponse attendue : train.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/sur-les-traces-de-walter-benjamin-et-de-la-retirada/",
        "gpsConfidence": "route-documented-no-false-geofence",
        "access": "Espace public / itinéraire documenté, sous réserve des conditions locales.",
        "season": "Toute l’année sous réserve météo, travaux et risque incendie.",
        "photoBonus": false,
        "expertBonus": "Privilégie l’observation et le terrain à l’écran.",
        "interaction": "choice",
        "locationMode": "trail",
        "routeInstruction": "Vérifie les horaires de transport avant le départ.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel moyen de retour est explicitement proposé ?",
            "answers": [
              "train"
            ],
            "interaction": "choice",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : train.",
            "choices": [
              "Train",
              "Bateau",
              "Téléphérique"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quel moyen de retour est explicitement proposé ?",
            "answers": [
              "train"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : train.",
            "choices": [
              "Train",
              "Bateau",
              "Téléphérique"
            ]
          },
          "ado": {
            "q": "Quel moyen de retour est explicitement proposé ?",
            "answers": [
              "train"
            ],
            "choices": [
              "Train",
              "Bateau",
              "Téléphérique"
            ],
            "interaction": "choice",
            "hint": "Observe le lieu réel avant de répondre.",
            "hint2": "Réponse attendue : train."
          }
        },
        "validationFocus": "Contrôler le repère et les conditions locales avant publication définitive.",
        "choices": [
          "Train",
          "Bateau",
          "Téléphérique"
        ],
        "id": "ba-expedition-walter-s06"
      },
      {
        "name": "Synthèse",
        "fact": "Cette mission associe effort, frontière et histoire.",
        "type": "text",
        "q": "Quel fragment final dois-tu conserver ?",
        "answers": [
          "memoire"
        ],
        "hint": "Observe le lieu réel avant de répondre.",
        "hint2": "Réponse attendue : memoire.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/sur-les-traces-de-walter-benjamin-et-de-la-retirada/",
        "gpsConfidence": "route-documented-no-false-geofence",
        "access": "Espace public / itinéraire documenté, sous réserve des conditions locales.",
        "season": "Toute l’année sous réserve météo, travaux et risque incendie.",
        "photoBonus": false,
        "expertBonus": "Privilégie l’observation et le terrain à l’écran.",
        "interaction": "text",
        "locationMode": "trail",
        "routeInstruction": "Termine la mission seulement une fois en sécurité.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel fragment final dois-tu conserver ?",
            "answers": [
              "memoire"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : memoire."
          },
          "adulte": {
            "q": "En autonomie : Quel fragment final dois-tu conserver ?",
            "answers": [
              "memoire"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : memoire."
          },
          "ado": {
            "q": "Quel fragment final dois-tu conserver ?",
            "answers": [
              "memoire"
            ],
            "interaction": "text",
            "hint": "Observe le lieu réel avant de répondre.",
            "hint2": "Réponse attendue : memoire."
          }
        },
        "validationFocus": "Contrôler le repère et les conditions locales avant publication définitive.",
        "id": "ba-expedition-walter-s07"
      }
    ],
    "teaser": "Une expédition de mémoire suit les traces de Walter Benjamin et de la Retirada jusqu’aux crêtes frontalières. Le jeu reste sobre : ici, l’histoire prime sur le score.",
    "briefing": "Une expédition de mémoire suit les traces de Walter Benjamin et de la Retirada jusqu’aux crêtes frontalières. Le jeu reste sobre : ici, l’histoire prime sur le score.",
    "objective": "Suivre un itinéraire difficile, comprendre les passages de frontière et traiter la mémoire avec respect.",
    "ending": "L’expédition se termine sans triomphalisme : franchir un relief, c’est aussi comprendre ce qu’il a représenté pour ceux qui fuyaient.",
    "territoryFragment": "MÉMOIRE",
    "cardTerrain": "Banyuls → crêtes → frontière / Portbou selon option officielle",
    "cardTime": "6 h 30 de marche officielle • ≈ 8 h 30–11 h avec le jeu",
    "playerMetrics": [
      [
        "🥾",
        "12,8 km"
      ],
      [
        "↗",
        "+906 m / −888 m"
      ],
      [
        "⏱",
        "6 h 30 marche"
      ]
    ],
    "storyBeats": [
      {
        "title": "Mémorial Lisa et Hans Fittko",
        "text": "Le départ documenté passe par le mémorial Lisa et Hans Fittko."
      },
      {
        "title": "Col del Bast",
        "text": "L’itinéraire monte vers le col del Bast avant les crêtes."
      },
      {
        "title": "Col de Rumpissar",
        "text": "Le sentier atteint le col de Rumpissar avant de poursuivre sur les crêtes."
      },
      {
        "title": "Crêtes",
        "text": "Le parcours suit les crêtes vers Querroig et le col des Bélitres."
      },
      {
        "title": "Col des Bélitres",
        "text": "Le col des Bélitres est un point majeur du parcours mémoriel frontalier."
      },
      {
        "title": "Portbou / option retour",
        "text": "La fiche prévoit une arrivée possible à Portbou et un retour en train."
      },
      {
        "title": "Synthèse",
        "text": "Cette mission associe effort, frontière et histoire."
      }
    ],
    "playerStatus": "ready",
    "scenarioDisclaimer": "Scénario Explor’Action fictif ; faits et itinéraires issus des sources indiquées. Les conditions locales peuvent évoluer.",
    "finalPrompt": "Quel mot résume cette aventure ? Réponse : MÉMOIRE.",
    "clueCards": [
      {
        "unlockAt": 2,
        "title": "Carte 1 — Observe",
        "text": "Le terrain donne le premier indice."
      },
      {
        "unlockAt": 3,
        "title": "Carte 2 — Relie",
        "text": "Relie les repères déjà traversés."
      },
      {
        "unlockAt": 7,
        "title": "Carte 3 — Synthèse",
        "text": "Le fragment final est « MÉMOIRE »."
      }
    ],
    "developmentStatus": "ready-content-field-monitoring",
    "sourceCheckedAt": "2026-09-10",
    "fieldValidation": "monitoring-required",
    "officialBasis": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/sur-les-traces-de-walter-benjamin-et-de-la-retirada/",
    "routeType": "Traversée difficile",
    "expedition": true,
    "flatRoute": false,
    "safetyWarning": "Expédition longue et difficile. Vérifier météo, risque incendie, eau, heure de départ et solution de retour.",
    "route": {
      "level": "difficile",
      "levelLabel": "Difficile • Expédition",
      "distanceKm": 12.8,
      "distanceLabel": "12,8 km",
      "walkTime": "6 h 30",
      "gameTime": "≈ 8 h 30–11 h",
      "ascentM": 906,
      "descentM": 888,
      "altMaxM": null,
      "surface": "Sentiers de crête, relief frontalier et terrain de montagne",
      "accessibility": "Non adaptée PMR/poussette ; effort et technicité élevés.",
      "metricsStatus": "official-route-field-monitoring",
      "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/sur-les-traces-de-walter-benjamin-et-de-la-retirada/",
      "note": "Expédition longue. Vérifier météo, risque incendie, eau, heure de départ et retour.",
      "playerDistance": "12,8 km",
      "playerAscent": "+906 m / −888 m",
      "playerWalk": "6 h 30 de marche officielle",
      "playerTerrain": "Crêtes, frontière et sentiers de montagne",
      "playerNote": "Expédition exigeante : départ matinal, autonomie en eau et batterie, retour préparé.",
      "routeType": "Traversée difficile",
      "officialBasis": "Sur les traces de Walter Benjamin et de la Retirada"
    },
    "validationTier": "ready-application-test"
  },
  {
    "id": "pv-voie-verte",
    "territoryId": "portvendres",
    "icon": "🌿",
    "title": "La Voie des Anses",
    "tag": "QUASI-PLAT • Voie verte • Paulilles",
    "duration": "30 min de marche officielle • ≈ 1 h 15–1 h 45 avec le jeu",
    "difficulty": "Facile",
    "story": "De Port-Vendres à Paulilles, une voie aménagée offre une mission courte où le paysage devient l’énigme.",
    "final": "TRANSITION",
    "steps": [
      {
        "name": "Départ Port-Vendres",
        "fact": "La voie verte relie Port-Vendres à Paulilles.",
        "type": "text",
        "q": "Quelle destination termine la voie verte ?",
        "answers": [
          "paulilles"
        ],
        "hint": "Observe le lieu réel avant de répondre.",
        "hint2": "Réponse attendue : paulilles.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/voie-verte-port-vendres-paulilles-4/",
        "gpsConfidence": "route-documented-no-false-geofence",
        "access": "Espace public / itinéraire documenté, sous réserve des conditions locales.",
        "season": "Toute l’année sous réserve météo, travaux et risque incendie.",
        "photoBonus": false,
        "expertBonus": "Privilégie l’observation et le terrain à l’écran.",
        "interaction": "text",
        "locationMode": "trail",
        "routeInstruction": "Prends la piste aménagée.",
        "audience": {
          "enfant": {
            "q": "En famille : Quelle destination termine la voie verte ?",
            "answers": [
              "paulilles"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : paulilles."
          },
          "adulte": {
            "q": "En autonomie : Quelle destination termine la voie verte ?",
            "answers": [
              "paulilles"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : paulilles."
          },
          "ado": {
            "q": "Quelle destination termine la voie verte ?",
            "answers": [
              "paulilles"
            ],
            "interaction": "text",
            "hint": "Observe le lieu réel avant de répondre.",
            "hint2": "Réponse attendue : paulilles."
          }
        },
        "validationFocus": "Contrôler le repère et les conditions locales avant publication définitive.",
        "id": "pv-voie-verte-s01"
      },
      {
        "name": "Côte Vermeille",
        "fact": "La fiche décrit un paysage entre mer et vignobles en terrasses.",
        "type": "multi",
        "q": "Sélectionne les deux paysages annoncés.",
        "answers": [
          "mer + vignobles"
        ],
        "hint": "Observe le lieu réel avant de répondre.",
        "hint2": "Réponse attendue : mer + vignobles.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/voie-verte-port-vendres-paulilles-4/",
        "gpsConfidence": "route-documented-no-false-geofence",
        "access": "Espace public / itinéraire documenté, sous réserve des conditions locales.",
        "season": "Toute l’année sous réserve météo, travaux et risque incendie.",
        "photoBonus": false,
        "expertBonus": "Privilégie l’observation et le terrain à l’écran.",
        "interaction": "multi",
        "locationMode": "trail",
        "routeInstruction": "Reste sur la piste.",
        "audience": {
          "enfant": {
            "q": "En famille : Sélectionne les deux paysages annoncés.",
            "answers": [
              "mer + vignobles"
            ],
            "interaction": "multi",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : mer + vignobles.",
            "choices": [
              "Mer",
              "Vignobles",
              "Glacier",
              "Désert"
            ],
            "multiAnswers": [
              "Mer",
              "Vignobles"
            ]
          },
          "adulte": {
            "q": "En autonomie : Sélectionne les deux paysages annoncés.",
            "answers": [
              "mer + vignobles"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : mer + vignobles.",
            "choices": [
              "Mer",
              "Vignobles",
              "Glacier",
              "Désert"
            ]
          },
          "ado": {
            "q": "Sélectionne les deux paysages annoncés.",
            "answers": [
              "mer + vignobles"
            ],
            "choices": [
              "Mer",
              "Vignobles",
              "Glacier",
              "Désert"
            ],
            "interaction": "multi",
            "hint": "Observe le lieu réel avant de répondre.",
            "hint2": "Réponse attendue : mer + vignobles.",
            "multiAnswers": [
              "Mer",
              "Vignobles"
            ]
          }
        },
        "validationFocus": "Contrôler le repère et les conditions locales avant publication définitive.",
        "choices": [
          "Mer",
          "Vignobles",
          "Glacier",
          "Désert"
        ],
        "id": "pv-voie-verte-s02",
        "multiAnswers": [
          "Mer",
          "Vignobles"
        ]
      },
      {
        "name": "Piste aménagée",
        "fact": "Le parcours suit une voie aménagée.",
        "type": "choice",
        "q": "Quel choix correspond au cheminement le plus sûr ?",
        "answers": [
          "suivre la piste amenagee"
        ],
        "hint": "Observe le lieu réel avant de répondre.",
        "hint2": "Réponse attendue : suivre la piste amenagee.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/voie-verte-port-vendres-paulilles-4/",
        "gpsConfidence": "route-documented-no-false-geofence",
        "access": "Espace public / itinéraire documenté, sous réserve des conditions locales.",
        "season": "Toute l’année sous réserve météo, travaux et risque incendie.",
        "photoBonus": false,
        "expertBonus": "Privilégie l’observation et le terrain à l’écran.",
        "interaction": "choice",
        "locationMode": "trail",
        "routeInstruction": "Ne quitte pas la voie.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel choix correspond au cheminement le plus sûr ?",
            "answers": [
              "suivre la piste amenagee"
            ],
            "interaction": "choice",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : suivre la piste amenagee.",
            "choices": [
              "Suivre la piste aménagée",
              "Couper à travers les vignes"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quel choix correspond au cheminement le plus sûr ?",
            "answers": [
              "suivre la piste amenagee"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : suivre la piste amenagee.",
            "choices": [
              "Suivre la piste aménagée",
              "Couper à travers les vignes"
            ]
          },
          "ado": {
            "q": "Quel choix correspond au cheminement le plus sûr ?",
            "answers": [
              "suivre la piste amenagee"
            ],
            "choices": [
              "Suivre la piste aménagée",
              "Couper à travers les vignes"
            ],
            "interaction": "choice",
            "hint": "Observe le lieu réel avant de répondre.",
            "hint2": "Réponse attendue : suivre la piste amenagee."
          }
        },
        "validationFocus": "Contrôler le repère et les conditions locales avant publication définitive.",
        "choices": [
          "Suivre la piste aménagée",
          "Couper à travers les vignes"
        ],
        "id": "pv-voie-verte-s03"
      },
      {
        "name": "Anse de Paulilles",
        "fact": "L’arrivée se situe au site de Paulilles.",
        "type": "text",
        "q": "Quel mot résume le passage du port vers une anse protégée ?",
        "answers": [
          "transition"
        ],
        "hint": "Observe le lieu réel avant de répondre.",
        "hint2": "Réponse attendue : transition.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/voie-verte-port-vendres-paulilles-4/",
        "gpsConfidence": "route-documented-no-false-geofence",
        "access": "Espace public / itinéraire documenté, sous réserve des conditions locales.",
        "season": "Toute l’année sous réserve météo, travaux et risque incendie.",
        "photoBonus": false,
        "expertBonus": "Privilégie l’observation et le terrain à l’écran.",
        "interaction": "text",
        "locationMode": "trail",
        "routeInstruction": "Termine au niveau de Paulilles.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel mot résume le passage du port vers une anse protégée ?",
            "answers": [
              "transition"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : transition."
          },
          "adulte": {
            "q": "En autonomie : Quel mot résume le passage du port vers une anse protégée ?",
            "answers": [
              "transition"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : transition."
          },
          "ado": {
            "q": "Quel mot résume le passage du port vers une anse protégée ?",
            "answers": [
              "transition"
            ],
            "interaction": "text",
            "hint": "Observe le lieu réel avant de répondre.",
            "hint2": "Réponse attendue : transition."
          }
        },
        "validationFocus": "Contrôler le repère et les conditions locales avant publication définitive.",
        "id": "pv-voie-verte-s04"
      }
    ],
    "teaser": "De Port-Vendres à Paulilles, une voie aménagée offre une mission courte où le paysage devient l’énigme.",
    "briefing": "De Port-Vendres à Paulilles, une voie aménagée offre une mission courte où le paysage devient l’énigme.",
    "objective": "Suivre la voie verte et lire les transitions entre port, côte, vignes et anse.",
    "ending": "Une petite distance peut contenir un grand changement de décor.",
    "territoryFragment": "TRANSITION",
    "cardTerrain": "Voie verte Port-Vendres → Paulilles",
    "cardTime": "30 min de marche officielle • ≈ 1 h 15–1 h 45 avec le jeu",
    "playerMetrics": [
      [
        "🥾",
        "1,3 km"
      ],
      [
        "↗",
        "+25 m / −63 m"
      ],
      [
        "⏱",
        "30 min marche"
      ]
    ],
    "storyBeats": [
      {
        "title": "Départ Port-Vendres",
        "text": "La voie verte relie Port-Vendres à Paulilles."
      },
      {
        "title": "Côte Vermeille",
        "text": "La fiche décrit un paysage entre mer et vignobles en terrasses."
      },
      {
        "title": "Piste aménagée",
        "text": "Le parcours suit une voie aménagée."
      },
      {
        "title": "Anse de Paulilles",
        "text": "L’arrivée se situe au site de Paulilles."
      }
    ],
    "playerStatus": "ready",
    "scenarioDisclaimer": "Scénario Explor’Action fictif ; faits et itinéraires issus des sources indiquées. Les conditions locales peuvent évoluer.",
    "finalPrompt": "Quel mot résume cette aventure ? Réponse : TRANSITION.",
    "clueCards": [
      {
        "unlockAt": 2,
        "title": "Carte 1 — Observe",
        "text": "Le terrain donne le premier indice."
      },
      {
        "unlockAt": 3,
        "title": "Carte 2 — Relie",
        "text": "Relie les repères déjà traversés."
      },
      {
        "unlockAt": 4,
        "title": "Carte 3 — Synthèse",
        "text": "Le fragment final est « TRANSITION »."
      }
    ],
    "developmentStatus": "ready-content-field-monitoring",
    "sourceCheckedAt": "2026-09-10",
    "fieldValidation": "monitoring-required",
    "officialBasis": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/voie-verte-port-vendres-paulilles-4/",
    "routeType": "Traversée pédestre",
    "expedition": false,
    "flatRoute": true,
    "safetyWarning": "",
    "route": {
      "level": "facile",
      "levelLabel": "Facile • Quasi plat",
      "distanceKm": 1.3,
      "distanceLabel": "1,3 km",
      "walkTime": "30 min",
      "gameTime": "≈ 1 h 15–1 h 45",
      "ascentM": 25,
      "descentM": 63,
      "altMaxM": null,
      "surface": "Voie verte de Port-Vendres vers Paulilles",
      "accessibility": "À confirmer sur place selon revêtement et accès ponctuels.",
      "metricsStatus": "official-route-field-monitoring",
      "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/voie-verte-port-vendres-paulilles-4/",
      "note": "Métriques de la fiche officielle. Faible dénivelé et format court.",
      "playerDistance": "1,3 km",
      "playerAscent": "+25 m / −63 m",
      "playerWalk": "30 min de marche officielle",
      "playerTerrain": "Voie verte et littoral",
      "playerNote": "Option courte à très faible dénivelé.",
      "routeType": "Traversée pédestre",
      "officialBasis": "Voie verte Port-Vendres → Paulilles"
    },
    "validationTier": "ready-application-test"
  },
  {
    "id": "co-fauve-plat",
    "territoryId": "collioure",
    "icon": "🎨",
    "title": "La Palette au Ras de l’Eau",
    "tag": "QUASI-PLAT • Fauvisme • Centre",
    "duration": "1 h 30 officielle • distance officielle erronée, non publiée",
    "difficulty": "Facile",
    "story": "Neuf reproductions jalonnent Collioure. L’enjeu n’est pas de réciter l’histoire de l’art, mais de comparer le paysage réel au regard des Fauves.",
    "final": "COULEUR",
    "steps": [
      {
        "name": "Panneau 1 — Collioure",
        "fact": "Le parcours officiel présente neuf œuvres dans les rues de Collioure.",
        "type": "numeric",
        "q": "Combien d’œuvres sont annoncées ?",
        "answers": [
          "9"
        ],
        "hint": "Observe le lieu réel avant de répondre.",
        "hint2": "Réponse attendue : 9.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/balade-les-chemins-du-fauvisme/",
        "gpsConfidence": "route-documented-no-false-geofence",
        "access": "Espace public / itinéraire documenté, sous réserve des conditions locales.",
        "season": "Toute l’année sous réserve météo, travaux et risque incendie.",
        "photoBonus": false,
        "expertBonus": "Privilégie l’observation et le terrain à l’écran.",
        "interaction": "numeric",
        "locationMode": "trail",
        "routeInstruction": "Commence au premier panneau.",
        "audience": {
          "enfant": {
            "q": "En famille : Combien d’œuvres sont annoncées ?",
            "answers": [
              "9"
            ],
            "interaction": "numeric",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : 9."
          },
          "adulte": {
            "q": "En autonomie : Combien d’œuvres sont annoncées ?",
            "answers": [
              "9"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : 9."
          },
          "ado": {
            "q": "Combien d’œuvres sont annoncées ?",
            "answers": [
              "9"
            ],
            "interaction": "numeric",
            "hint": "Observe le lieu réel avant de répondre.",
            "hint2": "Réponse attendue : 9."
          }
        },
        "validationFocus": "Contrôler le repère et les conditions locales avant publication définitive.",
        "id": "co-fauve-plat-s01"
      },
      {
        "name": "Le Faubourg",
        "fact": "Le panneau 2 est consacré au Faubourg de Collioure.",
        "type": "text",
        "q": "Quel quartier apparaît dans le titre du panneau 2 ?",
        "answers": [
          "faubourg"
        ],
        "hint": "Observe le lieu réel avant de répondre.",
        "hint2": "Réponse attendue : faubourg.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/balade-les-chemins-du-fauvisme/",
        "gpsConfidence": "route-documented-no-false-geofence",
        "access": "Espace public / itinéraire documenté, sous réserve des conditions locales.",
        "season": "Toute l’année sous réserve météo, travaux et risque incendie.",
        "photoBonus": false,
        "expertBonus": "Privilégie l’observation et le terrain à l’écran.",
        "interaction": "text",
        "locationMode": "trail",
        "routeInstruction": "Poursuis vers le Faubourg.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel quartier apparaît dans le titre du panneau 2 ?",
            "answers": [
              "faubourg"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : faubourg."
          },
          "adulte": {
            "q": "En autonomie : Quel quartier apparaît dans le titre du panneau 2 ?",
            "answers": [
              "faubourg"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : faubourg."
          },
          "ado": {
            "q": "Quel quartier apparaît dans le titre du panneau 2 ?",
            "answers": [
              "faubourg"
            ],
            "interaction": "text",
            "hint": "Observe le lieu réel avant de répondre.",
            "hint2": "Réponse attendue : faubourg."
          }
        },
        "validationFocus": "Contrôler le repère et les conditions locales avant publication définitive.",
        "id": "co-fauve-plat-s02"
      },
      {
        "name": "Barques",
        "fact": "Un panneau présente des barques à Collioure.",
        "type": "text",
        "q": "Quel élément maritime doit être comparé au paysage réel ?",
        "answers": [
          "barques"
        ],
        "hint": "Observe le lieu réel avant de répondre.",
        "hint2": "Réponse attendue : barques.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/balade-les-chemins-du-fauvisme/",
        "gpsConfidence": "route-documented-no-false-geofence",
        "access": "Espace public / itinéraire documenté, sous réserve des conditions locales.",
        "season": "Toute l’année sous réserve météo, travaux et risque incendie.",
        "photoBonus": false,
        "expertBonus": "Privilégie l’observation et le terrain à l’écran.",
        "interaction": "text",
        "locationMode": "trail",
        "routeInstruction": "Observe la baie avant de répondre.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel élément maritime doit être comparé au paysage réel ?",
            "answers": [
              "barques"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : barques."
          },
          "adulte": {
            "q": "En autonomie : Quel élément maritime doit être comparé au paysage réel ?",
            "answers": [
              "barques"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : barques."
          },
          "ado": {
            "q": "Quel élément maritime doit être comparé au paysage réel ?",
            "answers": [
              "barques"
            ],
            "interaction": "text",
            "hint": "Observe le lieu réel avant de répondre.",
            "hint2": "Réponse attendue : barques."
          }
        },
        "validationFocus": "Contrôler le repère et les conditions locales avant publication définitive.",
        "id": "co-fauve-plat-s03"
      },
      {
        "name": "Le Phare",
        "fact": "Le parcours inclut une œuvre de Derain consacrée au phare de Collioure.",
        "type": "text",
        "q": "Quel repère vertical est associé à cette œuvre ?",
        "answers": [
          "phare"
        ],
        "hint": "Observe le lieu réel avant de répondre.",
        "hint2": "Réponse attendue : phare.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/balade-les-chemins-du-fauvisme/",
        "gpsConfidence": "route-documented-no-false-geofence",
        "access": "Espace public / itinéraire documenté, sous réserve des conditions locales.",
        "season": "Toute l’année sous réserve météo, travaux et risque incendie.",
        "photoBonus": false,
        "expertBonus": "Privilégie l’observation et le terrain à l’écran.",
        "interaction": "text",
        "locationMode": "trail",
        "routeInstruction": "Suis les panneaux officiels.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel repère vertical est associé à cette œuvre ?",
            "answers": [
              "phare"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : phare."
          },
          "adulte": {
            "q": "En autonomie : Quel repère vertical est associé à cette œuvre ?",
            "answers": [
              "phare"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : phare."
          },
          "ado": {
            "q": "Quel repère vertical est associé à cette œuvre ?",
            "answers": [
              "phare"
            ],
            "interaction": "text",
            "hint": "Observe le lieu réel avant de répondre.",
            "hint2": "Réponse attendue : phare."
          }
        },
        "validationFocus": "Contrôler le repère et les conditions locales avant publication définitive.",
        "id": "co-fauve-plat-s04"
      },
      {
        "name": "Les toits",
        "fact": "Le panneau 8 concerne les toits de Collioure.",
        "type": "text",
        "q": "Regarde autour de toi : quel élément urbain est au centre du panneau 8 ?",
        "answers": [
          "toits"
        ],
        "hint": "Observe le lieu réel avant de répondre.",
        "hint2": "Réponse attendue : toits.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/balade-les-chemins-du-fauvisme/",
        "gpsConfidence": "route-documented-no-false-geofence",
        "access": "Espace public / itinéraire documenté, sous réserve des conditions locales.",
        "season": "Toute l’année sous réserve météo, travaux et risque incendie.",
        "photoBonus": false,
        "expertBonus": "Privilégie l’observation et le terrain à l’écran.",
        "interaction": "text",
        "locationMode": "trail",
        "routeInstruction": "Reste dans les ruelles accessibles.",
        "audience": {
          "enfant": {
            "q": "En famille : Regarde autour de toi : quel élément urbain est au centre du panneau 8 ?",
            "answers": [
              "toits"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : toits."
          },
          "adulte": {
            "q": "En autonomie : Regarde autour de toi : quel élément urbain est au centre du panneau 8 ?",
            "answers": [
              "toits"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : toits."
          },
          "ado": {
            "q": "Regarde autour de toi : quel élément urbain est au centre du panneau 8 ?",
            "answers": [
              "toits"
            ],
            "interaction": "text",
            "hint": "Observe le lieu réel avant de répondre.",
            "hint2": "Réponse attendue : toits."
          }
        },
        "validationFocus": "Contrôler le repère et les conditions locales avant publication définitive.",
        "id": "co-fauve-plat-s05"
      },
      {
        "name": "Synthèse Fauve",
        "fact": "Le parcours relie neuf regards artistiques au village réel.",
        "type": "text",
        "q": "Quel fragment final résume cette mission ?",
        "answers": [
          "couleur"
        ],
        "hint": "Observe le lieu réel avant de répondre.",
        "hint2": "Réponse attendue : couleur.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/balade-les-chemins-du-fauvisme/",
        "gpsConfidence": "route-documented-no-false-geofence",
        "access": "Espace public / itinéraire documenté, sous réserve des conditions locales.",
        "season": "Toute l’année sous réserve météo, travaux et risque incendie.",
        "photoBonus": false,
        "expertBonus": "Privilégie l’observation et le terrain à l’écran.",
        "interaction": "text",
        "locationMode": "trail",
        "routeInstruction": "Termine dans le centre.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel fragment final résume cette mission ?",
            "answers": [
              "couleur"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : couleur."
          },
          "adulte": {
            "q": "En autonomie : Quel fragment final résume cette mission ?",
            "answers": [
              "couleur"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : couleur."
          },
          "ado": {
            "q": "Quel fragment final résume cette mission ?",
            "answers": [
              "couleur"
            ],
            "interaction": "text",
            "hint": "Observe le lieu réel avant de répondre.",
            "hint2": "Réponse attendue : couleur."
          }
        },
        "validationFocus": "Contrôler le repère et les conditions locales avant publication définitive.",
        "id": "co-fauve-plat-s06"
      }
    ],
    "teaser": "Neuf reproductions jalonnent Collioure. L’enjeu n’est pas de réciter l’histoire de l’art, mais de comparer le paysage réel au regard des Fauves.",
    "briefing": "Neuf reproductions jalonnent Collioure. L’enjeu n’est pas de réciter l’histoire de l’art, mais de comparer le paysage réel au regard des Fauves.",
    "objective": "Suivre les panneaux du Fauvisme en restant dans le cœur bas de Collioure et observer les correspondances entre œuvres et paysage.",
    "ending": "Le paysage n’est pas seulement regardé : il est interprété.",
    "territoryFragment": "COULEUR",
    "cardTerrain": "Centre de Collioure • altitude max officielle 8 m",
    "cardTime": "1 h 30 officielle • distance officielle erronée, non publiée",
    "playerMetrics": [
      [
        "🥾",
        "Distance non fiable dans la fiche"
      ],
      [
        "↗",
        "+8 m / −9 m"
      ],
      [
        "⏱",
        "1 h 30"
      ]
    ],
    "storyBeats": [
      {
        "title": "Panneau 1 — Collioure",
        "text": "Le parcours officiel présente neuf œuvres dans les rues de Collioure."
      },
      {
        "title": "Le Faubourg",
        "text": "Le panneau 2 est consacré au Faubourg de Collioure."
      },
      {
        "title": "Barques",
        "text": "Un panneau présente des barques à Collioure."
      },
      {
        "title": "Le Phare",
        "text": "Le parcours inclut une œuvre de Derain consacrée au phare de Collioure."
      },
      {
        "title": "Les toits",
        "text": "Le panneau 8 concerne les toits de Collioure."
      },
      {
        "title": "Synthèse Fauve",
        "text": "Le parcours relie neuf regards artistiques au village réel."
      }
    ],
    "playerStatus": "ready",
    "scenarioDisclaimer": "Scénario Explor’Action fictif ; faits et itinéraires issus des sources indiquées. Les conditions locales peuvent évoluer.",
    "finalPrompt": "Quel mot résume cette aventure ? Réponse : COULEUR.",
    "clueCards": [
      {
        "unlockAt": 2,
        "title": "Carte 1 — Observe",
        "text": "Le terrain donne le premier indice."
      },
      {
        "unlockAt": 3,
        "title": "Carte 2 — Relie",
        "text": "Relie les repères déjà traversés."
      },
      {
        "unlockAt": 6,
        "title": "Carte 3 — Synthèse",
        "text": "Le fragment final est « COULEUR »."
      }
    ],
    "developmentStatus": "ready-content-field-monitoring",
    "sourceCheckedAt": "2026-09-10",
    "fieldValidation": "monitoring-required",
    "officialBasis": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/balade-les-chemins-du-fauvisme/",
    "routeType": "Traversée urbaine",
    "expedition": false,
    "flatRoute": true,
    "safetyWarning": "La fiche officielle affiche une distance manifestement erronée ; seule sa durée et son très faible dénivelé sont retenus.",
    "route": {
      "level": "facile",
      "levelLabel": "Facile • Quasi plat",
      "distanceKm": null,
      "distanceLabel": "Distance officielle non retenue",
      "walkTime": "1 h 30",
      "gameTime": "≈ 1 h 30–2 h 30",
      "ascentM": 8,
      "descentM": 9,
      "altMaxM": 8,
      "surface": "Centre ancien et front de mer de Collioure",
      "accessibility": "Centre urbain ; accessibilité détaillée à confirmer sur place.",
      "metricsStatus": "official-duration-elevation-distance-anomaly",
      "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/balade-les-chemins-du-fauvisme/",
      "note": "La fiche officielle affiche une distance manifestement erronée ; elle n’est pas reprise. Durée et très faible dénivelé conservés.",
      "playerDistance": "Distance officielle non fiable",
      "playerAscent": "+8 m / −9 m",
      "playerWalk": "1 h 30 officielle",
      "playerTerrain": "Centre historique et front de mer",
      "playerNote": "Parcours très faible dénivelé ; distance non affichée tant qu’elle n’est pas fiabilisée.",
      "routeType": "Traversée urbaine",
      "officialBasis": "Les Chemins du Fauvisme"
    },
    "validationTier": "ready-application-test"
  },
  {
    "id": "co-expedition-forts",
    "territoryId": "collioure",
    "icon": "🏔️",
    "title": "Expédition spéciale — Les Hauts des Forts",
    "tag": "EXPÉDITION • Forts • Madeloc • Endurance",
    "duration": "8 h 30 de marche officielle • ≈ 10 h–13 h avec le jeu",
    "difficulty": "Difficile",
    "story": "Une grande boucle rassemble Collioure, forts, Madeloc, batteries, ermitage et panoramas. C’est la mission d’endurance du territoire.",
    "final": "CHAÎNE",
    "steps": [
      {
        "name": "Château Royal",
        "fact": "Le grand parcours cite le Château Royal parmi ses repères patrimoniaux.",
        "type": "text",
        "q": "Quel monument ouvre symboliquement la chaîne défensive ?",
        "answers": [
          "chateau royal"
        ],
        "hint": "Observe le lieu réel avant de répondre.",
        "hint2": "Réponse attendue : chateau royal.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/hauts-des-forts-le-grand-parcours/",
        "gpsConfidence": "route-documented-no-false-geofence",
        "access": "Espace public / itinéraire documenté, sous réserve des conditions locales.",
        "season": "Toute l’année sous réserve météo, travaux et risque incendie.",
        "photoBonus": false,
        "expertBonus": "Privilégie l’observation et le terrain à l’écran.",
        "interaction": "text",
        "locationMode": "trail",
        "routeInstruction": "Suis le tracé officiel.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel monument ouvre symboliquement la chaîne défensive ?",
            "answers": [
              "chateau royal"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : chateau royal."
          },
          "adulte": {
            "q": "En autonomie : Quel monument ouvre symboliquement la chaîne défensive ?",
            "answers": [
              "chateau royal"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : chateau royal."
          },
          "ado": {
            "q": "Quel monument ouvre symboliquement la chaîne défensive ?",
            "answers": [
              "chateau royal"
            ],
            "interaction": "text",
            "hint": "Observe le lieu réel avant de répondre.",
            "hint2": "Réponse attendue : chateau royal."
          }
        },
        "validationFocus": "Contrôler le repère et les conditions locales avant publication définitive.",
        "id": "co-expedition-forts-s01"
      },
      {
        "name": "Fort Dugommier",
        "fact": "Le Fort Dugommier fait partie des repères du grand parcours.",
        "type": "text",
        "q": "Quel mot commun relie Dugommier, Miradou et les batteries ?",
        "answers": [
          "defense"
        ],
        "hint": "Observe le lieu réel avant de répondre.",
        "hint2": "Réponse attendue : defense.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/hauts-des-forts-le-grand-parcours/",
        "gpsConfidence": "route-documented-no-false-geofence",
        "access": "Espace public / itinéraire documenté, sous réserve des conditions locales.",
        "season": "Toute l’année sous réserve météo, travaux et risque incendie.",
        "photoBonus": false,
        "expertBonus": "Privilégie l’observation et le terrain à l’écran.",
        "interaction": "text",
        "locationMode": "trail",
        "routeInstruction": "Reste sur les sentiers balisés.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel mot commun relie Dugommier, Miradou et les batteries ?",
            "answers": [
              "defense"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : defense."
          },
          "adulte": {
            "q": "En autonomie : Quel mot commun relie Dugommier, Miradou et les batteries ?",
            "answers": [
              "defense"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : defense."
          },
          "ado": {
            "q": "Quel mot commun relie Dugommier, Miradou et les batteries ?",
            "answers": [
              "defense"
            ],
            "interaction": "text",
            "hint": "Observe le lieu réel avant de répondre.",
            "hint2": "Réponse attendue : defense."
          }
        },
        "validationFocus": "Contrôler le repère et les conditions locales avant publication définitive.",
        "id": "co-expedition-forts-s02"
      },
      {
        "name": "Tour de la Madeloc",
        "fact": "La Tour de la Madeloc est un point majeur du parcours.",
        "type": "text",
        "q": "Quel type de tour domine le massif ?",
        "answers": [
          "tour a signaux"
        ],
        "hint": "Observe le lieu réel avant de répondre.",
        "hint2": "Réponse attendue : tour a signaux.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/hauts-des-forts-le-grand-parcours/",
        "gpsConfidence": "route-documented-no-false-geofence",
        "access": "Espace public / itinéraire documenté, sous réserve des conditions locales.",
        "season": "Toute l’année sous réserve météo, travaux et risque incendie.",
        "photoBonus": false,
        "expertBonus": "Privilégie l’observation et le terrain à l’écran.",
        "interaction": "text",
        "locationMode": "trail",
        "routeInstruction": "Évite l’ascension par vent fort.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel type de tour domine le massif ?",
            "answers": [
              "tour a signaux"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : tour a signaux."
          },
          "adulte": {
            "q": "En autonomie : Quel type de tour domine le massif ?",
            "answers": [
              "tour a signaux"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : tour a signaux."
          },
          "ado": {
            "q": "Quel type de tour domine le massif ?",
            "answers": [
              "tour a signaux"
            ],
            "interaction": "text",
            "hint": "Observe le lieu réel avant de répondre.",
            "hint2": "Réponse attendue : tour a signaux."
          }
        },
        "validationFocus": "Contrôler le repère et les conditions locales avant publication définitive.",
        "id": "co-expedition-forts-s03"
      },
      {
        "name": "Batterie 500",
        "fact": "La Batterie 500 apparaît dans la liste des points du parcours.",
        "type": "numeric",
        "q": "Quel nombre complète le nom de cette batterie ?",
        "answers": [
          "500"
        ],
        "hint": "Observe le lieu réel avant de répondre.",
        "hint2": "Réponse attendue : 500.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/hauts-des-forts-le-grand-parcours/",
        "gpsConfidence": "route-documented-no-false-geofence",
        "access": "Espace public / itinéraire documenté, sous réserve des conditions locales.",
        "season": "Toute l’année sous réserve météo, travaux et risque incendie.",
        "photoBonus": false,
        "expertBonus": "Privilégie l’observation et le terrain à l’écran.",
        "interaction": "numeric",
        "locationMode": "trail",
        "routeInstruction": "Suis le balisage.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel nombre complète le nom de cette batterie ?",
            "answers": [
              "500"
            ],
            "interaction": "numeric",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : 500."
          },
          "adulte": {
            "q": "En autonomie : Quel nombre complète le nom de cette batterie ?",
            "answers": [
              "500"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : 500."
          },
          "ado": {
            "q": "Quel nombre complète le nom de cette batterie ?",
            "answers": [
              "500"
            ],
            "interaction": "numeric",
            "hint": "Observe le lieu réel avant de répondre.",
            "hint2": "Réponse attendue : 500."
          }
        },
        "validationFocus": "Contrôler le repère et les conditions locales avant publication définitive.",
        "id": "co-expedition-forts-s04"
      },
      {
        "name": "Notre-Dame de Consolation",
        "fact": "L’ermitage de Consolation apporte une dimension spirituelle au parcours.",
        "type": "choice",
        "q": "Quel type de lieu est Notre-Dame de Consolation ?",
        "answers": [
          "ermitage"
        ],
        "hint": "Observe le lieu réel avant de répondre.",
        "hint2": "Réponse attendue : ermitage.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/hauts-des-forts-le-grand-parcours/",
        "gpsConfidence": "route-documented-no-false-geofence",
        "access": "Espace public / itinéraire documenté, sous réserve des conditions locales.",
        "season": "Toute l’année sous réserve météo, travaux et risque incendie.",
        "photoBonus": false,
        "expertBonus": "Privilégie l’observation et le terrain à l’écran.",
        "interaction": "choice",
        "locationMode": "trail",
        "routeInstruction": "Respecte le lieu.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel type de lieu est Notre-Dame de Consolation ?",
            "answers": [
              "ermitage"
            ],
            "interaction": "choice",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : ermitage.",
            "choices": [
              "Ermitage",
              "Gare",
              "Port"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quel type de lieu est Notre-Dame de Consolation ?",
            "answers": [
              "ermitage"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : ermitage.",
            "choices": [
              "Ermitage",
              "Gare",
              "Port"
            ]
          },
          "ado": {
            "q": "Quel type de lieu est Notre-Dame de Consolation ?",
            "answers": [
              "ermitage"
            ],
            "choices": [
              "Ermitage",
              "Gare",
              "Port"
            ],
            "interaction": "choice",
            "hint": "Observe le lieu réel avant de répondre.",
            "hint2": "Réponse attendue : ermitage."
          }
        },
        "validationFocus": "Contrôler le repère et les conditions locales avant publication définitive.",
        "choices": [
          "Ermitage",
          "Gare",
          "Port"
        ],
        "id": "co-expedition-forts-s05"
      },
      {
        "name": "Fort Miradou",
        "fact": "Le retour croise le Fort Miradou et les ruelles de Collioure.",
        "type": "text",
        "q": "Quel mot final relie tous les ouvrages observés ?",
        "answers": [
          "chaine"
        ],
        "hint": "Observe le lieu réel avant de répondre.",
        "hint2": "Réponse attendue : chaine.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/hauts-des-forts-le-grand-parcours/",
        "gpsConfidence": "route-documented-no-false-geofence",
        "access": "Espace public / itinéraire documenté, sous réserve des conditions locales.",
        "season": "Toute l’année sous réserve météo, travaux et risque incendie.",
        "photoBonus": false,
        "expertBonus": "Privilégie l’observation et le terrain à l’écran.",
        "interaction": "text",
        "locationMode": "trail",
        "routeInstruction": "Reviens vers le centre de Collioure.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel mot final relie tous les ouvrages observés ?",
            "answers": [
              "chaine"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : chaine."
          },
          "adulte": {
            "q": "En autonomie : Quel mot final relie tous les ouvrages observés ?",
            "answers": [
              "chaine"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : chaine."
          },
          "ado": {
            "q": "Quel mot final relie tous les ouvrages observés ?",
            "answers": [
              "chaine"
            ],
            "interaction": "text",
            "hint": "Observe le lieu réel avant de répondre.",
            "hint2": "Réponse attendue : chaine."
          }
        },
        "validationFocus": "Contrôler le repère et les conditions locales avant publication définitive.",
        "id": "co-expedition-forts-s06"
      }
    ],
    "teaser": "Une grande boucle rassemble Collioure, forts, Madeloc, batteries, ermitage et panoramas. C’est la mission d’endurance du territoire.",
    "briefing": "Une grande boucle rassemble Collioure, forts, Madeloc, batteries, ermitage et panoramas. C’est la mission d’endurance du territoire.",
    "objective": "Boucler un parcours long en reliant systèmes défensifs, relief et patrimoine sans sacrifier la sécurité.",
    "ending": "Les forts forment une chaîne : pour la lire, il faut prendre de la hauteur et du temps.",
    "territoryFragment": "CHAÎNE",
    "cardTerrain": "Hauts de Collioure • Madeloc • forts",
    "cardTime": "8 h 30 de marche officielle • ≈ 10 h–13 h avec le jeu",
    "playerMetrics": [
      [
        "🥾",
        "21,9 km"
      ],
      [
        "↗",
        "+1175 m / −1175 m"
      ],
      [
        "⏱",
        "8 h 30 marche"
      ]
    ],
    "storyBeats": [
      {
        "title": "Château Royal",
        "text": "Le grand parcours cite le Château Royal parmi ses repères patrimoniaux."
      },
      {
        "title": "Fort Dugommier",
        "text": "Le Fort Dugommier fait partie des repères du grand parcours."
      },
      {
        "title": "Tour de la Madeloc",
        "text": "La Tour de la Madeloc est un point majeur du parcours."
      },
      {
        "title": "Batterie 500",
        "text": "La Batterie 500 apparaît dans la liste des points du parcours."
      },
      {
        "title": "Notre-Dame de Consolation",
        "text": "L’ermitage de Consolation apporte une dimension spirituelle au parcours."
      },
      {
        "title": "Fort Miradou",
        "text": "Le retour croise le Fort Miradou et les ruelles de Collioure."
      }
    ],
    "playerStatus": "ready",
    "scenarioDisclaimer": "Scénario Explor’Action fictif ; faits et itinéraires issus des sources indiquées. Les conditions locales peuvent évoluer.",
    "finalPrompt": "Quel mot résume cette aventure ? Réponse : CHAÎNE.",
    "clueCards": [
      {
        "unlockAt": 2,
        "title": "Carte 1 — Observe",
        "text": "Le terrain donne le premier indice."
      },
      {
        "unlockAt": 3,
        "title": "Carte 2 — Relie",
        "text": "Relie les repères déjà traversés."
      },
      {
        "unlockAt": 6,
        "title": "Carte 3 — Synthèse",
        "text": "Le fragment final est « CHAÎNE »."
      }
    ],
    "developmentStatus": "ready-content-field-monitoring",
    "sourceCheckedAt": "2026-09-10",
    "fieldValidation": "monitoring-required",
    "officialBasis": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/hauts-des-forts-le-grand-parcours/",
    "routeType": "Boucle difficile",
    "expedition": true,
    "flatRoute": false,
    "safetyWarning": "Très longue sortie. Départ matinal obligatoire, eau, météo, vent, risque incendie et batterie à contrôler.",
    "route": {
      "level": "difficile",
      "levelLabel": "Difficile • Expédition",
      "distanceKm": 21.9,
      "distanceLabel": "21,9 km",
      "walkTime": "8 h 30",
      "gameTime": "≈ 10 h–13 h",
      "ascentM": 1175,
      "descentM": 1175,
      "altMaxM": null,
      "surface": "Crêtes, forts et sentiers de montagne autour de Collioure",
      "accessibility": "Non adaptée PMR/poussette ; très longue sortie.",
      "metricsStatus": "official-route-field-monitoring",
      "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/hauts-des-forts-le-grand-parcours/",
      "note": "Très longue expédition. Départ matinal, eau, météo, vent, risque incendie et batterie à contrôler.",
      "playerDistance": "21,9 km",
      "playerAscent": "+1175 m / −1175 m",
      "playerWalk": "8 h 30 de marche officielle",
      "playerTerrain": "Hauts de Collioure, Madeloc et fortifications",
      "playerNote": "Expédition de journée entière, réservée aux pratiquants préparés.",
      "routeType": "Boucle difficile",
      "officialBasis": "Hauts des forts — grand parcours"
    },
    "validationTier": "ready-application-test"
  },
  {
    "id": "ar-front-mer-plat",
    "territoryId": "argeles",
    "icon": "🚶",
    "title": "La Grande Ligne Bleue",
    "tag": "QUASI-PLAT • Port • Plage • Famille",
    "duration": "2 h de marche officielle • ≈ 2 h 30–3 h 15 avec le jeu",
    "difficulty": "Facile",
    "story": "Entre port et plage, le terrain est presque horizontal. Le défi devient alors l’observation : bateaux, barques catalanes, passerelle, exposition et esplanade.",
    "final": "DÉTAIL",
    "steps": [
      {
        "name": "Port de plaisance",
        "fact": "Le parcours commence au parking du port puis longe les quais.",
        "type": "text",
        "q": "Quel milieu ouvre cette promenade ?",
        "answers": [
          "port"
        ],
        "hint": "Observe le lieu réel avant de répondre.",
        "hint2": "Réponse attendue : port.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/balade-promenade-du-front-de-mer/",
        "gpsConfidence": "route-documented-no-false-geofence",
        "access": "Espace public / itinéraire documenté, sous réserve des conditions locales.",
        "season": "Toute l’année sous réserve météo, travaux et risque incendie.",
        "photoBonus": false,
        "expertBonus": "Privilégie l’observation et le terrain à l’écran.",
        "interaction": "text",
        "locationMode": "trail",
        "routeInstruction": "Rejoins les quais par la rampe ou les escaliers.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel milieu ouvre cette promenade ?",
            "answers": [
              "port"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : port."
          },
          "adulte": {
            "q": "En autonomie : Quel milieu ouvre cette promenade ?",
            "answers": [
              "port"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : port."
          },
          "ado": {
            "q": "Quel milieu ouvre cette promenade ?",
            "answers": [
              "port"
            ],
            "interaction": "text",
            "hint": "Observe le lieu réel avant de répondre.",
            "hint2": "Réponse attendue : port."
          }
        },
        "validationFocus": "Contrôler le repère et les conditions locales avant publication définitive.",
        "id": "ar-front-mer-plat-s01"
      },
      {
        "name": "Barques catalanes",
        "fact": "La fiche invite à remarquer les barques catalanes parmi les bateaux.",
        "type": "text",
        "q": "Quel type de barque est explicitement cité ?",
        "answers": [
          "barque catalane"
        ],
        "hint": "Observe le lieu réel avant de répondre.",
        "hint2": "Réponse attendue : barque catalane.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/balade-promenade-du-front-de-mer/",
        "gpsConfidence": "route-documented-no-false-geofence",
        "access": "Espace public / itinéraire documenté, sous réserve des conditions locales.",
        "season": "Toute l’année sous réserve météo, travaux et risque incendie.",
        "photoBonus": false,
        "expertBonus": "Privilégie l’observation et le terrain à l’écran.",
        "interaction": "text",
        "locationMode": "trail",
        "routeInstruction": "Observe les bateaux sans entrer dans les zones techniques.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel type de barque est explicitement cité ?",
            "answers": [
              "barque catalane"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : barque catalane."
          },
          "adulte": {
            "q": "En autonomie : Quel type de barque est explicitement cité ?",
            "answers": [
              "barque catalane"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : barque catalane."
          },
          "ado": {
            "q": "Quel type de barque est explicitement cité ?",
            "answers": [
              "barque catalane"
            ],
            "interaction": "text",
            "hint": "Observe le lieu réel avant de répondre.",
            "hint2": "Réponse attendue : barque catalane."
          }
        },
        "validationFocus": "Contrôler le repère et les conditions locales avant publication définitive.",
        "id": "ar-front-mer-plat-s02"
      },
      {
        "name": "Esplanade Charles Trenet",
        "fact": "Le parcours rejoint l’esplanade Charles Trenet.",
        "type": "text",
        "q": "Quel nom de famille porte l’esplanade ?",
        "answers": [
          "trenet"
        ],
        "hint": "Observe le lieu réel avant de répondre.",
        "hint2": "Réponse attendue : trenet.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/balade-promenade-du-front-de-mer/",
        "gpsConfidence": "route-documented-no-false-geofence",
        "access": "Espace public / itinéraire documenté, sous réserve des conditions locales.",
        "season": "Toute l’année sous réserve météo, travaux et risque incendie.",
        "photoBonus": false,
        "expertBonus": "Privilégie l’observation et le terrain à l’écran.",
        "interaction": "text",
        "locationMode": "trail",
        "routeInstruction": "Continue sur la promenade.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel nom de famille porte l’esplanade ?",
            "answers": [
              "trenet"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : trenet."
          },
          "adulte": {
            "q": "En autonomie : Quel nom de famille porte l’esplanade ?",
            "answers": [
              "trenet"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : trenet."
          },
          "ado": {
            "q": "Quel nom de famille porte l’esplanade ?",
            "answers": [
              "trenet"
            ],
            "interaction": "text",
            "hint": "Observe le lieu réel avant de répondre.",
            "hint2": "Réponse attendue : trenet."
          }
        },
        "validationFocus": "Contrôler le repère et les conditions locales avant publication définitive.",
        "id": "ar-front-mer-plat-s03"
      },
      {
        "name": "Argelès Photo Nature",
        "fact": "La promenade permet de découvrir l’exposition Argelès Photo Nature.",
        "type": "choice",
        "q": "Quel médium est au cœur de cette exposition ?",
        "answers": [
          "photo"
        ],
        "hint": "Observe le lieu réel avant de répondre.",
        "hint2": "Réponse attendue : photo.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/balade-promenade-du-front-de-mer/",
        "gpsConfidence": "route-documented-no-false-geofence",
        "access": "Espace public / itinéraire documenté, sous réserve des conditions locales.",
        "season": "Toute l’année sous réserve météo, travaux et risque incendie.",
        "photoBonus": false,
        "expertBonus": "Privilégie l’observation et le terrain à l’écran.",
        "interaction": "choice",
        "locationMode": "trail",
        "routeInstruction": "Observe les panneaux présents.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel médium est au cœur de cette exposition ?",
            "answers": [
              "photo"
            ],
            "interaction": "choice",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : photo.",
            "choices": [
              "Photo",
              "Sculpture sur glace",
              "Cinéma"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quel médium est au cœur de cette exposition ?",
            "answers": [
              "photo"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : photo.",
            "choices": [
              "Photo",
              "Sculpture sur glace",
              "Cinéma"
            ]
          },
          "ado": {
            "q": "Quel médium est au cœur de cette exposition ?",
            "answers": [
              "photo"
            ],
            "choices": [
              "Photo",
              "Sculpture sur glace",
              "Cinéma"
            ],
            "interaction": "choice",
            "hint": "Observe le lieu réel avant de répondre.",
            "hint2": "Réponse attendue : photo."
          }
        },
        "validationFocus": "Contrôler le repère et les conditions locales avant publication définitive.",
        "choices": [
          "Photo",
          "Sculpture sur glace",
          "Cinéma"
        ],
        "id": "ar-front-mer-plat-s04"
      },
      {
        "name": "Pins et plage",
        "fact": "Le parcours peut se prolonger sous les pins, mais le sable complique l’accessibilité.",
        "type": "text",
        "q": "Quel élément peut rendre le prolongement plus difficile ?",
        "answers": [
          "sable"
        ],
        "hint": "Observe le lieu réel avant de répondre.",
        "hint2": "Réponse attendue : sable.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/balade-promenade-du-front-de-mer/",
        "gpsConfidence": "route-documented-no-false-geofence",
        "access": "Espace public / itinéraire documenté, sous réserve des conditions locales.",
        "season": "Toute l’année sous réserve météo, travaux et risque incendie.",
        "photoBonus": false,
        "expertBonus": "Privilégie l’observation et le terrain à l’écran.",
        "interaction": "text",
        "locationMode": "trail",
        "routeInstruction": "Adapte le demi-tour au public.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel élément peut rendre le prolongement plus difficile ?",
            "answers": [
              "sable"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : sable."
          },
          "adulte": {
            "q": "En autonomie : Quel élément peut rendre le prolongement plus difficile ?",
            "answers": [
              "sable"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : sable."
          },
          "ado": {
            "q": "Quel élément peut rendre le prolongement plus difficile ?",
            "answers": [
              "sable"
            ],
            "interaction": "text",
            "hint": "Observe le lieu réel avant de répondre.",
            "hint2": "Réponse attendue : sable."
          }
        },
        "validationFocus": "Contrôler le repère et les conditions locales avant publication définitive.",
        "id": "ar-front-mer-plat-s05"
      },
      {
        "name": "Retour",
        "fact": "Le retour reprend le même axe en respectant les zones vélos/piétons.",
        "type": "text",
        "q": "Quel fragment final rappelle que le jeu se gagne ici par l’observation ?",
        "answers": [
          "detail"
        ],
        "hint": "Observe le lieu réel avant de répondre.",
        "hint2": "Réponse attendue : detail.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/balade-promenade-du-front-de-mer/",
        "gpsConfidence": "route-documented-no-false-geofence",
        "access": "Espace public / itinéraire documenté, sous réserve des conditions locales.",
        "season": "Toute l’année sous réserve météo, travaux et risque incendie.",
        "photoBonus": false,
        "expertBonus": "Privilégie l’observation et le terrain à l’écran.",
        "interaction": "text",
        "locationMode": "trail",
        "routeInstruction": "Reviens au port.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel fragment final rappelle que le jeu se gagne ici par l’observation ?",
            "answers": [
              "detail"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : detail."
          },
          "adulte": {
            "q": "En autonomie : Quel fragment final rappelle que le jeu se gagne ici par l’observation ?",
            "answers": [
              "detail"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : detail."
          },
          "ado": {
            "q": "Quel fragment final rappelle que le jeu se gagne ici par l’observation ?",
            "answers": [
              "detail"
            ],
            "interaction": "text",
            "hint": "Observe le lieu réel avant de répondre.",
            "hint2": "Réponse attendue : detail."
          }
        },
        "validationFocus": "Contrôler le repère et les conditions locales avant publication définitive.",
        "id": "ar-front-mer-plat-s06"
      }
    ],
    "teaser": "Entre port et plage, le terrain est presque horizontal. Le défi devient alors l’observation : bateaux, barques catalanes, passerelle, exposition et esplanade.",
    "briefing": "Entre port et plage, le terrain est presque horizontal. Le défi devient alors l’observation : bateaux, barques catalanes, passerelle, exposition et esplanade.",
    "objective": "Créer une vraie aventure familiale à faible dénivelé qui mise sur l’observation plutôt que l’effort.",
    "ending": "Quand le relief disparaît, les détails deviennent le terrain.",
    "territoryFragment": "DÉTAIL",
    "cardTerrain": "Port et front de mer",
    "cardTime": "2 h de marche officielle • ≈ 2 h 30–3 h 15 avec le jeu",
    "playerMetrics": [
      [
        "🥾",
        "5,1 km"
      ],
      [
        "↗",
        "+24 m / −24 m"
      ],
      [
        "⏱",
        "2 h marche"
      ]
    ],
    "storyBeats": [
      {
        "title": "Port de plaisance",
        "text": "Le parcours commence au parking du port puis longe les quais."
      },
      {
        "title": "Barques catalanes",
        "text": "La fiche invite à remarquer les barques catalanes parmi les bateaux."
      },
      {
        "title": "Esplanade Charles Trenet",
        "text": "Le parcours rejoint l’esplanade Charles Trenet."
      },
      {
        "title": "Argelès Photo Nature",
        "text": "La promenade permet de découvrir l’exposition Argelès Photo Nature."
      },
      {
        "title": "Pins et plage",
        "text": "Le parcours peut se prolonger sous les pins, mais le sable complique l’accessibilité."
      },
      {
        "title": "Retour",
        "text": "Le retour reprend le même axe en respectant les zones vélos/piétons."
      }
    ],
    "playerStatus": "ready",
    "scenarioDisclaimer": "Scénario Explor’Action fictif ; faits et itinéraires issus des sources indiquées. Les conditions locales peuvent évoluer.",
    "finalPrompt": "Quel mot résume cette aventure ? Réponse : DÉTAIL.",
    "clueCards": [
      {
        "unlockAt": 2,
        "title": "Carte 1 — Observe",
        "text": "Le terrain donne le premier indice."
      },
      {
        "unlockAt": 3,
        "title": "Carte 2 — Relie",
        "text": "Relie les repères déjà traversés."
      },
      {
        "unlockAt": 6,
        "title": "Carte 3 — Synthèse",
        "text": "Le fragment final est « DÉTAIL »."
      }
    ],
    "developmentStatus": "ready-content-field-monitoring",
    "sourceCheckedAt": "2026-09-10",
    "fieldValidation": "monitoring-required",
    "officialBasis": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/balade-promenade-du-front-de-mer/",
    "routeType": "Aller-retour très facile",
    "expedition": false,
    "flatRoute": true,
    "safetyWarning": "",
    "route": {
      "level": "facile",
      "levelLabel": "Facile • Quasi plat",
      "distanceKm": 5.1,
      "distanceLabel": "5,1 km",
      "walkTime": "2 h",
      "gameTime": "≈ 2 h 30–3 h 15",
      "ascentM": 24,
      "descentM": 24,
      "altMaxM": null,
      "surface": "Port, promenade et front de mer",
      "accessibility": "Itinéraire très peu pentu ; détails d’accessibilité à confirmer sur place.",
      "metricsStatus": "official-route-field-monitoring",
      "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/balade-promenade-du-front-de-mer/",
      "note": "Métriques issues de la fiche officielle.",
      "playerDistance": "5,1 km",
      "playerAscent": "+24 m / −24 m",
      "playerWalk": "2 h de marche officielle",
      "playerTerrain": "Port, plage et promenade",
      "playerNote": "Option familiale à très faible dénivelé.",
      "routeType": "Aller-retour très facile",
      "officialBasis": "Promenade du front de mer"
    },
    "validationTier": "ready-application-test"
  },
  {
    "id": "ar-expedition-massane",
    "territoryId": "argeles",
    "icon": "⛰️",
    "title": "Expédition spéciale — Massane 19",
    "tag": "EXPÉDITION • Trail • Massane • Dolmens",
    "duration": "4 h de trail officiel • ≈ 8 h–11 h en randonnée-jeu",
    "difficulty": "Difficile",
    "story": "Le tracé du Massane Trail est explicitement présenté comme praticable en randonnée pédestre. Explor’Action le transforme en expédition longue, sans rechercher la vitesse.",
    "final": "ENDURANCE",
    "steps": [
      {
        "name": "Parc de Valmy",
        "fact": "Le Massane Trail part du Château de Valmy.",
        "type": "text",
        "q": "Quel lieu sert de base de départ ?",
        "answers": [
          "valmy"
        ],
        "hint": "Observe le lieu réel avant de répondre.",
        "hint2": "Réponse attendue : valmy.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/argeles-nature-trail-massane-trail/",
        "gpsConfidence": "route-documented-no-false-geofence",
        "access": "Espace public / itinéraire documenté, sous réserve des conditions locales.",
        "season": "Toute l’année sous réserve météo, travaux et risque incendie.",
        "photoBonus": false,
        "expertBonus": "Privilégie l’observation et le terrain à l’écran.",
        "interaction": "text",
        "locationMode": "trail",
        "routeInstruction": "Vérifie l’ouverture et les conditions du parc.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel lieu sert de base de départ ?",
            "answers": [
              "valmy"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : valmy."
          },
          "adulte": {
            "q": "En autonomie : Quel lieu sert de base de départ ?",
            "answers": [
              "valmy"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : valmy."
          },
          "ado": {
            "q": "Quel lieu sert de base de départ ?",
            "answers": [
              "valmy"
            ],
            "interaction": "text",
            "hint": "Observe le lieu réel avant de répondre.",
            "hint2": "Réponse attendue : valmy."
          }
        },
        "validationFocus": "Contrôler le repère et les conditions locales avant publication définitive.",
        "id": "ar-expedition-massane-s01"
      },
      {
        "name": "Chapelle Saint-Laurent",
        "fact": "La chapelle Saint-Laurent figure parmi les sites traversés.",
        "type": "text",
        "q": "Quel type de patrimoine rencontres-tu ici ?",
        "answers": [
          "chapelle"
        ],
        "hint": "Observe le lieu réel avant de répondre.",
        "hint2": "Réponse attendue : chapelle.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/argeles-nature-trail-massane-trail/",
        "gpsConfidence": "route-documented-no-false-geofence",
        "access": "Espace public / itinéraire documenté, sous réserve des conditions locales.",
        "season": "Toute l’année sous réserve météo, travaux et risque incendie.",
        "photoBonus": false,
        "expertBonus": "Privilégie l’observation et le terrain à l’écran.",
        "interaction": "text",
        "locationMode": "trail",
        "routeInstruction": "Suis le tracé officiel.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel type de patrimoine rencontres-tu ici ?",
            "answers": [
              "chapelle"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : chapelle."
          },
          "adulte": {
            "q": "En autonomie : Quel type de patrimoine rencontres-tu ici ?",
            "answers": [
              "chapelle"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : chapelle."
          },
          "ado": {
            "q": "Quel type de patrimoine rencontres-tu ici ?",
            "answers": [
              "chapelle"
            ],
            "interaction": "text",
            "hint": "Observe le lieu réel avant de répondre.",
            "hint2": "Réponse attendue : chapelle."
          }
        },
        "validationFocus": "Contrôler le repère et les conditions locales avant publication définitive.",
        "id": "ar-expedition-massane-s02"
      },
      {
        "name": "Tour de la Massane",
        "fact": "La tour de la Massane est le grand repère sommital du parcours.",
        "type": "text",
        "q": "Quel monument donne son nom à l’expédition ?",
        "answers": [
          "massane"
        ],
        "hint": "Observe le lieu réel avant de répondre.",
        "hint2": "Réponse attendue : massane.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/argeles-nature-trail-massane-trail/",
        "gpsConfidence": "route-documented-no-false-geofence",
        "access": "Espace public / itinéraire documenté, sous réserve des conditions locales.",
        "season": "Toute l’année sous réserve météo, travaux et risque incendie.",
        "photoBonus": false,
        "expertBonus": "Privilégie l’observation et le terrain à l’écran.",
        "interaction": "text",
        "locationMode": "trail",
        "routeInstruction": "Reste sur le sentier balisé.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel monument donne son nom à l’expédition ?",
            "answers": [
              "massane"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : massane."
          },
          "adulte": {
            "q": "En autonomie : Quel monument donne son nom à l’expédition ?",
            "answers": [
              "massane"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : massane."
          },
          "ado": {
            "q": "Quel monument donne son nom à l’expédition ?",
            "answers": [
              "massane"
            ],
            "interaction": "text",
            "hint": "Observe le lieu réel avant de répondre.",
            "hint2": "Réponse attendue : massane."
          }
        },
        "validationFocus": "Contrôler le repère et les conditions locales avant publication définitive.",
        "id": "ar-expedition-massane-s03"
      },
      {
        "name": "Col de la Place d’Armes",
        "fact": "Le parcours passe par le col de la Place d’Armes.",
        "type": "choice",
        "q": "Quel type de relief est la Place d’Armes ?",
        "answers": [
          "col"
        ],
        "hint": "Observe le lieu réel avant de répondre.",
        "hint2": "Réponse attendue : col.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/argeles-nature-trail-massane-trail/",
        "gpsConfidence": "route-documented-no-false-geofence",
        "access": "Espace public / itinéraire documenté, sous réserve des conditions locales.",
        "season": "Toute l’année sous réserve météo, travaux et risque incendie.",
        "photoBonus": false,
        "expertBonus": "Privilégie l’observation et le terrain à l’écran.",
        "interaction": "choice",
        "locationMode": "trail",
        "routeInstruction": "Poursuis selon le GPX officiel.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel type de relief est la Place d’Armes ?",
            "answers": [
              "col"
            ],
            "interaction": "choice",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : col.",
            "choices": [
              "Col",
              "Plage",
              "Port"
            ]
          },
          "adulte": {
            "q": "En autonomie : Quel type de relief est la Place d’Armes ?",
            "answers": [
              "col"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : col.",
            "choices": [
              "Col",
              "Plage",
              "Port"
            ]
          },
          "ado": {
            "q": "Quel type de relief est la Place d’Armes ?",
            "answers": [
              "col"
            ],
            "choices": [
              "Col",
              "Plage",
              "Port"
            ],
            "interaction": "choice",
            "hint": "Observe le lieu réel avant de répondre.",
            "hint2": "Réponse attendue : col."
          }
        },
        "validationFocus": "Contrôler le repère et les conditions locales avant publication définitive.",
        "choices": [
          "Col",
          "Plage",
          "Port"
        ],
        "id": "ar-expedition-massane-s04"
      },
      {
        "name": "Dolmens",
        "fact": "Des dolmens font partie des points remarquables du tracé.",
        "type": "choice",
        "q": "À quelle grande période renvoient les dolmens : préhistoire ou époque industrielle ?",
        "answers": [
          "prehistoire"
        ],
        "hint": "Observe le lieu réel avant de répondre.",
        "hint2": "Réponse attendue : prehistoire.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/argeles-nature-trail-massane-trail/",
        "gpsConfidence": "route-documented-no-false-geofence",
        "access": "Espace public / itinéraire documenté, sous réserve des conditions locales.",
        "season": "Toute l’année sous réserve météo, travaux et risque incendie.",
        "photoBonus": false,
        "expertBonus": "Privilégie l’observation et le terrain à l’écran.",
        "interaction": "choice",
        "locationMode": "trail",
        "routeInstruction": "Respecte les vestiges.",
        "audience": {
          "enfant": {
            "q": "En famille : À quelle grande période renvoient les dolmens : préhistoire ou époque industrielle ?",
            "answers": [
              "prehistoire"
            ],
            "interaction": "choice",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : prehistoire.",
            "choices": [
              "Préhistoire",
              "Époque industrielle"
            ]
          },
          "adulte": {
            "q": "En autonomie : À quelle grande période renvoient les dolmens : préhistoire ou époque industrielle ?",
            "answers": [
              "prehistoire"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : prehistoire.",
            "choices": [
              "Préhistoire",
              "Époque industrielle"
            ]
          },
          "ado": {
            "q": "À quelle grande période renvoient les dolmens : préhistoire ou époque industrielle ?",
            "answers": [
              "prehistoire"
            ],
            "choices": [
              "Préhistoire",
              "Époque industrielle"
            ],
            "interaction": "choice",
            "hint": "Observe le lieu réel avant de répondre.",
            "hint2": "Réponse attendue : prehistoire."
          }
        },
        "validationFocus": "Contrôler le repère et les conditions locales avant publication définitive.",
        "choices": [
          "Préhistoire",
          "Époque industrielle"
        ],
        "id": "ar-expedition-massane-s05"
      },
      {
        "name": "Retour Valmy",
        "fact": "La boucle revient vers Valmy après plus de 19 km.",
        "type": "text",
        "q": "Quel fragment final résume cette grande sortie ?",
        "answers": [
          "endurance"
        ],
        "hint": "Observe le lieu réel avant de répondre.",
        "hint2": "Réponse attendue : endurance.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/argeles-nature-trail-massane-trail/",
        "gpsConfidence": "route-documented-no-false-geofence",
        "access": "Espace public / itinéraire documenté, sous réserve des conditions locales.",
        "season": "Toute l’année sous réserve météo, travaux et risque incendie.",
        "photoBonus": false,
        "expertBonus": "Privilégie l’observation et le terrain à l’écran.",
        "interaction": "text",
        "locationMode": "trail",
        "routeInstruction": "Termine uniquement après retour en sécurité.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel fragment final résume cette grande sortie ?",
            "answers": [
              "endurance"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : endurance."
          },
          "adulte": {
            "q": "En autonomie : Quel fragment final résume cette grande sortie ?",
            "answers": [
              "endurance"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : endurance."
          },
          "ado": {
            "q": "Quel fragment final résume cette grande sortie ?",
            "answers": [
              "endurance"
            ],
            "interaction": "text",
            "hint": "Observe le lieu réel avant de répondre.",
            "hint2": "Réponse attendue : endurance."
          }
        },
        "validationFocus": "Contrôler le repère et les conditions locales avant publication définitive.",
        "id": "ar-expedition-massane-s06"
      }
    ],
    "teaser": "Le tracé du Massane Trail est explicitement présenté comme praticable en randonnée pédestre. Explor’Action le transforme en expédition longue, sans rechercher la vitesse.",
    "briefing": "Le tracé du Massane Trail est explicitement présenté comme praticable en randonnée pédestre. Explor’Action le transforme en expédition longue, sans rechercher la vitesse.",
    "objective": "Relier Valmy, Saint-Laurent, Massane, dolmens et retour sur un itinéraire de montagne exigeant.",
    "ending": "L’endurance n’a de sens que si elle laisse encore assez d’attention pour lire le massif.",
    "territoryFragment": "ENDURANCE",
    "cardTerrain": "Valmy • Tour de la Massane • dolmens",
    "cardTime": "4 h de trail officiel • ≈ 8 h–11 h en randonnée-jeu",
    "playerMetrics": [
      [
        "🥾",
        "19,0 km"
      ],
      [
        "↗",
        "+1217 m / −1216 m"
      ],
      [
        "⏱",
        "≈ 8–11 h randonnée-jeu"
      ]
    ],
    "storyBeats": [
      {
        "title": "Parc de Valmy",
        "text": "Le Massane Trail part du Château de Valmy."
      },
      {
        "title": "Chapelle Saint-Laurent",
        "text": "La chapelle Saint-Laurent figure parmi les sites traversés."
      },
      {
        "title": "Tour de la Massane",
        "text": "La tour de la Massane est le grand repère sommital du parcours."
      },
      {
        "title": "Col de la Place d’Armes",
        "text": "Le parcours passe par le col de la Place d’Armes."
      },
      {
        "title": "Dolmens",
        "text": "Des dolmens font partie des points remarquables du tracé."
      },
      {
        "title": "Retour Valmy",
        "text": "La boucle revient vers Valmy après plus de 19 km."
      }
    ],
    "playerStatus": "ready",
    "scenarioDisclaimer": "Scénario Explor’Action fictif ; faits et itinéraires issus des sources indiquées. Les conditions locales peuvent évoluer.",
    "finalPrompt": "Quel mot résume cette aventure ? Réponse : ENDURANCE.",
    "clueCards": [
      {
        "unlockAt": 2,
        "title": "Carte 1 — Observe",
        "text": "Le terrain donne le premier indice."
      },
      {
        "unlockAt": 3,
        "title": "Carte 2 — Relie",
        "text": "Relie les repères déjà traversés."
      },
      {
        "unlockAt": 6,
        "title": "Carte 3 — Synthèse",
        "text": "Le fragment final est « ENDURANCE »."
      }
    ],
    "developmentStatus": "ready-content-field-monitoring",
    "sourceCheckedAt": "2026-09-10",
    "fieldValidation": "monitoring-required",
    "officialBasis": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/argeles-nature-trail-massane-trail/",
    "routeType": "Boucle trail utilisable en randonnée",
    "expedition": true,
    "flatRoute": false,
    "safetyWarning": "Parcours très exigeant. Risque incendie, chaleur et accès au massif à vérifier le jour même.",
    "route": {
      "level": "difficile",
      "levelLabel": "Difficile • Expédition",
      "distanceKm": 19,
      "distanceLabel": "19,0 km",
      "walkTime": "4 h de trail officiel",
      "gameTime": "≈ 8 h–11 h en randonnée-jeu",
      "ascentM": 1217,
      "descentM": 1216,
      "altMaxM": null,
      "surface": "Valmy, massif de la Massane, sentiers et dolmens",
      "accessibility": "Non adaptée PMR/poussette ; très exigeante physiquement.",
      "metricsStatus": "official-trail-basis-hiking-game-monitoring",
      "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/argeles-nature-trail-massane-trail/",
      "note": "La durée officielle est une durée trail. La durée randonnée-jeu est une estimation prudente à tester sur le terrain.",
      "playerDistance": "19,0 km",
      "playerAscent": "+1217 m / −1216 m",
      "playerWalk": "4 h de trail officiel",
      "playerTerrain": "Valmy, Massane et dolmens",
      "playerNote": "Expédition très exigeante ; accès au massif, chaleur et risque incendie à vérifier le jour même.",
      "routeType": "Boucle trail utilisable en randonnée",
      "officialBasis": "Argelès Nature Trail — Massane Trail"
    },
    "validationTier": "ready-application-test"
  },
  {
    "id": "sa-coeur-plat",
    "territoryId": "standre",
    "icon": "♿",
    "title": "Le Cœur Roman Sans Détour",
    "tag": "QUASI-PLAT • Roman • Centre • Accessible",
    "duration": "Boucle centrale courte • ≈ 1 h–1 h 30 avec le jeu",
    "difficulty": "Facile",
    "story": "Une mission volontairement compacte autour de l’église, de la Maison de l’Art Roman et de la mairie. Elle privilégie les détails visibles et limite les déplacements.",
    "final": "PROXIMITÉ",
    "steps": [
      {
        "name": "Église romane — façade",
        "fact": "La mairie décrit un linteau sculpté en marbre du XIe siècle et une riche façade romane.",
        "type": "text",
        "q": "Quel matériau est explicitement cité pour le linteau ?",
        "answers": [
          "marbre"
        ],
        "hint": "Observe le lieu réel avant de répondre.",
        "hint2": "Réponse attendue : marbre.",
        "token": "",
        "source": "https://www.saint-andre66.fr/eglise-romane/",
        "gpsConfidence": "route-documented-no-false-geofence",
        "access": "Espace public / itinéraire documenté, sous réserve des conditions locales.",
        "season": "Toute l’année sous réserve météo, travaux et risque incendie.",
        "photoBonus": false,
        "expertBonus": "Privilégie l’observation et le terrain à l’écran.",
        "interaction": "text",
        "locationMode": "trail",
        "routeInstruction": "Observe depuis l’espace public.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel matériau est explicitement cité pour le linteau ?",
            "answers": [
              "marbre"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : marbre."
          },
          "adulte": {
            "q": "En autonomie : Quel matériau est explicitement cité pour le linteau ?",
            "answers": [
              "marbre"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : marbre."
          },
          "ado": {
            "q": "Quel matériau est explicitement cité pour le linteau ?",
            "answers": [
              "marbre"
            ],
            "interaction": "text",
            "hint": "Observe le lieu réel avant de répondre.",
            "hint2": "Réponse attendue : marbre."
          }
        },
        "validationFocus": "Contrôler le repère et les conditions locales avant publication définitive.",
        "id": "sa-coeur-plat-s01"
      },
      {
        "name": "Maçonnerie",
        "fact": "Les murs anciens montrent des galets disposés en arête de poisson.",
        "type": "text",
        "q": "Quel motif de maçonnerie est cité ?",
        "answers": [
          "arete de poisson"
        ],
        "hint": "Observe le lieu réel avant de répondre.",
        "hint2": "Réponse attendue : arete de poisson.",
        "token": "",
        "source": "https://www.saint-andre66.fr/eglise-romane/",
        "gpsConfidence": "route-documented-no-false-geofence",
        "access": "Espace public / itinéraire documenté, sous réserve des conditions locales.",
        "season": "Toute l’année sous réserve météo, travaux et risque incendie.",
        "photoBonus": false,
        "expertBonus": "Privilégie l’observation et le terrain à l’écran.",
        "interaction": "text",
        "locationMode": "trail",
        "routeInstruction": "Cherche le motif visible sans quitter l’espace autorisé.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel motif de maçonnerie est cité ?",
            "answers": [
              "arete de poisson"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : arete de poisson."
          },
          "adulte": {
            "q": "En autonomie : Quel motif de maçonnerie est cité ?",
            "answers": [
              "arete de poisson"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : arete de poisson."
          },
          "ado": {
            "q": "Quel motif de maçonnerie est cité ?",
            "answers": [
              "arete de poisson"
            ],
            "interaction": "text",
            "hint": "Observe le lieu réel avant de répondre.",
            "hint2": "Réponse attendue : arete de poisson."
          }
        },
        "validationFocus": "Contrôler le repère et les conditions locales avant publication définitive.",
        "id": "sa-coeur-plat-s02"
      },
      {
        "name": "Dimensions",
        "fact": "La mairie indique une hauteur intérieure de 12 m.",
        "type": "numeric",
        "q": "Quelle hauteur intérieure est donnée ?",
        "answers": [
          "12"
        ],
        "hint": "Observe le lieu réel avant de répondre.",
        "hint2": "Réponse attendue : 12.",
        "token": "",
        "source": "https://www.saint-andre66.fr/eglise-romane/",
        "gpsConfidence": "route-documented-no-false-geofence",
        "access": "Espace public / itinéraire documenté, sous réserve des conditions locales.",
        "season": "Toute l’année sous réserve météo, travaux et risque incendie.",
        "photoBonus": false,
        "expertBonus": "Privilégie l’observation et le terrain à l’écran.",
        "interaction": "numeric",
        "locationMode": "trail",
        "routeInstruction": "Si l’église est ouverte, observe l’espace ; sinon utilise uniquement l’indice public.",
        "audience": {
          "enfant": {
            "q": "En famille : Quelle hauteur intérieure est donnée ?",
            "answers": [
              "12"
            ],
            "interaction": "numeric",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : 12."
          },
          "adulte": {
            "q": "En autonomie : Quelle hauteur intérieure est donnée ?",
            "answers": [
              "12"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : 12."
          },
          "ado": {
            "q": "Quelle hauteur intérieure est donnée ?",
            "answers": [
              "12"
            ],
            "interaction": "numeric",
            "hint": "Observe le lieu réel avant de répondre.",
            "hint2": "Réponse attendue : 12."
          }
        },
        "validationFocus": "Contrôler le repère et les conditions locales avant publication définitive.",
        "id": "sa-coeur-plat-s03"
      },
      {
        "name": "Maison de l’Art Roman",
        "fact": "La Maison de l’Art Roman est un centre d’interprétation de l’ancien monastère.",
        "type": "text",
        "q": "Quel type de lieu est-ce ?",
        "answers": [
          "centre d interpretation"
        ],
        "hint": "Observe le lieu réel avant de répondre.",
        "hint2": "Réponse attendue : centre d interpretation.",
        "token": "",
        "source": "https://www.saint-andre66.fr/eglise-romane/",
        "gpsConfidence": "route-documented-no-false-geofence",
        "access": "Espace public / itinéraire documenté, sous réserve des conditions locales.",
        "season": "Toute l’année sous réserve météo, travaux et risque incendie.",
        "photoBonus": false,
        "expertBonus": "Privilégie l’observation et le terrain à l’écran.",
        "interaction": "text",
        "locationMode": "trail",
        "routeInstruction": "Reste à proximité de la mairie et de l’église.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel type de lieu est-ce ?",
            "answers": [
              "centre d interpretation"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : centre d interpretation."
          },
          "adulte": {
            "q": "En autonomie : Quel type de lieu est-ce ?",
            "answers": [
              "centre d interpretation"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : centre d interpretation."
          },
          "ado": {
            "q": "Quel type de lieu est-ce ?",
            "answers": [
              "centre d interpretation"
            ],
            "interaction": "text",
            "hint": "Observe le lieu réel avant de répondre.",
            "hint2": "Réponse attendue : centre d interpretation."
          }
        },
        "validationFocus": "Contrôler le repère et les conditions locales avant publication définitive.",
        "id": "sa-coeur-plat-s04"
      },
      {
        "name": "Accessibilité",
        "fact": "L’étage de la Maison de l’Art Roman comporte 17 marches sans ascenseur, avec une borne virtuelle de compensation.",
        "type": "numeric",
        "q": "Combien de marches sont indiquées ?",
        "answers": [
          "17"
        ],
        "hint": "Observe le lieu réel avant de répondre.",
        "hint2": "Réponse attendue : 17.",
        "token": "",
        "source": "https://www.saint-andre66.fr/maison-de-lart-roman/",
        "gpsConfidence": "route-documented-no-false-geofence",
        "access": "Espace public / itinéraire documenté, sous réserve des conditions locales.",
        "season": "Toute l’année sous réserve météo, travaux et risque incendie.",
        "photoBonus": false,
        "expertBonus": "Privilégie l’observation et le terrain à l’écran.",
        "interaction": "numeric",
        "locationMode": "trail",
        "routeInstruction": "Ne fais jamais dépendre la réussite du jeu de l’accès à l’étage.",
        "audience": {
          "enfant": {
            "q": "En famille : Combien de marches sont indiquées ?",
            "answers": [
              "17"
            ],
            "interaction": "numeric",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : 17."
          },
          "adulte": {
            "q": "En autonomie : Combien de marches sont indiquées ?",
            "answers": [
              "17"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : 17."
          },
          "ado": {
            "q": "Combien de marches sont indiquées ?",
            "answers": [
              "17"
            ],
            "interaction": "numeric",
            "hint": "Observe le lieu réel avant de répondre.",
            "hint2": "Réponse attendue : 17."
          }
        },
        "validationFocus": "Contrôler le repère et les conditions locales avant publication définitive.",
        "id": "sa-coeur-plat-s05"
      },
      {
        "name": "Synthèse",
        "fact": "Le cœur de Saint-André concentre architecture, sculpture et médiation.",
        "type": "text",
        "q": "Quel fragment final résume cette petite échelle ?",
        "answers": [
          "proximite"
        ],
        "hint": "Observe le lieu réel avant de répondre.",
        "hint2": "Réponse attendue : proximite.",
        "token": "",
        "source": "https://www.saint-andre66.fr/eglise-romane/",
        "gpsConfidence": "route-documented-no-false-geofence",
        "access": "Espace public / itinéraire documenté, sous réserve des conditions locales.",
        "season": "Toute l’année sous réserve météo, travaux et risque incendie.",
        "photoBonus": false,
        "expertBonus": "Privilégie l’observation et le terrain à l’écran.",
        "interaction": "text",
        "locationMode": "trail",
        "routeInstruction": "Termine sur l’Allée de la Liberté.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel fragment final résume cette petite échelle ?",
            "answers": [
              "proximite"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : proximite."
          },
          "adulte": {
            "q": "En autonomie : Quel fragment final résume cette petite échelle ?",
            "answers": [
              "proximite"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : proximite."
          },
          "ado": {
            "q": "Quel fragment final résume cette petite échelle ?",
            "answers": [
              "proximite"
            ],
            "interaction": "text",
            "hint": "Observe le lieu réel avant de répondre.",
            "hint2": "Réponse attendue : proximite."
          }
        },
        "validationFocus": "Contrôler le repère et les conditions locales avant publication définitive.",
        "id": "sa-coeur-plat-s06"
      }
    ],
    "teaser": "Une mission volontairement compacte autour de l’église, de la Maison de l’Art Roman et de la mairie. Elle privilégie les détails visibles et limite les déplacements.",
    "briefing": "Une mission volontairement compacte autour de l’église, de la Maison de l’Art Roman et de la mairie. Elle privilégie les détails visibles et limite les déplacements.",
    "objective": "Proposer une expérience de centre-village à très faible relief, avec variantes lorsque les bâtiments sont fermés.",
    "ending": "Quelques dizaines de mètres peuvent contenir plusieurs siècles de lecture.",
    "territoryFragment": "PROXIMITÉ",
    "cardTerrain": "Allée de la Liberté • église • mairie • Maison de l’Art Roman",
    "cardTime": "Boucle centrale courte • ≈ 1 h–1 h 30 avec le jeu",
    "playerMetrics": [
      [
        "🥾",
        "Boucle centrale"
      ],
      [
        "↗",
        "Très faible relief"
      ],
      [
        "⏱",
        "≈ 1 h–1 h 30"
      ]
    ],
    "storyBeats": [
      {
        "title": "Église romane — façade",
        "text": "La mairie décrit un linteau sculpté en marbre du XIe siècle et une riche façade romane."
      },
      {
        "title": "Maçonnerie",
        "text": "Les murs anciens montrent des galets disposés en arête de poisson."
      },
      {
        "title": "Dimensions",
        "text": "La mairie indique une hauteur intérieure de 12 m."
      },
      {
        "title": "Maison de l’Art Roman",
        "text": "La Maison de l’Art Roman est un centre d’interprétation de l’ancien monastère."
      },
      {
        "title": "Accessibilité",
        "text": "L’étage de la Maison de l’Art Roman comporte 17 marches sans ascenseur, avec une borne virtuelle de compensation."
      },
      {
        "title": "Synthèse",
        "text": "Le cœur de Saint-André concentre architecture, sculpture et médiation."
      }
    ],
    "playerStatus": "ready",
    "scenarioDisclaimer": "Scénario Explor’Action fictif ; faits et itinéraires issus des sources indiquées. Les conditions locales peuvent évoluer.",
    "finalPrompt": "Quel mot résume cette aventure ? Réponse : PROXIMITÉ.",
    "clueCards": [
      {
        "unlockAt": 2,
        "title": "Carte 1 — Observe",
        "text": "Le terrain donne le premier indice."
      },
      {
        "unlockAt": 3,
        "title": "Carte 2 — Relie",
        "text": "Relie les repères déjà traversés."
      },
      {
        "unlockAt": 6,
        "title": "Carte 3 — Synthèse",
        "text": "Le fragment final est « PROXIMITÉ »."
      }
    ],
    "developmentStatus": "ready-content-field-monitoring",
    "sourceCheckedAt": "2026-09-10",
    "fieldValidation": "monitoring-required",
    "officialBasis": "https://www.saint-andre66.fr/eglise-romane/",
    "routeType": "Boucle urbaine courte",
    "expedition": false,
    "flatRoute": true,
    "safetyWarning": "Le parcours ne dépend pas de l’ouverture de la Maison de l’Art Roman ; les contenus intérieurs sont bonus.",
    "route": {
      "level": "facile",
      "levelLabel": "Facile • Quasi plat",
      "distanceKm": null,
      "distanceLabel": "Boucle centrale courte",
      "walkTime": "À confirmer sur place",
      "gameTime": "≈ 1 h–1 h 30",
      "ascentM": null,
      "descentM": null,
      "altMaxM": null,
      "surface": "Allée de la Liberté, église, mairie et abords de la Maison de l’Art Roman",
      "accessibility": "Parcours extérieur central ; accessibilité détaillée à qualifier sur place.",
      "metricsStatus": "urban-core-field-measurement-required",
      "source": "https://www.saint-andre66.fr/eglise-romane/",
      "note": "Le parcours est conçu sans inventer de distance. Les contenus intérieurs sont facultatifs.",
      "playerDistance": "Boucle centrale",
      "playerAscent": "Très faible relief",
      "playerWalk": "≈ 1 h–1 h 30 avec le jeu",
      "playerTerrain": "Cœur historique urbain",
      "playerNote": "Option courte conçue pour rester dans le centre et ne pas dépendre des horaires d’ouverture.",
      "routeType": "Boucle urbaine courte",
      "officialBasis": "Cœur roman de Saint-André"
    },
    "validationTier": "ready-application-test"
  },
  {
    "id": "sa-expedition-roman",
    "territoryId": "standre",
    "icon": "🛡️",
    "title": "Expédition spéciale — La Grande Boucle Romane",
    "tag": "EXPÉDITION • Art roman • Albères • Inter-villages",
    "duration": "Base inter-villages officielle 15,5 km en cyclo • adaptation pédestre à suivre avec prudence",
    "difficulty": "Difficile",
    "story": "Une grande traversée relie Saint-André aux villages romans voisins. La source officielle est cyclable : Explor’Action l’utilise comme trame culturelle et n’affirme pas qu’elle est un sentier pédestre homologué.",
    "final": "RÉSEAU",
    "steps": [
      {
        "name": "Saint-André — église",
        "fact": "La boucle officielle d’art roman prévoit un arrêt à l’église de Saint-André.",
        "type": "text",
        "q": "Quel thème relie les villages de cette expédition ?",
        "answers": [
          "art roman"
        ],
        "hint": "Observe le lieu réel avant de répondre.",
        "hint2": "Réponse attendue : art roman.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/boucle-des-alberes-sur-les-traces-de-lart-roman/",
        "gpsConfidence": "route-documented-no-false-geofence",
        "access": "Espace public / itinéraire documenté, sous réserve des conditions locales.",
        "season": "Toute l’année sous réserve météo, travaux et risque incendie.",
        "photoBonus": false,
        "expertBonus": "Privilégie l’observation et le terrain à l’écran.",
        "interaction": "text",
        "locationMode": "trail",
        "routeInstruction": "Départ du cœur de Saint-André.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel thème relie les villages de cette expédition ?",
            "answers": [
              "art roman"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : art roman."
          },
          "adulte": {
            "q": "En autonomie : Quel thème relie les villages de cette expédition ?",
            "answers": [
              "art roman"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : art roman."
          },
          "ado": {
            "q": "Quel thème relie les villages de cette expédition ?",
            "answers": [
              "art roman"
            ],
            "interaction": "text",
            "hint": "Observe le lieu réel avant de répondre.",
            "hint2": "Réponse attendue : art roman."
          }
        },
        "validationFocus": "Contrôler le repère et les conditions locales avant publication définitive.",
        "id": "sa-expedition-roman-s01"
      },
      {
        "name": "Saint-Génis-des-Fontaines",
        "fact": "La boucle passe par Saint-Génis-des-Fontaines et son patrimoine roman.",
        "type": "text",
        "q": "Quel village vient compléter Saint-André dans la lecture du roman ?",
        "answers": [
          "saint genis des fontaines"
        ],
        "hint": "Observe le lieu réel avant de répondre.",
        "hint2": "Réponse attendue : saint genis des fontaines.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/boucle-des-alberes-sur-les-traces-de-lart-roman/",
        "gpsConfidence": "route-documented-no-false-geofence",
        "access": "Espace public / itinéraire documenté, sous réserve des conditions locales.",
        "season": "Toute l’année sous réserve météo, travaux et risque incendie.",
        "photoBonus": false,
        "expertBonus": "Privilégie l’observation et le terrain à l’écran.",
        "interaction": "text",
        "locationMode": "trail",
        "routeInstruction": "Utilise uniquement les voies partagées autorisées.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel village vient compléter Saint-André dans la lecture du roman ?",
            "answers": [
              "saint genis des fontaines"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : saint genis des fontaines."
          },
          "adulte": {
            "q": "En autonomie : Quel village vient compléter Saint-André dans la lecture du roman ?",
            "answers": [
              "saint genis des fontaines"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : saint genis des fontaines."
          },
          "ado": {
            "q": "Quel village vient compléter Saint-André dans la lecture du roman ?",
            "answers": [
              "saint genis des fontaines"
            ],
            "interaction": "text",
            "hint": "Observe le lieu réel avant de répondre.",
            "hint2": "Réponse attendue : saint genis des fontaines."
          }
        },
        "validationFocus": "Contrôler le repère et les conditions locales avant publication définitive.",
        "id": "sa-expedition-roman-s02"
      },
      {
        "name": "Retour vers Saint-André",
        "fact": "La fiche décrit un passage sous le pont pour rejoindre Saint-André par la rue Miloussa.",
        "type": "text",
        "q": "Quel nom de rue marque ce retour ?",
        "answers": [
          "miloussa"
        ],
        "hint": "Observe le lieu réel avant de répondre.",
        "hint2": "Réponse attendue : miloussa.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/boucle-des-alberes-sur-les-traces-de-lart-roman/",
        "gpsConfidence": "route-documented-no-false-geofence",
        "access": "Espace public / itinéraire documenté, sous réserve des conditions locales.",
        "season": "Toute l’année sous réserve météo, travaux et risque incendie.",
        "photoBonus": false,
        "expertBonus": "Privilégie l’observation et le terrain à l’écran.",
        "interaction": "text",
        "locationMode": "trail",
        "routeInstruction": "Sois particulièrement prudent aux traversées.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel nom de rue marque ce retour ?",
            "answers": [
              "miloussa"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : miloussa."
          },
          "adulte": {
            "q": "En autonomie : Quel nom de rue marque ce retour ?",
            "answers": [
              "miloussa"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : miloussa."
          },
          "ado": {
            "q": "Quel nom de rue marque ce retour ?",
            "answers": [
              "miloussa"
            ],
            "interaction": "text",
            "hint": "Observe le lieu réel avant de répondre.",
            "hint2": "Réponse attendue : miloussa."
          }
        },
        "validationFocus": "Contrôler le repère et les conditions locales avant publication définitive.",
        "id": "sa-expedition-roman-s03"
      },
      {
        "name": "Sorède",
        "fact": "Depuis Saint-André, la boucle poursuit vers Sorède.",
        "type": "text",
        "q": "Quel village suit Saint-André sur cette section ?",
        "answers": [
          "sorede"
        ],
        "hint": "Observe le lieu réel avant de répondre.",
        "hint2": "Réponse attendue : sorede.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/boucle-des-alberes-sur-les-traces-de-lart-roman/",
        "gpsConfidence": "route-documented-no-false-geofence",
        "access": "Espace public / itinéraire documenté, sous réserve des conditions locales.",
        "season": "Toute l’année sous réserve météo, travaux et risque incendie.",
        "photoBonus": false,
        "expertBonus": "Privilégie l’observation et le terrain à l’écran.",
        "interaction": "text",
        "locationMode": "trail",
        "routeInstruction": "Suis les axes documentés.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel village suit Saint-André sur cette section ?",
            "answers": [
              "sorede"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : sorede."
          },
          "adulte": {
            "q": "En autonomie : Quel village suit Saint-André sur cette section ?",
            "answers": [
              "sorede"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : sorede."
          },
          "ado": {
            "q": "Quel village suit Saint-André sur cette section ?",
            "answers": [
              "sorede"
            ],
            "interaction": "text",
            "hint": "Observe le lieu réel avant de répondre.",
            "hint2": "Réponse attendue : sorede."
          }
        },
        "validationFocus": "Contrôler le repère et les conditions locales avant publication définitive.",
        "id": "sa-expedition-roman-s04"
      },
      {
        "name": "Laroque-des-Albères",
        "fact": "La boucle rejoint ensuite Laroque-des-Albères.",
        "type": "text",
        "q": "Quel dernier village des Albères complète cette chaîne ?",
        "answers": [
          "laroque des alberes"
        ],
        "hint": "Observe le lieu réel avant de répondre.",
        "hint2": "Réponse attendue : laroque des alberes.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/boucle-des-alberes-sur-les-traces-de-lart-roman/",
        "gpsConfidence": "route-documented-no-false-geofence",
        "access": "Espace public / itinéraire documenté, sous réserve des conditions locales.",
        "season": "Toute l’année sous réserve météo, travaux et risque incendie.",
        "photoBonus": false,
        "expertBonus": "Privilégie l’observation et le terrain à l’écran.",
        "interaction": "text",
        "locationMode": "trail",
        "routeInstruction": "Respecte les voies partagées.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel dernier village des Albères complète cette chaîne ?",
            "answers": [
              "laroque des alberes"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : laroque des alberes."
          },
          "adulte": {
            "q": "En autonomie : Quel dernier village des Albères complète cette chaîne ?",
            "answers": [
              "laroque des alberes"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : laroque des alberes."
          },
          "ado": {
            "q": "Quel dernier village des Albères complète cette chaîne ?",
            "answers": [
              "laroque des alberes"
            ],
            "interaction": "text",
            "hint": "Observe le lieu réel avant de répondre.",
            "hint2": "Réponse attendue : laroque des alberes."
          }
        },
        "validationFocus": "Contrôler le repère et les conditions locales avant publication définitive.",
        "id": "sa-expedition-roman-s05"
      },
      {
        "name": "Synthèse inter-villages",
        "fact": "L’itinéraire relie plusieurs foyers de patrimoine roman.",
        "type": "text",
        "q": "Quel fragment final décrit cette relation ?",
        "answers": [
          "reseau"
        ],
        "hint": "Observe le lieu réel avant de répondre.",
        "hint2": "Réponse attendue : reseau.",
        "token": "",
        "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/boucle-des-alberes-sur-les-traces-de-lart-roman/",
        "gpsConfidence": "route-documented-no-false-geofence",
        "access": "Espace public / itinéraire documenté, sous réserve des conditions locales.",
        "season": "Toute l’année sous réserve météo, travaux et risque incendie.",
        "photoBonus": false,
        "expertBonus": "Privilégie l’observation et le terrain à l’écran.",
        "interaction": "text",
        "locationMode": "trail",
        "routeInstruction": "Clôture uniquement après retour sécurisé.",
        "audience": {
          "enfant": {
            "q": "En famille : Quel fragment final décrit cette relation ?",
            "answers": [
              "reseau"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : reseau."
          },
          "adulte": {
            "q": "En autonomie : Quel fragment final décrit cette relation ?",
            "answers": [
              "reseau"
            ],
            "interaction": "text",
            "hint": "Observe le lieu et utilise le repère le plus évident.",
            "hint2": "Réponse attendue : reseau."
          },
          "ado": {
            "q": "Quel fragment final décrit cette relation ?",
            "answers": [
              "reseau"
            ],
            "interaction": "text",
            "hint": "Observe le lieu réel avant de répondre.",
            "hint2": "Réponse attendue : reseau."
          }
        },
        "validationFocus": "Contrôler le repère et les conditions locales avant publication définitive.",
        "id": "sa-expedition-roman-s06"
      }
    ],
    "teaser": "Une grande traversée relie Saint-André aux villages romans voisins. La source officielle est cyclable : Explor’Action l’utilise comme trame culturelle et n’affirme pas qu’elle est un sentier pédestre homologué.",
    "briefing": "Une grande traversée relie Saint-André aux villages romans voisins. La source officielle est cyclable : Explor’Action l’utilise comme trame culturelle et n’affirme pas qu’elle est un sentier pédestre homologué.",
    "objective": "Relier Saint-André, Saint-Génis, Sorède et Laroque dans une expédition patrimoniale, en respectant strictement les voies autorisées et les traversées.",
    "ending": "L’art roman dépasse les limites communales : les pierres forment un réseau de villages.",
    "territoryFragment": "RÉSEAU",
    "cardTerrain": "Saint-André • Saint-Génis • Sorède • Laroque",
    "cardTime": "Base inter-villages officielle 15,5 km en cyclo • adaptation pédestre à suivre avec prudence",
    "playerMetrics": [
      [
        "🥾",
        "15,5 km base inter-villages"
      ],
      [
        "↗",
        "+122 m / −122 m (base cyclo)"
      ],
      [
        "⏱",
        "≈ 7–10 h avec jeu selon marche"
      ]
    ],
    "storyBeats": [
      {
        "title": "Saint-André — église",
        "text": "La boucle officielle d’art roman prévoit un arrêt à l’église de Saint-André."
      },
      {
        "title": "Saint-Génis-des-Fontaines",
        "text": "La boucle passe par Saint-Génis-des-Fontaines et son patrimoine roman."
      },
      {
        "title": "Retour vers Saint-André",
        "text": "La fiche décrit un passage sous le pont pour rejoindre Saint-André par la rue Miloussa."
      },
      {
        "title": "Sorède",
        "text": "Depuis Saint-André, la boucle poursuit vers Sorède."
      },
      {
        "title": "Laroque-des-Albères",
        "text": "La boucle rejoint ensuite Laroque-des-Albères."
      },
      {
        "title": "Synthèse inter-villages",
        "text": "L’itinéraire relie plusieurs foyers de patrimoine roman."
      }
    ],
    "playerStatus": "recognition-only",
    "scenarioDisclaimer": "Scénario Explor’Action fictif ; faits et itinéraires issus des sources indiquées. Les conditions locales peuvent évoluer.",
    "finalPrompt": "Quel mot résume cette aventure ? Réponse : RÉSEAU.",
    "clueCards": [
      {
        "unlockAt": 2,
        "title": "Carte 1 — Observe",
        "text": "Le terrain donne le premier indice."
      },
      {
        "unlockAt": 3,
        "title": "Carte 2 — Relie",
        "text": "Relie les repères déjà traversés."
      },
      {
        "unlockAt": 6,
        "title": "Carte 3 — Synthèse",
        "text": "Le fragment final est « RÉSEAU »."
      }
    ],
    "developmentStatus": "hidden-until-field-validation",
    "sourceCheckedAt": "2026-09-10",
    "fieldValidation": "monitoring-required",
    "officialBasis": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/boucle-des-alberes-sur-les-traces-de-lart-roman/",
    "routeType": "Grande boucle inter-villages sur voies partagées",
    "expedition": true,
    "flatRoute": false,
    "safetyWarning": "Boucle officielle cyclable de 15,5 km. Conservée uniquement pour le Mode Reconnaissance tant qu’un itinéraire pédestre continu, autorisé et sûr n’a pas été validé physiquement.",
    "route": {
      "level": "difficile",
      "levelLabel": "Difficile • Expédition",
      "distanceKm": 15.5,
      "distanceLabel": "15,5 km — base cyclo, adaptation pédestre",
      "walkTime": "Durée pédestre à confirmer",
      "gameTime": "≈ 7–10 h avec jeu",
      "ascentM": 122,
      "descentM": 122,
      "altMaxM": null,
      "surface": "Voies partagées et liaisons inter-villages des Albères",
      "accessibility": "Non qualifiée pour un usage pédestre continu.",
      "metricsStatus": "official-cyclo-basis-pedestrian-recognition-required",
      "source": "https://www.tourisme-pyrenees-mediterranee.com/randonnee-pedestre/boucle-des-alberes-sur-les-traces-de-lart-roman/",
      "note": "ATTENTION : les métriques proviennent d’une boucle cyclable. L’adaptation pédestre doit être reconnue intégralement avant usage public réel.",
      "playerDistance": "15,5 km — base inter-villages",
      "playerAscent": "+122 m / −122 m (base cyclo)",
      "playerWalk": "Durée pédestre à confirmer",
      "playerTerrain": "Saint-André, Saint-Génis, Sorède et Laroque sur voies partagées",
      "playerNote": "Expédition de développement : utiliser uniquement les voies autorisées et reconnues à pied.",
      "routeType": "Grande boucle inter-villages sur voies partagées",
      "officialBasis": "Boucle des Albères sur les traces de l’art roman"
    },
    "validationTier": "recognition-only"
  }
];
