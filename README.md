# 1TM2-Commandes
Voici le repository pour notre projet 1TM2 - Commande de bières en ligne.

## Présentation :
Nous sommes 4 étudiants de la branche IT de l'[![Ephec](https://i.imgur.com/rnFtoBv.png)](https://www.ephec.be/)
* [Dory Mathis](https://github.com/Mathis-Dory)
* [Lepage Eliott](https://github.com/Eliott-Lepage)
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
  * Un webservice pour envoyer/annuler les commandes
  
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
   
   
 ## Détails API REST:
 Voici les différentes fonctionnalitées de notre API :
   * *initBrasseurs()*:  
   Initialise la liste des brasseurs dans l'ordre alphabétique
   * *insertPanier(:bId,:qtt,:cId)*:  
   Insère les bieres avec son Id,sa quantité et l'ID du client dans la table tbPanier.
   * *getBieres()*  
   Donne la liste des bieres avec son ID
   * *getCommId() *   
      Donne la liste des commandes ( seulement l'ID )
   * *getHistory(:code)*  
      Donne l'historique client selon son ID
   * *connexion(:mail,:mdp)*  
      Vérifie si le mail et le mot de passe sont correct et donne en retour l'ID du client et son prénom.
   * *getVentes(:id)*  
      Donne tout le contenu de la table Vente selon l'ID du client.
   * *insertHistorique(:coId,:cId,:prTot,:qttTot)*  
      Insère dans la table historique l'ID de la commande, le client ID, le prix total et la quantité totale de la commande qui vient d'etre passée
   * *insertVente(:coId,:bId,:numL,:qtt)*  
      Insère dans la table vente, l'ID de la commande, l'ID de la biere, le numero de ligne en fct de la commande, et la quantité de bière commandée
   * *panier(:cId)*  
   Donne tout le contenu de la table Panier en fonction de l'ID du client
   * *suppression_all(:clId)*  
      Supprime dans la table Panier tout ce qui correspond au client ID
   * *suppression(:id,:clId)*  
      Supprime une ligne dans la table Panier, en fonction de l'ID de la biere et de l'ID du client.
   * *allBr(:couleur,:pMin,:pMax,:dMin,:dMax)*  
      Creation de la procédure qui récupère toutes les bières avec des critères de tri mais accepte toutes les brasseries, 
le tri se fait avec le prix minimum, prix maximum, degré d'alcoolémie minimum et maximum la couleur est également un critère de tri.
   * *allBrAllColors(:pMin,:pMax,:dMin,:dMax)*  
     Creation de la procédure qui récupère toutes les bières avec des critères de tri mais accepte toutes les couleurs et toutes les brasseries, 
le tri se fait avec le prix minimum, prix maximum, degré d'alcoolémie minimum et maximum.
   * *allColors(:brasserie,:pMin,:pMax,:dMin,:dMax)*  
     Creation de la procédure qui récupère toutes les bières avec des critères de tri mais accepte toutes les couleurs, 
le tri se fait avec le prix minimum, prix maximum, degré d'alcoolémie minimum et maximum la brasserie est également un critère de tri.
   * *initBieres()*  
     Creation de la procédure qui récupère toutes les bières. Elle renvoit un id, le nom, la couleur, le degré d'alcoolémie, le volume, la brasserie et le prix.
   * *biereTrie(:couleur,:brasserie,:pMin,:pMax,:dMin,:dMax)*  
    Creation de la procédure qui récupère toutes les bières avec des critères de tri, 
le tri se fait avec le prix minimum, prix maximum, degré d'alcoolémie minimum et maximum la couleur et la brasserie sont également des critères de tri.
    
    
## Détails DB
Description des tables de notre database:
* *tbPanier*:  
Elle sert a stocker les informations du panier de chaques clients
* *tbVentes*:  
Elle sert a stocker les informations des commandes passées ( les bieres commandées, avec leurs quantités)
* *tbHistoriques*:  
Elle sert a stocker les informations globales des commandes passées ( les client, prix total, quantité totale et date.)
* *tbClients*:  
Elle sert a stocker les informations des clients.
* *tbBieres*:  
Elle sert a stocker les informations des bieres misent a la vente.
* *tbBrasseurs*:  
Elle sert a stocker les informations des brasseurs
* *tbVilles*:  
Elle sert a stocker les informations des villes ( Pour une fonctionnalité supplémentaire pas encore developpée).


#### Voici un diagramme démontrant le rapport entre chaques table:
![Diagramme de la database](https://i.imgur.com/m8k606a.png)
