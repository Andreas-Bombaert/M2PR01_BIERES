CREATE TABLE tbClients(
  clientId INTEGER NOT NULL DEFAULT AUTOINCREMENT,
  clientNom VARCHAR(20) NOT NULL,
  clientPrenom VARCHAR(20) NOT NULL,
  clientAdresse VARCHAR(50) NOT NULL,
  clientMail VARCHAR(50) NOT NULL,
  CONSTRAINT pk__Clients PRIMARY KEY (clientId ASC)
);

INSERT INTO Clients(clientNom,clientPrenom,clientAdresse,clientMail)
VALUES
('Tétrault','Solène','321 Chaussée de Liège 3220 Holsbeek','SolaineTetrault@armyspy.com'),
('Pellerin','Donat','104 Schoolstraat 4280 Wansin','DonatPellerin@dayrep.com'),
('Doyon','Jessamine','419 Rue des Honnelles 5530 Yvoir','JessamineDoyon@rhyta.com'),
('Josseaume','Corette','289 Langestraat 9120 Kallo','CoretteJosseaume@rhyta.com'),
('Gareau','Tyson','305 Rue de Birmingham 9890 Dikkelvenne','TysonGareau@jourrapide.com'),
('Labbé','Musette','216 Rue de Liège 4987 Lorcé','MusetteLabbe@armyspy.com'),
('Huppé','Cheney','418 Pierre Delannoyplaats 9940 Ertvelde','CheneyHuppe@rhyta.com'),
('Beaudry','Yves','427 Maskenstraat 8650 Klerken','YvesBeaudry@dayrep.com'),
('Boutot','Arianne','485 Brixtonlaan 7160 Chapelle-lez-Herlaimont','ArianneBoutot@armyspy.com'),
('Monjeau','Lothaire','340 Rue des Taillis 7863 Ghoy','LothairMonjeau@rhyta.com'),
('Forest','Adrienne','327 Place Léopold 7050 Herchies','AdrienneForest@rhyta.com'),
('Lacharité','Brunella','245 Rue de Bouillon 7830 Graty','BrunellaLacharite@jourrapide.com'),
('Deschamps','Joseph','209 Mandemakersstraat 6666 Wibrin','JosephDeschamps@dayrep.com'),
('Archambault','Fayette','318 Dijkstraat 9620 Elene','FayetteArchambault@dayrep.com'),
('Ruais','Martin','145 Rue des Taillis 7041 Givry','MartinRuais@dayrep.com'),
('Plaisance','Didier','472 Rue de la Poste 4557 Ramelot','DidierPlaisance@jourrapide.com'),
('Lamontagne','Yolande','292 Rue de Fontigny 8972 Roesbrugge-Haringe','YolandeLamontagne@rhyta.com'),
('Adler','Océane','433 Rue du Vert Galant 6830 Poupehan','OceaneAdler@dayrep.com'),
('Lépicier','Pinabel','20 Rue des Tanneurs 7160 Piéton','PinabelLepicier@rhyta.com'),
('Bérubé','Thérèse','405 Rue Bouhouille 3290 Schaffen','ThereseBerube@jourrapide.com');
