CREATE TABLE tbBrasseurs(
    brasseurId char(3) NOT NULL,
    brasseurNom VARCHAR(20) NOT NULL,
    brasseurVille1 VARCHAR(50) NOT NULL,
    brasseurVille2 VARCHAR(50) NULL,
    CONSTRAINT pk__Brasseurs PRIMARY KEY (brasseurId)
);
