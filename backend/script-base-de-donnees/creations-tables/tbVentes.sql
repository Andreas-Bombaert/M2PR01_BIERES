CREATE TABLE "tbVentes" (
    "commId" char(4) NOT NULL,
    "ligneNo" INTEGER NOT NULL,
    "biereID" decimal(6,2) NOT NULL,
    "prodQuant" INTEGER NOT NULL,
    CONSTRAINT "fk__tbVentes__tbHistoriques" FOREIGN KEY (commId) REFERENCES tbHistoriques (commId)
);
