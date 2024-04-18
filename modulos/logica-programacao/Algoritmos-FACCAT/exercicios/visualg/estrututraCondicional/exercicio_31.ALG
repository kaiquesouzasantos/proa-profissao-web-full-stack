ALGORITMO "exercicio_31"

VAR
   valorA, valorB, valorC : inteiro

INICIO
   ESCREVAL("DIGITE O PRIMEIRO LADO: ")
   LEIA(valorA)

   ESCREVAL("DIGITE O SEGUNDO LADO: ")
   LEIA(valorB)
   
   ESCREVAL("DIGITE O TERCEIRO LADO: ")
   LEIA(valorC)
   
   SE (valorA < (valorB + valorC)) E (valorB < (valorA + valorC)) E (valorC < (valorA + valorC)) ENTAO
      ESCREVAL("E UM TRIANGULO")
   SENAO
      ESCREVAL("NAO E TRIANGULO")
   FIMSE
   
FIMALGORITMO

