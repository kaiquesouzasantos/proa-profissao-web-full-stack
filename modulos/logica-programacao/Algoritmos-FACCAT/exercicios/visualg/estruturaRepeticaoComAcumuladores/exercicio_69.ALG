ALGORITMO "Exercicio_69"
VAR
    somaValores, entrada: REAL
    contadorItens: INTEIRO
    continuarLeitura: CARACTERE

INICIO
    somaValores <- 0
    contadorItens <- 0

    REPITA
        contadorItens <- contadorItens + 1
        ESCREVAL("DIGITE O VALOR DO ", contadorItens, " ITEM: R$")
        LEIA(entrada)

        somaValores <- somaValores + entrada

        ESCREVAL("DESEJA CONTINUAR NA ADICAO DE VALORES EM ESTOQUE[S/N]? ")
        LEIA(continuarLeitura)
    ATE continuarLeitura = "N"

    ESCREVAL("SOMATORIA RESULTANTE DE ESTOQUE: R$", somaValores)
    ESCREVAL("VALOR MEDIO DE ITENS: R$", somaValores / contadorItens)
FIMALGORITMO
