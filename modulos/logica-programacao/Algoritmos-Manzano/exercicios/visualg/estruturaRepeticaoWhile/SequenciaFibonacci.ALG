ALGORITMO "SequenciaFibonacci"
VAR
    termo, atual, posterior, contador: INTEIRO

INICIO
    termo <- 1
    atual <- 0
    posterior <- 1
    contador <- 1

    ENQUANTO termo <= 15 FACA
        // o termo posterior e a soma dele com o atual
        posterior <- posterior + atual

        // o termo atual e a diferenca entre o posterior (atualizado) e o atual
        // sendo assim, eu incremento o termo posterior e mantenho a sequencia atual (Ex: 3 + 5 = 8 (posterior), 8 - 3 = 5 (atual))
        atual <- posterior - atual
        termo <- termo + 1
    FIMENQUANTO

    ESCREVAL("15 TERMO DA SEQUENCIA FIBONACCI: ", atual)
FIMALGORITMO
