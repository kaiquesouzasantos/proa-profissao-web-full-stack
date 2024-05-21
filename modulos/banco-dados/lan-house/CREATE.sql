CREATE DATABASE IF NOT EXISTS bd_lan_house;
USE bd_lan_house;

CREATE TABLE tb_cliente (
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    nome_cliente VARCHAR(100) NOT NULL,
    email VARCHAR(100),
    telefone VARCHAR(20),
    endereco VARCHAR(200),
    data_nascimento DATE,
    genero ENUM('masculino', 'feminino', 'outro')
);

CREATE TABLE tb_computador (
    id_computador INT AUTO_INCREMENT PRIMARY KEY,
    numero_serial VARCHAR(50) NOT NULL,
    modelo VARCHAR(100),
    especificacoes_tecnicas TEXT,
    status ENUM('livre', 'ocupado') DEFAULT 'livre'
);

CREATE TABLE tb_sessao (
    id_sessao INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT,
    id_computador INT,
    data_inicio DATETIME,
    data_fim DATETIME,
    valor DECIMAL(10, 2),
    status ENUM('ativa', 'finalizada') DEFAULT 'ativa',
    FOREIGN KEY (id_cliente) REFERENCES tb_cliente(id_cliente),
    FOREIGN KEY (id_computador) REFERENCES tb_computador(id_computador)
);

CREATE TABLE tb_registro_uso (
    id_registro INT AUTO_INCREMENT PRIMARY KEY,
    id_sessao INT,
    data_registro DATETIME,
    duracao_minutos INT,
    valor DECIMAL(10, 2),
    desconto DECIMAL(10, 2) DEFAULT 0,
    FOREIGN KEY (id_sessao) REFERENCES tb_sessao(id_sessao)
);