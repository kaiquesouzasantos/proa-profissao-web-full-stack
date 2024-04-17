ALGORITMO "SufixoPeloSexo"
VAR
    nome, sexo: CARACTER

FUNCAO concatenaSufixo(nome, sexo: CARACTER): CARACTER
INICIO
    RETORNE nome + " " + retornaSufixo(sexo)
FIMFUNCAO

FUNCAO retornaSufixo(sexo: CARACTER): CARACTER
INICIO
    SE sexo = "M" ENTAO
        RETORNE "SR."
    SENAO SE sexo = "F" ENTAO
        RETORNE "SRA."
    SENAO
        RETORNE "NA."
    FIMSE
FIMFUNCAO

INICIO
    ESCREVA("DIGITE O NOME: ")
    LEIA(nome)

    ESCREVA("PREFIXO MASCULINO OU FEMININO? [M / F]")
    LEIA(sexo)

    ESCREVA("OLA, ", concatenaSufixo(nome, sexo))
FIMALGORITMO
