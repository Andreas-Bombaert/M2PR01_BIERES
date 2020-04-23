CREATE TABLE "tbHistoriques" (
    "commId" INTEGER NOT NULL DEFAULT AUTOINCREMENT,
    "clientId" INTEGER NOT NULL,
    "prixTot" decimal(6,2) NOT NULL,
    "quantTot" INTEGER NOT NULL,
    "date" "datetime" NOT NULL DEFAULT getDate(),
    CONSTRAINT "pk__tbHistoriques" PRIMARY KEY ( "commId" ASC )
);
