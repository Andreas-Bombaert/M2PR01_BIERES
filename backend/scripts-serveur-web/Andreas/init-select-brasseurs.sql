
/*
Creation de la procédure qui sélectionne les id et les noms des brasseurs
*/
CREATE PROCEDURE "dba"."init_brasseurs"()
BEGIN
    Call sa_set_http_header('Access-Control-Allow-Origin','*');
    call sa_set_http_header('Content-Type','application/json');
    select brasseurId, brasseurNom from dba.tbBrasseurs
    order by brasseurNom ASC;
END

/*Creation du service*/
CREATE SERVICE "initBrasseurs" TYPE 'JSON' AUTHORIZATION OFF USER "dba" URL ON METHODS 'GET' AS call dba.init_brasseurs();
