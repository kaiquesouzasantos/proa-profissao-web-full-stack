CREATE DATABASE IF NOT EXISTS bd_banco_digital;
USE bd_banco_digital;

CREATE TABLE tb_cliente (
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    nome_cliente VARCHAR(100) NOT NULL,
    cpf VARCHAR(14) UNIQUE NOT NULL,
    email VARCHAR(100),
    telefone VARCHAR(20),
    endereco VARCHAR(200),
    data_nascimento DATE,
    genero ENUM('masculino', 'feminino', 'outro'),
    estado_civil ENUM('solteiro', 'casado', 'divorciado', 'viuvo')
);

CREATE TABLE tb_conta (
    id_conta INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT,
    tipo ENUM('corrente', 'poupanca'),
    saldo DECIMAL(10, 2),
    data_abertura DATETIME,
    status ENUM('ativa', 'suspensa', 'encerrada'),
    FOREIGN KEY (id_cliente) REFERENCES tb_cliente(id_cliente)
);

CREATE TABLE tb_transacao (
    id_transacao INT AUTO_INCREMENT PRIMARY KEY,
    id_conta_origem INT,
    id_conta_destino INT,
    valor DECIMAL(10, 2),
    data_transacao DATETIME,
    tipo ENUM('transferencia', 'deposito', 'saque'),
    descricao VARCHAR(255),
    beneficiario VARCHAR(100),
    remetente VARCHAR(100),
    FOREIGN KEY (id_conta_origem) REFERENCES tb_conta(id_conta),
    FOREIGN KEY (id_conta_destino) REFERENCES tb_conta(id_conta)
);

CREATE TABLE tb_emprestimo (
    id_emprestimo INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT,
    valor_emprestimo DECIMAL(10, 2),
    data_contratacao DATETIME,
    taxa_juros DECIMAL(5, 2),
    status ENUM('pendente', 'aprovado', 'recusado'),
    motivo VARCHAR(255),
    periodo_emprestimo INT,
    frequencia_pagamento ENUM('semanal', 'mensal', 'bimestral', 'trimestral'),
    FOREIGN KEY (id_cliente) REFERENCES tb_cliente(id_cliente)
);

CREATE TABLE tb_pagamento_emprestimo (
    id_pagamento INT AUTO_INCREMENT PRIMARY KEY,
    id_emprestimo INT,
    valor_pagamento DECIMAL(10, 2),
    data_pagamento DATETIME,
    FOREIGN KEY (id_emprestimo) REFERENCES tb_emprestimo(id_emprestimo)
);