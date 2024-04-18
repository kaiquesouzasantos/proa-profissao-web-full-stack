ALGORITMO "SomenteImpares"
VAR
    contador: INTEIRO

FUNCAO verificaImpar(numero: INTEIRO): LOGICO
INICIO
    SE numero MOD 2 <> 0 ENTAO
        RETORNE VERDADEIRO
    SENAO
        RETORNE FALSO
    FIMSE
FIMFUNCAO

INICIO
    contador <- 0

    ENQUANTO contador <= 20 FACA
        SE verificaImpar(contador) ENTAO
            ESCREVAL("O NUMERO ", contador, " E IMPAR")
        FIMSE

        contador <- contador + 1
    FIMENQUANTO
FIMALGORITMO
