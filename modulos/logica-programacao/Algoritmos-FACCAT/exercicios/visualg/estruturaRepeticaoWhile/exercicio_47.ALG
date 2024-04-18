ALGORITMO "Exercicio_47"

VAR
    valorA, valorB: INTEIRO

FUNCAO verificaZero(valor: INTEIRO): LOGICO
INICIO
    RETORNE valor = 0
FIMFUNCAO

FUNCAO divide(valorA, valorB: INTEIRO): REAL
INICIO
    RETORNE valorA / valorB
FIMFUNCAO

INICIO
    ESCREVAL("DIGITE O PRIMEIRO VALOR A SER PROCESSADO: ")
    LEIA(valorA)

    REPITA
        ESCREVAL("DIGITE O SEGUNDO VALOR A SER PROCESSADO: ")
        LEIA(valorB)

        SE verificaZero(valorB) ENTAO
            ESCREVAL("VALOR INVÁLIDO")
        FIMSE
    ATE (valorB >= 0) E (valorB <= 10)

    ESCREVAL("RESULTANTE: ", divide(valorA, valorB))
FIMALGORITM
