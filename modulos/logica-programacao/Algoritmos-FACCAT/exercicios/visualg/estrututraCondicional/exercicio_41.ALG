ALGORITMO "exercicio_41"

VAR
   notaUm, notaDois, notaTres, mediaAtividade, media : real
   conceito : caractere

INICIO
   ESCREVAL("DIGITE A 1 NOTA: ")
   LEIA(notaUm)

   ESCREVAL("DIGITE A 2 NOTA: ")
   LEIA(notaDois)
   
   ESCREVAL("DIGITE A 3 NOTA: ")
   LEIA(notaTres)
   
   ESCREVAL("DIGITE A MEDIA DAS ATIVIDADES: ")
   LEIA(mediaAtividade)
   
   media <- notaUm + (notaDois * 2) + (notaTres * 3) + mediaAtividade
   
   SE media >= 9.0 ENTAO
      conceito <- "A"
   SENAO
      SE media >= 7.5 ENTAO
         conceito <- "B"
      SENAO
         SE media >= 6 ENTAO
            conceito <- "C"
         SENAO
            conceito <- "D"
         FIMSE
      FIMSE
   FIMSE
   
   ESCREVAL("CONCEITO DO ALUNO: ", conceito)
FIMALGORITMO
