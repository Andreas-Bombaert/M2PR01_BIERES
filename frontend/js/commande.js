/**
 * @author Eliott LEPAGE
 * @date 07/05/20
 *
 * Fonction qui récupère toutes les données du panier dans SQL:
 * @param nomBiere, alcoolbiere, volumeBiere, prixBiere, quantitBiere et prixTotal.
 *           + Crée une table récapitulative des bières contenue dans le panier.
 *
 * @type {XMLHttpRequest}
 * @result une table récapitulative des bières
 */

function panier () {

    let xhr = new XMLHttpRequest();                            // création d'un objet servant à effectuer la requête Ajax
    xhr.open('get','http://localhost/panier',false);      // type (GET), l'url et l'asynchrone de la requête (false)
    xhr.onload = function() {                                   // définit la fonction à exécuter lorsque la réponse arrivera (callback)
        let parse = JSON.parse(xhr.responseText);

        let str = "";       // string contenant la table récapitulative des biètres

        str += "<thead><th>Nom</th><th>Pourcentage d'alcool</th><th>Volume en centilitres pour 1 bière</th><th>Prix pour 1 bière</th><th>Quantite Totale</th><th>Prix total</th></thead><tbody>";
        for (let x of parse) {
            let identifiant = x.idBiere;
            str += "<tr id=" + identifiant +"><td>" + x.nomBiere + "</td><td>" + x.alcoolBiere + "°" + "</td><td>" + x.volumeBiere + " cl" + "</td><td>" + x.prixBiere + " €" + "</td><td>" + x.quantitBiere + "</td><td>" + x.prixTotal + " €" + "</td>";
            str += "<td><input type=submit id='image' value='' onclick='supprimer("+identifiant+");'></td>"; // Création du bouton de suppression
        }

        let montantTotal = 0;  // montantTotal : calcule la somme des montants totaux de chaque bière commandée
        for (let o of parse) {
            montantTotal += o.prixTotal;
        }

        str += "<tr class='vide'><th></th><th></th><th></th><th></th><th></th><th></th></tr>";
        str += "<tr class='vide'><th></th><th></th><th></th><th></th><th class='TitreSomme'>" + "Total :" + "</th><th id='somme'>" + montantTotal + " €" + "</th></tr>";
        str += "</tbody>";
        document.getElementById("tableauPanier").innerHTML = str;   // place la réponse dans un élément de la page
    };
    xhr.send();         // envoie la requête lorsqu'elle est prête et définie
}


function supprimer(id) {
    let xhr = new XMLHttpRequest();
    xhr.open('get', 'http://localhost/suppression?id=' + id , false);
    xhr.onload = function() {
        console.log(id);
    };
    xhr.send();
}
