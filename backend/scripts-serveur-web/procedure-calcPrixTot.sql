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
