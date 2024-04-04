ALGORITMO "Cronometro"

VAR
    contador_segundo, contador_minuto : inteiro

INICIO
    PARA contador_minuto DE 0 ATE 59 PASSO 1 FACA
        PARA contador_segundo DE 1 ATE 59 PASSO 1 FACA
            LIMPATELA()
            ESCREVAL(contador_minuto, ":", contador_segundo)
            TIMER(333)
        FIMPARA
    FIMPARA
FIMALGORITMO