ALGORITMO "DiferencaValoresDescrecentes"
VAR
    valorA, valorB, diferenca: INTEIRO

INICIO
    ESCREVA("DIGITE O PRIMEIRO VALOR: ")
    LEIA(valorA)

    ESCREVA("DIGITE O SEGUNDO VALOR: ")
    LEIA(valorB)

    SE valorA > valorB ENTAO
        diferenca <- valorA - valorB
    SENAO
        diferenca <- valorB - valorA
    FIMSE

    ESCREVA("A DIFERENCA DO MAIOR VALOR PELO MENOR E: ", diferenca)
FIMALGORITMO
