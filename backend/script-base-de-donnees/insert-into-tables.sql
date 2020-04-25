/*
Données des villes ( par Eliott ),
*/
INSERT INTO tbVilles (vilId, vilNom) 
VALUES
('2390', 'Malle'),
('3570', 'Alken'),
('3000', 'Leuven'),
('5030', 'Gembloux'),
('5530', 'Yvoir'),
('9255', 'Buggenhout'),
('5500', 'Dinant'),
('2030', 'Anvers'),
('5020', 'Malonne'),
('7900', 'Leuze-en-Hainaut'),
('2870', 'Puurs'),
('5580', 'Rochefort'),
('6460', 'Chimay'),
('6823', 'Orval');

/*
Donnée des Brasseurs ( par Eliott ),
*/
INSERT INTO tbBrasseurs (brasseurId, brasseurNom, vilId)
    VALUES
    ('br01', 'Brasserie Orval', '6823'),
    ('br02', 'Brasserie Westmalle', '2390'),
    ('br03', 'Brasserie Alken', '3570'),
    ('br04', 'Brasserie Artois', '3000'),
    ('br05', 'Brasserie Bertinchamps', '5030'),
    ('br06', 'Brasserie Du Bocq', '5530'),
    ('br07', 'Brasserie Bosteels', '9255'),   
    ('br08', 'Brasserie Caracole', '5500'),
    ('br09', 'Brasserie De Konick', '2030'),
    ('br10', 'Brasserie Du Clocher', '5020'),
    ('br11', 'Brasserie Dubuisson', '7900'),
    ('br12', 'Brasserie Duvel', '2870'),
    ('br13', 'Brasserie de Abbaye de Notre Dame de Saint-Rémy', '5580'),
    ('br14', 'Brasserie de Abbaye Notre-Dame de Scourmont', '6460');

/*
Données du tableau des bières ( par Mathis ),
*/
INSERT INTO tbBieres(biereId, biereNom, biereCouleur, biereAlcool, biereVolume, bierePrix, brasseurId)
 VALUES
 ('b01', 'Orval', 'ambrée', 6.2, 33, 3.10, 'br01'),
 ('b02', 'Westmalle Triple', 'blonde', 9.5, 33, 2.30, 'br02'),
 ('b03', 'Bertinchamps Blonde', 'blonde', 6.2, 50, 3.20, 'br05'),
 ('b04', 'Bertinchamps Triple', 'blonde', 8.0, 50, 3.50, 'br05'),
 ('b05', 'Bertinchamps Brune', 'brune', 7.0, 50, 3.50, 'br05'),
 ('b06', 'Stella', 'blonde', 5.2, 25, 1.50, 'br04'),
 ('b07', 'Leffe Blonde', 'blonde', 6.6, 33, 2.39, 'br04'),
 ('b08', 'Leffe Brune', 'brune', 6.5, 33, 2.59, 'br04'),
 ('b09', 'Leffe Royale', 'blonde', 7.5, 75, 8.50, 'br04'),
 ('b10', 'Vieux-temps', 'blonde', 4.5, 25, 1.90, 'br04'),
 ('b11', 'Gauloise Blonde', 'blonde', 6.3, 33, 2.30, 'br06'),
 ('b12', 'Gauloise Ambrée', 'ambrée', 5.5, 33, 2.45, 'br06'),
 ('b13', 'Gauloise Brune', 'brune', 8.1, 33, 2.39, 'br06'),
 ('b14', 'Gauloise Triple', 'blonde', 9.7, 33, 2.88, 'br06'),
 ('b15', 'Gauloise Rouge', 'fruitée', 8.2, 33, 2.62, 'br06'),
 ('b16', 'Blanche de Namur', 'blanche', 4.5, 33, 1.72, 'br06'),
 ('b17', 'Kwak', 'ambrée', 8.1, 33, 2.29, 'br07'),
 ('b18', 'Triple Karmeliet', 'blonde', 8.4, 33, 2.87, 'br07'),
 ('b19', 'Troublette', 'blanche', 5.5, 33, 2.30, 'br08'),
 ('b20', 'Caracole', 'ambrée', 7.9, 33, 2.49, 'br08'),
 ('b21', 'Triple d'' Anvers', 'blonde', 8.0, 33, 2.67, 'br09'),
 ('b22', 'Philomène florale', 'blonde', 5.5, 33, 2.46, 'br10'),
 ('b23', 'Philomène hoptimale', 'ambrée', 7.2, 33, 3.25, 'br10'),
 ('b24', 'Bush Caractères', 'ambrée', 12.0, 33, 2.50, 'br11'),
 ('b25', 'Bush Triple', 'ambrée', 12.0, 75, 6.80, 'br11'),
 ('b26', 'Bush de Nuits', 'brune', 12.0, 75, 18.99, 'br11'),
 ('b27', 'Bush du Noël', 'brune', 12.0, 33, 2.70, 'br11'),
 ('b28', 'Pêche Mel Bush', 'fruitée', 8.5, 33, 2.70, 'br11'),
 ('b29', 'Cuvée des trolls', 'blonde', 7.0, 33, 1.89, 'br11'),
 ('b30', 'Duvel', 'blonde',  8.5, 33, 1.98, 'br12'),
 ('b31', 'Maredsous', 'brune',  8.0, 33, 2.39, 'br12'),
 ('b32', 'Vedett Extra Blond', 'blonde', 5.2, 33, 2.70, 'br12'),
 ('b33', 'Rochefort 6', 'brune', 7.5, 33, 2.30, 'br13'),
 ('b34', 'Rochefort 8', 'brune', 9.2, 33, 2.33, 'br13'),
 ('b35', 'Rochefort 10', 'brune', 11.3, 33, 2.50, 'br13'),
 ('b36', 'Chimay Bleu', 'brune', 9.0, 33, 2.76, 'br14'),
 ('b37', 'Chimay Tripple', 'blonde', 8, 33, 2.48, 'br14'),
 ('b38', 'Chimay Rouge', 'ambrée', 7.0, 33, 2.75, 'br14'),
 ('b39', 'Chimay Dorée', 'blonde', 4.8, 33, 2.35, 'br14'),
 ('b40', 'Cristal', 'blonde', 4.8, 33, 1.70, 'br03'),
 ('b41', 'Maes', 'blonde', 5.2, 33, 1.65, 'br03'),
 ('b42', 'Ciney', 'blonde', 7.0, 33, 2.00, 'br03'),
 ('b43', 'Grimbergen Blonde', 'blonde', 6.7, 33, 2.10, 'br03'),
 ('b44', 'Grimbergen Dubbel', 'brune', 6.5, 33, 2.15, 'br03'),
 ('b45', 'Grimbergen Triple', 'blonde', 9.0, 33, 2.25, 'br03'),
 ('b46', 'Grimbergen Optimo Bruno', 'brune', 10, 33, 2.45, 'br03'),
 ('b47', 'Grimbergen Hiver', 'brune', 6.5, 33, 2.25, 'br03'),
 ('b48', 'Grimbergen Printemps', 'fruitée', 6.0, 33, 2.23, 'br03');
 
/*
Insère une liste de clients aléatoires pour effectuer des tests ( par Andréas ),
*/
INSERT INTO tbClients(clientId,clientNom,clientPrenom,clientAdresse,clientMail,clientPassword)
VALUES
('cl001','Tétrault','Solène','321 Chaussée de Liège 3220 Holsbeek','SolaineTetrault@armyspy.com','cl001'),
('cl002','Pellerin','Donat','104 Schoolstraat 4280 Wansin','DonatPellerin@dayrep.com','cl002'),
('cl003','Doyon','Jessamine','419 Rue des Honnelles 5530 Yvoir','JessamineDoyon@rhyta.com','cl003'),
('cl004','Josseaume','Corette','289 Langestraat 9120 Kallo','CoretteJosseaume@rhyta.com','cl004'),
('cl005','Gareau','Tyson','305 Rue de Birmingham 9890 Dikkelvenne','TysonGareau@jourrapide.com','cl005'),
('cl006','Labbé','Musette','216 Rue de Liège 4987 Lorcé','MusetteLabbe@armyspy.com','cl006'),
('cl007','Huppé','Cheney','418 Pierre Delannoyplaats 9940 Ertvelde','CheneyHuppe@rhyta.com','cl007'),
('cl008','Beaudry','Yves','427 Maskenstraat 8650 Klerken','YvesBeaudry@dayrep.com','cl008'),
('cl009','Boutot','Arianne','485 Brixtonlaan 7160 Chapelle-lez-Herlaimont','ArianneBoutot@armyspy.com','cl009'),
('cl010','Monjeau','Lothaire','340 Rue des Taillis 7863 Ghoy','LothairMonjeau@rhyta.com','cl010'),
('cl011','Forest','Adrienne','327 Place Léopold 7050 Herchies','AdrienneForest@rhyta.com','cl011'),
('cl012','Lacharité','Brunella','245 Rue de Bouillon 7830 Graty','BrunellaLacharite@jourrapide.com','cl012'),
('cl013','Deschamps','Joseph','209 Mandemakersstraat 6666 Wibrin','JosephDeschamps@dayrep.com','cl013'),
('cl014','Archambault','Fayette','318 Dijkstraat 9620 Elene','FayetteArchambault@dayrep.com','cl014'),
('cl015','Ruais','Martin','145 Rue des Taillis 7041 Givry','MartinRuais@dayrep.com','cl015'),
('cl016','Plaisance','Didier','472 Rue de la Poste 4557 Ramelot','DidierPlaisance@jourrapide.com','cl016'),
('cl017','Lamontagne','Yolande','292 Rue de Fontigny 8972 Roesbrugge-Haringe','YolandeLamontagne@rhyta.com','cl017'),
('cl018','Adler','Océane','433 Rue du Vert Galant 6830 Poupehan','OceaneAdler@dayrep.com','cl018'),
('cl019','Lépicier','Pinabel','20 Rue des Tanneurs 7160 Piéton','PinabelLepicier@rhyta.com','cl019'),
('cl020','Bérubé','Thérèse','405 Rue Bouhouille 3290 Schaffen','ThereseBerube@jourrapide.com','cl020');


/*
Données de l'historique des commandes aléatoire et prévisioire. ( par Cédric ),
*/
INSERT INTO tbHistoriques (commId,clientId,prixTot,quantTot) 
    VALUES
('co001','cl004', 29.09, 11),                                 // 3*b12 + 2*b01 +6*b08
('co002','cl011', 11.95, 5),                                  // 5*b31
('co003','cl007', 39.6, 24),                                  // 24*b41
('co004','cl020', 11.88, 6),                                  // 6*b30
('co005','cl001', 80.88, 18),                                 // 6*b07 + 6*b08 + 6*b09
('co006','cl012', 26.42, 10),                                 // 6*b18 + 4*b33
('co007','cl006', 27.48, 12),                                 // 12*b17
('co008','cl003', 36.00, 24),                                 // 24*b06
('co009','cl011', 47.04, 18),                                 // 6*b01 + 6*b30 + 6*b36
('co010','cl019', 43.00, 20),                                 // 10*b43 + 5*b44 + 5*b45
('co011','cl008', 28.55, 10),                                 // 5*b22 + 5*b23
('co012','cl014', 128.68, 49),                                // 6*b30 + 6*b17 + b09 + 24*b07 + 6*b01
('co013','cl016', 14.34, 6),                                  // 6*b31
('co014','cl008', 62.04, 24);                                 // 6*b36 + 6*b37 + 6*b38 + 6*b39

/*
Donnée des ventes. ( par Cédric ),
*/
INSERT INTO tbVentes (commId,ligneNo,biereId,prodQuant) 
    VALUES
('co001', 1, 'b12', 3),
('co001', 2, 'b01', 2),
('co001', 3, 'b08', 6),
('co002', 1, 'b31', 5),
('co003', 1, 'b41', 24),
('co004', 1, 'b30', 6),
('co005', 1, 'b07', 6),
('co005', 2, 'b08', 6),
('co005', 3, 'b09', 6),
('co006', 1, 'b18', 6),
('co006', 2, 'b33', 4),
('co007', 1, 'b17', 12),
('co008', 1, 'b06', 24),
('co009', 1, 'b01', 6),
('co009', 2, 'b30', 6),
('co009', 3, 'b36', 6),
('co010', 1, 'b43', 10),
('co010', 2, 'b44', 5),
('co010', 3, 'b45', 5),
('co011', 1, 'b22', 5),
('co011', 2, 'b23', 5),
('co012', 1, 'b30', 6),
('co012', 2, 'b17', 6),
('co012', 3, 'b09', 1),
('co012', 4, 'b07', 24),
('co012', 5, 'b01', 6),
('co013', 1, 'b31', 6),
('co014', 1, 'b36', 6),
('co014', 2, 'b37', 6),
('co014', 3, 'b38', 6),
('co014', 4, 'b39', 6);

