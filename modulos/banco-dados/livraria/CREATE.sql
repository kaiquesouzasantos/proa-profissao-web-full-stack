CREATE DATABASE IF NOT EXISTS bd_livraria;
USE bd_livraria;

CREATE TABLE tb_autor (
    id_autor INT AUTO_INCREMENT PRIMARY KEY,
    nome_autor VARCHAR(100) NOT NULL,
    nacionalidade VARCHAR(50),
    data_nascimento DATE,
    local_nascimento VARCHAR(100),
    data_falecimento DATE,
    local_falecimento VARCHAR(100),
    genero ENUM('masculino', 'feminino', 'outro'),
    biografia TEXT
);

CREATE TABLE tb_livro (
    id_livro INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(200) NOT NULL,
    id_autor INT,
    ano_publicacao YEAR,
    editora VARCHAR(100),
    idioma VARCHAR(50),
    numero_paginas INT,
    ISBN VARCHAR(20),
    classificacao_indicativa VARCHAR(10),
    FOREIGN KEY (id_autor) REFERENCES tb_autor(id_autor)
);

CREATE TABLE tb_cliente (
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    nome_cliente VARCHAR(100) NOT NULL,
    email VARCHAR(100),
    telefone VARCHAR(20),
    endereco VARCHAR(200),
    cpf_cnpj VARCHAR(20),
    data_nascimento DATE,
    genero ENUM('masculino', 'feminino', 'outro')
);

CREATE TABLE tb_pedido (
    id_pedido INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT,
    data_pedido DATE,
    data_entrega_prevista DATE,
    endereco_entrega VARCHAR(200),
    status_pedido ENUM('pendente', 'enviado', 'entregue'),
    FOREIGN KEY (id_cliente) REFERENCES tb_cliente(id_cliente)
);

CREATE TABLE tb_item_pedido (
    id_item_pedido INT AUTO_INCREMENT PRIMARY KEY,
    id_pedido INT,
    id_livro INT,
    quantidade INT,
    preco_unitario DECIMAL(10, 2),
    desconto DECIMAL(10, 2) DEFAULT 0,
    FOREIGN KEY (id_pedido) REFERENCES tb_pedido(id_pedido),
    FOREIGN KEY (id_livro) REFERENCES tb_livro(id_livro)
);

CREATE TABLE tb_estoque (
    id_estoque INT AUTO_INCREMENT PRIMARY KEY,
    id_livro INT,
    quantidade INT,
    preco_compra DECIMAL(10, 2),
    FOREIGN KEY (id_livro) REFERENCES tb_livro(id_livro)
);
