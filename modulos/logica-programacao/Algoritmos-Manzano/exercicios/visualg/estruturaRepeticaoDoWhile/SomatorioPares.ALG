ALGORITMO "SomatorioPares"

VAR
    contador, soma: INTEIRO

FUNCAO verificaPar(numero: INTEIRO): LOGICO
INICIO
    SE numero MOD 2 = 0 ENTAO
        RETORNE VERDADEIRO
    SENAO
        RETORNE FALSO
    FIMSE
FIMFUNCAO

INICIO
    contador <- 1
    soma <- 0

    REPITA
        SE verificaPar(contador) ENTAO
            soma <- soma + contador
        FIMSE
        contador <- contador + 1
    ATE contador > 500

    ESCREVAL("SOMATORIO DE VALORES PARES ENTRE 1 E 500: ", soma)
FIMALGORITMO
