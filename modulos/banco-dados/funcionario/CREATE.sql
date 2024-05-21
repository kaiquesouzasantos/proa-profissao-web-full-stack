CREATE DATABASE IF NOT EXISTS tbFuncionario;
USE tbFuncionario;

CREATE TABLE tbFuncionario (
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
    FOREIGN KEY (funcao_id) REFERENCES tbFuncao(funcao_id),
    FOREIGN KEY (endereco_id) REFERENCES tbEndereco(endereco_id),
    FOREIGN KEY (contato_id) REFERENCES tbContato(contato_id)
);

CREATE TABLE tbDependente (
    id INTEGER PRIMARY KEY,
    nome VARCHAR,
    cpf VARCHAR,
    parentesco_id INTEGER,
    funcionario_id INTEGER,
    FOREIGN KEY (parentesco_id) REFERENCES tbParentesco(parentesco_id),
    FOREIGN KEY (funcionario_id) REFERENCES tbFuncionario(funcionario_id)
);

CREATE TABLE tbFuncao (
    id INTEGER PRIMARY KEY,
    cargo VARCHAR,
    descricao VARCHAR,
    salario FLOAT
);

CREATE TABLE tbParentesco (
    id INTEGER PRIMARY KEY,
    grau VARCHAR,
    nomeclatura VARCHAR,
    funcionario_id INTEGER,
    FOREIGN KEY (funcionario_id) REFERENCES tbFuncionario(funcionario_id)
);

CREATE TABLE tbEndereco (
    id INTEGER PRIMARY KEY,
    logradouro VARCHAR,
    numero INTEGER,
    cep VARCHAR,
    cidade VARCHAR,
    uf CHAR,
    pais VARCHAR,
    funcionario_id INTEGER,
    FOREIGN KEY (funcionario_id) REFERENCES tbFuncionario(funcionario_id)
);

CREATE TABLE tbContato (
    id INTEGER PRIMARY KEY,
    valor VARCHAR,
    tipo VARCHAR
);

CREATE TABLE tbTipoContato (
    id INTEGER PRIMARY KEY,
    tipo VARCHAR,
    contato_id INTEGER,
    FOREIGN KEY (contato_id) REFERENCES tbContato(contato_id)
);

CREATE TABLE tbCTPS (
    id INTEGER PRIMARY KEY,
    funcionario_id INTEGER,
    nome_mae VARCHAR,
    num_carteira_trabalho VARCHAR,
    contrato VARCHAR,
    funcao_id INTEGER,
    FOREIGN KEY (funcionario_id) REFERENCES tbFuncionario(funcionario_id),
    FOREIGN KEY (funcao_id) REFERENCES tbFuncao(funcao_id)
);