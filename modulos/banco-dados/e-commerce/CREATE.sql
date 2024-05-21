CREATE DATABASE IF NOT EXISTS bd_ecommerce;
USE bd_ecommerce;

CREATE TABLE tb_cliente (
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    nome_cliente VARCHAR(100) NOT NULL,
    email VARCHAR(100),
    telefone VARCHAR(20),
    endereco VARCHAR(200),
    cpf_cnpj VARCHAR(20),
    data_nascimento DATE,
    genero ENUM('masculino', 'feminino', 'outro'),
    senha VARCHAR(100)
);

CREATE TABLE tb_categoria (
    id_categoria INT AUTO_INCREMENT PRIMARY KEY,
    nome_categoria VARCHAR(100) NOT NULL
);

CREATE TABLE tb_produto (
    id_produto INT AUTO_INCREMENT PRIMARY KEY,
    nome_produto VARCHAR(100) NOT NULL,
    id_categoria INT,
    descricao TEXT,
    marca VARCHAR(100),
    preco DECIMAL(10, 2),
    quantidade_estoque INT,
    peso DECIMAL(10, 2),
    altura DECIMAL(10, 2),
    largura DECIMAL(10, 2),
    comprimento DECIMAL(10, 2),
    status ENUM('disponivel', 'indisponivel', 'pre_venda'),
    FOREIGN KEY (id_categoria) REFERENCES tb_categoria(id_categoria)
);

CREATE TABLE tb_pedido (
    id_pedido INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT,
    data_pedido DATETIME,
    data_entrega_prevista DATETIME,
    status_pedido ENUM('pendente', 'processando', 'enviado', 'entregue'),
    valor_total DECIMAL(10, 2),
    endereco_entrega VARCHAR(200),
    metodo_pagamento VARCHAR(50),
    FOREIGN KEY (id_cliente) REFERENCES tb_cliente(id_cliente)
);

CREATE TABLE tb_item_pedido (
    id_item_pedido INT AUTO_INCREMENT PRIMARY KEY,
    id_pedido INT,
    id_produto INT,
    quantidade INT,
    preco_unitario DECIMAL(10, 2),
    desconto DECIMAL(10, 2),
    FOREIGN KEY (id_pedido) REFERENCES tb_pedido(id_pedido),
    FOREIGN KEY (id_produto) REFERENCES tb_produto(id_produto)
);