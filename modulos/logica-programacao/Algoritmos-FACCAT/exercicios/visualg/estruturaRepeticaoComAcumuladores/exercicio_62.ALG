ALGORITMO "Exercicio_62"
VAR
    contador, quantidadeAlunos: INTEIRO
    somaNotas, nota: REAL

INICIO
    somaNotas <- 0

    ESCREVAL("DIGITE O NUMERO DE ALUNOS QUE A CLASSE POSSUI: ")
    LEIA(quantidadeAlunos)

    PARA contador DE 1 ATE quantidadeAlunos PASSO 1 FAÇA
        ESCREVAL("DIGITE A NOTA DO ", contador, " ALUNO: ")
        LEIA(nota)

        somaNotas <- somaNotas + nota
    FIMPARA

    ESCREVAL("NOTA MEDIA DA SALA: ", somaNotas / quantidadeAlunos)
FIMALGORITMO
