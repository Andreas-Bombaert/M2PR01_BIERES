CREATE TABLE tbBrasseurs(
    brasseurId INTEGER NOT NULL DEFAULT AUTOINCREMENT,
    brasseurNom VARCHAR(20) NOT NULL,
    brasseurVille1 VARCHAR(50) NOT NULL,
    brasseurVille2 VARCHAR(50) NULL,
    CONSTRAINT pk__Brasseurs PRIMARY KEY (brasseurId)
);
