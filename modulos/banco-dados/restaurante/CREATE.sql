CREATE DATABASE IF NOT EXISTS bd_restaurante;
USE bd_restaurante;

CREATE TABLE tb_cliente (
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    nome_cliente VARCHAR(100) NOT NULL,
    cpf VARCHAR(14) UNIQUE NOT NULL,
    telefone VARCHAR(20),
    endereco VARCHAR(200),
    data_nascimento DATE,
    genero ENUM('masculino', 'feminino', 'outro')
);

CREATE TABLE tb_funcionario (
    id_funcionario INT AUTO_INCREMENT PRIMARY KEY,
    nome_funcionario VARCHAR(100) NOT NULL,
    cargo VARCHAR(50),
    salario DECIMAL(10, 2),
    data_admissao DATE,
    telefone VARCHAR(20),
    endereco VARCHAR(200),
    email VARCHAR(100)
);

CREATE TABLE tb_status_pedido (
    id_status_pedido INT AUTO_INCREMENT PRIMARY KEY,
    nome_status ENUM('pendente', 'em_preparo', 'pronto', 'entregue')
);

CREATE TABLE tb_status_mesa (
    id_status_mesa ENUM('livre', 'ocupada') PRIMARY KEY
);

CREATE TABLE tb_mesa (
    id_mesa INT AUTO_INCREMENT PRIMARY KEY,
    numero_mesa INT NOT NULL,
    capacidade INT,
    localizacao VARCHAR(50),
    id_status_mesa ENUM('livre', 'ocupada') DEFAULT 'livre',
    status_pagamento ENUM('pago', 'nao_pago') DEFAULT 'nao_pago',
    FOREIGN KEY (id_status_mesa) REFERENCES tb_status_mesa(id_status_mesa)
);

CREATE TABLE tb_pedido (
    id_pedido INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT,
    id_mesa INT,
    data_pedido DATETIME,
    id_status_pedido INT,
    valor_total DECIMAL(10, 2),
    FOREIGN KEY (id_cliente) REFERENCES tb_cliente(id_cliente),
    FOREIGN KEY (id_mesa) REFERENCES tb_mesa(id_mesa),
    FOREIGN KEY (id_status_pedido) REFERENCES tb_status_pedido(id_status_pedido)
);

CREATE TABLE tb_item_pedido (
    id_item_pedido INT AUTO_INCREMENT PRIMARY KEY,
    id_pedido INT,
    nome_item VARCHAR(100),
    quantidade INT,
    preco_unitario DECIMAL(10, 2),
    FOREIGN KEY (id_pedido) REFERENCES tb_pedido(id_pedido)
);