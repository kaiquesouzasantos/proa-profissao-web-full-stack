CREATE DATABASE IF NOT EXISTS bd_aeroporto;
USE bd_aeroporto;

CREATE TABLE tb_passageiro (
    id_passageiro INT AUTO_INCREMENT PRIMARY KEY,
    nome_passageiro VARCHAR(100) NOT NULL,
    documento_identidade VARCHAR(20),
    telefone VARCHAR(20),
    email VARCHAR(100),
    endereco VARCHAR(200),
    data_nascimento DATE,
    genero VARCHAR(20)
);

CREATE TABLE tb_voo (
    id_voo INT AUTO_INCREMENT PRIMARY KEY,
    numero_voo VARCHAR(20) NOT NULL,
    origem VARCHAR(100),
    destino VARCHAR(100),
    data_partida DATETIME,
    data_chegada DATETIME,
    id_aviao INT,
    terminal_partida VARCHAR(20),
    terminal_chegada VARCHAR(20),
    status VARCHAR(20),
    FOREIGN KEY (id_aviao) REFERENCES tb_aviao(id_aviao)
);

CREATE TABLE tb_companhia_aerea (
    id_companhia INT AUTO_INCREMENT PRIMARY KEY,
    nome_companhia VARCHAR(100) NOT NULL,
    pais_origem VARCHAR(100)
);

CREATE TABLE tb_aviao (
    id_aviao INT AUTO_INCREMENT PRIMARY KEY,
    modelo VARCHAR(100) NOT NULL,
    capacidade_passageiros INT,
    id_companhia INT,
    ano_fabricacao YEAR,
    status VARCHAR(20),
    FOREIGN KEY (id_companhia) REFERENCES tb_companhia_aerea(id_companhia)
);

CREATE TABLE tb_funcionario (
    id_funcionario INT AUTO_INCREMENT PRIMARY KEY,
    nome_funcionario VARCHAR(100) NOT NULL,
    cargo VARCHAR(50),
    salario DECIMAL(10, 2),
    data_admissao DATE,
    numero_identificacao VARCHAR(20),
    departamento VARCHAR(50)
);

CREATE TABLE tb_bilhete (
    id_bilhete INT AUTO_INCREMENT PRIMARY KEY,
    id_passageiro INT,
    id_voo INT,
    assento VARCHAR(10),
    valor DECIMAL(10, 2),
    FOREIGN KEY (id_passageiro) REFERENCES tb_passageiro(id_passageiro),
    FOREIGN KEY (id_voo) REFERENCES tb_voo(id_voo)
);