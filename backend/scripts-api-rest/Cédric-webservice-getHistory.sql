/*
auth : Cédric
  Procédure qui envoi le contenu de tbHistory selon le commId demandé
  
  input (CHAR(5)) : commId que l'on veut ('coXXX').
  output (JSON)   : Renvoi le contenu de la tbHistory selon le code en JSON.
*/

CREATE PROCEDURE "DBA"."proc_getHistory"(IN code CHAR(5))
RESULT(commId CHAR(5),clientId char(5), prixTot decimal(6,2), quantTot integer, "date" datetime)
BEGIN
    call sa_set_http_header('Access-Control-Allow-Origin','*');
    call sa_set_http_header('Content-Type','application/json');
    Select commId, clientId, prixTot, quantTot, "date" from tbHistoriques
    where clientId = code
END;


 ---
/* Service pour recevoir le code JSON ( 'get'  '/history?id=co001' ).*/

CREATE SERVICE "getHistory" TYPE 'JSON' AUTHORIZATION OFF USER "dba" URL ON METHODS 'GET' AS call dba.proc_getHistory(:code);
