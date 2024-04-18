ALGORITMO "PotenciacaoNumerica"

VAR
    exponenciado, expoente, contador, ultimoValor: INTEIRO

INICIO
    ESCREVAL("DIGITE O VALOR DO EXPONENCIADO: ")
    LEIA(exponenciado)

    ESCREVAL("DIGITE O VALOR DO EXPOENTE: ")
    LEIA(expoente)

    contador <- 1
    ultimoValor <- 1

    PARA contador DE 1 ATE expoente PASSO 1 FACA
        ultimoValor <- ultimoValor * exponenciado
        ESCREVAL(exponenciado, "^", contador, " = ", ultimoValor)
    FIMPARA
FIMALGORITMO
