ALGORITMO "DolarParaReal"
VAR
    quantidadeDolar, cotacao, valorEmReal: REAL

FUNCAO converteDolarParaReal(quantidadeDolar, cotacao: REAL): REAL
INICIO
    RETORNE quantidadeDolar * cotacao
FIMFUNCAO

INICIO
    ESCREVA("DIGITE O VALOR OBTIDO EM DOLAR: U$ ")
    LEIA(quantidadeDolar)

    ESCREVA("DIGITE O VALOR DA COTACAO ATUAL PARA O REAL: R$ ")
    LEIA(cotacao)

    valorEmReal <- converteDolarParaReal(quantidadeDolar, cotacao)

    ESCREVA("ADJACENCIA DA CONVERSAO EM REAIS: R$ ", valorEmReal)
FIMALGORITMO