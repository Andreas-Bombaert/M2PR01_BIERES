CREATE TABLE tbBieres(
biereId CHAR(3) NOT NULL,
biereNom VARCHAR(30) NOT NULL,
biereCouleur VARCHAR(15) NOT NULL, 
biereAlcool DECIMAL NULL,
biereVolume NUMERIC NOT NULL, 
bierePrix DECIMAL NOT NULL,
brasseurId char(3) NOT NULL,
CONSTRAINT pk_tbBieres PRIMARY KEY (biereId),
CONSTRAINT fk_tbBieres FOREIGN KEY ( brasseurId ) REFERENCES tbBrasseurs ( brasseurId )
on update cascade
on delete restrict
);
