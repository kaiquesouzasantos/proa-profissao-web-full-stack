ALGORITMO "exercicio_70"
VAR
   maior, menor, numero, contador: INTEIRO

INICIO
   maior <- 0
   menor <- 10000000000

   PARA contador DE 1 ATE 10 PASSO 1 FACA
      ESCREVAL("DIGITE O ", contador, " VALOR: ")
      LEIA(numero)

      SE numero > maior ENTAO
         maior <- numero
      SENAO
         SE numero < menor ENTAO
            menor <- numero
         FIMSE
      FIMSE
   FIMPARA

   ESCREVAL("MAIOR VALOR: ", maior)
   ESCREVAL("MENOR VALOR: ", menor)
FIMALGORITMO
