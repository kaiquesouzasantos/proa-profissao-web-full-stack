ALGORITMO "DiferencaValoresQuadraticos"
VAR
    valorA, valorB: INTEIRO

FUNCAO calculaDiferenca(valorA, valorB: INTEIRO): REAL
INICIO
    RETORNE (valorA * valorA) - (valorB * valorB)
FIMFUNCAO

INICIO
    ESCREVA("DIGITE O VALOR A: ")
    LEIA(valorA)

    ESCREVA("DIGITE O VALOR B: ")
    LEIA(valorB)

    ESCREVA("DIFERENCA DOS QUADRATICOS: ", calculaDiferenca(valorA, valorB))
FIMALGORITMO