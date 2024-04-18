ALGORITMO "CombustivelNecessario"
VAR
    tempoGasto, velocidade: INTEIRO
    combustivelNecessario: REAL

FUNCAO calculaDistancia(tempoGasto, velocidade: INTEIRO): INTEIRO
INICIO
    RETORNE tempoGasto * velocidade
FIMFUNCAO

FUNCAO calculaCombustivelNecessario(distancia, litroPorQuilometro: INTEIRO): REAL
INICIO
    RETORNE distancia / litroPorQuilometro
FIMFUNCAO

INICIO
    ESCREVA("DIGITE O TEMPO NECESSARIO (H): ")
    LEIA(tempoGasto)

    ESCREVA("DIGITE A VELOCIDADE MEDIA (KM): ")
    LEIA(velocidade)

    combustivelNecessario <- calculaCombustivelNecessario(calculaDistancia(tempoGasto, velocidade), 12)

    ESCREVA("LITROS NECESSARIOS PARA A VIAGEM: ", combustivelNecessario, " L")
FIMALGORITMO
