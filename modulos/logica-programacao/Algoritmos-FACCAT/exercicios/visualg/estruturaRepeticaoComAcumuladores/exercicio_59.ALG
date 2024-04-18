ALGORITMO "Exercicio_59"
VAR
    contador, negativos, entrada: INTEIRO

INICIO
    negativos <- 0

    PARA contador DE 1 ATE 10 PASSO 1 FAÇA
        ESCREVAL("DIGITE O ", contador, " NUMERO: ")
        LEIA(entrada)
        
        SE entrada < 0 ENTAO
            negativos <- negativos + 1
        FIMSE
    FIMPARA

    ESCREVAL("CONTAGEM DE NUMEROS NEGATIVOS: ", negativos)
FIMALGORITMO
