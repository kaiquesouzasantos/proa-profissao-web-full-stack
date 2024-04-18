ALGORITMO "SomaValoresPares"

VAR
    soma, contador: INTEIRO

FUNCAO retornaPar(numero: INTEIRO): INTEIRO
INICIO
    SE numero MOD 2 = 0 ENTAO
        RETORNE numero
    SENAO
        RETORNE 0
    FIMSE
FIMFUNCAO

INICIO
    soma <- 0

    PARA contador DE 1 ATE 500 PASSO 1 FACA
        soma <- soma + retornaPar(contador)
    FIMPARA

    ESCREVAL("SOMA DOS NUMEROS PARES ENTRE 1 E 500 E: ", soma)
FIMALGORITMO
