ALGORITMO "LeituraSucessivaEstatistica"

VAR
    contador: INTEIRO
    numero, soma: REAL

FUNCAO calculaMedia(soma: REAL, leituras: INTEIRO): REAL
INICIO
    SE leituras = 0 ENTAO
        RETORNE 0.0
    SENAO
        RETORNE soma / leituras
    FIM_SE
FIMFUNCAO

INICIO
    contador <- 0
    numero <- 0
    soma <- 0

    REPITA
        contador <- contador + 1
        soma <- soma + numero

        ESCREVAL("DIGITE O ", contador, " NUMERO A SER PROCESSADO: ")
        LEIA(numero)
    ATE numero <= 0

    ESCREVAL("SOMATORIO: ", soma, " | MEDIA ARITMETICA: ", calculaMedia(soma, contador - 1), " | LEITURAS: ", contador)

FIMALGORITMO
