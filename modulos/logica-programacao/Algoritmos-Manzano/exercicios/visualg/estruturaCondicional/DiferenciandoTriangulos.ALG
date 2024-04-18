ALGORITMO "DiferenciandoTriangulos"
VAR
    valorA, valorB, valorC: REAL
    resultado: CARACTERE

INICIO
    ESCREVA("DIGITE A MEDIDA DO LADO A: ")
    LEIA(valorA)

    ESCREVA("DIGITE A MEDIDA DO LADO D: ")
    LEIA(valorB)

    ESCREVA("DIGITE A MEDIDA DO LADO C: ")
    LEIA(valorC)

    SE NAO (((valorA < valorB + valorC) E (valorB < valorA + valorC)) E (valorC < valorA + valorB)) ENTAO
        resultado <- "NAO E TRIANGULO"
    SENAO SE valorA = valorB E valorB = valorC ENTAO
        resultado <- "TRIANGULO EQUILATERO"
    SENAO SE valorA = valorB OU valorA = valorC OU valorB = valorC ENTAO
        resultado <- "TRIANGULO ISOSCELES"
    SENAO
        resultado <- "TRIANGULO ESCALENO"
    FIMSE

    ESCREVA("RESULTANTE DADOS OS VALORES FORNECIDOS: ", resultado)
FIMALGORITMO
