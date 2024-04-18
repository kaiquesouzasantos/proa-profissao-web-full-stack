ALGORITMO "Exercicio_64"
VAR
    contador, somaEntrada, valor: INTEIRO

INICIO
    somaEntrada <- 0

    PARA contador DE 1 ATE 10 PASSO 1 FAÇA
        ESCREVAL("DIGITE O ", contador, " NUMERO: ")
        LEIA(valor)

        SE valor < 40 ENTAO
            somaEntrada <- somaEntrada + valor
        FIMSE
    FIMPARA

    ESCREVAL("SOMATORIA RESULTANTE: ", somaEntrada)
FIMALGORITMO
