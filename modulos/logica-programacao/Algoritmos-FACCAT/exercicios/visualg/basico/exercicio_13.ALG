ALGORITMO "exercicio_13"

VAR
   notaUm, notaDois, notaTres, media : real

INICIO
   ESCREVAL("DIGITE A 1 NOTA: ")
   LEIA(notaUm)

   ESCREVAL("DIGITE A 2 NOTA: ")
   LEIA(notaDois)

   ESCREVAL("DIGITE A 3 NOTA: ")
   LEIA(notaTres)
   
   media <- ((notaUm * 2) + (notaDois * 3) + (notaTres * 5)) / 10
   
   ESCREVAL("MEDIA FINAL: " , media)
FIMALGORITMO