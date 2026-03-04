# Decorator

## Problème qu’il résout
Quand on veut ajouter des fonctionnalités à un objet **sans modifier son code**, on a souvent tendance à :
- dupliquer du code,
- créer trop de sous‑classes,
- modifier directement la classe d’origine (risqué).

Le Decorator permet d’ajouter des comportements **dynamiquement**, en enveloppant un objet dans un autre.

## Principe de fonctionnement
Le décorateur :
- reçoit un objet existant,
- ajoute une fonctionnalité autour,
- renvoie un objet qui se comporte comme l’original, mais “amélioré”.

On empile ainsi plusieurs décorateurs pour enrichir progressivement un objet.

## Structure
- **Component** : interface ou classe de base
- **Concrete Component** : l’objet principal
- **Decorator** : classe qui contient un `component` et délègue l’appel
- **Concrete Decorators** : ajoutent des comportements

## Avantages
- Ajoute des fonctionnalités **sans modifier le code existant**
- Combine plusieurs décorateurs librement
- Évite la multiplication de sous‑classes
- Très flexible

## Inconvénients
- Peut devenir difficile à lire si trop de décorateurs
- Beaucoup de petites classes
- L’ordre des décorateurs peut influencer le résultat

## Cas d’usage concret
Un service d’envoi de messages :
- message simple
- message + chiffrement
- message + signature
- message + compression

Chaque fonctionnalité peut être ajoutée **à la demande**, sans toucher au code du message original.