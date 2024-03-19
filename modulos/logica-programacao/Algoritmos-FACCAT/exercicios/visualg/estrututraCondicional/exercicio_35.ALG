ALGORITMO "exercicio_35"

VAR
   litros : inteiro
   valorPago, descontoLitro, precoLitro : real
   tipoCombustivel : caractere

INICIO
   ESCREVAL("DIGITE A QUANTIDADE DE LITROS: ")
   LEIA(litros)

   ESCREVAL("DIGITE O TIPO DO COMBUSTIVEL [A/G]: ")
   LEIA(tipoCombustivel)

   SE tipoCombustivel = "A" ENTAO
      precoLitro <- 2.9
      SE litros > 20 ENTAO
         descontoLitro <- litros * precoLitro * (5/100)
      SENAO
         descontoLitro <- litros * precoLitro * (3/100)
      FIMSE
   SENAO
      precoLitro <- 3.3
      SE litros > 20 ENTAO
         descontoLitro <- litros * precoLitro * (6/100)
      SENAO
         descontoLitro <- litros * precoLitro * (4/100)
      FIMSE
   FIMSE

   valorPago <- (litros * precoLitro) - descontoLitro

   ESCREVAL("VALOR A SER PAGO PELOS", litros, "L DE ", tipoCombustivel, ": R$", valorPago)

FIMALGORITMO
