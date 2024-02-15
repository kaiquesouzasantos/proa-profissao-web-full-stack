CREATE DATABASE cl
CREATE TABLE comclien(
    n_numeclien INT NOT NULL AUTO_INCREMENT,
    c_codiclien VARCHAR(10),
    c_nomeclien VARCHAR(100),
    c_razaclien VARCHAR(100),
    d_dataclien DATE,
    c_cnpjclien VARCHAR(20),
    c_foneclien VARCHAR(20),
    PRIMARY KEY(n_numeclien)
);

