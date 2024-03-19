ALGORITMO "exercicio_24"

VAR
   salarioFixo, valorVendas, comissao : real

INICIO
   ESCREVAL("DIGITE O SALARIO FIXO: R$")
   LEIA(salarioFixo)

   ESCREVAL("DIGITE O VALOR TOTAL DAS VENDAS: R$")
   LEIA(valorVendas)
   
   SE valorVendas > 1500 ENTAO
      comissao <- ((1500/100) * 3) + ((valorVendas - 1500)/100 * 5)
   SENAO
      comissao <- (valorVendas/100) * 3
   FIMSE
   
   ESCREVAL("PAGAMENTO TOTAL: R$" , (salarioFixo + comissao))
   
FIMALGORITMO