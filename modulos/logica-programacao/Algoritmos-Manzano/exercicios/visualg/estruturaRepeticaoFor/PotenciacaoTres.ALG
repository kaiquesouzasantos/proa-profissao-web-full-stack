ALGORITMO "PotenciacaoTres"
VAR 
    contador : INTEIRO

FUNCAO retornaExponenciado(numero: INTEIRO, expoente: INTEIRO): REAL
INICIO
    RETORNE POTENCIA(numero, expoente)
FIMFUNCAO

INICIO
    PARA contador DE 0 ATE 15 PASSO 1 FACA
        ESCREVAL("3^", contador, " = ", retornaExponenciado(3, contador))
    FIMPARA
FIMALGORITMO
