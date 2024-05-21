CREATE DATABASE bdAdega;
USE bdAdega;

CREATE TABLE tb_cliente (
    cliente_id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(14) UNIQUE NOT NULL,
    email VARCHAR(100),
    telefone VARCHAR(15),
    endereco VARCHAR(255),
    data_nascimento DATE,
    genero VARCHAR(20),
    status VARCHAR(20) DEFAULT 'ativo'
);

CREATE TABLE tb_categoria_bebida (
    categoria_id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL
);

CREATE TABLE tb_bebida (
    bebida_id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    categoria_id INT,
    tipo VARCHAR(50),
    marca VARCHAR(50),
    safra VARCHAR(10),
    regiao VARCHAR(100),
    variedade VARCHAR(100),
    preco DECIMAL(10, 2) NOT NULL,
    quantidade_estoque INT DEFAULT 0,
    FOREIGN KEY (categoria_id) REFERENCES tb_categoria_bebida(categoria_id)
);

CREATE TABLE tb_venda (
    venda_id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT,
    data_venda DATE NOT NULL,
    valor_total DECIMAL(10, 2) NOT NULL,
    metodo_pagamento VARCHAR(50),
    FOREIGN KEY (cliente_id) REFERENCES tb_cliente(cliente_id)
);

CREATE TABLE tb_item_venda (
    item_id INT AUTO_INCREMENT PRIMARY KEY,
    venda_id INT,
    bebida_id INT,
    quantidade INT NOT NULL,
    preco_unitario DECIMAL(10, 2) NOT NULL,
    desconto DECIMAL(10, 2) DEFAULT 0,
    FOREIGN KEY (venda_id) REFERENCES tb_venda(venda_id),
    FOREIGN KEY (bebida_id) REFERENCES tb_bebida(bebida_id)
);

CREATE TABLE tb_estoque (
    estoque_id INT AUTO_INCREMENT PRIMARY KEY,
    bebida_id INT,
    quantidade INT NOT NULL,
    quantidade_minima INT,
    quantidade_maxima INT,
    data_atualizacao DATE NOT NULL,
    FOREIGN KEY (bebida_id) REFERENCES tb_bebida(bebida_id)
);

CREATE TABLE tb_fornecedor (
    fornecedor_id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    contato VARCHAR(100),
    telefone VARCHAR(15),
    endereco VARCHAR(255),
    cnpj VARCHAR(20)
);

CREATE TABLE tb_fornecimento (
    fornecimento_id INT AUTO_INCREMENT PRIMARY KEY,
    fornecedor_id INT,
    bebida_id INT,
    quantidade INT NOT NULL,
    data_fornecimento DATE NOT NULL,
    FOREIGN KEY (fornecedor_id) REFERENCES tb_fornecedor(fornecedor_id),
    FOREIGN KEY (bebida_id) REFERENCES tb_bebida(bebida_id)
);