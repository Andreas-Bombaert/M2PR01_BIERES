
function connexionHistorique(form){
    let clientId ="";
    let mayStop = false;
    let xhr =  new XMLHttpRequest();
    xhr.open('get','connexion?mail='+form.mail.value+'&mdp='+form.mdp.value,false);
    xhr.onload = function xhrjsoned1(){
        let jsonClient = JSON.parse(xhr.responseText);
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
    if(mayStop == true){
        return false;
    }

    let xhr2 = new XMLHttpRequest();
    xhr2.open('get','getHistory?code='+clientId,false);
    xhr2.onload = function xhrjsoned2(){
        let tabRetour="<table>"+"<thead><th>Id de la commande</th><th>Prix Total</th><th>Quantité Totale</th> </thead>";

        let jsonHistorique = JSON.parse(xhr2.responseText);
        for(let i in jsonHistorique){
            tabRetour +="<tr><td>"+jsonHistorique[i].commId+"</td><td>"+jsonHistorique[i].prixTot+"€ </td><td>"+jsonHistorique[i].quantTot+"</td></tr>";
        }
        document.getElementById("recuHistorique").innerHTML = tabRetour;
    };

    xhr2.send();

    return false;
}