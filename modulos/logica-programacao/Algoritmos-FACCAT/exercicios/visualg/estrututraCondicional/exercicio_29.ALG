ALGORITMO "exercicio_29"

VAR
   valorA, valorB, valorC : inteiro

INICIO
   ESCREVAL("DIGITE O PRIMEIRO NUMERO: ")
   LEIA(valorA)

   ESCREVAL("DIGITE O SEGUNDO NUMERO: ")
   LEIA(valorB)
   
   ESCREVAL("DIGITE O TERCEIRO NUMERO: ")
   LEIA(valorC)
   
   SE ((valorA < valorB) E (valorA < valorC)) ENTAO
      ESCREVAL("SOMA RESULTANTE: " , (valorB + valorC))
   SENAO
      SE ((valorB < valorA) E (valorB < valorC)) ENTAO
         ESCREVAL("SOMA RESULTANTE: " , (valorA + valorC))
      SENAO
         ESCREVAL("SOMA RESULTANTE: " , (valorA + valorB))
      FIMSE
   FIMSE

FIMALGORITMO