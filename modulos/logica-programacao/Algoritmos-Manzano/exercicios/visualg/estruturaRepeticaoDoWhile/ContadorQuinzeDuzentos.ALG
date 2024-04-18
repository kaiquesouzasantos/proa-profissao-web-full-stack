ALGORITMO "ContadorQuinzeDuzentos"

VAR
    contador: INTEIRO

INICIO
    contador <- 15

    REPITA
        ESCREVAL("O QUADRADO DO NUMERO ", contador, " E: ", (contador * contador))
        contador <- contador + 1
    ATE contador > 200
FIMALGORITMO
