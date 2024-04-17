ALGORITMO "VolumeLataOleo"
VAR
    raio, altura, volume: REAL

FUNCAO calculaVolume(raio, altura: REAL): REAL
INICIO
    RETORNE 3.14 * (raio * raio) * altura
FIMFUNCAO

INICIO
    ESCREVA("DIGITE O RAIO DA LATA DE OLEO: ")
    LEIA(raio)

    ESCREVA("DIGITE A ALTURA DA LATA DE OLEO: ")
    LEIA(altura)

    volume <- calculaVolume(raio, altura)

    ESCREVA("VOLUME TOTAL: ", volume, " UN^3")
FIMALGORITMO