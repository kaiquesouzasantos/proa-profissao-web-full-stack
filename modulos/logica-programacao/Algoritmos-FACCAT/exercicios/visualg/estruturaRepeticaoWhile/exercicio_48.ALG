ALGORITMO "Exercicio_48"

VAR
    somaNotas, contador, nota: REAL

INICIO
    somaNotas <- 0
    contador <- 1

    ENQUANTO contador <= 2 FACA
        ESCREVAL("DIGITE O ", contador, " NOTA: ")
        LEIA(nota)

        SE (nota >= 0) E (nota <= 10) ENTAO
            somaNotas <- somaNotas + nota
        SENAO
            ESCREVAL("NUMERO INVALIDO! FORA DO INTERVALO ACEITO.")
        FIMSE

        contador <- contador + 1
    FIMENQUANTO

    ESCREVAL("MEDIA DO ALUNO: ", (somaNotas / 2))
FIMALGORITMO
