ALGORITMO "SomaCentena"

VAR
    soma, contador: INTEIRO

INICIO
    soma <- 0

    PARA contador DE 1 ATE 100 PASSO 1 FACA
        soma <- soma + contador
    FIMPARA

    ESCREVAL("SOMA DOS NUMEROS ENTRE 1 E 100 E: ", soma)
FIMALGORITMO
