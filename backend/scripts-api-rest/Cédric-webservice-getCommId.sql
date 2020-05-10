/*
auth: Cédric

Permet de recevoir la totalité des commId afin de recevoir le dernier de la liste.  
(la fonction SQL LAST() n'existe pas sur SQLANY donc je dois voir ça au niveau du js ( je n'ai pas trouvé d'autre alternative )).

*/
CREATE PROCEDURE "dba"."getCommId"()
RESULT(commId VARCHAR(5))
BEGIN
    call sa_set_http_header('Access-Control-Allow-Origin','*');
    call sa_set_http_header('Content-Type','application/json');
    Select commId from tbHistoriques
END;

CREATE SERVICE "getCommId" TYPE 'JSON' AUTHORIZATION OFF USER "dba" URL ON METHODS 'GET' AS call dba.getCommId();
