CREATE TABLE "tbVentes" (
    "commId" INTEGER NOT NULL,
    "ligneNo" INTEGER NOT NULL,
    "biereId" INTEGER NOT NULL,
    "prodQuant" INTEGER NOT NULL,
    CONSTRAINT "fk__tbVentes__tbHistoriques" FOREIGN KEY (commId) REFERENCES tbHistoriques (commId)
);
