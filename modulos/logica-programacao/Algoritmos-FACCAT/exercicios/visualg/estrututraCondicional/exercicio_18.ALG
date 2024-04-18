ALGORITMO "exercicio_18"

VAR
   anoAtual, anoNascimento, idade : inteiro

INICIO
   ESCREVAL("DIGITE O ANO ATUAL: ")
   LEIA(anoAtual)

   ESCREVAL("DIGITE O ANO DE SEU NASCIMENTO: ")
   LEIA(anoNascimento)
   
   idade <- anoAtual - anoNascimento
   
   SE idade >= 18 ENTAO
      ESCREVAL("VOCE PODERA VOTAR ESSE ANO")
   SENAO
      ESCREVAL("VOCE PODERA NAO VOTAR ESSE ANO")
   FIMSE
   
FIMALGORITMO