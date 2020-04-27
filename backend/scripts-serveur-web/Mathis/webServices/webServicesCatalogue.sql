CREATE SERVICE "allBr" TYPE 'JSON' AUTHORIZATION OFF USER "dba" URL ON METHODS 'GET' AS call DBA.proc_catalogueAllBr(:couleur,:pMin,:pMax,:dMin,:dMax);
CREATE SERVICE "allBrAllColors" TYPE 'JSON' AUTHORIZATION OFF USER "dba" URL ON METHODS 'GET' AS call dba.proc_catalogueAllBrAllColors(:pMin,:pMax,:dMin,:dMax);
CREATE SERVICE allColors TYPE 'JSON' AUTHORIZATION OFF USER "dba" URL ON METHODS 'GET' AS call dba.proc_catalogueAllColors(:brasserie,:pMin,:pMax,:dMin,:dMax);
CREATE SERVICE "biereTrie" TYPE 'JSON' AUTHORIZATION OFF USER "dba" URL ON METHODS 'GET' AS call dba.proc_catalogueTrie(:couleur,:brasserie,:pMin,:pMax,:dMin,:dMax);
CREATE SERVICE "initBieres" TYPE 'JSON' AUTHORIZATION OFF USER "dba" URL ON METHODS 'GET' AS call dba.proc_catalogueEntier();
