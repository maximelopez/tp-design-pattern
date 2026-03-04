# Singleton

## Problème qu’il résout
Le Singleton garantit qu’une **seule instance** d’un objet existe dans toute l’application.  
C’est utile quand plusieurs instances créeraient des erreurs ou des incohérences.

Exemples concrets :
- un seul accès à une base de données,
- un seul gestionnaire de configuration,
- un seul panier d’achat pour un utilisateur,
- un seul système de logs.

## Principe de fonctionnement
- On empêche la création de l’objet avec `new`.
- On stocke l’unique instance dans une variable statique.
- On fournit une méthode (ex : `getInstance()`) qui renvoie toujours **la même instance**.

## Structure
- **instance (statique)** : stocke l’objet unique.
- **constructeur protégé** : empêche plusieurs créations.
- **méthode d’accès** : retourne l’instance unique.

## Avantages
- Une seule source de vérité.
- Évite les doublons coûteux (connexion DB, fichiers, logs).
- Facile à utiliser dans toute l’application.

## Inconvénients
- Peut rendre les tests plus difficiles.
- Peut créer des dépendances globales.
- Peut être sur-utilisé (anti-pattern si mal employé).

## Cas d’usage concret
Dans une application e‑commerce, le panier d’un utilisateur doit être **unique**.  
S’il y avait plusieurs paniers, les produits seraient dispersés et la commande deviendrait incohérente.

Le Singleton garantit qu’il n’existe **qu’un seul panier par utilisateur**.