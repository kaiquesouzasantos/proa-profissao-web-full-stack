ALGORITMO "exercicio_32"

VAR
   pontoA, pontoB : inteiro
   nomeA, nomeB : caractere

INICIO
   ESCREVAL("DIGITE O PRIMEIRO TIME: ")
   LEIA(nomeA)

   ESCREVAL("DIGITE O SEGUNDO TIME: ")
   LEIA(nomeB)
   
   ESCREVAL("DIGITE A PONTUACAO DO TIME ", nomeA , ":")
   LEIA(pontoA)
   
   ESCREVAL("DIGITE A PONTUACAO DO TIME ", nomeB , ":")
   LEIA(pontoB)
   
   SE pontoA > pontoB ENTAO
      ESCREVAL("VENCEDOR: ", nomeA)
   SENAO
      SE pontoB > pontoA ENTAO
         ESCREVAL("VENCEDOR: ", nomeB)
      SENAO
         ESCREVAL("EMPATE")
      FIMSE
   FIMSE
   
FIMALGORITMO

