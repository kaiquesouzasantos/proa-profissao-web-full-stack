ALGORITMO "AprovacaoAluno"
VAR
    notas, media: REAL
    contador: INTEIRO

INICIO
    notas <- 0

    PARA contador DE 1 ATE 4 PASSO 1 FACA
        ESCREVA("DIGITE A ", contador, " NOTA: ")
        LEIA(notas)
        notas <- notas + notas
    FIMPARA

    media <- notas / 4

    SE media >= 5 ENTAO
        ESCREVA("ALUNO APROVADO COM MEDIA ", media)
    SENAO
        ESCREVA("ALUNO REPROVADO COM MEDIA ", media)
    FIMSE
FIMALGORITMO
