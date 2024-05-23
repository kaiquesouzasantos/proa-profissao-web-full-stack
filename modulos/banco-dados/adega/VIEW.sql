USE bd_adega;

/* FUNCIONARIO */

CREATE VIEW vw_funcionario AS 
    SELECT 
        nome, cpf, rg, nacionalidade, cargo, CONCAT("R$ ", salario) AS "salario"
    FROM tb_funcionario 
    INNER JOIN tb_funcao ON tb_funcao.funcao_id = tb_funcionario.funcao_id;

CREATE VIEW vw_funcao AS 
    SELECT 
        cargo, COUNT(tb_funcionario.funcao_id) AS "quantidade", CONCAT("R$ ", SUM(salario)) AS "soma_salarial"
    FROM tb_funcao 
    INNER JOIN tb_funcionario ON tb_funcionario.funcao_id = tb_funcao.funcao_id
    GROUP BY cargo;

CREATE VIEW vw_folha_pagamento AS
    SELECT 
        CONCAT("R$ ", SUM(salario)) AS "folha_pagamento", CONCAT("R$ ", AVG(salario)) AS "media",
        CONCAT("R$ ", MIN(salario)) AS "minimo", CONCAT("R$ ", MAX(salario)) AS "maximo"
    FROM tb_funcao 
    INNER JOIN tb_funcionario ON tb_funcionario.funcao_id = tb_funcao.funcao_id;

/* FORNECEDOR */

CREATE VIEW vw_fornecedor AS
    SELECT 
        nome, cnpj, COUNT(tb_fornecimento.fornecimento_id) AS "requisicoes_realizadas"
    FROM tb_fornecedor 
    INNER JOIN tb_fornecimento ON tb_fornecimento.fornecedor_id = tb_fornecedor.fornecedor_id
    GROUP BY nome, cnpj;

/* CLIENTE */