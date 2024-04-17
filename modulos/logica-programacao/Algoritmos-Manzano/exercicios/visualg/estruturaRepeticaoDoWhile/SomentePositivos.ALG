ALGORITMO "SomentePositivos"

VAR
    valorEntrada, maior, menor: INTEIRO

INICIO
    valorEntrada <- 0
    maior <- 0
    menor <- 1000000000

    REPITA
        ESCREVAL("DIGITE UM NUMERO A SER PROCESSADO: ")
        LEIA(valorEntrada)

        SE valorEntrada >= 0 ENTAO
            SE valorEntrada > maior ENTAO
                maior <- valorEntrada
            FIMSE

            SE valorEntrada < menor ENTAO
                menor <- valorEntrada
            FIMSE
        FIMSE
    ATE valorEntrada < 0

    ESCREVAL("MAIOR VALOR: ", maior)
    ESCREVAL("MENOR VALOR: ", menor)
FIMALGORITMO
