"use strict";


/**
 * @author Eliott LEPAGE
 * @date 07/05/20
 *
 * Fonction qui récupère toutes les données du panier dans SQL:
 *      nomBiere, alcoolbiere, volumeBiere, prixBiere, quantitBiere et prixTotal.
 *           + Crée une table récapitulative des bières contenue dans le panier.
 *
 * @type {XMLHttpRequest}
 * @result : Une table récapitulative des bières
 */
function panier(clientId) {

    var montantTotal = 0;  // montantTotal : calcule la somme des montants totaux de toute les bières commandées

    /* **** appel AJAX **** */
    let xhr = new XMLHttpRequest();                                          // création d'un objet servant à effectuer la requête Ajax
    xhr.open('get','http://localhost/panier?cId='+clientId,false);      // type (GET), l'url et l'asynchrone de la requête (false)
    xhr.onload = function() {                                   // définit la fonction à exécuter lorsque la réponse arrivera (callback)
        let parse = JSON.parse(xhr.responseText);
        let longueur = parse.length;

        if (longueur === 0) {  // Test si l'objet parse contenant les bières du panier est vide, si oui il affiche un message disant que le panier est vide
            //                                                                si non il affiche le tableau récapitulatif
            let phrase = "";
            phrase += "<strong id='phrase'>Votre panier est actuellement vide ! Afin d'atteindre la page correspondant à notre catalogue de bières, CLIQUEZ  </strong>" +
                "<a href='catalogue.html'>ICI </a>" + "!";
            document.getElementById('defaut').innerHTML = phrase;       // place la réponse dans un élément de la page

        } else {
            let str = "";       // string contenant la table récapitulative des bières

            // Création de la table + ajout des données
            str += "<thead><th>Nom</th><th>Pourcentage d'alcool</th><th>Volume en centilitres pour 1 bière</th><th>Prix pour 1 bière</th><th>Quantite Totale</th><th>Prix total</th></thead><tbody>";
            for (let x of parse) {
                let identifiant = x.idBiere;

                str += "<tr class='row' id=" + identifiant + " ><td>" + x.nomBiere + "</td><td>" + x.alcoolBiere + "°" + "</td><td>" + x.volumeBiere + " cl" + "</td><td>" + (x.prixBiere).toFixed(2)
                    + " €" + "</td><td>" + x.quantitBiere + "</td><td>" + (x.prixTotal).toFixed(2) + " €" + "</td>";

                str += "<td><input type='submit' id='imageSuppression' value='' onclick='supprimer(" + '"' + identifiant + '"' +','+'"' + clientId + '"'+ ");'></td>"; // Création du bouton de suppression (juste une row)
            }

            // Boucle qui calcule la somme totale à payer
            for (let o of parse) {
                montantTotal += o.prixTotal;
            }

            str += "<tr class='vide'><td></td><td></td><td></td><td></td><td></td><td></td></tr>";
            str += "<tr class='vide'><td><input type='submit' id='toutSupprimer' value='Tout supprimer' onclick='toutSupprimer(" + '"' + clientId + '"' + ");'></td><td><input type='submit' id='commander' class='boutonCommander' value='Commander' onclick='commander("+'"'+clientId+'"'+");'></td>";  // Création du bouton de suppression (toute la table)

            str +="<td></td><td></td><td class='TitreSomme'>" + "Total :" + "</td><td id='somme'>" + montantTotal.toFixed(2) + " €" + "</td></tr>";
            str += "</tbody>";
            document.getElementById("tableauPanier").innerHTML = str;   // place la réponse dans un élément de la page
        }
    };
    xhr.send();         // envoie la requête lorsqu'elle est prête et définie
}

/**
 * @author Eliott LEPAGE
 * @date 07/05/20 : last update
 *
 *
 * Fonction qui effectue deux choses :
 *      1. Supprime la/les bière(s) (ses attributs : nomBiere, alcoolBiere, ...) de la database (idBiere unique !)
 *      2. Et supprime le <tr id='bxx'> de l'html
 *
 * @param id l'id de la bière concernée par la suppression, exple : 'b02'
 * @result : Une table des bières (moins la row concernée)
 */

function supprimer(id,clientId) {
    /* **** appel AJAX **** */
    let xhr = new XMLHttpRequest();             // création d'un objet servant à effectuer la requête Ajax
    xhr.open('get', 'http://localhost/suppression?id=' + id +"&clId="+clientId, false);               // type (GET), l'url et l'asynchrone de la requête (false)
    xhr.onload = function() {
        console.log("");
    };
    xhr.send();     // envoie la requête lorsqu'elle est prête et définie


    /* Suppression d'une row en fonction de son id (exple : 'b01') */
    document.getElementById(id).remove();
    panier(clientId);
}

/**
 * @author Eliott LEPAGE
 * @date 07/05/20 : last update
 *
 *
 * Fonction qui effectue deux choses :
 *      1. Supprime toutes les bières (ses attributs : nomBiere, alcoolBiere, ...) de la database
 *      2. Et supprime les <tr id='bxx'> de l'html
 * @param : aucun
 *
 * @result : Une table vide
 */
function toutSupprimer (clientId) {
    /* **** appel AJAX **** */
    let xhr = new XMLHttpRequest();               // création d'un objet servant à effectuer la requête Ajax
    xhr.open('get', 'suppression_all?clId='+clientId, false);                 // type (GET), l'url et l'asynchrone de la requête (false)
    xhr.onload = function () {
        console.log("");
    };
    xhr.send();        // envoie la requête lorsqu'elle est prête et définie


    /* suppression de toutes les row de la table */

    document.getElementById("defaut").innerHTML="<strong id='phrase'>Votre panier est actuellement vide ! Afin d'atteindre la page correspondant à notre catalogue de bières, CLIQUEZ  </strong><a href='catalogue.html'>ICI </a>";

}


/*
fonction qui initialise le formulaire de connexion à différents moments
*/
function connexion() {

    document.getElementById("connexion").innerHTML = "<div id=\"connexionHistorique\">\n" +
        "    <form id=\"formulaire_connexion\" action=# onsubmit=\"connexionCommande(this); return false;\">\n" +
        "    <fieldset>\n" +
        "    <legend>Formulaire de Connexion</legend>\n" +
        "<!-- adresse mail du client -->\n" +
        "<label for=\"mail\">Adresse E-mail : </label>\n" +
        "<input id=\"mail\" name=\"mail\" type=\"email\" required placeholder=\"prénom.nom@gmail.com\" value=\"AdrienneForest@rhyta.com\"><br>\n" +
        "    <!-- nom du client-->\n" +
        "<label for=\"mdp\">Mot de passe : </label>\n" +
        "<input id=\"mdp\" name=\"mdp\" type=\"password\" required placeholder=\"Mot de passe\" value=\"cl011\"><br><br><br>\n" +
        "    <!-- Button d'envoie des données client -->\n" +
        "<input id=\"boutonConnexion\" class=\"boutonConnexion\" type=\"submit\" value=\"Voir mon panier\">\n" +
        "    </fieldset>\n" +
        "    </form>\n" +
        "    </div>";
}

/**
* Fait une requete HTTP XML pour recevoir l'ID du client si le mot de passe et l'identifiant (email) sont correct
* @type {XMLHttpRequest}
* @result : la var clientId recoit l'id du client necessaire a l'obtention de son historique.
*/
function connexionCommande(form){
    let jsonClient={};


    let xhr =  new XMLHttpRequest();
    xhr.open('get','connexion?mail='+form.mail.value+'&mdp='+form.mdp.value,false);
    xhr.onload = function (){
        jsonClient = JSON.parse(xhr.responseText);
        if(Object.keys(jsonClient).length === 0){

            document.getElementById("connectedClient").innerHTML="<p class='errorID'> Mauvais identifiant ou mauvais mot de passe</p>";
        }
        else{
            let clientId = String(jsonClient[0].clientId);
            panier(clientId);
            alert("Connexion effectuée avec succès!");
            document.getElementById("connexion").innerHTML="";
            document.getElementById("connectedClient").innerHTML="";
            document.getElementById("connectedClient").innerText="Actuellement connecté(e): "+String(jsonClient[0].clientPrenom);
            document.getElementById("connectedClient").innerHTML+="<br><button id='boutonDeconnexion' class='boutonDeconnexion' onclick='deconnecter();'>Se Déconnecter</button>";
        }
    };
    xhr.send();

}

function commander(clientId) {
    let jsonCommander ={}, jsonCommId = {};
    let lastCommId="", url ="";
    let prixTot=0, quantTot=0;
    let count = 1;
    let xhr = new XMLHttpRequest();
    xhr.open('get','panier?cId='+clientId,false);
    xhr.onload = function() {
        jsonCommander = Object.assign(jsonCommander,JSON.parse(xhr.responseText));
    };
    xhr.send();

    console.log(jsonCommander);
    xhr = new XMLHttpRequest();
    xhr.open('get','getCommId', false);
    xhr.onload = function(){
        jsonCommId = Object.assign(jsonCommId,JSON.parse(xhr.responseText));
    };
    xhr.send();

    lastCommId = jsonCommId[Object.keys(jsonCommId).length-1].commId;
    console.log(lastCommId[2]);
    if(lastCommId[2]=='0') {
        lastCommId = lastCommId.slice(-3);
        lastCommId = parseInt(lastCommId)+1;
        lastCommId = "co0"+lastCommId;
        console.log("???")
    } else {
        lastCommId = lastCommId.slice(-3);
        lastCommId = parseInt(lastCommId)+1;
        lastCommId = "co"+lastCommId;
    }
    for(let i in jsonCommander){
        prixTot +=(jsonCommander[i].prixBiere*jsonCommander[i].quantitBiere);
        quantTot +=jsonCommander[i].quantitBiere;
    }

    url ='insertHistorique?coId='+lastCommId+'&cId='+clientId+'&prTot='+prixTot+'&qttTot='+quantTot;

    xhr = new XMLHttpRequest();
    xhr.open('get',url, false);
    xhr.onload = function(){
    }
    ;
    xhr.onerror=function(){console.log("error");}
    xhr.send();


    for(let i in jsonCommander){
        url='insertVente?coId='+lastCommId+'&bId='+jsonCommander[i].idBiere+'&numL='+count+'&qtt='+jsonCommander[i].quantitBiere;

        xhr = new XMLHttpRequest();
        xhr.open('get',url,false);
        xhr.onload = function(){
        };
        xhr.onerror=function(){console.log("error");}
        xhr.send();
        count++;
    }

    toutSupprimer(clientId);
    document.getElementById("defaut").innerHTML="<strong id='phrase'>Votre commande est passée, si vous voulez commander de nouveau, cliquez </strong><a href='catalogue.html'>ICI </a>";

}


/**
 * fonction qui déconnecte l'utilisateur actuel et réinitalise le formulaire de connexion pour permettre 
 * a un autre utilisateur de se connecter
 */
function deconnecter(){
    document.getElementById("connectedClient").innerHTML="";
    document.getElementById("defaut").innerHTML="<table border=\"1\" cellpadding=\"10\" cellspacing=\"1\" id=\"tableauPanier\"> </table>";
    connexion();
}

