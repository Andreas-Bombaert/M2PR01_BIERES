CREATE TABLE tbBrasseurs(
    brasseurId CHAR(3) NOT NULL,
    brasseurNom VARCHAR(20) NOT NULL,
    vilId CHAR(4) NOT NULL,
    CONSTRAINT pk__Brasseurs PRIMARY KEY (brasseurId),
    CONSTRAINT fk__Brasseurs FOREIGN KEY (vilId) REFERENCES tbVilles (vilId)
);
