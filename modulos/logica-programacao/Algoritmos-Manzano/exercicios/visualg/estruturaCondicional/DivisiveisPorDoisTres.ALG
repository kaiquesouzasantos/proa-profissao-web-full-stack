ALGORITMO "DivisiveisPorDoisTres"
VAR
    numero, contador: INTEIRO

FUNCAO retornaRestoDivisao(dividendo, divisor: INTEIRO): INTEIRO
VAR
    resto: INTEIRO
INICIO
    resto <- dividendo MOD divisor
    RETORNE resto
FIMFUNCAO

INICIO
    PARA contador DE 1 ATE 4 PASSO 1 FACA
        ESCREVA("DIGITE O NUMERO ", contador, " A SER VERIFICADO: ")
        LEIA(numero)

        SE (retornaRestoDivisao(numero, 2) = 0) E (retornaRestoDivisao(numero, 3) = 0) ENTAO
            ESCREVA("O NUMERO ", numero, " E DIVISIVEL POR 2 E 3")
        SENAO
            ESCREVA("O NUMERO ", numero, " NAO E DIVISIVEL POR 2 E 3")
        FIMSE
    FIMPARA
FIMALGORITMO
