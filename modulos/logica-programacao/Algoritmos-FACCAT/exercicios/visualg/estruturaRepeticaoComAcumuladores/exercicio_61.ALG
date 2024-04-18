ALGORITMO "Exercicio_61"
VAR
    contador, somaEntrada, entrada: INTEIRO

INICIO
    somaEntrada <- 0

    PARA contador DE 1 ATE 10 PASSO 1 FAÇA
        ESCREVAL("DIGITE O ", contador, " NUMERO: ")
        LEIA(entrada)

        somaEntrada <- somaEntrada + entrada
    FIMPARA

    ESCREVAL("MEDIA ARITMETICA: ", somaEntrada / 10)
FIMALGORITMO
