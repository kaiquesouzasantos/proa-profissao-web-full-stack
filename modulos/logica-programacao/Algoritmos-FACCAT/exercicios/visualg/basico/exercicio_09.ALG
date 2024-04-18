ALGORITMO "exercicio_09"

VAR
   salario, reajuste : real

INICIO
   ESCREVAL("DIGITE O SALARIO ATUAL: R$")
   LEIA(salario)
   
   ESCREVAL("DIGITE O PERCENTUAL DE REAJUSTE: ")
   LEIA(reajuste)
   
   reajuste <- (salario / 100) * reajuste
   
   ESCREVAL("SALARIO REAJUSTADO: R$" , (salario + reajuste))
FIMALGORITMO