ALGORITMO "PotenciacaoTres"

FUNCAO retornaExponenciado(numero, expoente: INTEIRO): REAL
VAR
    resultado: REAL
INICIO
    resultado <- POTENCIA(numero, expoente)
    RETORNE resultado
FIMFUNCAO

VAR
    contador: INTEIRO

INICIO
    contador <- 0

    ENQUANTO contador <= 15 FACA
        ESCREVAL("3^", contador, " = ", retornaExponenciado(3, contador))
        contador <- contador + 1
    FIMENQUANTO
FIMALGORITMO
