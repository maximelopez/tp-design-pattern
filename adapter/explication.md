# Adapter

## Problème qu’il résout
Le pattern Adapter sert à rendre compatibles deux interfaces qui ne le sont pas, sans modifier leur code.
Il est utile quand :
- le code attend une certaine méthode ou un certain format,
- mais la classe n’a pas la même interface,
- éviter de réécrire toute ton application.
L’Adapter joue le rôle d’un intermédiaire qui traduit d’une interface à une autre.


## Principe de fonctionnement
- Le client attend une interface précise
- La classe existante fournit une interface différente
- L’Adapter :
- reçoit l’objet incompatible,
- expose l’interface attendue,
- traduit les appels.

## Structure
- Client : le code qui utilise l’interface attendue.
- Adaptee : la classe incompatible.
- Adapter : convertit l’interface de l’Adaptee vers celle du Client.
