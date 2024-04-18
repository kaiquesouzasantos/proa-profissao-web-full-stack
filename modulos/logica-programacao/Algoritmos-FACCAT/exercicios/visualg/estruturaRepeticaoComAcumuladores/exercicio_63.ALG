ALGORITMO "Exercicio_63"
VAR
    contador, somaEntrada, entrada: INTEIRO

INICIO
    somaEntrada <- 0

    PARA contador DE 1 ATE 10 PASSO 1 FAÇA
        ESCREVAL("DIGITE O ", contador, " NUMERO: ")
        LEIA(entrada)

        somaEntrada <- somaEntrada + entrada
    FIMPARA

    ESCREVAL("SOMATORIA RESULTANTE: ", somaEntrada)
FIMALGORITMO
