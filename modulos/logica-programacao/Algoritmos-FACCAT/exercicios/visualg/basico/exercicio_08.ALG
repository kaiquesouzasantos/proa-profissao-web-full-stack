ALGORITMO "exercicio_08"

VAR
   total, branco, nulo, valido : inteiro

INICIO
   ESCREVAL("DIGITE O TOTAL DE ELEITORES: ")
   LEIA(total)
   
   ESCREVAL("DIGITE O NUMERO DE VOTOS BRANCOS: ")
   LEIA(branco)
   
   ESCREVAL("DIGITE O NUMERO DE VOTOS NULOS: ")
   LEIA(nulo)
   
   ESCREVAL("DIGITE O NUMERO DE VOTOS VALIDOS: ")
   LEIA(valido)
   
   ESCREVAL("PERCENTUAL BRANCO: " , (total/100 * branco) , "%")
   ESCREVAL("PERCENTUAL NULO: " , (total/100 * nulo) , "%")
   ESCREVAL("PERCENTUAL VALIDO: " , (total/100 * valido) , "%")
FIMALGORITMO