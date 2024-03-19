ALGORITMO "exercicio_33"

VAR
   valorA, valorB : inteiro

INICIO
   ESCREVAL("DIGITE O PRIMEIRO VALOR: ")
   LEIA(valorA)

   ESCREVAL("DIGITE O SEGUNDO VALOR: ")
   LEIA(valorB)
   
   SE valorA > valorB ENTAO
      ESCREVAL("PRIMEIRO E MAIOR")
   SENAO
      SE valorB > valorA ENTAO
         ESCREVAL("SEGUNDO E MAIOR")
      SENAO
         ESCREVAL("NUMEROS IGUAIS")
      FIMSE
   FIMSE
   
FIMALGORITMO

