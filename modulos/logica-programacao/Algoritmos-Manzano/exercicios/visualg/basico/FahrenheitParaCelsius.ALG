ALGORITMO "FahrenheitParaCelsius"
VAR
    temperaturaFahrenheit, temperaturaCelsius: REAL

FUNCAO converteFahrenheitParaCelsius(fahrenheit: REAL): REAL
INICIO
    RETORNE ((fahrenheit - 32) * 5) / 9
FIMFUNCAO

INICIO
    ESCREVA("DIGITE A TEMPERATURA EM FAHRENHEIT: ")
    LEIA(temperaturaFahrenheit)

    temperaturaCelsius <- converteFahrenheitParaCelsius(temperaturaFahrenheit)

    ESCREVA("TEMPERATURA EM CELSIUS: ", temperaturaCelsius)
FIMALGORITMO