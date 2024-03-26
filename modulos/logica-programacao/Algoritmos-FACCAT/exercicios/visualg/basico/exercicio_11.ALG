ALGORITMO "exercicio_11"

VAR
   carrosVendidos, valorVendido, salarioFixo, comissaoFixa, resultante: real

INICIO
   ESCREVAL("DIGITE O NUMERO DE CARROS VENDIDOS: ")
   LEIA(carrosVendidos)
   
   ESCREVAL("DIGITE O VALOR TOTAL DOS CARROS VENDIDOS: R$")
   LEIA(valorVendido)
   
   ESCREVAL("DIGITE O VALOR DO PAGAMENTO FIXO: R$")
   LEIA(salarioFixo)
   
   ESCREVAL("DIGITE O VALOR DA COMISSAO FIXA: R$")
   LEIA(comissaoFixa)
   
   resultante <- salarioFixo + (comissaoFixa * carrosVendidos) + (valorVendido/100 * 5)
   
   ESCREVAL("SALARIO RESULTANTE: R$" , resultante)
FIMALGORITMO