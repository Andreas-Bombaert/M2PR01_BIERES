/*
Auteur: Eliott Lepage
Creation de la table contenant les villes et leurs id associés
*/
CREATE TABLE tbVilles (
    vilId CHAR(4) NOT NULL,
    vilNom VARCHAR(20) NOT NULL,
    CONSTRAINT pk__Villes PRIMARY KEY (vilId)
);

/*
Auteur: Eliott Lepage
Creation de la table contenant les brasseurs et les informations à propos de ceux-ci
*/
CREATE TABLE tbBrasseurs(
    brasseurId CHAR(3) NOT NULL,
    brasseurNom VARCHAR(20) NOT NULL,
    vilId CHAR(4) NOT NULL,
    CONSTRAINT pk__Brasseurs PRIMARY KEY (brasseurId),
    CONSTRAINT fk__Brasseurs FOREIGN KEY (vilId) REFERENCES tbVilles (vilId)
    on update CASCADE
    on delete restrict
);

/*
Auteur: Mathis Dory
Creation de la table les bières et leurs attributs
*/
CREATE TABLE tbBieres(
    biereId CHAR(4) NOT NULL,
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
  
  
/*
Auteur: Andréas Bombaert
Creation de la table contenant une liste de clients (et leurs informations) prédéfinie afin de faire des tests
*/
CREATE TABLE tbClients(
    clientId char(4) NOT NULL,
    clientNom VARCHAR(20) NOT NULL,
    clientPrenom VARCHAR(20) NOT NULL,
    clientAdresse VARCHAR(50) NOT NULL,
    clientMail VARCHAR(50) NOT NULL,
    CONSTRAINT pk__Clients PRIMARY KEY (clientId)
);

/*
Auteur: Cedric De Dryver
Creation de la table contenant l'historique des commandes passées
*/
CREATE TABLE tbHistoriques (
    commId char(5) NOT NULL,
    clientId char(4) NOT NULL,
    prixTot decimal(6,2) NOT NULL,
    quantTot INTEGER NOT NULL,
    "date" "datetime" NOT NULL DEFAULT getDate(),
    CONSTRAINT pk__tbHistoriques PRIMARY KEY (commId),
    CONSTRAINT fk__tbHistoriques FOREIGN KEY (clientId) REFERENCES tbClients (clientId)
    on update CASCADE
    on delete restrict
);

/*
Auteur: Cedric De Dryver
Creation de la table contenant les contenus des commandes
*/
CREATE TABLE tbVentes (
    commId char(5) NOT NULL,
    ligneNo INTEGER NOT NULL,
    biereId char(4) NOT NULL,
    prodQuant INTEGER NOT NULL,
    CONSTRAINT fk__tbVentes__tbHistoriques FOREIGN KEY (commId) REFERENCES tbHistoriques (commId)
    on update CASCADE
    on delete restrict,
    CONSTRAINT fk__tbVentes__tbBieres FOREIGN KEY (biereId) REFERENCES tbBieres (biereId)
    on update CASCADE
    on delete restrict
);
