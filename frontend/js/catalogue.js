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
