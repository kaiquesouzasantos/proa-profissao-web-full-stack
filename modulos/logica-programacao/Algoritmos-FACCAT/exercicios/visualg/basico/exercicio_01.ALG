ALGORITMO "exercicio_01"

VAR
   valorA, valorB, auxiliar : inteiro
   
INICIO
   valorA <- 10
   valorB <- 20

   auxiliar <- valorB
   valorB <- valorA
   valorA <- auxiliar
   
   ESCREVAL("VALOR A: " , valorA)
   ESCREVAL("VALOR B: " , valorB)
   
FIMALGORITMO