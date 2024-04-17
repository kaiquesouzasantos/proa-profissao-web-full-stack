ALGORITMO "exercicio_71"
VAR
   maior, media, numero, leituras, contador: INTEIRO

INICIO
   maior <- 0
   media <- 0

   ESCREVAL("DIGITE A QUANTIDADE DE NUMEROS QUE IRA INSERIR: ")
   LEIA(leituras)

   PARA contador DE 1 ATE leituras PASSO 1 FACA
      ESCREVAL("DIGITE O ", contador, " VALOR: ")
      LEIA(numero)

      media <- media + numero

      SE numero > maior ENTAO
         maior <- numero
      FIMSE
   FIMPARA

   ESCREVAL("MAIOR VALOR: ", maior)
   ESCREVAL("MEDIA DOS VALORES: ", (media / leituras))
FIMALGORITMO
