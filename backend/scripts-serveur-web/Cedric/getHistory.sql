/*
auth : Cédric

Fonction pour tbHistorique.prixTot

input      (CHAR(5)) : id commande (comme cela 'coXXX') ou XX correspond a une commande (ex: select calcPrixTot('co001');
return(decimal(6,2)) : le prix total d'une commande 
*/

CREATE FUNCTION calcPrixTot(IN code CHAR(5))
returns decimal(6,2)
begin
    declare calcul decimal(6,2);     //VAR de calcul
    
    set calcul = (select sum(bierePrix * prodQuant) from tbVentes join tbBieres on tbVentes.biereId = tbBieres.biereId
    where tbVentes.commId = code);
    
    return calcul;
END
---

/*
  Procédure qui envoi le contenu de tbHistory selon le commId demandé
  
  input (CHAR(5)) : commId que l'on veut ('coXXX').
  output (JSON)   : Renvoi le contenu de la tbHistory selon le code en JSON.
*/

CREATE PROCEDURE "DBA"."getHistory"(IN code CHAR(5))
RESULT(commId CHAR(5),clientId char(5), prixTot decimal(6,2), quantTot integer, "date" datetime)
BEGIN
    call sa_set_http_header('Access-Control-Allow-Origin','*');
    call sa_set_http_header('Content-Type','application/json');
    Select commId, clientId, calcPrixTot(code), quantTot, "date" from tbHistoriques
    where commId = code
end

 ---
/* Service pour recevoir le code JSON ( 'get'  '/history?id=co001' ).

CREATE SERVICE "history" TYPE 'JSON' AUTHORIZATION OFF USER "dba" URL ON METHODS 'GET' AS call dba.getHistory(:id);
