ALGORITMO "exercicio_23"

VAR
   altura, pesoIdeal: real
   nome, sexo : caractere

INICIO
   ESCREVAL("DIGITE SEU NOME: ")
   LEIA(nome)

   ESCREVAL("DIGITE SEU SEXO(F/M): ")
   LEIA(sexo)
   
   ESCREVAL("DIGITE SUA ALTURA(M): ")
   LEIA(altura)
   
   SE sexo = "M" ENTAO
      pesoIdeal <- (72.7 * altura) - 58
   SENAO
      pesoIdeal <- (62.1 * altura) - 44.7
   FIMSE
   
   ESCREVAL(nome , ", SEU PESO IDEAL E: ", pesoIdeal, "kg")
   
FIMALGORITMO