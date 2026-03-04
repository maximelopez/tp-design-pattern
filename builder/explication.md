# Builder

## Problème qu’il résout
Le Builder permet de construire un objet complexe étape par étape, au lieu d’utiliser un constructeur rempli de paramètres difficiles à comprendre.
Il est utile quand un objet possède :
- beaucoup de propriétés optionnelles,
- des paramètres qui doivent être fournis dans un certain ordre,
- des règles de validation,
- plusieurs façons possibles d’être construit.
Sans Builder, on obtient souvent des constructeurs illisibles :
new User("Maxime", 25, "maxime@example.com", "Angers", true, null, false);

Ce type de code est difficile à lire, à maintenir et à faire évoluer.

## Principe de fonctionnement
Le Builder repose sur une idée simple :
- On remplit l’objet petit à petit grâce à des méthodes claires (setName, setAge, etc.).
- Chaque méthode retourne le Builder pour permettre le chaînage fluide.
- Une fois toutes les informations fournies, on appelle build() pour créer l’objet final.
- Le Builder peut valider les données avant de construire l’objet.
En résumé :
On sépare la construction de l’objet de sa représentation finale.


## Structure
- Product : l’objet final (ex : User).
- Builder : stocke les données et fournit les méthodes de configuration.
- Méthodes de configuration : définissent les propriétés une par une.
- Méthode build() : crée l’objet final et peut vérifier sa validité.
- Director (optionnel) : impose un ordre de construction (rare en JS).

## Avantages
- Construction lisible et progressive.
- Plus besoin de constructeurs avec 10 paramètres.
- Possibilité d’ajouter facilement de nouvelles options.
- Validation centralisée dans build().
- Permet plusieurs variantes d’un même objet sans multiplier les constructeurs.

## Inconvénients
- Plus de code à écrire qu’un simple constructeur.
- Peut être inutile pour des objets simples.
- Peut être mal utilisé si l’objet n’est pas réellement complexe.

## Cas d’usage concret
Dans une application où l’on crée un utilisateur, certains champs sont obligatoires (ex : nom), d’autres optionnels (ex : adresse, âge, email).
Un constructeur classique devient vite confus.
