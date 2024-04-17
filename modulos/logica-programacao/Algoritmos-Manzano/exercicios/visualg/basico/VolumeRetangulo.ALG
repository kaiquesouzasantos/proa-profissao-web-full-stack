ALGORITMO "VolumeRetangulo"
VAR
    comprimento, largura, altura, volume: INTEIRO

FUNCAO calculaVolumeRetangular(comprimento, largura, altura: INTEIRO): INTEIRO
INICIO
    RETORNE comprimento * largura * altura
FIMFUNCAO

INICIO
    ESCREVA("DIGITE O COMPRIMENTO DA CAIXA (CM): ")
    LEIA(comprimento)

    ESCREVA("DIGITE A LARGURA DA CAIXA (CM): ")
    LEIA(largura)

    ESCREVA("DIGITE A ALTURA DA CAIXA (CM): ")
    LEIA(altura)

    volume <- calculaVolumeRetangular(comprimento, largura, altura)

    ESCREVA("VOLUME TOTAL: ", volume, " UN^3")
FIMALGORITMO
