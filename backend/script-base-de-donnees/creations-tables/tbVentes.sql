CREATE TABLE "tbVentes" (
    "commID" char(4) NOT NULL,
    "ligneNo" INTEGER NOT NULL,
    "biereID" decimal(6,2) NOT NULL,
    "prodQuant" INTEGER NOT NULL,
    CONSTRAINT "pk__tbVentes" PRIMARY KEY ( "commID" ASC ),
    CONSTRAINT "fk__tbVentes__tbHistoriques" FOREIGN KEY (commID) REFERENCES tbHistoriques (commID)
);
