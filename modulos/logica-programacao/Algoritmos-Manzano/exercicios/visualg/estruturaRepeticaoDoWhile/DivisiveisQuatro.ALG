ALGORITMO "DivisiveisQuatro"

VAR
    contador: INTEIRO

INICIO
    contador <- 1

    REPITA
        SE contador MOD 4 = 0 ENTAO
            ESCREVAL("O NUMERO ", contador, " E POR QUATRO")
        contador <- contador + 1
    ATE contador > 200
FIMALGORITMO
