# 1TM2-Commandes
Voici le repository pour notre projet 1TM2 - Commande de bières en ligne.

## Présentation :
Nous sommes 4 étudiants de la branche IT de l'![Ephec](https://thumbnails.digitalwallonia.be/dbcb2ff48b1941d1911c6d4c3e01bdc157fdda90a4072cb39aa77c38448fb8a618e13fd0510d46b47588767c8271391d6ff5ed3030806b822b6feb7e6cd5e21e/150x45.webp)
* [Dory Mathis](https://github.com/Mathis-Dory)
* Lepage Eliott, *n'a pas encore de compte github*
* [Bombaert Andréas](https://github.com/Andreas-Bombaert)
* [De Dryver Cédric](https://github.com/DeDryverC)

## Description du projet:
Nous allons creer une plateforme web afin de proposer des services de commandes de bieres.

#### **FONCTIONNALITES PRINCIPALES :**
  * Un formulaire pour commander des bières,
  * Faire une liste des bières disponible sur commande,

#### **FONCTIONNALITES SUPPLEMENTAIRES :**
  * Rajouter une description pour chaque bières, ainsi qu'un filtre pour les classer.
  * Faire un systeme de client (avec login) et ainsi avoir une fiche client.
  * Faire une récapitulation de la commande après envoi du formulaire, avec un bouton pour pouvoir imprimer.
  * Faire un historique des commandes
  * Annuler une commande

## Implémentation technique:
* **backend** : base de donnée contenant les tables avec les bières,leurs descriptions, 
      ainsi que les brasseurs et les informations allant avec
      
* **backend** : serveur fournissant les fichiers html, css et js ainsi que les webservices

* **backend** : Différents webservices:

  * Un webservice pour initialiser le catalogue des bières disponibles
  * Un webservice pour se connecter et obtenir ses informations en tant que client 
  * Un webservice pour l'historique
  * Un webservice pour envoyer les commandes
  
* **frontend** : Une page HTML accompagné de son css/js qui appelera les différents webservices et utilisera les réponses pour modifier la page/la base de données lors des différents évenements:
  * Connexion d'un client
  * Commande passée par un client
  * Requete de l'historique
  * Annulation de la commande

## Ordre d'implémentation:

* **Backend:**
  * Creer les tables SQL contenant les données des brasseurs/bières
  * Creer les tables vides pour le(s) futur(s) client(s)
  * Creer les procédures pour charger les fichiers html/css/js ainsi que pour traiter les réponses et requetes
  * Creer les services web pour initialiser la page et gérer les requetes/interactions
* **Frontend:**
  * Creer la page html et le css
  * Creer le fichier js permettant:
  * d'initaliser la page et le catalogue
  * de permettre au client de se connecter et de récuperer ses données
  * de gérer les commandes  
           
## Implémentation : Approche fonctionnelle:
En tant qu'utilisateur je veux pouvoir:
   * Accéder a la page d'accueil
   * Me connecter à mon compte
   * Visualiser le catalogue des bières
   * Passer une commande avec un ou plusieurs articles dans différentes quantités
   * Annuler une commande
   * Visualiser mon historique
