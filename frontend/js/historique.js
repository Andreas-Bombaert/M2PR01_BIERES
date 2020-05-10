/**
 * Auth : Cédric De Dryver
 *
 * Affiche l'historique d'achat de bière du client selon son identifiant  (mail) et son mot de passe (mdp)
 *
 * Affiche une erreur (historique.js:33) si il y a une erreur de connexion ou un message (historique.js:66) si le client n'a rien commandé sur le site.
 *
 * @param form
 * @returns False (Afin de ne pas refresh la page)
 */
"use strict";
function connexionHistorique(form){

    /**<--- VARIABLES --->*/

    let clientId ="";
    let mayStop = false;
    let jsonClient,jsonHistorique = {},jsonVentes = {}, jsonBieres = {}, jsonBiereNom = {};
    let strRetour ="";
    let strDetail ="";
    let keyJsonHistorique = [];



    /**
     * Fait une requete HTTP XML pour recevoir l'ID du client si le mot de passe et l'identifiant (email) sont correct
     * @type {XMLHttpRequest}
     * @result : la var clientId recoit l'id du client necessaire a l'obtention de son historique.
     */
    let xhr =  new XMLHttpRequest();
    xhr.open('get','connexion?mail='+form.mail.value+'&mdp='+form.mdp.value,false);
    xhr.onload = function (){
        jsonClient = JSON.parse(xhr.responseText);
        if(Object.keys(jsonClient).length === 0){

            document.getElementById("connectedClient").innerHTML="<p> Mauvais identifiant ou mauvais mot de passe</p>";
            mayStop = true;
        }
        else{
            clientId= String(jsonClient[0].clientId);
            alert("Connexion effectuée avec succès!");
            document.getElementById("connexion").innerHTML="";
            document.getElementById("connectedClient").innerText="Actuellement connecté(e): "+String(jsonClient[0].clientPrenom);
            document.getElementById("connectedClient").innerHTML+="<br><button id='boutonDeconnexion' class='boutonDeconnexion' onclick='deconnecter();'>Se Déconnecter</button>";
        }
    };
    xhr.send();

    /**
     * Permet l'arret du programme si les identifiant sont faux.
     */
    if(mayStop === true){
        return false;
    }


    /**
     * Va recevoir l'Id de la commande necessaire pour voir les produit qui ont été acheté dans la table Vente.
     *
     * @type {XMLHttpRequest}
     * @result : un strRetour qui s'affichera dans la balise div id="recuHistorique" la commande au niveau global (ID, prix total et quantité totale).
     */

    xhr = new XMLHttpRequest();
    xhr.open('get','getHistory?code='+clientId,false);
    xhr.onload= function (){
        jsonHistorique= Object.assign(jsonHistorique,JSON.parse(xhr.responseText));
        };
    xhr.send();

    keyJsonHistorique = Object.keys(jsonHistorique);

    if(keyJsonHistorique.length === 0){
        gid("recuHistorique").innerHTML = "Vous avez passé aucune commande sur notre site.";
        return false;
    }

    strRetour +="<table class='tableHistorique'>"+"<thead><th>Liste</th><th>Reference</th><th>Prix Total</th><th>Quantité Totale</th><th>Date</th><th>Detail commande</th> </thead>";
    let count = 1;
    for(let i in jsonHistorique) {
        strRetour += "<tr id="+ jsonHistorique[i].commId +"><td>"+ count +"</td>"
            + "<td>" + jsonHistorique[i].commId + "</td>"
            + "<td>" + jsonHistorique[i].prixTot + "€ </td>"
            + "<td>" + jsonHistorique[i].quantTot + "</td>"
            + "<td>" + jsonHistorique[i].date.substr(0,19) + "</td>"
            + "<td id= detail_"+jsonHistorique[i].commId+"></td></tr>";
        count++;
    }
    gid("recuHistorique").innerHTML = strRetour;

    /**
     * Créé un tableau de toutes les biere,avec biereId en clé et biereNom correspondant au biereId.
     *
      * @type {XMLHttpRequest}
     */

    xhr = new XMLHttpRequest();
    xhr.open('get','getBieres', false);
    xhr.onload= function(){
        jsonBieres = Object.assign(jsonBieres,JSON.parse(xhr.responseText));
    };
    xhr.send();
    for(let i in jsonBieres){
        jsonBiereNom[jsonBieres[i].biereId] = jsonBieres[i].biereNom;
    }

    /**
     *  Va afficher dans la balise déroulante Details les details de la commande (produit et quantité commandé).
     *
     * @type {XMLHttpRequest}
     * @result : un strDetail qui s'affichera dans une partie du tableau td id=detail_coXXX avec les produit et leur quantité respective commandé).
     */
    for(let i in jsonHistorique){
        jsonVentes = {};
        strDetail = "";
        xhr = new XMLHttpRequest();
        xhr.open('get','getVentes?id='+jsonHistorique[i].commId,false);
        xhr.onload= function(){
            jsonVentes= Object.assign(jsonVentes,JSON.parse(xhr.responseText));
        };
        xhr.send();

        console.log(jsonVentes);
        strDetail +="<details><summary>Details produit</summary>";
        for(let j in jsonVentes){

            strDetail+= "Produit = "+jsonBiereNom[jsonVentes[j].biereId]+" ,Quantité = "+jsonVentes[j].prodQuant+ " ,<br>";
        }
        strDetail+="</details>";
        gid("detail_"+jsonHistorique[i].commId+"").innerHTML = strDetail;
    }

    return false;
}

function deconnecter(){
    document.getElementById("connectedClient").innerHTML="";
    document.getElementById("recuHistorique").innerHTML="";
    document.getElementById("connexion").innerHTML =
        "    <form id=\"formulaire_connexion\" action=# onsubmit=\"connexionHistorique(this); return false;\">\n" +
        "    <fieldset>\n" +
        "    <legend>Formulaire de Connexion</legend>\n" +
        "<!-- adresse mail du client -->\n" +
        "<label for=\"mail\">Adresse E-mail : </label>\n" +
        "<input id=\"mail\" name=\"mail\" type=\"email\" required placeholder=\"prénom.nom@gmail.com\" value=\"AdrienneForest@rhyta.com\"><br>\n" +
        "    <!-- nom du client-->\n" +
        "<label for=\"mdp\">Mot de passe : </label>\n" +
        "<input id=\"mdp\" name=\"mdp\" type=\"password\" required placeholder=\"Mot de passe\" value=\"cl011\"><br><br><br>\n" +
        "    <!-- Button d'envoie des données client -->\n" +
        "<input id=\"boutonConnexion\"class=\"boutonConnexion\" type=\"submit\" value=\"Voir mon historique\">\n" +
        "    </fieldset>\n" +
        "    </form>\n";
}

