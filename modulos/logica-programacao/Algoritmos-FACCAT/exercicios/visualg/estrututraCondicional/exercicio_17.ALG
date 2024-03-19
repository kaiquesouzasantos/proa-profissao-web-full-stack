ALGORITMO "exercicio_17"

VAR
   notaUm, notaDois, media : real

INICIO
   ESCREVAL("DIGITE A 1 NOTA: ")
   LEIA(notaUm)

   ESCREVAL("DIGITE A 2 NOTA: ")
   LEIA(notaDois)
   
   media <- (notaUm + notaDois) / 2
   
   SE media >= 6 ENTAO
      ESCREVAL("ALUNO APROVADO COM MEDIA: ", media)
   SENAO
      ESCREVAL("ALUNO REPROVADO COM MEDIA: ", media)
   FIMSE
   
FIMALGORITMO