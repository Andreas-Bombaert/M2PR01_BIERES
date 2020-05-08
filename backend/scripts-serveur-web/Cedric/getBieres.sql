
/*
auth : Cédric De Dryver

Procedure et service pour l'onglet Historique.

Retourne la liste complète des biereId et les les biereNom
*/


CREATE PROCEDURE "DBA"."getBiereNom"()
RESULT( biereId varchar(3), biereNom varchar(30))
BEGIN
    call sa_set_http_header('Access-Control-Allow-Origin','*');
    call sa_set_http_header('Content-Type','application/json');
    Select biereId, biereNom from tbBieres
end

/* service pour la procedure */

CREATE SERVICE "getBieres" TYPE 'JSON' AUTHORIZATION OFF USER "dba" URL ON METHODS 'GET' AS CALL dba.getBiereNom();
