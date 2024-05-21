CREATE DATABASE IF NOT EXISTS bd_funcionario;
USE bd_funcionario;

CREATE TABLE tb_funcionario (
    funcionario_id INTEGER PRIMARY KEY,
    nome VARCHAR,
    cpf CHAR,
    funcao_id INTEGER,
    endereco_id INTEGER,
    clt_id INTEGER,
    contato_id INTEGER,
    nacionalidade VARCHAR,
    nome_mae VARCHAR,
    data_nascimento VARCHAR,
    rg VARCHAR,
    FOREIGN KEY (funcao_id) REFERENCES tb_funcao(funcao_id),
    FOREIGN KEY (endereco_id) REFERENCES tb_endereco(endereco_id),
    FOREIGN KEY (contato_id) REFERENCES tb_contato(contato_id)
);

CREATE TABLE tb_dependente (
    id INTEGER PRIMARY KEY,
    nome VARCHAR,
    cpf VARCHAR,
    parentesco_id INTEGER,
    funcionario_id INTEGER,
    FOREIGN KEY (parentesco_id) REFERENCES tb_parentesco(parentesco_id),
    FOREIGN KEY (funcionario_id) REFERENCES tb_funcionario(funcionario_id)
);

CREATE TABLE tb_funcao (
    id INTEGER PRIMARY KEY,
    cargo VARCHAR,
    descricao VARCHAR,
    salario FLOAT
);

CREATE TABLE tb_parentesco (
    id INTEGER PRIMARY KEY,
    grau VARCHAR,
    nomeclatura VARCHAR,
    funcionario_id INTEGER,
    FOREIGN KEY (funcionario_id) REFERENCES tb_funcionario(funcionario_id)
);

CREATE TABLE tb_endereco (
    id INTEGER PRIMARY KEY,
    logradouro VARCHAR,
    numero INTEGER,
    cep VARCHAR,
    cidade VARCHAR,
    uf CHAR,
    pais VARCHAR,
    funcionario_id INTEGER,
    FOREIGN KEY (funcionario_id) REFERENCES tb_funcionario(funcionario_id)
);

CREATE TABLE tb_contato (
    id INTEGER PRIMARY KEY,
    valor DECIMAL(10, 2),
    tipo VARCHAR
);

CREATE TABLE tb_tipo_contato (
    id INTEGER PRIMARY KEY,
    tipo VARCHAR,
    contato_id INTEGER,
    FOREIGN KEY (contato_id) REFERENCES tb_contato(contato_id)
);

CREATE TABLE tb_CTPS (
    id INTEGER PRIMARY KEY,
    funcionario_id INTEGER,
    nome_mae VARCHAR,
    num_carteira_trabalho VARCHAR,
    contrato VARCHAR,
    funcao_id INTEGER,
    FOREIGN KEY (funcionario_id) REFERENCES tb_funcionario(funcionario_id),
    FOREIGN KEY (funcao_id) REFERENCES tb_funcao(funcao_id)
);