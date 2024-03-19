ALGORITMO "exercicio_38"

VAR
   usuario, senha, usuarioCorreto, senhaCorreta : inteiro

INICIO
   usuarioCorreto <- 1234
   senhaCorreta <- 9999
   
   ESCREVAL("DIGITE O USUARIO: ")
   LEIA(usuario)
   
   SE usuario = usuarioCorreto ENTAO
      ESCREVAL("USUARIO CORRETO")
      
      ESCREVAL("DIGITE A SENHA: ")
      LEIA(senha)
      
      SE senha = senhaCorreta ENTAO
         ESCREVAL("ACESSO PERMITIDO")
      SENAO
         ESCREVAL("SENHA INCORRETA")
      FIMSE
   SENAO
      ESCREVAL("USUARIO INCORRETO")
   FIMSE
   
FIMALGORITMO
