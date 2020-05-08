
/*
auth : Cédric

Procedure et service pour l'onglet Historique.

Retourne 
*/


CREATE PROCEDURE "DBA"."getBiereNom"()
RESULT( biereId varchar(3), biereNom varchar(30))
BEGIN
    call sa_set_http_header('Access-Control-Allow-Origin','*');
    call sa_set_http_header('Content-Type','application/json');
    Select biereId, biereNom from tbBieres
end

CREATE SERVICE "getBieres" TYPE 'JSON' AUTHORIZATION OFF USER "dba" URL ON METHODS 'GET' AS CALL dba.getBiereNom();
