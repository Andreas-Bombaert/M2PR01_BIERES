
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
"use strict";
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

                str += "<td><input type='submit' id='imageSuppression' value='' onclick='supprimer(" + '"' + identifiant + '"' + ");'></td>"; // Création du bouton de suppression (juste une row)
            }

            // Boucle qui calcule la somme totale à payer
            for (let o of parse) {
                montantTotal += o.prixTotal;
            }

            str += "<tr class='vide'><td></td><td></td><td></td><td></td><td></td><td></td></tr>";
            str += "<tr class='vide'><td><input type='submit' id='toutSupprimer' value='Tout supprimer' onclick='toutSupprimer();'></td>";  // Création du bouton de suppression (toute la table)

            str += "<td></td><td></td><td></td><td class='TitreSomme'>" + "Total :" + "</td><td id='somme'>" + montantTotal.toFixed(2) + " €" + "</td></tr>";
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

function supprimer(id) {
    /* **** appel AJAX **** */
    let xhr = new XMLHttpRequest();             // création d'un objet servant à effectuer la requête Ajax
    xhr.open('get', 'http://localhost/suppression?id=' + id , false);               // type (GET), l'url et l'asynchrone de la requête (false)
    xhr.onload = function() {
        console.log("");
    };
    xhr.send();     // envoie la requête lorsqu'elle est prête et définie


    /* Suppression d'une row en fonction de son id (exple : 'b01') */
    document.getElementById(id).remove();
    panier();       // refresh de la page
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

function toutSupprimer () {
    /* **** appel AJAX **** */
    let xhr = new XMLHttpRequest();               // création d'un objet servant à effectuer la requête Ajax
    xhr.open('get', 'http://localhost/suppression_all', false);                 // type (GET), l'url et l'asynchrone de la requête (false)
    xhr.onload = function () {
        console.log("");
    };
    xhr.send();        // envoie la requête lorsqu'elle est prête et définie


    /* suppression de toutes les row de la table */
    document.querySelector(".row").remove();
    panier();       // refresh de la page
}



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
        "<input id=\"boutonHisto\" class=\"buttonHistorique\" type=\"submit\" value=\"Voir mon panier\">\n" +
        "    </fieldset>\n" +
        "    </form>\n" +
        "    </div>";

}
function connexionCommande(form){
    let jsonClient={};
    let clientId="";
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

            document.getElementById("feedBackConnexion").innerHTML="<p> Mauvais identifiant ou mauvais mot de passe</p>";
        }
        else{
            clientId = String(jsonClient[0].clientId);
            panier(clientId);
        }
    };
    xhr.send();

}



