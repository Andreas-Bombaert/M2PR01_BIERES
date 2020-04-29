
function connexionHistorique(form){

    /*<--- VARIABLES --->*/

    let clientId ="";
    let mayStop = false;
    let jsonClient,jsonHistorique = {},jsonVentes = {};
    let strRetour ="";
    let keyJsonHistorique = [];


    let xhr =  new XMLHttpRequest();
    xhr.open('get','connexion?mail='+form.mail.value+'&mdp='+form.mdp.value,false);
    xhr.onload = function (){
        jsonClient = JSON.parse(xhr.responseText);
        if(Object.keys(jsonClient).length === 0){

            document.querySelector('#recuHistorique').innerHTML="<p> Mauvais identifiant ou mauvais mot de passe</p>";
            mayStop = true;
        }
        else{
            clientId = String(jsonClient[0].clientId);
        }
    };
    xhr.send();

    if(mayStop === true){
        return false;
    }

    xhr = new XMLHttpRequest();
    xhr.open('get','getHistory?code='+clientId,false);
    xhr.onload= function (){
        jsonHistorique= Object.assign(jsonHistorique,JSON.parse(xhr.responseText));
        };
    xhr.send();

    keyJsonHistorique = Object.keys(jsonHistorique);

    if(keyJsonHistorique.length === 0){
        gid("recuHistorique").innerHTML = "Vous avez passé 0 commande sur notre site.";
        return false;
    }

    strRetour +="<table>"+"<thead><th>Id de la commande</th><th>Prix Total</th><th>Quantité Totale</th><th></th> </thead>";
    for(let i in jsonHistorique) {
        strRetour += "<tr id="+ jsonHistorique[i].commId +"><td>" + jsonHistorique[i].commId + "</td>"
            + "<td>" + jsonHistorique[i].prixTot + "€ </td>"
            + "<td>" + jsonHistorique[i].quantTot +"</td>"
            + "<td id= detail_"+jsonHistorique[i].commId+"></td></tr>";
    }
    gid("recuHistorique").innerHTML = strRetour;

    for(let i in jsonHistorique){
        let detailStr = "";
        xhr = new XMLHttpRequest();
        xhr.open('get','getVentes?id='+jsonHistorique[i].commId,false);
        xhr.onload= function(){
            jsonVentes= Object.assign(jsonVentes,JSON.parse(xhr.responseText));
        };
        xhr.send();

        detailStr+="<details><summary>Details produit</summary>";
        for(let j in jsonVentes){
            detailStr+= "Produit = "+jsonVentes[j].biereId+" ,Quantité = "+jsonVentes[j].prodQuant+ " ,<br>";
        }
        detailStr+="</details>";
        gid("detail_"+jsonHistorique[i].commId+"").innerHTML = detailStr;
    }

    return false;
}