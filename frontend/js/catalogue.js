
/**
 * Date: 25-04-2020
 * @author Mathis Dory
 */
"use strict";

let recapCommande={};
let clId="";

function initPage() { // Initialise le catalogue avec l'entièrté des bières.
    let xhr = new XMLHttpRequest();
    xhr.open('get', "http://localhost/initBieres", true);
    xhr.onload =                                                                                // définit la fonction à exécuter lorsque la réponse arrivera (le callback)
        function traiterReponse1() {
            let reponse = JSON.parse(xhr.responseText);
            let uneBiere= "";
            for(let i of reponse){
                uneBiere +=
                    "<div class='sectionUneBiere'>" +
                    "<div class='photoBiere'>" +
                    "<img id='photo" + i.id +"' src='../img/" + i.id + ".jpg' alt='"+ i.biere +"'>" +
                    "</div>" +
                    "<div class='data'>" + "" +
                    "<span class='nomBiere'>" + i.biere + "</span><br>" +
                    "<span class='couleurBiere'>" + i.couleur + "</span><br>" +
                    "<span class='alcoolBiere'>"+ i.alcool +"°</span><br>" +
                    "<span class='volumebière'>"+ i.volume +"cl</span><br>" +
                    "<span class='brasserieBiere'>"+ i.brasserie +"</span><br>" +
                    "<span class='prixBiere'>"+ i.prix + "€</span></div>" +
                    "<div id='formAjout"+i.id+"'>" +
                    "<form action='#' onsubmit='addBr("+'"'+i.biere+'","'+i.id+'","'+i.brasserie+'",'+i.volume+',this.qtt.value'+','+i.prix+"); return false;'>" +
                    "<input id='inputNombre"+i.id+"'  class='cbBiere' name='qtt' type='number' min='1' value='1' step='1'>" +
                    "<input type='submit' value='Ajouter' class='ajoutBiere'></form></div></div>"; //Construction de sections par bière avec div de photo, div de data et div de formulaire pour acheter un nombre de bières.
            }

            gid("catalogue").innerHTML = uneBiere;              // ici, place simplement la réponse dans un élément de la page
        };
    xhr.send();
}

function triBiere(couleur, brasserie, pMin, pMax, dMin, dMax) { // @param{string, string, number, number, number, number} sont les données se trouvant dans le formulaire de recherche.
    let xhr = new XMLHttpRequest();
    if (couleur == "allColors" && brasserie != "allBr"){
        if (pMin == "") {
            pMin = 1.5;
        }
        if (pMax == "") {
            pMax = 18.99;
        }
        if (dMin == "") {
            dMin = 4.5;
        }
        if (dMax == "") {
            dMax = 12;
        }
        xhr.open('get', "http://localhost/allColors?brasserie="+brasserie+"&pMin="+pMin+"&pMax="+pMax+"&dMin="+dMin+"&dMax="+dMax, true);
    }
    else if (couleur != "allColors" && brasserie == "allBr"){
        if (pMin == "") {
            pMin = 1.5;
        }
        if (pMax == "") {
            pMax = 18.99;
        }
        if (dMin == "") {
            dMin = 4.5;
        }
        if (dMax == "") {
            dMax = 12;
        }
        xhr.open('get', "http://localhost/allBr?couleur="+couleur+"&pMin="+pMin+"&pMax="+pMax+"&dMin="+dMin+"&dMax="+dMax, true);
    }
    else if (couleur == "allColors" && brasserie == "allBr"){
        if (pMin == "") {
            pMin = 1.5;
        }
        if (pMax == "") {
            pMax = 18.99;
        }
        if (dMin == "") {
            dMin = 4.5;
        }
        if (dMax == "") {
            dMax = 12;
        }
        xhr.open('get', "http://localhost/allBrAllColors?pMin="+pMin+"&pMax="+pMax+"&dMin="+dMin+"&dMax="+dMax, true);
    }
    else{
        if (pMin == "") {
            pMin = 1.5;
        }
        if (pMax == "") {
            pMax = 18.99;
        }
        if (dMin == "") {
            dMin = 4.5;
        }
        if (dMax == "") {
            dMax = 12;
        }
        xhr.open('get', "http://localhost/biereTrie?couleur="+couleur+"&brasserie="+brasserie+"&pMin="+pMin+"&pMax="+pMax+"&dMin="+dMin+"&dMax="+dMax, true);
    }
    xhr.onload=
        function traiterReponse2() {
            let reponse = JSON.parse(xhr.responseText);
            let uneBiere= "";
            for(let i of reponse){
                uneBiere +=
                    "<div class='sectionUneBiere'>" +
                    "<div class='photoBiere'>" +
                    "<img id='photo" + i.id +"' src='../img/" + i.id + ".jpg' alt='"+ i.biere +"'>" +
                    "</div>" +
                    "<div class='data'>" + "" +
                    "<span class='nomBiere'>" + i.biere + "</span><br>" +
                    "<span class='couleurBiere'>" + i.couleur + "</span><br>" +
                    "<span class='alcoolBiere'>"+ i.alcool +"°</span><br>" +
                    "<span class='volumebière'>"+ i.volume +"cl</span><br>" +
                    "<span class='brasserieBiere'>"+ i.brasserie +"</span><br>" +
                    "<span class='prixBiere'>"+ i.prix + "€</span></div>" +
                    "<div id='formAjout"+i.id+"'>" +
                    "<form action='#' onsubmit='addBr("+'"'+i.biere+'","'+i.id+'","'+i.brasserie+'",'+i.volume+',this.qtt.value'+','+i.prix+"); return false;'>" +
                    "<input id='inputNombre"+i.id+"'  class='cbBiere' name='qtt' type='number' min='1' value='1' step='1'>" +
                    "<input type='submit' value='Ajouter' class='ajoutBiere'></form></div></div>"; //Construction de sections par bière avec div de photo, div de data et div de formulaire pour acheter un nombre de bières.
            }
            if (uneBiere == ""){
                uneBiere = "<div id='erreurRecherche'><p>Il n'y a pas de résultat pour les critères sélectionnés.</p></div>";
            }
            gid("catalogue").innerHTML = uneBiere;
        };
    xhr.send();
    return false; // @return false pour bloquer l'envoit du formulaire.

}

function envoyerForm(){
    let formulaire = gid("formBiere");
    triBiere(formulaire.couleurBiere.value, formulaire.brasserieBiere.value, formulaire.prixBiereMin.value, formulaire.prixBiereMax.value, formulaire.alcoolMin.value, formulaire.alcoolMax.value);
}

/**
 * Date: 25-04-2020
 * @author Andréas Bombaert
 *
 * fonction qui récupère les noms des brasseurs et leurs Id afin de les injecter
 * dans le select du formulaire de commandes
 */

function initBrasseurs(){
    let xhr= new XMLHttpRequest();
    xhr.open('get','initBrasseurs');
    xhr.onload=function(){
        let parsed=JSON.parse(xhr.responseText);
        let str="<option value='allBr'>Toutes</option>";
        for(let x of parsed){
            str+="<option value='"+x.brasseurId+"'>"+x.brasseurNom+"</option>";
        }
        document.getElementById("brasserieBiere").innerHTML=str;
    };
    xhr.send();
}


/**
 *@author: Andréas Bombaert
 *
 * @param biere, nom de la biere
 * @param id, de la biere
 * @param brasserie, de la biere
 * @param volume,
 * @param qtt,  quantite souhaitee par le client
 * @param prix, de la biere
 *
 * fonction qui ajoute la bière et la quantité demandée dans la table "panier" de la database
 */
function addBr(biere,id,brasserie,volume,qtt,prix){
    if(clId===""){
        alert("Veuillez vous connecter avant de commander");
        return false;
    }


    let url='insertPanier?bId='+id+'&qtt='+qtt+'&cId='+clId;
    let xhr = new XMLHttpRequest();
    xhr.open('get',url);
    xhr.onload=function(){
        console.log(url);
    };
    xhr.onerror=function(){console.log("xhr error");}
    xhr.send();

}

/**
 * Fait une requete HTTP XML pour recevoir l'ID du client si le mot de passe et l'identifiant (email) sont correct
 * @type {XMLHttpRequest}
 * @result : la var clientId recoit l'id du client necessaire a l'obtention de son historique.
 */
function connexionCommande(form){
    let jsonClient={};
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

            document.getElementById("connectedClient").innerHTML="<p class='errorID'> Mauvais identifiant ou mauvais mot de passe</p>";
        }
        else{
            clId = String(jsonClient[0].clientId);
            alert("Connexion effectuée avec succès!");
            document.getElementById("connexion").innerHTML="";
            document.getElementById("connectedClient").innerHTML="";
            document.getElementById("connectedClient").innerText="Actuellement connecté(e): "+String(jsonClient[0].clientPrenom);
            document.getElementById("connectedClient").innerHTML+="<br><button id='boutonDeconnexion' class='boutonDeconnexion' onclick='deconnecter();'>Se Déconnecter</button>";
            console.log(clId);
        }
    };
    xhr.send();

}

function deconnecter(){
    clId="";
    document.getElementById("connectedClient").innerHTML="";
    document.getElementById("connexion").innerHTML =
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
        "<input id=\"boutonConnexion\" class=\"boutonConnexion\" type=\"submit\" value=\"Connexion\">\n" +
        "    </fieldset>\n" +
        "    </form>\n";
}
