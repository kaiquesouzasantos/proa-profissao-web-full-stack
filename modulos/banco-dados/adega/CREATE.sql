CREATE DATABASE bd_adega;
USE bd_adega;
<<<<<<< HEAD

CREATE TABLE tb_funcao (
    funcao_id INT AUTO_INCREMENT PRIMARY KEY,
    cargo VARCHAR(50) NOT NULL,
    descricao VARCHAR(255),
    salario DECIMAL(10, 2) NOT NULL
);
=======
>>>>>>> d13ea6522ce4ee3c8663ac233eb5de9483f58c58

CREATE TABLE tb_cliente (
    cliente_id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(14) UNIQUE NOT NULL,
    status VARCHAR(20) DEFAULT 'ativo'
);

CREATE TABLE tb_funcionario (
    funcionario_id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf CHAR(11) UNIQUE NOT NULL,
    funcao_id INT,
    nacionalidade VARCHAR(50),
    nome_mae VARCHAR(100),
    data_nascimento DATE,
    rg VARCHAR(20),
    FOREIGN KEY (funcao_id) REFERENCES tb_funcao(funcao_id)
);

CREATE TABLE tb_fornecedor (
    fornecedor_id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cnpj VARCHAR(20)
);

CREATE TABLE tb_detalhamento (
    detalhamento_id INT AUTO_INCREMENT PRIMARY KEY,
    tipo ENUM("FUNCIONARIO", "CLIENTE", "FORNECEDOR") NOT NULL,
    ator_id INT NOT NULL -- nesse contexto, de acordo com o ator, uma procedure irá verificar a tabela da referência do ator
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
    funcionario_id INT,
    data_venda DATE NOT NULL,
    valor_total DECIMAL(10, 2) NOT NULL,
    metodo_pagamento ENUM('DINHEIRO', 'CARTAO', 'PIX', 'OUTRO') NOT NULL,
    FOREIGN KEY (cliente_id) REFERENCES tb_cliente(cliente_id),
    FOREIGN KEY (funcionario_id) REFERENCES tb_funcionario(funcionario_id)
);

CREATE TABLE tb_venda_bebida (
    venda_bebida_id INT AUTO_INCREMENT PRIMARY KEY,
    venda_id INT NOT NULL,
    bebida_id INT NOT NULL,
    FOREIGN KEY (venda_id) REFERENCES tb_venda(venda_id),
    FOREIGN KEY (bebida_id) REFERENCES tb_bebida(bebida_id)
);

CREATE TABLE tb_contato (
    contato_id INT AUTO_INCREMENT PRIMARY KEY,
    valor VARCHAR(100),
    tipo ENUM("EMAIL", "TELEFONE", "CELULAR"),
    detalhamento_id INT,
    FOREIGN KEY (detalhamento_id) REFERENCES tb_detalhamento(detalhamento_id)
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

<<<<<<< HEAD
=======
CREATE TABLE tb_fornecedor (
    fornecedor_id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    contato VARCHAR(100),
    telefone VARCHAR(15),
    endereco VARCHAR(255),
    cnpj CHAR(20)
);

>>>>>>> d13ea6522ce4ee3c8663ac233eb5de9483f58c58
CREATE TABLE tb_fornecimento (
    fornecimento_id INT AUTO_INCREMENT PRIMARY KEY,
    fornecedor_id INT,
    bebida_id INT,
    quantidade INT NOT NULL,
    data_fornecimento DATE NOT NULL,
    FOREIGN KEY (fornecedor_id) REFERENCES tb_fornecedor(fornecedor_id),
    FOREIGN KEY (bebida_id) REFERENCES tb_bebida(bebida_id)
);

CREATE TABLE tb_parentesco (
    parentesco_id INT AUTO_INCREMENT PRIMARY KEY,
    grau VARCHAR(50) NOT NULL,
    nomeclatura VARCHAR(50)
);

CREATE TABLE tb_dependente (
    dependente_id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(14),
    parentesco_id INT,
    funcionario_id INT,
    FOREIGN KEY (parentesco_id) REFERENCES tb_parentesco(parentesco_id),
    FOREIGN KEY (funcionario_id) REFERENCES tb_funcionario(funcionario_id)
);

CREATE TABLE tb_endereco (
    endereco_id INT AUTO_INCREMENT PRIMARY KEY,
    logradouro VARCHAR(255),
    numero INT,
    cep VARCHAR(10),
    cidade VARCHAR(100),
    uf CHAR(2),
    pais VARCHAR(50),
    detalhamento_id INT,
    FOREIGN KEY (detalhamento_id) REFERENCES tb_detalhamento(detalhamento_id)
);

CREATE TABLE tb_ctps (
    ctps_id INT AUTO_INCREMENT PRIMARY KEY,
    funcionario_id INT,
    nome_mae VARCHAR(100),
    num_carteira_trabalho VARCHAR(20),
    contrato VARCHAR(50),
    FOREIGN KEY (funcionario_id) REFERENCES tb_funcionario(funcionario_id)
);