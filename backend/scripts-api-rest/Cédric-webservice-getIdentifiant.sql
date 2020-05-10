
/*
auth : Cédric De Dryver
Procedure et service pour avoir les identifiants (et verifier qu'ils sont bon).
Retourne le clientId
*/


CREATE PROCEDURE "DBA"."getIdentifiant" (IN mail VARCHAR(50),IN motDePasse VARCHAR(20))
RESULT(identifiant VARCHAR(20), mdp VARCHAR(20), clientId CHAR(5))
BEGIN
    call sa_set_http_header('Access-Control-Allow-Origin','*');
    call sa_set_http_header('Content-Type','application/json');
    select clientMail, clientPassword, clientId from tbClients
    where mail = clientMail AND motDePasse = clientPassword
END;

/* Service pour la procedure getIdentifiant /getIdentifiant?mail=xxx@xxx.com&mdp?xxxx */

CREATE SERVICE "connexion" TYPE 'JSON' AUTHORIZATION OFF USER "dba" URL ON METHODS 'GET' AS call dba.getIdentifiant(:mail,:mdp);
