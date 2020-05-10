/*
Auteur: Eliott Lepage
Creation de la table contenant les villes et leurs id associés
*/
CREATE TABLE tbVilles (
    vilId CHAR(4) NOT NULL,                     /* code Postal */
    vilNom VARCHAR(20) NOT NULL,
    CONSTRAINT pk__Villes PRIMARY KEY (vilId)
);

/*
Auteur: Eliott Lepage
Creation de la table contenant les brasseurs et les informations à propos de ceux-ci
*/
CREATE TABLE tbBrasseurs(
    brasseurId CHAR(4) NOT NULL,                /*  br01,br02...  */
    brasseurNom VARCHAR(60) NOT NULL,
    vilId CHAR(4) NOT NULL,
    CONSTRAINT pk__Brasseurs PRIMARY KEY (brasseurId),
    CONSTRAINT fk__Brasseurs__tbVilles FOREIGN KEY (vilId) REFERENCES tbVilles (vilId)
    on update CASCADE
    on delete restrict
);

/*
Auteur: Mathis Dory
Creation de la table les bières et leurs attributs
*/
CREATE TABLE tbBieres (
    biereId CHAR(3) NOT NULL,                   /* b01, b02, b03 ... */ 
    biereNom VARCHAR(30) NOT NULL,
    biereCouleur VARCHAR(15) NOT NULL, 
    biereAlcool DECIMAL(3,1) NULL,
    biereVolume DECIMAL(4,2) NOT NULL, 
    bierePrix DECIMAL(4,2) NOT NULL,
    brasseurId char(4) NOT NULL,
    CONSTRAINT pk__tbBieres PRIMARY KEY (biereId),
    CONSTRAINT fk__tbBieres__tbBrasseurs FOREIGN KEY ( brasseurId ) REFERENCES tbBrasseurs ( brasseurId )
    ON UPDATE CASCADE 
    ON DELETE RESTRICT
);

/*
Auteur: Andréas Bombaert
Creation de la table contenant une liste de clients (et leurs informations) prédéfinie afin de faire des tests
*/
CREATE TABLE tbClients(
    clientId char(5) NOT NULL,              /* cl001, cl002, cl003 ... */
    clientNom VARCHAR(20) NOT NULL,
    clientPrenom VARCHAR(20) NOT NULL,
    clientAdresse VARCHAR(50) NOT NULL,
    clientMail VARCHAR(50) NOT NULL,
    clientPassword VARCHAR(20) NOT NULL,
    CONSTRAINT pk__Clients PRIMARY KEY (clientId)
);  

/*
Auteur: Eliott Lepage
Création de la table panier contenant la quantité de bières achetées ainsi que son id
*/
CREATE TABLE "DBA"."tbPanier"(
    "clientId" CHAR(5) NOT NULL,
    "biereId" CHAR(3) NOT NULL,             /* b01, b02, b03 ... */ 
    "quantite" INTEGER NOT NULL,
    CONSTRAINT fk__tbPanier__tbBieres FOREIGN KEY ( biereId ) REFERENCES tbBieres ( biereId ),
    CONSTRAINT fk__tbPanier__tbClients FOREIGN KEY ( clientId ) REFERENCES tbClients ( clientId )
);

/*
Auteur: Cedric De Dryver
Creation de la table contenant l'historique des commandes passées
*/
CREATE TABLE tbHistoriques (
    commId char(5) NOT NULL,                /* co001, co002, co003 ... */
    clientId char(5) NOT NULL,
    prixTot decimal(6,2) NOT NULL,
    quantTot INTEGER NOT NULL,
    "date" "datetime" NOT NULL DEFAULT getDate(),
    CONSTRAINT pk__tbHistoriques PRIMARY KEY (commId),
    CONSTRAINT fk__tbHistoriques__tbClients FOREIGN KEY (clientId) REFERENCES tbClients (clientId)
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
    biereId char(3) NOT NULL,
    prodQuant INTEGER NOT NULL,
    CONSTRAINT fk__tbVentes__tbHistoriques FOREIGN KEY (commId) REFERENCES tbHistoriques (commId)
    on update CASCADE
    on delete restrict,
    CONSTRAINT fk__tbVentes__tbBieres FOREIGN KEY (biereId) REFERENCES tbBieres (biereId)
    on update CASCADE
    on delete restrict
);
