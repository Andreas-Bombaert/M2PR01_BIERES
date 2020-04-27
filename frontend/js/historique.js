
function connexionHistorique(form){

    /*<--- VARIABLES --->*/

    let clientId ="";
    let mayStop = false;
    let jsonClient,jsonHistorique,jsonVentes;
    let strRetour ="";


    let xhr =  new XMLHttpRequest();
    xhr.open('get','connexion?mail='+form.mail.value+'&mdp='+form.mdp.value,false);
    xhr.onload = function xhrjsoned1(){
        jsonClient = JSON.parse(xhr.responseText);
        console.log(jsonClient);
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

    xhr.open('get','getHistory?code='+clientId,true);
    xhr.onload= function historique(e){
        let jsoned = xhr.responseText;
        jsonHistorique = JSON.parse(jsoned);
        console.log(jsonHistorique);
        e = jsonHistorique;
        return jsonHistorique;
    };
    console.log(jsonHistorique); /** TODO: SQL GROUP BY **/
    xhr.send();
    console.log(jsonHistorique+'BBBBBBB');
    /*
        strRetour +="<table>"+"<thead><th>Id de la commande</th><th>Objet commandé</th><th>Quantité</th><th>Prix Total</th><th>Quantité Totale</th> </thead>";

        let xhr3 = new XMLHttpRequest();

        for(let i in jsonHistorique) {

            strRetour += "<tr><td></td><td></td><td>" + jsonHistorique[i].commId + "</td><td>" + jsonHistorique[i].prixTot + "€ </td><td>" + jsonHistorique[i].quantTot + "</td></tr>";

            xhr3.open('get','getVentes?id='+jsonHistorique[i].commId, true);

            xhr3.onload= function(){
                jsonVentes = JSON.parse(xhr3.responseText);
                for(let j in jsonVentes){
                    strRetour +="<tr><td></td><td></td><td>jsonVentes[j].biereId</td><td>jsonVentes[j].prodQuant</td><td></td><td></td></tr>";
                }
            xhr3.send();
            }
        }
        gid("recuHistorique").innerHTML = strRetour;*/
    return false;
}