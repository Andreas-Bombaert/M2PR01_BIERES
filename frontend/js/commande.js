/**
 * @author Eliott LEPAGE
 * @date 07/05/20
 *
 * @type {XMLHttpRequest}
 *
 * @result
 */


function panier () {

    let xhr = new XMLHttpRequest();
    xhr.open('get','http://localhost/panier',false);
    xhr.onload = function() {
        let parse = JSON.parse(xhr.responseText);
        let str = "";
        str += "<thead><th>Nom</th><th>Pourcentage d'alcool</th><th>Volume en centilitres pour 1 bière</th><th>Prix pour 1 bière</th><th>Quantite Totale</th><th>Prix total</th></thead><tbody>";
        for (let x of parse) {
            let identifiant = x.idBiere;
            str += "<tr id=" + identifiant +"><td>" + x.nomBiere + "</td><td>" + x.alcoolBiere + "°" + "</td><td>" + x.volumeBiere + " cl" + "</td><td>" + x.prixBiere + " €" + "</td><td>" + x.quantitBiere + "</td><td>" + x.prixTotal + " €" + "</td>";
            str += "<td><input type=submit id='image' value='' onclick='supprimer();'></td>";
        }
        str += "</tbody>";
        document.getElementById("tableauPanier").innerHTML = str;
    };
    xhr.send();
}


/* Crée des erreurs, à regarder ensemble demain (08/05/20) 
function supprimer() {
    let xhr = new XMLHttpRequest();
    xhr.open('get', 'http://localhost/suppression', false);
    xhr.onload = function() {
        let parse = JSON.parse(xhr.responseText);
        let str = "";
        for (let x of parse) {
            str += "";
        }
        document.getElementById("tableauPanier").innerHTML = str;
    }
}
*/

/* Crée des erreurs, à regarder ensemble demain (08/05/20) 
function supprimer() {
    str += "<thead><th>Nom</th><th>Pourcentage d'alcool</th><th>Volume en centilitres pour 1 bière</th><th>Prix pour 1 bière</th><th>Quantite Totale</th><th>Prix total</th></thead><tbody></tbody>";
    document.getElementById("tableauPanier").innerHTML = str;
}*/
