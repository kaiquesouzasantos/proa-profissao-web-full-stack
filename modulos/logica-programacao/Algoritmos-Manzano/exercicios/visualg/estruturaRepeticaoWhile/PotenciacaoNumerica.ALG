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

    ENQUANTO contador <= expoente FACA
        ultimoValor <- ultimoValor * exponenciado
        ESCREVAL(exponenciado, "^", contador, " = ", ultimoValor)
        contador <- contador + 1
    FIMENQUANTO
FIMALGORITMO
