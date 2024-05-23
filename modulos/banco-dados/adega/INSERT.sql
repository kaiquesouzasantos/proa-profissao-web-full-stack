USE bd_adega;

INSERT INTO tb_funcao (cargo, descricao, salario) VALUES 
    ('Gerente', 'Responsável pela gestão geral', 5000.00),
    ('Atendente', 'Atendimento ao cliente', 2000.00),
    ('Sommelier', 'Especialista em vinhos', 3000.00),
    ('Caixa', 'Operador de caixa', 1800.00),
    ('Estoquista', 'Responsável pelo estoque', 2200.00);

INSERT INTO tb_cliente (nome, cpf, status) VALUES 
    ('João Silva', '123.456.789-00', 'ativo'),
    ('Maria Oliveira', '234.567.890-11', 'ativo'),
    ('Carlos Souza', '345.678.901-22', 'ativo'),
    ('Ana Pereira', '456.789.012-33', 'ativo'),
    ('Pedro Nascimento', '421.789.012-33', 'ativo'),
    ('Lucas Santos', '567.890.123-44', 'ativo');

INSERT INTO tb_funcionario (nome, cpf, funcao_id, nacionalidade, nome_mae, data_nascimento, rg) VALUES 
    ('José Almeida', '11122233344', 1, 'Brasileira', 'Maria Almeida', '1980-05-10', 'MG1234567'),
    ('Carlos Marcondes', '11122233224', 1, 'Brasileira', 'Antonieta Aparecida', '1987-02-04', 'MG1232467'),
    ('Fernanda Lima', '22233344455', 2, 'Brasileira', 'Ana Lima', '1990-08-20', 'SP2345678'),
    ('Ricardo Borges', '33344455566', 3, 'Brasileira', 'Clara Borges', '1985-12-15', 'RJ3456789'),
    ('Patrícia Gomes', '44455566677', 4, 'Brasileira', 'Joana Gomes', '1992-07-22', 'RS4567890'),
    ('Marcos Lima', '55566677788', 5, 'Brasileira', 'Laura Lima', '1988-03-30', 'BA5678901');

INSERT INTO tb_fornecedor (nome, cnpj) VALUES 
    ('Fornecedor A', '12.345.678/0001-99'),
    ('Fornecedor B', '23.456.789/0001-88'),
    ('Fornecedor C', '34.567.890/0001-77'),
    ('Fornecedor D', '45.678.901/0001-66'),
    ('Fornecedor E', '56.789.012/0001-55');

INSERT INTO tb_detalhamento (tipo, ator_id) VALUES 
    ('FUNCIONARIO', 1),
    ('FUNCIONARIO', 2),
    ('CLIENTE', 1),
    ('CLIENTE', 2),
    ('FORNECEDOR', 1);

INSERT INTO tb_categoria_bebida (nome) VALUES 
    ('Vinho'),
    ('Cerveja'),
    ('Whisky'),
    ('Vodka'),
    ('Licor');

INSERT INTO tb_bebida (nome, categoria_id, tipo, marca, safra, regiao, variedade, preco, quantidade_estoque) VALUES 
    ('Vinho Tinto', 1, 'Seco', 'Marca A', '2015', 'Região A', 'Variedade A', 100.00, 50),
    ('Cerveja Lager', 2, 'Lager', 'Marca B', NULL, 'Região B', 'Variedade B', 5.00, 200),
    ('Whisky 12 anos', 3, '12 anos', 'Marca C', NULL, 'Região C', 'Variedade C', 150.00, 30),
    ('Vodka Premium', 4, 'Premium', 'Marca D', NULL, 'Região D', 'Variedade D', 80.00, 60),
    ('Licor de Café', 5, 'Café', 'Marca E', NULL, 'Região E', 'Variedade E', 40.00, 100);

INSERT INTO tb_venda (cliente_id, funcionario_id, data_venda, valor_total, metodo_pagamento) VALUES 
    (1, 1, '2024-05-01', 500.00, 'CARTAO'),
    (2, 2, '2024-05-02', 150.00, 'PIX'),
    (3, 3, '2024-05-03', 300.00, 'DINHEIRO'),
    (4, 4, '2024-05-04', 200.00, 'OUTRO'),
    (5, 5, '2024-05-05', 100.00, 'CARTAO');

INSERT INTO tb_venda_bebida (venda_id, bebida_id) VALUES 
    (1, 1),
    (1, 2),
    (2, 3),
    (3, 4),
    (4, 5);

INSERT INTO tb_contato (valor, tipo, detalhamento_id) VALUES 
    ('joao@gmail.com', 'EMAIL', 3),
    ('(11) 98765-4321', 'CELULAR', 4),
    ('fornecedorA@empresa.com', 'EMAIL', 5),
    ('(21) 87654-3210', 'TELEFONE', 1),
    ('(31) 76543-2109', 'TELEFONE', 2);

INSERT INTO tb_item_venda (venda_id, bebida_id, quantidade, preco_unitario, desconto) VALUES 
    (1, 1, 2, 100.00, 0),
    (1, 2, 10, 5.00, 0),
    (2, 3, 1, 150.00, 10.00),
    (3, 4, 3, 80.00, 5.00),
    (4, 5, 5, 40.00, 2.00);

INSERT INTO tb_fornecimento (fornecedor_id, bebida_id, quantidade, data_fornecimento) VALUES 
    (1, 1, 100, '2024-04-01'),
    (2, 2, 200, '2024-04-05'),
    (3, 3, 50, '2024-04-10'),
    (4, 4, 75, '2024-04-15'),
    (5, 5, 120, '2024-04-20');