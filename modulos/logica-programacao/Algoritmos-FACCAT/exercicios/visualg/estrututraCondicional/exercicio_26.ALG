ALGORITMO "exercicio_26"

VAR
   atual, minimo, maximo : inteiro
   media : real

INICIO
   ESCREVAL("DIGITE O MINIMO EM ESTOQUE: ")
   LEIA(minimo)

   ESCREVAL("DIGITE O MAXIMO EM ESTOQUE: ")
   LEIA(maximo)
   
   ESCREVAL("DIGITE A QUANTIDADE ATUAL EM ESTOQUE: ")
   LEIA(atual)
   
   media <- (maximo + minimo) / 2
   
   SE atual >= media ENTAO
      ESCREVAL("NAO EFETUAR MAIS COMPRAS")
   SENAO
      ESCREVAL("PERMITIDO A EFETUACAO DE COMPRAS")
   FIMSE
   
FIMALGORITMO