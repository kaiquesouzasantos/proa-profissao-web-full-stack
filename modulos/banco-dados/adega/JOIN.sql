USE bd_adega;

---------------------------------------------------------------------------------------------------------
/*
    Liste todas as vendas em que o valor total é superior à média de todas as vendas, 
    incluindo o nome do cliente, a data da venda, o nome do funcionário que realizou a 
    venda e o valor total da venda.
*/

SELECT 
    data_venda, CONCAT("R$ ", valor_total) AS "total", tb_cliente.nome AS "cliente", tb_funcionario.nome AS "funcionario"
FROM tb_venda 
INNER JOIN tb_cliente ON tb_cliente.cliente_id = tb_venda.cliente_id
INNER JOIN tb_funcionario ON tb_funcionario.funcionario_id = tb_venda.funcionario_id
WHERE valor_total > (SELECT AVG(valor_total) FROM tb_venda);

---------------------------------------------------------------------------------------------------------
/*
    Encontre todas as bebidas que foram vendidas mais de uma vez, mostrando o nome da bebida, 
    a quantidade total vendida e o número de vezes que foi vendida.
*/

---------------------------------------------------------------------------------------------------------
/*
    Liste todos os clientes que nunca realizaram uma compra, incluindo o nome e o CPF do cliente.
*/

-- no MSSQL, o uso do 'LEFT OUTER JOIN' seria equivalente a clausula condicional

SELECT 
    nome, cpf 
FROM tb_cliente 
LEFT JOIN tb_venda ON tb_venda.cliente_id = tb_cliente.cliente_id
WHERE tb_venda.cliente_id IS NULL;
---------------------------------------------------------------------------------------------------------
/*
    Recupere informações sobre todos os fornecedores que forneceram bebidas cujo preço médio de 
    venda é superior ao preço médio de todas as bebidas no estoque. Mostre o nome do fornecedor 
    e a lista de bebidas fornecidas.
*/

---------------------------------------------------------------------------------------------------------
/*
    Encontre todos os funcionários que geraram vendas cujo valor total combinado é superior ao 
    salário anual desses funcionários. Inclua o nome do funcionário, o cargo, o salário e o valor 
    total das vendas realizadas.
*/

---------------------------------------------------------------------------------------------------------
/*
    Liste todas as bebidas que estão abaixo do nível mínimo de estoque e que não foram fornecidas 
    nos últimos 6 meses, incluindo o nome da bebida e a quantidade em estoque.
*/

---------------------------------------------------------------------------------------------------------
/*
    Mostre o histórico completo de fornecimento de uma bebida específica, incluindo o nome da bebida, 
    o nome do fornecedor, a quantidade fornecida e a data de fornecimento. Ordene os resultados pela 
    data de fornecimento.
*/

---------------------------------------------------------------------------------------------------------
/*
    Encontre todos os clientes que compraram bebidas de uma determinada categoria e cuja soma das compras 
    dessa categoria é maior que a soma das compras de qualquer outra categoria. Inclua o nome do cliente
    e a categoria de bebida.
*/

---------------------------------------------------------------------------------------------------------
/*
    Liste todos os funcionários e seus dependentes, mostrando o nome do funcionário, a função e os 
    detalhes de todos os dependentes, incluindo nome, grau de parentesco e CPF.
*/

---------------------------------------------------------------------------------------------------------
/*
    Identifique as bebidas que têm o maior número de vendas em uma única venda, mostrando o nome da
    bebida, a quantidade vendida nessa venda específica e os detalhes da venda (data, cliente e funcionário).
*/

---------------------------------------------------------------------------------------------------------