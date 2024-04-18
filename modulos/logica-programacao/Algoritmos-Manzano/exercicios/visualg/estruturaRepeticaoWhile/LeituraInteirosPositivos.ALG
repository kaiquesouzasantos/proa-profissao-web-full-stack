ALGORITMO "LeituraInteirosPositivos"

VAR
    leitura: REAL
    maior, menor: REAL

FUNCAO verificaPositivo(numero: REAL): LOGICO
VAR
    positivo: LOGICO
INICIO
    SE numero >= 0 ENTAO
        positivo <- VERDADEIRO
    SENAO
        positivo <- FALSO
    FIMSE

    RETORNE positivo
FIMFUNCAO

INICIO
    leitura <- 0
    maior <- 0
    menor <- 1000000000000

    ENQUANTO verificaPositivo(leitura) FACA
        ESCREVAL("DIGITE UM NUMERO: ")
        LEIA(leitura)

        SE verificaPositivo(leitura) ENTAO
            SE leitura > maior ENTAO
                maior <- leitura
            FIMSE 
            SE leitura < menor ENTAO
                menor <- leitura
            FIMSE
        FIMSE
    FIMENQUANTO

    ESCREVAL("MAIOR NUMERO: ", maior)
    ESCREVAL("MENOR VALOR: ", menor)
FIMALGORITMO
