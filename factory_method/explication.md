# Factory Method

## Problème qu’il résout
Quand une application doit créer différents objets **sans savoir à l’avance lequel**, on veut éviter :
- des `if` / `switch` partout,
- du code dupliqué,
- un couplage fort entre le code métier et les classes concrètes.

Le Factory Method permet de **déléguer la création d’objets** à une méthode spécialisée.

## Principe de fonctionnement
Au lieu d’instancier directement un objet avec `new`, on appelle une **méthode de création** (la “factory method”).

Cette méthode :
- choisit **quel objet créer**,
- renvoie une **instance prête à l’emploi**,
- isole la logique de création dans un seul endroit.

## Structure
- **Creator (Factory)** : contient la méthode `createProduct()`
- **Concrete Creators** : implémentent la création d’un type précis
- **Product** : interface ou classe de base
- **Concrete Products** : objets réellement créés

## Avantages
- Centralise la création d’objets
- Évite les gros `switch` dans le code métier
- Facilite l’ajout de nouveaux types d’objets
- Réduit le couplage entre le code métier et les classes concrètes

## Inconvénients
- Ajoute plus de classes
- Peut sembler complexe pour de petits projets
- Nécessite une bonne organisation

## Cas d’usage concret
Une application doit générer différents **types de documents** :
- PDF
- Word
- Excel

Le code métier ne doit pas savoir *comment* chaque document est créé.  
La Factory Method choisit le bon type selon la demande.