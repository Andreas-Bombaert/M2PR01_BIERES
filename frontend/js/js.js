/*Fonction pour aller chercher les valeurs et id des brasseurs et les injecter dans le select de la page catalogue*/
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
