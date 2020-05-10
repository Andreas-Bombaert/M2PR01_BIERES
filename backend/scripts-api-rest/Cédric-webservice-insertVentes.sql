/*
  auth: Cédric
  
  Permet d'ajouter dans la commande dans la table Ventes.
  
*/
CREATE PROCEDURE proc_insert_tbVentes(in coId CHAR(5), in bId CHAR(3), in numL INTEGER, in qtt INTEGER)
BEGIN
    INSERT INTO DBA.tbVentes(commId,biereId,ligneNo,prodQuant)
    VALUES
    (coId,bId,numL,quant);
END;

CREATE SERVICE "insertVente" TYPE 'RAW' AUTHORIZATION OFF USER "dba" METHODS 'GET' AS call dba.proc_insert_tbVentes(:coId,:bId,:numL,:qtt);

