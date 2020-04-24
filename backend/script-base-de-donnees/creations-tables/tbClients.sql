CREATE TABLE tbClients(
  clientId VARCHAR(5) NOT NULL,
  clientNom VARCHAR(20) NOT NULL,
  clientPrenom VARCHAR(20) NOT NULL,
  clientAdresse VARCHAR(50) NOT NULL,
  clientMail VARCHAR(50) NOT NULL,
  CONSTRAINT pk__Clients PRIMARY KEY (clientId)
);

INSERT INTO tbClients(clientId,clientNom,clientPrenom,clientAdresse,clientMail)
VALUES
('cl001','Tétrault','Solène','321 Chaussée de Liège 3220 Holsbeek','SolaineTetrault@armyspy.com'),
('cl002','Pellerin','Donat','104 Schoolstraat 4280 Wansin','DonatPellerin@dayrep.com'),
('cl003','Doyon','Jessamine','419 Rue des Honnelles 5530 Yvoir','JessamineDoyon@rhyta.com'),
('cl004','Josseaume','Corette','289 Langestraat 9120 Kallo','CoretteJosseaume@rhyta.com'),
('cl005','Gareau','Tyson','305 Rue de Birmingham 9890 Dikkelvenne','TysonGareau@jourrapide.com'),
('cl006','Labbé','Musette','216 Rue de Liège 4987 Lorcé','MusetteLabbe@armyspy.com'),
('cl007','Huppé','Cheney','418 Pierre Delannoyplaats 9940 Ertvelde','CheneyHuppe@rhyta.com'),
('cl008','Beaudry','Yves','427 Maskenstraat 8650 Klerken','YvesBeaudry@dayrep.com'),
('cl009','Boutot','Arianne','485 Brixtonlaan 7160 Chapelle-lez-Herlaimont','ArianneBoutot@armyspy.com'),
('cl010','Monjeau','Lothaire','340 Rue des Taillis 7863 Ghoy','LothairMonjeau@rhyta.com'),
('cl011','Forest','Adrienne','327 Place Léopold 7050 Herchies','AdrienneForest@rhyta.com'),
('cl012','Lacharité','Brunella','245 Rue de Bouillon 7830 Graty','BrunellaLacharite@jourrapide.com'),
('cl013','Deschamps','Joseph','209 Mandemakersstraat 6666 Wibrin','JosephDeschamps@dayrep.com'),
('cl014','Archambault','Fayette','318 Dijkstraat 9620 Elene','FayetteArchambault@dayrep.com'),
('cl015','Ruais','Martin','145 Rue des Taillis 7041 Givry','MartinRuais@dayrep.com'),
('cl016','Plaisance','Didier','472 Rue de la Poste 4557 Ramelot','DidierPlaisance@jourrapide.com'),
('cl017','Lamontagne','Yolande','292 Rue de Fontigny 8972 Roesbrugge-Haringe','YolandeLamontagne@rhyta.com'),
('cl018','Adler','Océane','433 Rue du Vert Galant 6830 Poupehan','OceaneAdler@dayrep.com'),
('cl019','Lépicier','Pinabel','20 Rue des Tanneurs 7160 Piéton','PinabelLepicier@rhyta.com'),
('cl020','Bérubé','Thérèse','405 Rue Bouhouille 3290 Schaffen','ThereseBerube@jourrapide.com');
