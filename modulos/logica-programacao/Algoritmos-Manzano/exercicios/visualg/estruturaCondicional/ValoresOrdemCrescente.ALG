ALGORITMO "ValoresOrdemCrescente"
VAR
    valores: vetor[1..3] de REAL
    contador: INTEIRO
    auxiliar: REAL

INICIO
    PARA contador DE 1 ATE 3 PASSO 1 FACA
        ESCREVA("DIGITE O ", contador, " VALOR: ")
        LEIA(valores[contador])
    FIMPARA

    PARA contador DE 1 ATE 2 PASSO 1 FACA
        SE valores[contador] > valores[contador + 1] ENTAO
            auxiliar <- valores[contador]
            valores[contador] <- valores[contador + 1]
            valores[contador + 1] <- auxiliar
        FIMSE
    FIMPARA

    ESCREVA("ORDEM CRESCENTE: ")
    PARA contador DE 1 ATE 3 PASSO 1 FACA
        SE contador < 3 ENTAO
            ESCREVA(valores[contador], ", ")
        SENAO
            ESCREVA(valores[contador])
        FIMSE
    FIMPARA
FIMALGORITMO