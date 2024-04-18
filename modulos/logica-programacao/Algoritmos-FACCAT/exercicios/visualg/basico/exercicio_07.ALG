ALGORITMO "exercicio_07"

VAR
   ano, dia, mes : inteiro
   
INICIO
   ESCREVAL("DIGITE SUA IDADE NA UNIDADE [ANO]: ")
   LEIA(ano)

   ESCREVAL("DIGITE SUA IDADE NA UNIDADE [MES]: ")
   LEIA(mes)

   ESCREVAL("DIGITE SUA IDADE NA UNIDADE [DIA]: ")
   LEIA(dia)
   
   dia <- dia + (365 * ano) + (30 * mes)
   
   ESCREVAL("IDADE EM DIAS: " , dia)
   
FIMALGORITMO