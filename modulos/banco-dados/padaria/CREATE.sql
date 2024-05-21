CREATE DATABASE IF NOT EXISTS bdPadaria;
USE bdPadaria;

CREATE TABLE tb_cliente (
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    telefone VARCHAR(15),
    email VARCHAR(100),
    endereco VARCHAR(200),
    cpf_cnpj VARCHAR(20),
    data_nascimento DATE,
    genero ENUM('masculino', 'feminino', 'outro')
);

CREATE TABLE tb_endereco_entrega (
    id_endereco INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT,
    logradouro VARCHAR(100),
    numero VARCHAR(10),
    complemento VARCHAR(50),
    bairro VARCHAR(50),
    cidade VARCHAR(50),
    estado VARCHAR(2),
    cep VARCHAR(9),
    tipo_endereco ENUM('principal', 'secundario'),
    FOREIGN KEY (id_cliente) REFERENCES tb_cliente(id_cliente)
);

CREATE TABLE tb_pedido (
    id_pedido INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT,
    data_pedido DATETIME NOT NULL,
    data_entrega_prevista DATE,
    status VARCHAR(20),
    valor_total DECIMAL(10, 2),
    metodo_pagamento VARCHAR(20),
    FOREIGN KEY (id_cliente) REFERENCES tb_cliente(id_cliente)
);

CREATE TABLE tb_produto (
    id_produto INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao VARCHAR(200),
    preco DECIMAL(10, 2) NOT NULL,
    tipo VARCHAR(20),
    unidade_medida VARCHAR(20)
);

CREATE TABLE tb_ingrediente (
    id_ingrediente INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    preco DECIMAL(10, 2) NOT NULL,
    unidade_medida VARCHAR(20)
);

CREATE TABLE tb_produto_ingrediente (
    id_produto INT,
    id_ingrediente INT,
    quantidade DECIMAL(5, 2),
    FOREIGN KEY (id_produto) REFERENCES tb_produto(id_produto),
    FOREIGN KEY (id_ingrediente) REFERENCES tb_ingrediente(id_ingrediente)
);

CREATE TABLE tb_item_pedido (
    id_item INT AUTO_INCREMENT PRIMARY KEY,
    id_pedido INT,
    id_produto INT,
    quantidade INT,
    preco_unitario DECIMAL(10, 2),
    FOREIGN KEY (id_pedido) REFERENCES tb_pedido(id_pedido),
    FOREIGN KEY (id_produto) REFERENCES tb_produto(id_produto)
);

CREATE TABLE tb_funcionario (
    id_funcionario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cargo VARCHAR(50),
    salario DECIMAL(10, 2),
    telefone VARCHAR(15),
    data_admissao DATE
);