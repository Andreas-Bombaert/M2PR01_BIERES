/*
Auth : Cédric

Permet de calculer la quantité de la biere dans la tbPanier en fonction du client
*/
CREATE FUNCTION "DBA"."calcProdPanier"(IN cId CHAR(5),IN bId CHAR(3))
RETURNS INTEGER 
DETERMINISTIC
BEGIN
    declare calcul INTEGER;
    set calcul = (SELECT sum(quantite) FROM tbPanier 
    where clientId = cId AND biereId = bId);
    return calcul;
END
