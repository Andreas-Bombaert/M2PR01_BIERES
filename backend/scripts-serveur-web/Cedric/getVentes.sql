/*
auth : Cédric De Dryver

Procedure pour envoyer en json la commande complète

*/
CREATE PROCEDURE getVentesByCommId(IN code CHAR(5))
RESULT(commId CHAR(5), ligneNo INTEGER, biereId CHAR(3), prodQuant INTEGER)
BEGIN
    call sa_set_http_header('Access-Control-Allow-Origin','*');
    call sa_set_http_header('Content-Type','application/json');
    select commId, ligneNo, biereId, prodQuant from tbVentes
    where commId = code
END;

/* Service pour la procedure "/getVentes?id=xxxx" */

CREATE SERVICE "getVentes" TYPE 'JSON' AUTHORIZATION OFF USER "dba" URL ON METHODS 'GET' AS call dba.getVentesByCommId(:id);
