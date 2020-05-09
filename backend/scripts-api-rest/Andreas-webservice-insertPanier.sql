/*
Auteur: Bombaert Andréas HE201872
modifier en fonction de comment on appelera la table panier
*/

CREATE PROCEDURE "dba"."proc_insert_panier"(in bId char(3), in qtt integer)
BEGIN 
    INSERT INTO dba.tbPanier (biereId,quantite)
    VALUES 
    (bId,qtt);
END;


CREATE SERVICE "insertPanier" TYPE 'RAW' AUTHORIZATION OFF USER "dba" METHODS 'GET' AS call dba.proc_insert_panier(:bId,:qtt);
