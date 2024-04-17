ALGORITMO "CelsiusParaFahrenheit"
VAR
    temperaturaCelsius, temperaturaFahrenheit: REAL

FUNCAO converteCelsiusParaFahrenheit(celsius: REAL): REAL
INICIO
    RETORNE ((9 * celsius) + 160) / 5
FIMFUNCAO

INICIO
    ESCREVA("DIGITE A TEMPERATURA EM CELSIUS: ")
    LEIA(temperaturaCelsius)

    temperaturaFahrenheit <- converteCelsiusParaFahrenheit(temperaturaCelsius)

    ESCREVA("TEMPERATURA EM FAHRENHEIT: ", temperaturaFahrenheit)
FIMALGORITMO
