CREATE TABLE "tbHistoriques" (
    "commId" char(4) NOT NULL DEFAULT AUTOINCREMENT,
    "clientId" char(5) NOT NULL,
    "prixTot" decimal(6,2) NOT NULL,
    "quantTot" INTEGER NOT NULL,
    "date" "datetime" NOT NULL DEFAULT getDate(),
    CONSTRAINT "pk__tbHistoriques" PRIMARY KEY ( "commId" ASC )
);
