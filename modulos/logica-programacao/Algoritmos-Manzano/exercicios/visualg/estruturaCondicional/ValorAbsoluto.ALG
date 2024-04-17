ALGORITMO "ValorAbsoluto"
VAR
    numero: INTEIRO

FUNCAO retornaAbsoluto(numero: INTEIRO): INTEIRO
INICIO
    SE numero < 0 ENTAO
        RETORNE numero * -1
    SENAO
        RETORNE numero
    FIMSE
FIMFUNCAO

INICIO
    ESCREVA("DIGITE O NUMERO A SER PROCESSADO: ")
    LEIA(numero)

    ESCREVA("NUMERO ABSOLUTO: ", retornaAbsoluto(numero))
FIMALGORITMO
