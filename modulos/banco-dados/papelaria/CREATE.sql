CREATE DATABASE IF NOT EXISTS bd_papelaria;
USE bd_papelaria;

CREATE TABLE tb_cliente (
    cliente_id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(14) UNIQUE NOT NULL,
    email VARCHAR(100),
    telefone VARCHAR(15),
    endereco VARCHAR(255),
    data_nascimento DATE,
    genero ENUM('masculino', 'feminino', 'outro')
);

CREATE TABLE tb_produto (
    produto_id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    categoria VARCHAR(50),
    marca VARCHAR(50),
    preco DECIMAL(10, 2) NOT NULL,
    quantidade_estoque INT DEFAULT 0,
    unidade_medida VARCHAR(20)
);

CREATE TABLE tb_venda (
    venda_id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT,
    data_venda DATE NOT NULL,
    valor_total DECIMAL(10, 2) NOT NULL,
    metodo_pagamento VARCHAR(20),
    FOREIGN KEY (cliente_id) REFERENCES tb_cliente(cliente_id)
);

CREATE TABLE tb_item_venda (
    item_id INT AUTO_INCREMENT PRIMARY KEY,
    venda_id INT,
    produto_id INT,
    quantidade INT NOT NULL,
    preco_unitario DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (venda_id) REFERENCES tb_venda(venda_id),
    FOREIGN KEY (produto_id) REFERENCES tb_produto(produto_id)
);

CREATE TABLE tb_estoque (
    estoque_id INT AUTO_INCREMENT PRIMARY KEY,
    produto_id INT,
    quantidade INT NOT NULL,
    preco_custo DECIMAL(10, 2),
    data_atualizacao DATE NOT NULL,
    FOREIGN KEY (produto_id) REFERENCES tb_produto(produto_id)
);

CREATE TABLE tb_fornecedor (
    fornecedor_id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cnpj VARCHAR(20) UNIQUE NOT NULL,
    contato VARCHAR(100),
    telefone VARCHAR(15),
    endereco VARCHAR(255)
);

CREATE TABLE tb_fornecimento (
    fornecimento_id INT AUTO_INCREMENT PRIMARY KEY,
    fornecedor_id INT,
    produto_id INT,
    quantidade INT NOT NULL,
    data_fornecimento DATE NOT NULL,
    FOREIGN KEY (fornecedor_id) REFERENCES tb_fornecedor(fornecedor_id),
    FOREIGN KEY (produto_id) REFERENCES tb_produto(produto_id)
);