ALGORITMO "exercicio_22"

VAR
   horasTrabalhadas, horasExtras, horasMinimo : inteiro
   valorHora : real

INICIO
   ESCREVAL("DIGITE A QUANTIDADE DE HORAS TRABALHADAS: ")
   LEIA(horasTrabalhadas)

   ESCREVAL("DIGITE O VALOR DA HORA: R$")
   LEIA(valorHora)
   
   horasMinimo <- (40 * 4)
   
   SE horasTrabalhadas > horasMinimo ENTAO
      horasExtras <- horasTrabalhadas - horasMinimo
      horasTrabalhadas <- horasMinimo
   SENAO
      horasExtras <- 0
   FIMSE
   
   ESCREVAL("SALARIO: R$" , ((horasTrabalhadas * valorHora) + (horasExtras * (valorHora * 1.5))))
   
FIMALGORITMO