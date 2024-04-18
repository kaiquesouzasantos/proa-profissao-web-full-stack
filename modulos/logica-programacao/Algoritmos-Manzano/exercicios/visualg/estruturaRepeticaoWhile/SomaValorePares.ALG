ALGORITMO "SomaValoresPares"

VAR
    contador, soma: INTEIRO

FUNCAO retornaPar(numero: INTEIRO): INTEIRO
INICIO
    SE numero MOD 2 = 0 ENTAO
        RETORNE numero
    SENAO
        RETORNE 0
    FIMSE
FIMFUNCAO

INICIO
    contador <- 1
    soma <- 0

    ENQUANTO contador <= 500 FACA
        soma <- soma + retornaPar(contador)
        contador <- contador + 1
    FIMENQUANTO

    ESCREVAL("SOMA DOS NUMEROS PARES ENTRE 1 E 500 E: " + soma)
FIMALGORITMO
