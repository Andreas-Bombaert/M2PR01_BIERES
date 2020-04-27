
function connexionHistorique(form){
    let clientId ="";
    let xhr =  new XMLHttpRequest();
    xhr.open('get','connexion?mail='+form.mail.value+'&mdp='+form.mdp.value, true);
    xhr.onload = function(){
        let jsoned = JSON.parse(xhr.responseText);
        console.log(jsoned);
        if(jsoned == ""){
            document.querySelector('#recuHistorique').innerHTML="<p> Mauvais identifiant ou mauvais mot de passe</p>";
        }
        else{
            clientId = jsoned[0].clientId;
        }

    };
    xhr.send();

    let xhr2 = new XMLHttpRequest();
    console.log(clientId);
    xhr2.open('get','getHistory?code='+clientId, true);
    xhr2.onload = function(){
        let jsoned2 = JSON.parse(xhr2.responseText);
        console.log(jsoned2);
    };
    xhr2.send();

    return false;
}