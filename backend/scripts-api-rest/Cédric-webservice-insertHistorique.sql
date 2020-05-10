/*
Auth: Cédric

Permet d'ajouter la commande a la table Historique.
*/


CREATE PROCEDURE "DBA"."proc_insert_tbHistoriques"(in coId CHAR(5), in cId CHAR(5), in prTot DECIMAL(6,2), in qttTot INTEGER)
BEGIN
    INSERT INTO DBA.tbHistoriques(prixTot,commId,clientId,quantTot)
        VALUES (prTot,coId,cId,qttTot)
END;

CREATE SERVICE "insertHistorique" TYPE 'RAW' AUTHORIZATION OFF USER "dba" METHODS 'GET' AS call dba.proc_insert_tbHistoriques(:coId,:cId,:prTot,:qttTot);
