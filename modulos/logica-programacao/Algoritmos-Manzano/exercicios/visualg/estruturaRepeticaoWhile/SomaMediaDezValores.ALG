ALGORITMO "SomaMediaDezValores"

VAR
    contador: INTEIRO
    soma: REAL

INICIO
    contador <- 1
    soma <- 0

    ENQUANTO contador <= 10 FACA
        ESCREVAL("DIGITE O ", contador, " VALOR A SER COMPUTADO: ")
        soma <- soma + LEIA()
        contador <- contador + 1
    FIMENQUANTO

    ESCREVAL("SOMATORIA DOS VALORES: ", soma)
    ESCREVAL("MEDIA ARITMETICA DOS VALORES: ", (soma / 10))
FIMALGORITMO
