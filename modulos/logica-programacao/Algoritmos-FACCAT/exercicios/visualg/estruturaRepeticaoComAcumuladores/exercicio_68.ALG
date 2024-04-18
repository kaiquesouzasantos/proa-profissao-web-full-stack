ALGORITMO "Exercicio_68"
VAR
    somaValores, entrada: REAL
    itensEstoque, contador: INTEIRO

INICIO
    somaValores <- 0

    ESCREVAL("DIGITE A QUANTIDADE DE ITENS EM ESTOQUE: ")
    LEIA(itensEstoque)

    PARA contador DE 1 ATE itensEstoque PASSO 1 FAÇA
        ESCREVAL("DIGITE O VALOR DO ", contador, " ITEM: R$")
        LEIA(entrada)

        somaValores <- somaValores + entrada
    FIMPARA

    ESCREVAL("SOMATORIA RESULTANTE DE ESTOQUE: R$", somaValores)
    ESCREVAL("VALOR MEDIO DE ITENS: R$", somaValores / itensEstoque)
FIMALGORITMO
