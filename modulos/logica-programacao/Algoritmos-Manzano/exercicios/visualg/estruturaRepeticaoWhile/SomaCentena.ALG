ALGORITMO "SomaCentena"
VAR
    contador, soma: INTEIRO

INICIO
    contador <- 1
    soma <- 0

    ENQUANTO contador <= 100 FACA
        soma <- soma + contador
        contador <- contador + 1
    FIMENQUANTO

    ESCREVAL("SOMA DOS NUMEROS ENTRE 1 E 100 E: ", soma)
FIMALGORITMO
