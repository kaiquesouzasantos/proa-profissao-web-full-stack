ALGORITMO "Exercicio_49"
VAR
    somaNotas, nota, contador: REAL

FUNCAO verificaNota(nota: REAL): LOGICO
INICIO
    RETORNE (nota >= 0) E (nota <= 10)
FIMFUNCAO

INICIO
    somaNotas <- 0
    contador <- 1

    ENQUANTO contador <= 2 FACA
        REPITA
            ESCREVAL("DIGITE O ", contador, " NOTA: ")
            LEIA(nota)

            SE verificaNota(nota) ENTAO
                somaNotas <- somaNotas + nota
            SENAO
                ESCREVAL("NUMERO INVALIDO! FORA DO INTERVALO ACEITO.")
            FIMSE
        ATE verificaNota(nota)

        contador <- contador + 1
    FIMENQUANTO

    ESCREVAL("MEDIA DO ALUNO: ", (somaNotas/2))
FIMALGORITMO
