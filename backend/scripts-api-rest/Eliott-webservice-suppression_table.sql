/*
auth : Eliott

Création de la procédure qui supprime une catégorie de bière, en fonction de son id.

*/

CREATE PROCEDURE "dba"."proc_suppression_table"(IN id CHAR(3), IN clId char(5))
BEGIN 
    DELETE FROM tbPanier
    WHERE biereId = id and clientId=clId;
END



/* Création du webservice lié à la procédure */

CREATE SERVICE "suppression" TYPE 'RAW' AUTHORIZATION OFF USER "dba" URL ON METHODS 'GET' AS call dba.proc_suppression_table(:id,:clId);
