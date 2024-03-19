ALGORITMO "exercicio_28"

VAR
   valorA, valorB, valorC : inteiro

INICIO
   ESCREVAL("DIGITE O PRIMEIRO NUMERO: ")
   LEIA(valorA)

   ESCREVAL("DIGITE O SEGUNDO NUMERO: ")
   LEIA(valorB)
   
   ESCREVAL("DIGITE O TERCEIRO NUMERO: ")
   LEIA(valorC)
   
   SE ((valorA > valorB) E (valorA > valorB)) ENTAO
      ESCREVAL("MAIOR VALOR: " , valorA)
   SENAO
      SE ((valorB > valorA) E (valorB > valorC)) ENTAO
         ESCREVAL("MAIOR VALOR: " , valorB)
      SENAO
         ESCREVAL("MAIOR VALOR: " , valorC)
      FIMSE
   FIMSE

FIMALGORITMO