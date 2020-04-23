CREATE TABLE tbBieres(
biereId INTEGER NOT NULL DEFAULT AUTOINCREMENT,
biereNom VARCHAR(30) NOT NULL,
biereCouleur VARCHAR(15) NOT NULL, 
biereAlcool DECIMAL NULL,
biereVolume NUMERIC NOT NULL, 
bierePrix DECIMAL NOT NULL,
brasseurId INTEGER NOT NULL DEFAULT AUTOINCREMENT,
CONSTRAINT pk_tbBieres PRIMARY KEY (biereId),
CONSTRAINT fk_tbBieres FOREIGN KEY ( brasseurId ) REFERENCES tbBrasseurs ( brasseurId )
on update cascade
on delete restrict
);