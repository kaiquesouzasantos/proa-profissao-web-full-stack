ALGORITMO "QuadradoSoma"
VAR
    soma, valor: REAL
    contador: INTEIRO

FUNCAO retornaValorQuadratico(valor: REAL): REAL
INICIO
    RETORNE valor * valor
FIMFUNCAO

INICIO
    soma <- 0

    PARA contador DE 1 ATE 3 PASSO 1 FACA
        ESCREVA("DIGITE O ", contador, " VALOR: ")
        LEIA(valor)
        soma <- soma + valor
    FIMPARA

    ESCREVA("SOMA DOS NUMEROS QUADRATICOS: ", retornaValorQuadratico(soma))
FIMALGORITMO