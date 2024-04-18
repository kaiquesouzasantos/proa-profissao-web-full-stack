ALGORITMO "exercicio_56"

VAR
    numero, contador: INTEIRO

INICIO
    ESCREVAL("DIGITE O NUMERO DA TABUADA: ")
    LEIA(numero)

    PARA contador DE 1 ATE 10 PASSO 1 FACA
        ESCREVAL(numero, "x", contador, "=", contador * numero)
    FIMPARA
FIMALGORITMO
