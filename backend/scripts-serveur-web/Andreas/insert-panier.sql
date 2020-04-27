CREATE PROCEDURE "dba"."proc_insert_panier"(in bId char(3), in qtt integer)
BEGIN 
    INSERT INTO dba.panier (biereId,quantite)
    VALUES 
    (bId,qtt);
END
