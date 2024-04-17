ALGORITMO "ValoresExtremidades"
VAR
    valores: vetor[1..5] de REAL
    contador: INTEIRO
    maior, menor: REAL

INICIO
    PARA contador DE 1 ATE 5 PASSO 1 FACA
        ESCREVA("DIGITE O ", contador, " VALOR: ")
        LEIA(valores[contador])
    FIMPARA

    maior <- valores[1]
    menor <- valores[1]

    PARA contador DE 2 ATE 5 PASSO 1 FACA
        SE valores[contador] > maior ENTAO
            maior <- valores[contador]
        SENAO SE valores[contador] < menor ENTAO
            menor <- valores[contador]
        FIMSE
    FIMPARA

    ESCREVAL("MAIOR VALOR: ", maior)
    ESCREVAL("MENOR VALOR: ", menor)
FIMALGORITMO