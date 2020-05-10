/*
auth : Eliott

Creation de la procédure qui récupère toutes les bières insérées dans le panier, 
avec les informations les concernant (biereId, biereNom, biereAlcool et quantité totale).

*/

CREATE PROCEDURE "DBA"."proc_panier"(in cId CHAR(5))
RESULT (idBiere char(3), nomBiere char(30), alcoolBiere INTEGER, volumeBiere INTEGER, prixBiere INTEGER, quantitBiere INTEGER, prixTotal INTEGER)
BEGIN 
    CALL sa_set_http_header('Access-Control-Allow-Origin','*');
    CALL sa_set_http_header('Content-Type','application/json');
    SELECT panier.biereId, biereNom, biereAlcool, biereVolume, bierePrix, sum(quantite) as Quantite, quantite * bierePrix as Total
        FROM dba.tbBieres as biere JOIN dba.tbPanier as panier
           ON biere.biereId = panier.biereId
    WHERE cId = panier.clientId
    GROUP BY panier.biereId, biere.biereNom, biere.biereAlcool, biere.biereVolume, biere.bierePrix
    ORDER BY biere.biereNom;
END;

/* Creation du service : pour recevoirt le code JSON ( 'get' ) */

CREATE SERVICE "panier" TYPE 'JSON' AUTHORIZATION OFF USER "dba" URL ON METHODS 'GET' AS
CALL dba.proc_panier(:cId);
