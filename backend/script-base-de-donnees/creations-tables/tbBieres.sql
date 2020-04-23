CREATE TABLE tbBieres(
biereId CHAR(3) NOT NULL,
biereNom VARCHAR(30) NOT NULL,
biereCouleur VARCHAR(15) NOT NULL, 
biereAlcool DECIMAL NULL,
biereVolume NUMERIC NOT NULL, 
bierePrix DECIMAL NOT NULL,
brasseurId char(4) NOT NULL,
CONSTRAINT pk_tbBieres PRIMARY KEY (biereId),
CONSTRAINT fk_tbBieres FOREIGN KEY ( brasseurId ) REFERENCES tbBrasseurs ( brasseurId )
on update cascade
on delete restrict
);

INSERT INTO tbBieres(biereId, biereNom, biereCouleur, biereAlcool, biereVolume, bierePrix, brasseurId)
 VALUES
 (b01, Orval, ambrée,  6.2, 33, 3.10, b01)
 (b02, Westmalle Triple, blonde,  9.5, 33, 2.30, br02)
 (b03, Bertinchamps Blonde, blonde,  6.2, 50, 3.20, br05)
 (b04, Bertinchamps Triple, blonde,  8.0, 50, 3.50, br05)
 (b05, Bertinchamps Brune, brune,  7.0, 50, 3.50, br05)
 (b06, Stella, blonde,  5.2, 25, 1.50, br04)
 (b07, Leffe Blonde, blonde,  6.6, 30, 2.39, br04)
 (b08, Leffe Brune, brune,  6.5, 30, 2.59, br04)
 (b09, Leffe Royale, blonde,  7.5, 75, 8.50, br04)
 (b10, Vieux-temps, blonde,  4.5, 25, 1.90, br04)
 (b11, Gauloise Blonde, blonde,  6.3, 33, 2.30, br06)
 (b12, Gauloise Ambrée, ambrée,  5.5, 33, 2.45, br06)
 (b13, Gauloise Brune, brune,  8.1, 33, 2.39, br06)
 (b14, Gauloise Triple, blonde,  9.7, 33, 2.88, br06)
 (b15, Gauloise Rouge, fruitée,  8.2, 33, 2.62, br06)
 (b16, Blanche de Namur, blanche,  4.5, 33, 1.72, br06)
 (b17, Kwak, ambrée,  8.1, 33, 2.29, br07)
 (b18, Triple Karmeliet, blonde,  8.4, 33, 2.87, br07)
 (b19, Troublette, blanche,  5.5, 33, 2.30, br08)
 (b20, Caracole, ambrée,  7.9, 33, 2.49, br08)
 (b21, 'Triple d'' Anvers', blonde,  8.0, 33, 2.67, br09)
 (b22, Philomène florale, blonde,  5.5, 33, 2.46, br10)
 (b23, Philomène hoptimale, ambrée,  7.2, 33, 3.25, br10)
 (b24, Bush Caractères, ambrée,  12.0, 33, 2.50, br11)
 (b25, Bush Triple, ambrée,  12.0, 75, 6.80, br11)
 (b26, Bush de Nuits, brune,  12.0, 75, 18.99, br11)
 (b27, Bush du Noël, brune,  12.0, 33, 2.70, br11)
 (b28, Pêche Mel Bush, fruitée,  8.5, 33, 2.70, br11)
 (b29, Cuvée des trolls, blonde,  7.0, 33, 1.89, br11)
 (b30, Duvel, blonde,  8.5, 33, 1.98, br12)
 (b31, Maredsous, brune,  8.0, 33, 2.39, br12)
 (b32, Vedett extra blond, blonde,  5.2, 33, 2.70, br12)
 (b33, Rochefort 6, brune,  7.5, 33, 2.30, br13)
 (b34, Rochefort 8, brune,  9.2, 33, 2.33, br13)
 (b35, Rochefort 10, brune,  11.3, 33, 2.50, br13)
 (b36, Chimay Bleu, brune,  9.0, 33, 2.76, br14)
 (b37, Chimay Tripple, blonde,  8, 33, 2.48, br14)
 (b38, Chimay Rouge, ambrée,  7.0, 33, 2.75, br14)
 (b39, Chimay Dorée, blonde,  4.8, 33, 2.35, br14)
 (b40, Cristal, blonde,  4.8, 33, 1.70, br03)
 (b41, Maes, blonde,  5.2, 33, 1.65, br03)
 (b42, Ciney, blonde,  7.0, 33, 2.00, br03)
 (b43, Grimbergen Blonde, blonde,  6.7, 33, 2.10, br03)
 (b44, Grimbergen Dubbel, brune,  6.5, 33, 2.15, br03)
 (b45, Grimbergen Triple, blonde,  9.0, 33, 2.25, br03)
 (b46, Grimbergen Optimo Bruno, brune,  10, 33, 2.45, br03)
 (b47, Grimbergen Hiver, brune,  6.5, 33, 2.25, br03)
 (b48, Grimbergen Printemps, fruitée,  6.0, 33, 2.23, br03);
