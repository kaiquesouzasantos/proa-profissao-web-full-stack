ALGORITMO "exercicio_12"

VAR
   celsius, farenheit: real

INICIO
   ESCREVAL("DIGITE A TEMPERATURA EM [F]: ")
   LEIA(farenheit)
   
   celsius <- ((farenheit - 32) * 5) / 9
   
   
   ESCREVAL("TEMPERATURA EM CELSIUS: " , celsius)
FIMALGORITMO