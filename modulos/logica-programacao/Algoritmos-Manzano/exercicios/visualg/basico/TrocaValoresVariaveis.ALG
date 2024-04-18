ALGORITMO "TrocaValoresVariaveis"
VAR
    auxiliar, valorA, valorB: INTEIRO

INICIO
    ESCREVA("DIGITE O VALOR A: ")
    LEIA(valorA)

    ESCREVA("DIGITE O VALOR B: ")
    LEIA(valorB)

    auxiliar <- valorA
    valorA <- valorB
    valorB <- auxiliar

    ESCREVA("VALOR A (ATUAL): ", valorA, " | VALOR B (ATUAL): ", valorB)
FIMALGORITMO