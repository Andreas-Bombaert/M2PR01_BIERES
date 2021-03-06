/*
auth : Mathis
Creation de la procédure qui récupère toutes les bières. Elle renvoit un id, le nom, la couleur, le degré d'alcoolémie, le volume, la brasserie et le prix.
*/
CREATE PROCEDURE "DBA"."proc_catalogueEntier"()
RESULT (id char(3), biere varchar(30), couleur varchar(15), alcool decimal(3,1), volume decimal(4,2), brasserie varchar(60), prix decimal(4,2))
BEGIN
    call sa_set_http_header('Access-Control-Allow-Origin','*');
    call sa_set_http_header('Content-Type','application/json');
    select biereId, biereNom, biereCouleur, biereAlcool, biereVolume, brasseurNom, bierePrix from dba.tbBieres as biere
    join dba.tbBrasseurs as brasseur on biere.brasseurId = brasseur.brasseurId 
    order by biere.biereNom ASC;
END;
/*
auth : Mathis
Creation du webservice pour la procédure catalogueEntier
*/
CREATE SERVICE "initBieres" TYPE 'JSON' AUTHORIZATION OFF USER "dba" URL ON METHODS 'GET' AS call dba.proc_catalogueEntier();
