ALGORITMO "exercicio_16"

VAR
   macas : inteiro
   valorCobrado : real

INICIO
   ESCREVAL("DIGITE A QUANTIDADE DE MACAS: ")
   LEIA(macas)

   SE macas >= 12 ENTAO
      valorCobrado <- 1.0
   SENAO
      valorCobrado <- 1.3
   FIMSE
   
   ESCREVAL("VALOR TOTAL: " , (macas * valorCobrado))
   
FIMALGORITMO