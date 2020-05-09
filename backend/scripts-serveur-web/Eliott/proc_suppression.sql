/* auth: Eliott Lepage

Création de de la procédure qui supprime la totalité de la table tbPanier contenant les bières
*/

CREATE PROCEDURE "DBA"."proc_suppression_all_table"()
BEGIN 
    DELETE FROM tbPanier;
END;


/* Création du webservice lié à la procédure */

CREATE SERVICE "suppression_all" TYPE 'RAW' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call DBA.proc_suppression_all_table();
