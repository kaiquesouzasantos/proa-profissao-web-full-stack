ALGORITMO "Exercicio_60"
VAR
    contador, intervalo, numero: INTEIRO

INICIO
    intervalo <- 0

    PARA contador DE 1 ATE 10 PASSO 1 FAÇA
        ESCREVAL("DIGITE O ", contador, " NUMERO: ")
        LEIA(numero)

        SE (numero >= 10) E (numero <= 20) ENTAO
            intervalo <- intervalo + 1
        FIMSE
    FIMPARA

    ESCREVAL("CONTAGEM DE NUMEROS ENTRE [10, 20]: ", intervalo)
    ESCREVAL("CONTAGEM DE NUMEROS FORA DO INTERVALO: ", 10 - intervalo)
FIMALGORITMO