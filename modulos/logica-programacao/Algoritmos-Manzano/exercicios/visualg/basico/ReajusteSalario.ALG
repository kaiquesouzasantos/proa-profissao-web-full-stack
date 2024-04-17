ALGORITMO "ReajusteSalario"
VAR
    salario, percentualReajuste, valorReajuste, salarioReajustado: REAL

FUNCAO calculaValorReajuste(salario, percentualReajuste: REAL): REAL
INICIO
    RETORNE (percentualReajuste / 100) * salario
FIMFUNCAO

FUNCAO calculaSalarioReajustado(salarioAtual, valorReajuste: REAL): REAL
INICIO
    RETORNE salarioAtual + valorReajuste
FIMFUNCAO

INICIO
    ESCREVA("DIGITE O SALARIO ATUAL: R$ ")
    LEIA(salario)

    ESCREVA("DIGITE O PERCENTUAL DE REAJUSTE: ")
    LEIA(percentualReajuste)

    valorReajuste <- calculaValorReajuste(salario, percentualReajuste)

    salarioReajustado <- calculaSalarioReajustado(salario, valorReajuste)

    ESCREVA("SALARIO REAJUSTADO: R$ ", salarioReajustado)
FIMALGORITMO
