ALGORITMO "exercicio_20"

VAR
   valorA, valorB : inteiro

INICIO
   ESCREVAL("DIGITE O 1 VALOR: ")
   LEIA(valorA)

   ESCREVAL("DIGITE O 2 VALOR: ")
   LEIA(valorB)
   
   SE valorA > valorB ENTAO
      ESCREVAL("ORDENACAO: " , valorB , "," , valorA)
   SENAO
      ESCREVAL("ORDENACAO: " , valorA , "," , valorB)
   FIMSE
   
FIMALGORITMO