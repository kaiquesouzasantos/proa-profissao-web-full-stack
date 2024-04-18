ALGORITMO "RealParaDolar"
VAR
    quantidadeReal, cotacao, quantidadeDolar: REAL

FUNCAO converteRealParaDolar(quantidadeReal, cotacao: REAL): REAL
INICIO
    RETORNE quantidadeReal * cotacao
FIMFUNCAO

INICIO
    ESCREVA("DIGITE O VALOR OBTIDO EM REAL: R$ ")
    LEIA(quantidadeReal)

    ESCREVA("DIGITE O VALOR DA COTACAO ATUAL PARA O DOLAR: U$ ")
    LEIA(cotacao)

    quantidadeDolar <- converteRealParaDolar(quantidadeReal, cotacao)

    ESCREVA("ADJACENCIA DA CONVERSAO EM DOLARES: U$ ", quantidadeDolar)
FIMALGORITMO
