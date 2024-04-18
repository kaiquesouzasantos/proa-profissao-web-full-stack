ALGORITMO "exercicio_10"

VAR
   custoFabrica, custoImposto, custoDistribuidor, resultante : real

INICIO
   ESCREVAL("DIGITE O VALOR DE FABRICA: R$")
   LEIA(custoFabrica)
   
   custoImposto <- (custoFabrica/100) * 45
   custoDistribuidor <- (custoFabrica/100) * 18
   resultante <- custoFabrica + custoImposto + custoDistribuidor
   
   ESCREVAL("VALOR PARA O CONSUMIDOR: R$" , resultante)
FIMALGORITMO