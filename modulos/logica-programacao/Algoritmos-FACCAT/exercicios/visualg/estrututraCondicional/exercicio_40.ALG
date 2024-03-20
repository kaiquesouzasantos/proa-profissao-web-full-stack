ALGORITMO "exercicio_40"

VAR
   nome : caractere
   precoUnitario, total, desconto : real
   quantidade : inteiro

INICIO
   ESCREVAL("DIGITE O NOME DO PRODUTO: ")
   LEIA(nome)
   
   ESCREVAL("DIGITE O PRECO UNITARIO: R$")
   LEIA(precoUnitario)
   
   ESCREVAL("DIGITE A QUANTIDADE ADQUIRIDA: ")
   LEIA(quantidade)
   
   total <- (quantidade * precoUnitario)
   
   SE quantidade <= 5 ENTAO
      desconto <- (total/100) * 2
   SENAO
      SE (quantidade > 5) E (quantidade <= 10) ENTAO
         desconto <- (total/100) * 3
      SENAO
         desconto <- (total/100) * 5
      FIMSE
   FIMSE
   
   ESCREVAL("TOTAL A PAGAR COM DESCONTO DO PRODUTO ", nome, ": R$" , (total - desconto))
   
FIMALGORITMO
