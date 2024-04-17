ALGORITMO "SequenciaFatorial"

VAR
    valores: VETOR[1..15] DE INTEIRO
    contador, valor: INTEIRO
    fatorial: REAL

FUNCAO calculaFatorial(numero: INTEIRO): REAL
VAR
    saida: REAL
INICIO
    saida <- 1

    REPITA
        saida <- saida * numero
        numero <- numero - 1
    ATE numero < 1

    RETORNE saida
FIMFUNCAO

INICIO
    PARA contador DE 1 ATE 15 PASSO 1 FACA
        ESCREVAL("DIGITE O ", contador, " NUMERO A SER PROCESSADO: ")
        LEIA(valor)
        valores[contador] <- valor
    FIMPARA

    PARA contador DE 1 ATE 15 PASSO 1 FACA
        fatorial <- calculaFatorial(valores[contador])
        ESCREVAL("O FATORIAL DE ", valores[contador], " E ", fatorial)
    FIMPARA
FIMALGORITMO
