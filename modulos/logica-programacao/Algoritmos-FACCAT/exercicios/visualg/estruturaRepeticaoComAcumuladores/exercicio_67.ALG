ALGORITMO "Exercicio_67"
VAR
    somaIntervalo, contador: INTEIRO

INICIO
    somaIntervalo <- 0

    PARA contador DE 15 ATE 100 PASSO 1 FAÇA
        somaIntervalo <- somaIntervalo + contador
    FIMPARA

    ESCREVAL("SOMA RESULTANTE DO INTERVALO [15, 100]: ", somaIntervalo)
FIMALGORITMO
