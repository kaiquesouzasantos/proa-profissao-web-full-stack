ALGORITMO "exercicio_36"

VAR
   homemA, homemB, mulherA, mulherB : inteiro
   homemVelho, homemNovo, mulherVelha, mulherNova : inteiro

INICIO
   ESCREVAL("DIGITE A IDADE DO PRIMEIRO HOMEM: ")
   LEIA(homemA)

   ESCREVAL("DIGITE A IDADE DO SEGUNDO HOMEM: ")
   LEIA(homemB)

   ESCREVAL("DIGITE A IDADE DA PRIMEIRA MULHER: ")
   LEIA(mulherA)
   
   ESCREVAL("DIGITE A IDADE DA SEGUNDA MULHER: ")
   LEIA(mulherB)
   
   SE homemA > homemB ENTAO
      homemVelho <- homemA
      homemNovo <- homemB
   SENAO
      homemVelho <- homemB
      homemNovo <- homemA
   FIMSE
   
   SE mulherA > mulherB ENTAO
      mulherVelha <- mulherA
      mulherNova <- mulherB
   SENAO
      mulherVelha <- mulherB
      mulherNova <- mulherA
   FIMSE
   
   ESCREVAL("SOMA DO OPOSTOS:", (homemVelho + mulherNova))
   ESCREVAL("PRODUTO DO OPOSTOS:", (homemNovo * mulherVelha))
   
FIMALGORITMO
