ALGORITMO "exercicio_37"

VAR
   macaQuilo, morangoQuilo : inteiro
   macaPreco, morangoPreco, valorTotal : real

INICIO
   ESCREVAL("DIGITE A QUANTIDADE DE MACAS[KG]: ")
   LEIA(macaQuilo)

   ESCREVAL("DIGITE A QUANTIDADE DE MORANGOS[KG]: ")
   LEIA(morangoQuilo)
   
   SE macaQuilo > 5 ENTAO
      macaPreco <- 1.5
   SENAO
      macaPreco <- 1.8
   FIMSE
   
   SE morangoQuilo > 5 ENTAO
      morangoPreco <- 2.2
   SENAO
      morangoPreco <- 2.5
   FIMSE
   
   valorTotal <- (morangoQuilo * morangoPreco) + (macaQuilo * macaPreco)

   SE (macaQuilo + morangoQuilo > 8) OU (valorTotal > 25.0) ENTAO
      valorTotal <- valorTotal - (valorTotal/10)
   FIMSE
   
   ESCREVAL("VALOR A SER PAGO: R$", valorTotal)
   
FIMALGORITMO
