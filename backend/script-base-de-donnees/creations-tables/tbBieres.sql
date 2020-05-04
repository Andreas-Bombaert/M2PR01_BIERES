CREATE TABLE tbBieres (
    biereId CHAR(3) NOT NULL,                   /* b01, b02, b03 ... */ 
    biereNom VARCHAR(30) NOT NULL,
    biereCouleur VARCHAR(15) NOT NULL, 
    biereAlcool DECIMAL(3,1) NULL,
    biereVolume DECIMAL(4,2) NOT NULL, 
    bierePrix DECIMAL(4,2) NOT NULL,
    brasseurId char(4) NOT NULL,
    CONSTRAINT pk__tbBieres PRIMARY KEY (biereId),
    CONSTRAINT fk__tbBieres__tbBrasseurs FOREIGN KEY ( brasseurId ) REFERENCES tbBrasseurs ( brasseurId ),
    ON UPDATE CASCADE 
    ON DELETE RESTRICT
);
