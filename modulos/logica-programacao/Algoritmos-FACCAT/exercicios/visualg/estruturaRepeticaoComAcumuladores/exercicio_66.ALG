ALGORITMO "Exercicio_66"
VAR
    somaIntervalo, valorA, valorB, maior, menor, contador: INTEIRO

INICIO
    somaIntervalo <- 0

    ESCREVAL("DIGITE O NUMERO DE INICIO (MENOR): ")
    LEIA(valorA)

    ESCREVAL("DIGITE O NUMERO DE FIM (MAIOR): ")
    LEIA(valorB)

    SE valorA > valorB ENTAO
        maior <- valorA
        menor <- valorB
    SENAO
        maior <- valorB
        menor <- valorA
    FIMSE

    PARA contador DE menor ATE maior PASSO 1 FAÇA
        somaIntervalo <- somaIntervalo + contador
    FIMPARA

    ESCREVAL("SOMATORIA RESULTANTE DO INTERVALO [", menor, ",", maior, "]: ", somaIntervalo)
FIMALGORITMO
