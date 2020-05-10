/*
Auth: Cédric

Permet d'ajouter la commande a la table Historique.
*/


CREATE PROCEDURE proc_insert_tbHistoriques(in coId CHAR(5), in cId CHAR(5), in qttTot INTEGER)
BEGIN
    INSERT INTO DBA.tbHistoriques(commId,clientId,prixTot,quantTot)
        VALUES
    (coId,cId, calcPrixTot(coId), qttTot)
END;

CREATE SERVICE "insertHistorique" TYPE 'RAW' AUTHORIZATION OFF USER "dba" METHODS 'GET' AS call dba.proc_insert_tbHistoriques(:coId,:cId,:qttTot);
