CREATE DATABASE IF NOT EXISTS bd_oficina_mecanica;
USE bd_oficina_mecanica;

CREATE TABLE tb_cliente (
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    nome_cliente VARCHAR(100) NOT NULL,
    telefone VARCHAR(20),
    email VARCHAR(100),
    endereco VARCHAR(200),
    cpf_cnpj VARCHAR(20),
    data_nascimento DATE,
    genero ENUM('masculino', 'feminino', 'outro')
);

CREATE TABLE tb_veiculo (
    id_veiculo INT AUTO_INCREMENT PRIMARY KEY,
    placa VARCHAR(20) NOT NULL,
    marca VARCHAR(100),
    modelo VARCHAR(100),
    ano_fabricacao INT,
    cor VARCHAR(50),
    id_cliente INT,
    FOREIGN KEY (id_cliente) REFERENCES tb_cliente(id_cliente)
);

CREATE TABLE tb_servico (
    id_servico INT AUTO_INCREMENT PRIMARY KEY,
    nome_servico VARCHAR(200) NOT NULL,
    tipo_servico ENUM('mecanico', 'eletrico', 'funilaria', 'outro'),
    descricao TEXT,
    preco DECIMAL(10, 2)
);

CREATE TABLE tb_pedido_servico (
    id_pedido_servico INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT,
    id_veiculo INT,
    data_pedido DATETIME,
    data_entrega_prevista DATE,
    status_pedido VARCHAR(20) DEFAULT 'pendente',
    valor_total DECIMAL(10, 2),
    FOREIGN KEY (id_cliente) REFERENCES tb_cliente(id_cliente),
    FOREIGN KEY (id_veiculo) REFERENCES tb_veiculo(id_veiculo)
);

CREATE TABLE tb_item_servico (
    id_item_servico INT AUTO_INCREMENT PRIMARY KEY,
    id_pedido_servico INT,
    id_servico INT,
    quantidade INT,
    FOREIGN KEY (id_pedido_servico) REFERENCES tb_pedido_servico(id_pedido_servico),
    FOREIGN KEY (id_servico) REFERENCES tb_servico(id_servico)
);