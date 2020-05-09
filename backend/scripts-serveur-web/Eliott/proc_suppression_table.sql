/*
auth : Eliott

Création de la procédure qui supprime une catégorie de bière, en fonction de son id
*/

CREATE PROCEDURE "DBA"."proc_suppression_table"(IN id CHAR(3))
BEGIN 
    DELETE FROM tbPanier
    WHERE biereId = id;
END;



/* Création du webservice lié à la procédure */

CREATE SERVICE "suppression" TYPE 'RAW' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call dba.proc_suppression_table(:id);
