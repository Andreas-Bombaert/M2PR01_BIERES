/*
Auteur: Bombaert Andréas HE201872
modifier en fonction de comment on appelera la table panier
*/

CREATE PROCEDURE "DBA"."proc_insert_panier"(in bId char(3), in qtt integer, in cId char(5))
BEGIN 
    INSERT INTO dba.tbPanier (clientId,biereId,quantite)
    VALUES 
    (cId,bId,qtt);
END;


CREATE SERVICE "insertPanier" TYPE 'RAW' AUTHORIZATION OFF USER "dba" METHODS 'GET' AS call dba.proc_insert_panier(:bId,:qtt,:cId);
