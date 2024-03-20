ALGORITMO "exercicio_42"

VAR
   codigo, anoNascimento, anoEntrada, idade, tempoEmpresa : inteiro
   resultante : caractere

INICIO
   ESCREVAL("DIGITE O NUMERO DO EMPREGADO: ")
   LEIA(codigo)

   ESCREVAL("DIGITE O ANO DE NASCIMENTO DO EMPREGADO: ")
   LEIA(anoNascimento)
   
   ESCREVAL("DIGITE O ANO DE ENTRADA NA EMPRESA: ")
   LEIA(anoEntrada)
   
   idade <- 2024 - anoNascimento
   tempoEmpresa <- 2024 - anoEntrada
   

   SE idade >= 65 ENTAO
      resultante <- "PODE REQUERER APOSENTADORIA"
   SENAO
      SE tempoEmpresa >= 30 ENTAO
         resultante <- "PODE REQUERER APOSENTADORIA"
      SENAO
         SE (idade >= 60) E (tempoEmpresa >= 25) ENTAO
            resultante <- "PODE REQUERER APOSENTADORIA"
         SENAO
            resultante <- "NAO PODE REQUERER APOSENTADORIA"
         FIMSE
      FIMSE
   FIMSE
   
   ESCREVAL("FUNCIONARIO:", codigo)
   ESCREVAL("IDADE:", idade, " ANOS")
   ESCREVAL("TRABALHANDO:", tempoEmpresa, " ANOS")
   ESCREVAL("SITUACAO:", resultante)
   
FIMALGORITMO
