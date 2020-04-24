CREATE TABLE tbClients(
  clientId char(5) NOT NULL,
  clientNom VARCHAR(20) NOT NULL,
  clientPrenom VARCHAR(20) NOT NULL,
  clientAdresse VARCHAR(50) NOT NULL,
  clientMail VARCHAR(50) NOT NULL,
  CONSTRAINT pk__Clients PRIMARY KEY (clientId)
);
