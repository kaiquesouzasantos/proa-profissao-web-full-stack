ALGORITMO "TabuadaDez"

VAR
    valorTabuada, contador: INTEIRO

INICIO
    ESCREVAL("DIGITE O NUMERO DE BASE DA TABUADA: ")
    LEIA(valorTabuada)

    contador <- 1
    ENQUANTO contador <= 10 FACA
        ESCREVAL(valorTabuada, " X ", contador, " = ", (valorTabuada * contador))
        contador <- contador + 1
    FIMENQUANTO
FIMALGORITMO
