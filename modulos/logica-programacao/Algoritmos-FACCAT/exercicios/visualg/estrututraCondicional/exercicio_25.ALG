ALGORITMO "exercicio_25"

VAR
   conta : inteiro
   saldo, debito : real

INICIO
   ESCREVAL("DIGITE NUMERO DA CONTA: ")
   LEIA(conta)

   ESCREVAL("DIGITE O SALDO: R$")
   LEIA(saldo)
   
   ESCREVAL("DIGITE O DEBITO: R$")
   LEIA(debito)
   
   saldo <- saldo - debito
   
   SE saldo > 0 ENTAO
      ESCREVAL("SALDO POSITIVO")
   SENAO
      ESCREVAL("SALDO NEGATIVO")
   FIMSE
   
FIMALGORITMO