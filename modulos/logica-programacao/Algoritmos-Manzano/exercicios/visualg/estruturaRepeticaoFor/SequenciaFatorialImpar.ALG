ALGORITMO "SequenciaFatorialImpar"
VAR 
    contador : INTEIRO

FUNCAO verificaImpar(numero: INTEIRO): LOGICO
INICIO
    RETORNE numero MOD 2 <> 0
FIMFUNCAO

FUNCAO calculaFatorial(numero: INTEIRO): REAL
VAR
    saida: REAL
INICIO
    saida <- 1

    PARA contador DE numero ATE 1 PASSO -1 FACA
        saida <- saida * contador
    FIMPARA

    RETORNE saida
FIMFUNCAO

INICIO
    PARA contador DE 1 ATE 10 PASSO 1 FACA
        SE verificaImpar(contador) ENTAO
            ESCREVAL("O NUMERO ", contador, " E IMPAR E SEU FATORIAL E: ", calculaFatorial(contador))
        FIMSE
    FIMPARA
FIMALGORITMO
