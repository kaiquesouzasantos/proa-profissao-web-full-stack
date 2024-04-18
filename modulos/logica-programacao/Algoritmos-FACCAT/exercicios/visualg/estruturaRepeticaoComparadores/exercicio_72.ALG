ALGORITMO "exercicio_72"
VAR
   leituras, contador: INTEIRO
   maior, media, valor: REAL

INICIO
   leituras <- 15
   maior <- 0
   media <- 0

   PARA contador DE 1 ATE leituras PASSO 1 FACA
      ESCREVAL("DIGITE O PRECO DO PRODUTO ", contador, ": R$")
      LEIA(valor)
      media <- media + valor

      SE valor > maior ENTAO
         maior <- valor
      FIMSE
   FIMPARA

   ESCREVAL("PRODUTO MAIS CARO: R$ ", maior)
   ESCREVAL("MEDIAS DE PRECOS: R$ ", (media / leituras))
FIMALGORITMO
