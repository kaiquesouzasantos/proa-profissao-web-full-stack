ALGORITMO "SomenteImpares"

VAR 
    contador : INTEIRO

FUNCAO verificaImpar(numero: INTEIRO): LOGICO
INICIO
    RETORNE numero MOD 2 <> 0
FIMFUNCAO

INICIO
    PARA contador DE 0 ATE 20 PASSO 1 FACA
        SE verificaImpar(contador) ENTAO
            ESCREVAL("O NUMERO ", contador, " E IMPAR")
        FIMSE
    FIMPARA
FIMALGORITMO
