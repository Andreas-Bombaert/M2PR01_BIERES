/*
Auth: Cédric 

Permet d'avoir la liste des commId et de pouvoir déduire quelle est la derniere PK afin de ne pas envoyer une commId deja existante.
*/

CREATE PROCEDURE "DBA"."getLastCommId"()
RESULT(commId VARCHAR(5))
BEGIN
    call sa_set_http_header('Access-Control-Allow-Origin','*');
    call sa_set_http_header('Content-Type','application/json');
    Select commId from tbHistoriques
END
