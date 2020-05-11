# 1TM2-Commandes
Voici le repository de notre projet 1TM2 - Commande de bières en ligne.

## Présentation :
Nous sommes 4 étudiants de la branche IT de l'[![Ephec](https://i.imgur.com/rnFtoBv.png)](https://www.ephec.be/)
* [Dory Mathis](https://github.com/Mathis-Dory)
* [Lepage Eliott](https://github.com/Eliott-Lepage)
* [Bombaert Andréas](https://github.com/Andreas-Bombaert)
* [De Dryver Cédric](https://github.com/DeDryverC)

## Description du projet:
Nous allons créer une plateforme web afin de proposer des services de commandes de bieres.

#### **FONCTIONNALITES PRINCIPALES :**
  * Un formulaire pour commander des bières,
  * Faire une liste des bières disponibles sur commande,

#### **FONCTIONNALITES SUPPLEMENTAIRES :**
  * Rajouter une description pour chaque bière, ainsi qu'un filtre pour les classer.
  * Faire un système de client (avec login) et ainsi avoir une fiche client.
  * Faire une récapitulation de la commande après l'envoi du formulaire.
  * Faire un historique des commandes effectuées.

## Implémentation technique:
* **backend** : Base de données contenant les tables avec les bières, leurs descriptions, 
      ainsi que les brasseurs et les informations les concernant.
      
* **backend** : serveur fournissant les fichiers HTML, css et js ainsi que les webservices.

* **backend** : différents webservices:

  * Un Webservice pour initialiser le catalogue des bières disponibles.
  * Un Webservice pour se connecter et obtenir ses informations en tant que client.
  * Un Webservice pour l'historique.
  * Un Webservice pour envoyer/annuler les commandes.
  
* **frontend** : Une page HTML accompagnée de son css/js qui appellera les différents webservices et utilisera les réponses pour modifier la page/la base de données lors des différents événements:
  * Connexion d'un client.
  * Commande passée par un client.
  * Requête de l'historique.
  * Annulation de la commande.

## Ordre d'implémentation:

* **Backend:**
  * Créer les tables SQL contenant les données des brasseurs/bières.
  * Créer les tables vides pour le(s) futur(s) client(s).
  * Créer les procédures pour charger les fichiers html/css/js ainsi que pour traiter les réponses et requêtes.
  * Créer les services web pour initialiser la page et gérer les requêtes/interactions.
* **Frontend:**
  * Créer la page html et le css
  * Créer le fichier js permettant:
  * D'initaliser la page et le catalogue
  * De permettre au client de se connecter et de récupérer ses données
  * De gérer les commandes  
           
## Implémentation : Approche fonctionnelle:
En tant qu'utilisateur je veux pouvoir:
   * Accéder à la page d'accueil.
   * Me connecter à mon compte.
   * Visualiser le catalogue des bières.
   * Passer une commande avec un ou plusieurs articles dans différentes quantités.
   * Visualiser mon historique.
   
   
 ## Détails API REST:
 Voici les différentes fonctionnalités de notre API :
   * *initBrasseurs()*:  
   Initialise la liste des brasseurs dans l'ordre alphabétique.
   * *insertPanier(:bId,:qtt,:cId)*:  
   Insère les bières avec son Id, sa quantité et l'ID du client dans la table tbPanier.
   * *getBieres()*  
   Donne la liste des bières avec son ID.
   * *getCommId() *   
   Donne la liste des commandes ( seulement l'ID )
   * *getHistory(:code)*  
   Donne l'historique client selon son ID.
   * *connexion(:mail,:mdp)*  
   Vérifie si le mail et le mot de passe sont corrects et donne en retour l'ID du client et son prénom.
   * *getVentes(:id)*  
   Donne tout le contenu de la table tbVentes selon l'ID du client.
   * *insertHistorique(:coId,:cId,:prTot,:qttTot)*  
   Insère dans la table historique l'ID de la commande, le client ID, le prix total et la quantité totale de la commande qui vient d'être effectuée.
   * *insertVente(:coId,:bId,:numL,:qtt)*  
   Insère dans la table vente, l'ID de la commande, l'ID de la bière, le numéro de ligne en fonction de la commande, et la quantité de bières commandées.
   * *panier(:cId)*  
   Donne tout le contenu de la table tbPanier en fonction de l'ID du client.
   * *suppression_all(:clId)*  
   Supprime dans la table tbPanier tout ce qui correspond au client ID.
   * *suppression(:id,:clId)*  
   Supprime une ligne dans la table tbPanier, en fonction de l'ID de la bière et de l'ID du client.
   * *allBr(:couleur,:pMin,:pMax,:dMin,:dMax)*  
   Création de la procédure qui récupère toutes les bières avec des critères de tri mais accepte toutes les brasseries, 
le tri se fait avec le prix minimum, prix maximum, degré d'alcoolémie minimum et maximum, la couleur est également un critère de tri.
   * *allBrAllColors(:pMin,:pMax,:dMin,:dMax)*  
   Création de la procédure qui récupère toutes les bières avec des critères de tri mais accepte toutes les couleurs et toutes les brasseries, 
le tri se fait avec le prix minimum, prix maximum, degré d'alcool minimum et maximum.
   * *allColors(:brasserie,:pMin,:pMax,:dMin,:dMax)*  
 Création de la procédure qui récupère toutes les bières avec des critères de tri mais accepte toutes les couleurs, 
le tri se fait avec le prix minimum, prix maximum, degré d'alcool minimum et maximum la brasserie est également un critère de tri.
   * *initBieres()*  
 Creation de la procédure qui récupère toutes les bières. Elle renvoie un id, le nom, la couleur, le degré d'alcoolémie, le volume, la brasserie et le prix.
   * *biereTrie(:couleur,:brasserie,:pMin,:pMax,:dMin,:dMax)*  
 Création de la procédure qui récupère toutes les bières avec des critères de tri, 
le tri se fait avec le prix minimum, prix maximum, degré d'alcool minimum et maximum la couleur et la brasserie sont également des critères de tri.
    
    
## Détails DB
Description des tables de notre database:
* *tbPanier*:  
Elle sert à stocker les informations du panier de chaque clients.
* *tbVentes*:  
Elle sert à stocker les informations des commandes effectuées (les bières commandées, avec leurs quantités).
* *tbHistoriques*:  
Elle sert à stocker les informations globales des commandes passées (les clients, prix total, quantité totale et date).
* *tbClients*:  
Elle sert à stocker les informations des clients.
* *tbBieres*:  
Elle sert à stocker les informations des bières misent à la vente.
* *tbBrasseurs*:  
Elle sert à stocker les informations des brasseurs.
* *tbVilles*:  
Elle sert à stocker les informations des villes (Pour une fonctionnalité supplémentaire pas encore développée).


#### Voici un diagramme démontrant le rapport entre chaques table:
![Diagramme de la database](https://i.imgur.com/m8k606a.png)
