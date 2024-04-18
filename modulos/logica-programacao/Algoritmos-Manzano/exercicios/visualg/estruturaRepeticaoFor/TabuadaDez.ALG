ALGORITMO "TabuadaDez"

VAR
    valorTabuada, contador: INTEIRO

INICIO
    ESCREVAL("DIGITE O NUMERO DE BASE DA TABUADA: ")
    LEIA(valorTabuada)

    PARA contador DE 1 ATE 10 PASSO 1 FACA
        ESCREVAL(valorTabuada, " X ", contador, " = ", (valorTabuada * contador))
    FIMPARA
FIMALGORITMO
