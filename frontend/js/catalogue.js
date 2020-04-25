/**
 * Date: 25-04-2020
 * @author Mathis Dory
 */
"use strict";

function initPage() { // Initialise le catalogue avec l'entièrté des bières.
    let xhr = new XMLHttpRequest();
    xhr.open('get', "http://localhost/initBieres", true);
    xhr.onload =                                                                                // définit la fonction à exécuter lorsque la réponse arrivera (le callback)
        function traiterReponse1() {
            let reponse = JSON.parse(xhr.responseText);
            let uneBiere= "";
            for(let i of reponse){
                uneBiere += "<div class='sectionUneBiere'><div class='photoBiere'><img id='photo" + i.id +"' src='../img/"+i.id+"' alt='"+ i.biere +"'></div><div class='data'>" + "<span class='nomBiere'>" + i.biere +"</span><br><span class='couleurBiere'>" + i.couleur +
                    "</span><br><span class='alcoolBiere'>"+ i.alcool +"°</span><br><span class='volumebière'>"+ i.volume +"cl</span><br><span class='brasserieBiere'>"+ i.brasserie +"</span><br><span class='prixBiere'>"+ i.prix + "€</span></div>" +
                    "<div id='formAjout"+i.id+"'><form><input id='inputNombre"+i.id+"' class='cbBiere' type='number' min='1' value='1' step='1'><input type='submit' value='Ajouter' class='ajoutBiere'></form></div></div>"; //Contruction de sections par bière avec div de photo, div de data et div de formulaire pour acheter un nombre de bières.

            }

            gid("catalogue").innerHTML = uneBiere;              // ici, place simplement la réponse dans un élément de la page
        };
    xhr.send();

}

function triBiere(couleur, brasserie, pMin, pMax, dMin, dMax) { // @param{string, string, number, number, number, number} sont les données se trouvant dans le formulaire de recherche.
    let xhr = new XMLHttpRequest();                             
    if (couleur == "allColors" && brasserie != "allBr"){
        xhr.open('get', "http://localhost/allColors?brasserie="+brasserie+"&pMin="+pMin+"&pMax="+pMax+"&dMin="+dMin+"&dMax="+dMax, true);
    }
    else if (couleur != "allColors" && brasserie == "allBr"){
        xhr.open('get', "http://localhost/allBr?couleur="+couleur+"&pMin="+pMin+"&pMax="+pMax+"&dMin="+dMin+"&dMax="+dMax, true);
    }
    else if (couleur == "allColors" && brasserie == "allBr"){
        xhr.open('get', "http://localhost/allBrAllColors?pMin="+pMin+"&pMax="+pMax+"&dMin="+dMin+"&dMax="+dMax, true);
    }
    else{
        xhr.open('get', "http://localhost/biereTrie?couleur="+couleur+"&brasserie="+brasserie+"&pMin="+pMin+"&pMax="+pMax+"&dMin="+dMin+"&dMax="+dMax, true);
    }
    xhr.onload=
        function traiterReponse2() {
            let reponse = JSON.parse(xhr.responseText);
            let uneBiere= "";
            for(let i of reponse){
                uneBiere += "<div class='sectionUneBiere'><div class='photoBiere'><img id='photo" + i.id +"' src='../img/"+i.id+".png' alt='"+ i.biere +"'></div><div class='data'>" + "<span class='nomBiere'>" + i.biere +"</span><br><span class='couleurBiere'>" + i.couleur +
                    "</span><br><span class='alcoolBiere'>"+ i.alcool +"°</span><br><span class='volumebière'>"+ i.volume +"cl</span><br><span class='brasserieBiere'>"+ i.brasserie +"</span><br><span class='prixBiere'>"+ i.prix + "€</span></div>" +
                    "<div id='formAjout"+i.id+"'><form><input id='inputNombre"+i.id+"' class='cbBiere' type='number' min='1' placeholder='0' step='1'><input type='submit' value='Ajouter' class='ajoutBiere'></form></div></div>";  //Contruction de sections par bière avec div de photo, div de data et div de formulaire pour acheter un nombre de bières.

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
