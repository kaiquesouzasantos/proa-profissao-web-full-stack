ALGORITMO "CalculoDivisao"

VAR
    dividendo, divisor, saida: INTEIRO

FUNCAO calculaDivisao(dividendo, divisor: INTEIRO): INTEIRO
INICIO
    saida <- 0

    REPITA
        dividendo <- dividendo - divisor
        saida <- saida + 1
    ATE dividendo < divisor

    RETORNE saida
FIMFUNCAO

INICIO
    ESCREVAL("DIGITE O NUMERO DIVIDENDO: ")
    LEIA(dividendo)

    ESCREVAL("DIGITE O NUMERO DIVISOR: ")
    LEIA(divisor)

    ESCREVAL(dividendo, " / ", divisor, " = ", calculaDivisao(dividendo, divisor))
FIMALGORITMO