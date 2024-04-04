ALGORITMO "Temporizador"

VAR
    contador_segundo, contador_minuto : inteiro

INICIO
    ESCREVAL("DIGITE O TEMPO EM MINUTOS: ")
    LEIA(contador_minuto)

    ESCREVAL("DIGITE O TEMPO EM SEGUNDOS: ")
    LEIA(contador_segundo)

    PARA contador_minuto DE contador_minuto ATE 0 PASSO -1 FACA
        PARA contador_segundo DE contador_segundo ATE 0 PASSO -1 FACA
            LIMPATELA()
            ESCREVAL(contador_minuto, ":", contador_segundo)
            TIMER(333)
        FIMPARA

        contador_segundo <- 59
    FIMPARA
FIMALGORITMO