# Observer

## Nom du pattern
Observer (ou Observateur)

## Problème qu’il résout
Quand un objet change d’état, plusieurs autres objets doivent être automatiquement informés.  
Sans ce pattern, on devrait :
- appeler chaque objet à la main,
- dupliquer du code,
- créer un couplage fort entre les classes.

Observer permet de **notifier automatiquement plusieurs objets** lorsqu’un événement se produit.

## Principe de fonctionnement
- Un **Sujet (Subject)** garde une liste d’observateurs.
- Les **Observateurs** s’abonnent au sujet.
- Quand le sujet change, il **notifie tous les observateurs**.
- Chaque observateur réagit à sa manière.

C’est un système de **publication / abonnement**.

## Structure
- **Subject** : gère la liste des observateurs + notifie
- **Concrete Subject** : déclenche les notifications
- **Observer** : interface ou classe de base
- **Concrete Observers** : réagissent aux notifications

## Avantages
- Faible couplage entre les objets
- Ajout / retrait d’observateurs très simple
- Permet de gérer des événements complexes
- Très utilisé dans les interfaces, les systèmes temps réel, etc.

## Inconvénients
- Peut devenir difficile à suivre si beaucoup d’observateurs
- L’ordre des notifications n’est pas garanti
- Risque d’observateurs “fantômes” si mal désabonnés

## Cas d’usage concret
Un **centre météo** met à jour la température.  
Plusieurs écrans doivent afficher la nouvelle valeur :
- écran principal
- écran mobile
- écran extérieur

Quand la température change → tous les écrans sont mis à jour automatiquement.