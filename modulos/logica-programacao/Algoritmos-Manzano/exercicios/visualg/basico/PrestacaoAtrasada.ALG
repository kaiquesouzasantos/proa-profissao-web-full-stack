ALGORITMO "PrestacaoAtrasada"
VAR
    valor, percentualTaxa, taxaAdicional: REAL
    tempo: INTEIRO

FUNCAO calculaValorTaxaAdicional(percentualTaxa, valor: REAL, tempo: INTEIRO): REAL
INICIO
    RETORNE (valor * (percentualTaxa / 100)) * tempo
FIMFUNCAO

FUNCAO calculaValorPrestacao(taxaAdicional, valor: REAL): REAL
INICIO
    RETORNE taxaAdicional + valor
FIMFUNCAO

INICIO
    ESCREVA("DIGITE O VALOR INICIAL DA PRESTACAO: R$")
    LEIA(valor)

    ESCREVA("DIGITE O PERCENTUAL DE TAXA: ")
    LEIA(percentualTaxa)

    ESCREVA("DIGITE O TEMPO ATRASADO (D): ")
    LEIA(tempo)

    taxaAdicional <- calculaValorTaxaAdicional(percentualTaxa, valor, tempo)

    ESCREVA("VALOR DA PRESTACAO A SER PAGA EM ATRASO: R$", calculaValorPrestacao(taxaAdicional, valor))
FIMALGORITMO
