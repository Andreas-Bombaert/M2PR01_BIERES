CREATE PROCEDURE "DBA"."proc_catalogueAllBr"(in couleur varchar(15), in pMin decimal(4,2), in pMax decimal(4,2), in dMin decimal(3,1), in dMax decimal(3,1))
RESULT (id char(3), biere varchar(30), couleur varchar(15), alcool decimal(3,1), volume decimal(4,2), brasserie varchar(60), prix decimal(4,2))
BEGIN
    call sa_set_http_header('Access-Control-Allow-Origin','*');
    call sa_set_http_header('Content-Type','application/json');
    select biereId, biereNom, biereCouleur, biereAlcool, biereVolume, brasseurNom, bierePrix from dba.tbBieres as biere
    join dba.tbBrasseurs as brasseur on biere.brasseurId = brasseur.brasseurId 
    where biereCouleur = couleur AND (bierePrix BETWEEN pMin AND pMax) AND (biereAlcool BETWEEN dMin AND dMax)
    order by brasseur.brasseurId ASC;
END