ALGORITMO "exercicio_30"

VAR
   valorA, valorB, valorC, maior, menor, medio : inteiro

INICIO
   ESCREVAL("DIGITE O PRIMEIRO NUMERO: ")
   LEIA(valorA)

   ESCREVAL("DIGITE O SEGUNDO NUMERO: ")
   LEIA(valorB)
   
   ESCREVAL("DIGITE O TERCEIRO NUMERO: ")
   LEIA(valorC)
   
   SE ((valorA > valorB) E (valorA > valorC)) ENTAO
      maior <- valorA
      SE (valorB > valorC) ENTAO
         medio <- valorB
         menor <- valorC
      SENAO
         medio <- valorC
         menor <- valorB
      FIMSE
   SENAO
      SE ((valorB > valorA) E (valorB > valorC)) ENTAO
           maior <- valorB
         SE (valorA > valorC) ENTAO
            medio <- valorA
            menor <- valorC
         SENAO
            medio <- valorC
            menor <- valorA
         FIMSE
   SENAO
      maior <- valorC
      
      SE (valorA > valorB) ENTAO
         medio <- valorA
         menor <- valorB
      SENAO
         medio <- valorB
         menor <- valorA
      FIMSE
   FIMSE
   
   ESCREVAL("OREDENACAO: ", menor, ",", medio,",", maior)
   
FIMALGORITMO
