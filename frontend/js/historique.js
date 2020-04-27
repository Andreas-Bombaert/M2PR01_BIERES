
function connexionHistorique(form){
    let xhr =  new XMLHttpRequest();
    xhr.open('get','connexion?mail='+form.mail.value+'&mdp='+form.mdp.value);
    xhr.onload = function(){
        let jsoned = JSON.parse(xhr.responseText);
        console.log(jsoned);
        if(jsoned == ""){
            document.querySelector('#recuHistorique').innerHTML="<p> Mauvais identifiant ou mauvais mot de passe</p>";
        }
        else{
            document.querySelector("#recuHistorique").innerHTML = jsoned;
        }
    }
    xhr.send();
    return false;
}