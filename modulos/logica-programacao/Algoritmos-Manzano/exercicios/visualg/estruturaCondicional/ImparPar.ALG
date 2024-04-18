ALGORITMO "ImparPar"
VAR
    numero: INTEIRO

FUNCAO verificaPar(numero: INTEIRO): LOGICO
INICIO
    RETORNE numero MOD 2 = 0
FIMFUNCAO

INICIO
    ESCREVA("DIGITE O NUMERO A SER PROCESSADO: ")
    LEIA(numero)

    SE verificaPar(numero) ENTAO
        ESCREVA("O NUMERO ", numero, " E PAR")
    SENAO
        ESCREVA("O NUMERO ", numero, " E IMPAR")
    FIMSE
FIMALGORITMO