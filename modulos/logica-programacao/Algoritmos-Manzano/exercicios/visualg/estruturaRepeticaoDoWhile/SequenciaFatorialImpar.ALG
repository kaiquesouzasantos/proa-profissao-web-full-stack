ALGORITMO "SequenciaFatorialImpar"

FUNCAO verificaImpar(numero: INTEIRO): LOGICO
INICIO
    SE numero MOD 2 <> 0 ENTAO
        RETORNE VERDADEIRO
    SENAO
        RETORNE FALSO
    FIMSE
FIMFUNCAO

FUNCAO calculaFatorial(numero: INTEIRO): REAL
VAR
    saida: REAL
INICIO
    saida <- 1

    REPITA
        saida <- saida * numero
        numero <- numero - 1
    ATE numero < 1

    RETORNE saida
FIMFUNCAO

VAR
    contador: INTEIRO

INICIO
    PARA contador DE 1 ATE 10 PASSO 1 FACA
        SE verificaImpar(contador) ENTAO
            ESCREVAL("O NUMERO ", contador, " E IMPAR E SEU FATORIAL E: ", calculaFatorial(contador))
        FIMSE
    FIMPARA
FIMALGORITMO
