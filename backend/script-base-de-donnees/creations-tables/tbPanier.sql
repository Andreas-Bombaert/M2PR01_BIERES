CREATE TABLE "DBA"."tbPanier" (
    "biereId" CHAR(3) NOT NULL,             /* b01, b02, b03 ... */ 
    "quantite" INTEGER NOT NULL,
    CONSTRAINT "pk__tbPanier" PRIMARY KEY ( "biereId" ),
    CONSTRAINT fk__tbPanier__tbBieres FOREIGN KEY ( biereId ) REFERENCES tbPanier ( biereId )
);
