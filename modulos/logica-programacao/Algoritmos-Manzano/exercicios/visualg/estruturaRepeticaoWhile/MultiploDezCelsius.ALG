ALGORITMO "MultiploDezCelsius"
VAR
    contador, celsius: INTEIRO

FUNCAO converteCelsiusParaFahrenheit(celsius: INTEIRO): REAL
VAR
    fahrenheit: REAL
INICIO
    fahrenheit <- ((9 * celsius) + 160) / 5
    RETORNE fahrenheit
FIMFUNCAO

INICIO
    contador <- 1

    ENQUANTO contador <= 10 FACA
        celsius <- 10 * contador
        ESCREVAL(celsius, " C = ", converteCelsiusParaFahrenheit(celsius), " F")

        contador <- contador + 1
    FIMENQUANTO
FIMALGORITMO