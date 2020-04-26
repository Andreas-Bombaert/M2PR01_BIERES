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
                    "<form action='#' onsubmit='addBr("+'"'+i.biere+'","'+i.id+'","'+i.brasserie+'",'+i.volume+',this.qtt.value'+','+i.prix+");'>" +
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
        switch (true) {
            case pMin == "":
                pMin=1.5;
            case pMax == "":
                pMax= 18.99;
            case dMin == "":
                dMin = 4.5;
            case dMax == "":
                dMax = 12;
                break;
            default:
                alert("Les valeurs attribuées n'ont pas pu charger");
        }
        xhr.open('get', "http://localhost/allColors?brasserie="+brasserie+"&pMin="+pMin+"&pMax="+pMax+"&dMin="+dMin+"&dMax="+dMax, true);
    }
    else if (couleur != "allColors" && brasserie == "allBr"){
        switch (true) {
            case pMin == "":
                pMin=1.5;
            case pMax == "":
                pMax= 18.99;
            case dMin == "":
                dMin = 4.5;
            case dMax == "":
                dMax = 12;
                break;
            default:
                alert("Les valeurs attribuées n'ont pas pu charger");
        }
        xhr.open('get', "http://localhost/allBr?couleur="+couleur+"&pMin="+pMin+"&pMax="+pMax+"&dMin="+dMin+"&dMax="+dMax, true);
    }
    else if (couleur == "allColors" && brasserie == "allBr"){
        switch (true) {
            case pMin == "":
                pMin=1.5;
            case pMax == "":
                pMax= 18.99;
            case dMin == "":
                dMin = 4.5;
            case dMax == "":
                dMax = 12;
                break;
            default:
                alert("Les valeurs attribuées n'ont pas pu charger");
        }
        xhr.open('get', "http://localhost/allBrAllColors?pMin="+pMin+"&pMax="+pMax+"&dMin="+dMin+"&dMax="+dMax, true);
    }
    else{
        switch (true) {
            case pMin == "":
                pMin=1.5;
            case pMax == "":
                pMax= 18.99;
            case dMin == "":
                dMin = 4.5;
            case dMax == "":
                dMax = 12;
                break;
            default:
                alert("Les valeurs attribuées n'ont pas pu charger");
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
                    "<span class='nomBiere'>" + i.biere +"</span><br>" +
                    "<span class='couleurBiere'>" + i.couleur + "</span><br>" +
                    "<span class='alcoolBiere'>"+ i.alcool +"°</span><br>" +
                    "<span class='volumebière'>"+ i.volume +"cl</span><br>" +
                    "<span class='brasserieBiere'>"+ i.brasserie +"</span><br>" +
                    "<span class='prixBiere'>"+ i.prix + "€</span></div>" +
                    "<div id='formAjout"+i.id+"'>" +
                    "<form action='#' onsubmit='addBr("+'"'+i.biere+'","'+i.id+'","'+i.brasserie+'",'+i.volume+',this.qtt.value'+','+i.prix+"); return false;'>" +
                    "<input id='inputNombre"+i.id+"' class='cbBiere' type='number' name='qtt' min='1' placeholder='0' step='1'>
                    <input type='submit' value='Ajouter' class='ajoutBiere'></form></div></div>";  //Contruction de sections par bière avec div de photo, div de data et div de formulaire pour acheter un nombre de bières.

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

//ajoute la bière dans le panier de commande en fonction des quantités demandées
function addBr(biere,id,brasserie,volume,qtt,prix){
    let found=false;
    for(let x of Object.keys(recapCommande)){
        if(id===x){
            found=true;
            recapCommande[id].quantite+=parseInt(qtt);
        }
    }
    if(found===false){
        recapCommande[id]={biere:biere,brasserie:brasserie,volume:volume,quantite:parseInt(qtt),prix:prix};
    }

    console.log(recapCommande);
    return false;
}



function initCommande(){
    let str="";
    for(let x of Object.keys(recapCommande)){
        str+="<td>"+x.nom+"</td><td>"+x.brasserie+"</td><td>"+x.volume+"</td><td>"+x.quantite+"</td><td>"+(x.quantite*x.prix)+"</td>";
    }


    document.getElementById("tabResultats").innerHTML=str;
}
