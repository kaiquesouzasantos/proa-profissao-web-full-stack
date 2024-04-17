ALGORITMO "DivisivelPorQuatroCinco"
VAR
    numero: INTEIRO

FUNCAO retornaRestoDivisao(dividendo, divisor: INTEIRO): INTEIRO
VAR
    resto: INTEIRO
INICIO
    resto <- dividendo MOD divisor
    RETORNE resto
FIMFUNCAO

INICIO
    ESCREVA("DIGITE O NUMERO A SER VERIFICADO: ")
    LEIA(numero)

    SE (retornaRestoDivisao(numero, 4) = 0) E (retornaRestoDivisao(numero, 5) = 0) ENTAO
        ESCREVA("O NUMERO ", numero, " E DIVISIVEL POR 4 E 5")
    SENAO
        ESCREVA("O NUMERO ", numero, " NAO E DIVISIVEL POR 4 E 5")
    FIMSE
FIMALGORITMO
