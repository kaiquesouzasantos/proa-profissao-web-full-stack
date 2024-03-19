ALGORITMO "exercicio_27"

VAR
   valor : inteiro
   saida : caractere

INICIO
   ESCREVAL("DIGITE UM NUMERO: ")
   LEIA(valor)

   SE valor > 0  ENTAO
      saida <- "VALOR POSITIVO"
   SENAO
      SE valor < 0 ENTAO
         saida <- "VALOR NEGATIVO"
      SENAO
         saida <- "VALOR IGUAL A ZERO"
      FIMSE
   FIMSE
   
   ESCREVAL(saida)

FIMALGORITMO