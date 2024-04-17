ALGORITMO "SalarioProfessor"
VAR
    horasTrabalhadas: INTEIRO
    valorHora, percentualDesconto, salarioBruto, valorDesconto, salarioLiquido: REAL

FUNCAO calculaSalarioBruto(horasTrabalhadas: INTEIRO, valorHora: REAL): REAL
INICIO
    RETORNE horasTrabalhadas * valorHora
FIMFUNCAO

FUNCAO calculaValorDesconto(salarioBruto, percentualDesconto: REAL): REAL
INICIO
    RETORNE ((percentualDesconto / 100) * salarioBruto)
FIMFUNCAO

FUNCAO calculaSalarioLiquido(salarioBruto, valorDesconto: REAL): REAL
INICIO
    RETORNE salarioBruto - valorDesconto
FIMFUNCAO

INICIO
    ESCREVA("DIGITE A QUANTIDADE DE HORAS TRABALHADAS: ")
    LEIA(horasTrabalhadas)

    ESCREVA("DIGITE O VALOR DA HORA TRABALHADA: R$ ")
    LEIA(valorHora)

    ESCREVA("DIGITE O PERCENTUAL DE CONTRIBUICAO AO INSS: ")
    LEIA(percentualDesconto)

    salarioBruto <- calculaSalarioBruto(horasTrabalhadas, valorHora)
    valorDesconto <- calculaValorDesconto(salarioBruto, percentualDesconto)
    salarioLiquido <- calculaSalarioLiquido(salarioBruto, valorDesconto)

    ESCREVA("SALARIO LIQUIDO: R$ ", salarioLiquido, "\nSALARIO BRUTO: R$ ", salarioBruto, "\nVALOR DESCONTADO: R$ ", valorDesconto)
FIMALGORITMO
