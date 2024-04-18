ALGORITMO "SequenciaFibonacci"

VAR
    atual, termo, posterior: INTEIRO

INICIO
    atual <- 0

    PARA termo DE 1 ATE 15 PASSO 1 FACA
        posterior <- posterior + atual
        atual <- posterior - atual
    FIMPARA

    ESCREVAL("15 TERMO DA SEQUENCIA FIBONACCI: ", atual)
FIMALGORITMO
