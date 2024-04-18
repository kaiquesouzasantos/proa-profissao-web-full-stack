ALGORITMO "Exercicio_65"
VAR
    somaIntervalo, valorA, valorB, contador: INTEIRO

INICIO
    somaIntervalo <- 0

    ESCREVAL("DIGITE O NUMERO DE INICIO (MENOR): ")
    LEIA(valorA)

    ESCREVAL("DIGITE O NUMERO DE FIM (MAIOR): ")
    LEIA(valorB)

    PARA contador DE valorA ATE valorB PASSO 1 FAÇA
        somaIntervalo <- somaIntervalo + contador
    FIMPARA

    ESCREVAL("SOMATORIA RESULTANTE DO INTERVALO [", valorA, ",", valorB, "]: ", somaIntervalo)
FIMALGORITMO
