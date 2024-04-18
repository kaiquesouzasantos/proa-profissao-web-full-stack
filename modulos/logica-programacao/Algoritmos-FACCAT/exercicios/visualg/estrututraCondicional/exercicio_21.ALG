ALGORITMO "exercicio_21"

VAR
   horaInicio, horaTermino, duracao : inteiro

INICIO
   ESCREVAL("DIGITE O HORARIO DE INCIO DA PARTIDA: ")
   LEIA(horaInicio)

   ESCREVAL("DIGITE O HORARIO DE TERMINO DA PARTIDA: ")
   LEIA(horaTermino)
   
   duracao <- horaTermino - horaInicio
   
   SE duracao < 0 ENTAO
      duracao <- duracao + 24
   FIMSE
   
   ESCREVAL("DURACAO DA PARTIDA: " , duracao , "h")
   
FIMALGORITMO