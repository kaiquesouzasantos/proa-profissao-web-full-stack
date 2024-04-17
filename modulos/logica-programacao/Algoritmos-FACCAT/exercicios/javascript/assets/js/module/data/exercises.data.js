export const exercises = [{
        name: "1",
        type: "Básico",
        exercise: () => {
            let valorA = 10;
            let valorB = 20;

            let auxiliar = valorB;
            valorB = valorA;
            valorA = auxiliar;

            alert("VALOR A: " + valorA);
            alert("VALOR B: " + valorB);
        },
    },
    {
        name: "5",
        type: "Básico",
        exercise: () => {
            let valor = parseInt(prompt("DIGITE UM VALOR: "));

            alert("ANTECESSOR: " + (valor - 1));
        },
    },
    {
        name: "6",
        type: "Básico",
        exercise: () => {
            let base, altura;

            base = parseInt(prompt("DIGITE A DIMENSAO DA BASE:"));
            altura = parseInt(prompt("DIGITE A DIMENSAO DA ALTURA:"));

            alert("AREA: " + (base * altura));
        },
    },
    {
        name: "7",
        type: "Básico",
        exercise: () => {
            let ano, mes, dia;

            ano = parseInt(prompt("DIGITE SUA IDADE NA UNIDADE [ANO]:"));
            mes = parseInt(prompt("DIGITE SUA IDADE NA UNIDADE [MES]:"));
            dia = parseInt(prompt("DIGITE SUA IDADE NA UNIDADE [DIA]:"));

            dia = dia + (365 * ano) + (30 * mes);

            alert("IDADE EM DIAS: " + dia);
        },
    },
    {
        name: "8",
        type: "Básico",
        exercise: () => {
            let total, branco, nulo, valido;

            total = parseInt(prompt("DIGITE O TOTAL DE ELEITORES:"));
            branco = parseInt(prompt("DIGITE O NUMERO DE VOTOS BRANCOS:"));
            nulo = parseInt(prompt("DIGITE O NUMERO DE VOTOS NULOS:"));
            valido = parseInt(prompt("DIGITE O NUMERO DE VOTOS VALIDOS:"));
            
            alert("PERCENTUAL BRANCO: " + (total/100 * branco) + "%");
            alert("PERCENTUAL NULO: " + (total/100 * nulo) + "%");
            alert("PERCENTUAL VALIDO: " + (total/100 * valido) + "%");            
        },
    },
    {
        name: "9",
        type: "Básico",
        exercise: () => {
            let salario, reajuste;

            salario = parseFloat(prompt("DIGITE O SALARIO ATUAL: R$"));
            reajuste = parseFloat(prompt("DIGITE O PERCENTUAL DE REAJUSTE:"));
            
            reajuste = (salario / 100) * reajuste;
            
            alert("SALARIO REAJUSTADO: R$" + (salario + reajuste));            
        },
    },
    {
        name: "10",
        type: "Básico",
        exercise: () => {
            let custoFabrica, custoImposto, custoDistribuidor, resultante;

            custoFabrica = parseFloat(prompt("DIGITE O VALOR DE FABRICA: R$"));
            
            custoImposto = (custoFabrica/100) * 45;
            custoDistribuidor = (custoFabrica/100) * 18;
            resultante = custoFabrica + custoImposto + custoDistribuidor;
            
            alert("VALOR PARA O CONSUMIDOR: R$" + resultante);            
        },
    },
    {
        name: "11",
        type: "Básico",
        exercise: () => {
            let carrosVendidos, valorVendido, salarioFixo, comissaoFixa, resultante;

            carrosVendidos = parseFloat(prompt("DIGITE O NUMERO DE CARROS VENDIDOS:"));
            valorVendido = parseFloat(prompt("DIGITE O VALOR TOTAL DOS CARROS VENDIDOS: R$"));
            salarioFixo = parseFloat(prompt("DIGITE O VALOR DO PAGAMENTO FIXO: R$"));
            comissaoFixa = parseFloat(prompt("DIGITE O VALOR DA COMISSAO FIXA: R$"));
            
            resultante = salarioFixo + (comissaoFixa * carrosVendidos) + (valorVendido/100 * 5);
            
            alert("SALARIO RESULTANTE: R$" + resultante);            
        },
    },
    {
        name: "12",
        type: "Básico",
        exercise: () => {
            let celsius, farenheit;

            farenheit = parseFloat(prompt("DIGITE A TEMPERATURA EM [F]:"));
            celsius = ((farenheit - 32) * 5) / 9;
            
            alert("TEMPERATURA EM CELSIUS: " + celsius);            
        },
    },
    {
        name: "13",
        type: "Básico",
        exercise: () => {
            let notaUm, notaDois, notaTres, media;

            notaUm = parseFloat(prompt("DIGITE A 1 NOTA:"));
            notaDois = parseFloat(prompt("DIGITE A 2 NOTA:"));
            notaTres = parseFloat(prompt("DIGITE A 3 NOTA:"));
            
            media = ((notaUm * 2) + (notaDois * 3) + (notaTres * 5)) / 10;
            
            alert("MEDIA FINAL: " + media);            
        },
    },

    // 

    {
        name: "14",
        type: "Condicional",
        exercise: () => {
            let valor = parseInt(prompt("DIGITE UM VALOR:"));
            
            if (valor > 10) {
                alert("NUMERO E MAIOR QUE 10");
            } else {
                alert("NUMERO NAO E MAIOR QUE 10");
            }
        },
    },
    {
        name: "15",
        type: "Condicional",
        exercise: () => {
            let valor = parseInt(prompt("DIGITE UM VALOR:"));
            
            if (valor > 0) {
                alert("NUMERO E POSITIVO");
            } else {
                alert("NUMERO E NEGATIVO");
            }
        },
    },
    {
        name: "16",
        type: "Condicional",
        exercise: () => {
            let macas, valorCobrado;

            macas = parseInt(prompt("DIGITE A QUANTIDADE DE MACAS:"));
            
            if (macas >= 12) {
                valorCobrado = 1.0;
            } else {
                valorCobrado = 1.3;
            }
            
            alert("VALOR TOTAL: " + (macas * valorCobrado));
            
        },
    },
    {
        name: "17",
        type: "Condicional",
        exercise: () => {
            let notaUm, notaDois, media;

            notaUm = parseFloat(prompt("DIGITE A 1 NOTA:"));
            notaDois = parseFloat(prompt("DIGITE A 2 NOTA:"));
            
            media = (notaUm + notaDois) / 2;
            
            if (media >= 6) {
                alert("ALUNO APROVADO COM MEDIA: " + media);
            } else {
                alert("ALUNO REPROVADO COM MEDIA: " + media);
            }            
        },
    },
    {
        name: "18",
        type: "Condicional",
        exercise: () => {
            let anoAtual, anoNascimento, idade;

            anoAtual = parseInt(prompt("DIGITE O ANO ATUAL:"));
            anoNascimento = parseInt(prompt("DIGITE O ANO DE SEU NASCIMENTO:"));
            
            idade = anoAtual - anoNascimento;
            
            if (idade >= 18) {
                alert("VOCE PODERA VOTAR ESSE ANO");
            } else {
                alert("VOCE PODERA NAO VOTAR ESSE ANO");
            }            
        },
    },
    {
        name: "19",
        type: "Condicional",
        exercise: () => {
            let valorA, valorB;

            valorA = parseInt(prompt("DIGITE O 1 VALOR:"));
            valorB = parseInt(prompt("DIGITE O 2 VALOR:"));
            
            if (valorA > valorB) {
                alert("MAIOR VALOR: " + valorA);
            } else {
                alert("MAIOR VALOR: " + valorB);
            }            
        },
    },
    {
        name: "20",
        type: "Condicional",
        exercise: () => {
            let valorA, valorB;

            valorA = parseInt(prompt("DIGITE O 1 VALOR:"));
            valorB = parseInt(prompt("DIGITE O 2 VALOR:"));
            
            if (valorA > valorB) {
                alert("ORDENACAO: " + valorB + ", " + valorA);
            } else {
                alert("ORDENACAO: " + valorA + ", " + valorB);
            }            
        },
    },
    {
        name: "21",
        type: "Condicional",
        exercise: () => {
            let horaInicio, horaTermino, duracao;

            horaInicio = parseInt(prompt("DIGITE O HORARIO DE INCIO DA PARTIDA:"));
            horaTermino = parseInt(prompt("DIGITE O HORARIO DE TERMINO DA PARTIDA:"));
            
            duracao = horaTermino - horaInicio;
            
            if (duracao < 0) {
                duracao = duracao + 24;
            }
            
            alert("DURACAO DA PARTIDA: " + duracao + "h");            
        },
    },
    {
        name: "22",
        type: "Condicional",
        exercise: () => {
            let horasTrabalhadas, horasExtras, horasMinimo, valorHora;

            horasTrabalhadas = parseInt(prompt("DIGITE A QUANTIDADE DE HORAS TRABALHADAS:"));
            valorHora = parseFloat(prompt("DIGITE O VALOR DA HORA: R$"));
            
            horasMinimo = 40 * 4;
            
            if (horasTrabalhadas > horasMinimo) {
                horasExtras = horasTrabalhadas - horasMinimo;
                horasTrabalhadas = horasMinimo;
            } else {
                horasExtras = 0;
            }
            
            alert("SALARIO: R$" + ((horasTrabalhadas * valorHora) + (horasExtras * (valorHora * 1.5))));            
        },
    },
    {
        name: "23",
        type: "Condicional",
        exercise: () => {
            let nome, sexo, altura, pesoIdeal;

            nome = prompt("DIGITE SEU NOME:");
            sexo = prompt("DIGITE SEU SEXO(F/M):");
            altura = parseFloat(prompt("DIGITE SUA ALTURA(M):"));
            
            if (sexo === "M") {
                pesoIdeal = (72.7 * altura) - 58;
            } else {
                pesoIdeal = (62.1 * altura) - 44.7;
            }
            
            alert(nome + ", SEU PESO IDEAL E: " + pesoIdeal + "kg");            
        },
    },
    {
        name: "24",
        type: "Condicional",
        exercise: () => {
            let salarioFixo, valorVendas, comissao;

            salarioFixo = parseFloat(prompt("DIGITE O SALARIO FIXO: R$"));
            valorVendas = parseFloat(prompt("DIGITE O VALOR TOTAL DAS VENDAS: R$"));
            
            if (valorVendas > 1500) {
                comissao = ((1500/100) * 3) + ((valorVendas - 1500)/100 * 5);
            } else {
                comissao = (valorVendas/100) * 3;
            }
            
            alert("PAGAMENTO TOTAL: R$" + (salarioFixo + comissao));            
        },
    },
    {
        name: "25",
        type: "Condicional",
        exercise: () => {
            let conta, saldo, debito;

            conta = parseInt(prompt("DIGITE NUMERO DA CONTA:"));
            saldo = parseFloat(prompt("DIGITE O SALDO: R$"));
            debito = parseFloat(prompt("DIGITE O DEBITO: R$"));
            
            saldo = saldo - debito;
            
            if (saldo > 0) {
                alert("SALDO POSITIVO");
            } else {
                alert("SALDO NEGATIVO");
            }            
        },
    },
    {
        name: "26",
        type: "Condicional",
        exercise: () => {
            let atual, minimo, maximo, media;

            minimo = parseInt(prompt("DIGITE O MINIMO EM ESTOQUE:"));
            maximo = parseInt(prompt("DIGITE O MAXIMO EM ESTOQUE:"));
            atual = parseInt(prompt("DIGITE A QUANTIDADE ATUAL EM ESTOQUE:"));
            
            media = (maximo + minimo) / 2;
            
            if (atual >= media) {
                alert("NAO EFETUAR MAIS COMPRAS");
            } else {
                alert("PERMITIDO A EFETUACAO DE COMPRAS");
            }            
        },
    },
    {
        name: "27",
        type: "Condicional",
        exercise: () => {
            let valor, saida;

            valor = parseInt(prompt("DIGITE UM NUMERO:"));
            
            if (valor > 0) {
                saida = "VALOR POSITIVO";
            } else {
                if (valor < 0) {
                    saida = "VALOR NEGATIVO";
                } else {
                    saida = "VALOR IGUAL A ZERO";
                }
            }
            
            alert(saida);            
        },
    },
    {
        name: "28",
        type: "Condicional",
        exercise: () => {
            let valorA, valorB, valorC;

            valorA = parseInt(prompt("DIGITE O PRIMEIRO NUMERO:"));
            valorB = parseInt(prompt("DIGITE O SEGUNDO NUMERO:"));
            valorC = parseInt(prompt("DIGITE O TERCEIRO NUMERO:"));
            
            if ((valorA > valorB) && (valorA > valorC)) {
                alert("MAIOR VALOR: " + valorA);
            } else {
                if ((valorB > valorA) && (valorB > valorC)) {
                    alert("MAIOR VALOR: " + valorB);
                } else {
                    alert("MAIOR VALOR: " + valorC);
                }
            }            
        },
    },
    {
        name: "29",
        type: "Condicional",
        exercise: () => {
            let valorA, valorB, valorC;

            valorA = parseInt(prompt("DIGITE O PRIMEIRO NUMERO:"));
            valorB = parseInt(prompt("DIGITE O SEGUNDO NUMERO:"));
            valorC = parseInt(prompt("DIGITE O TERCEIRO NUMERO:"));
            
            if ((valorA < valorB) && (valorA < valorC)) {
                alert("SOMA RESULTANTE: " + (valorB + valorC));
            } else {
                if ((valorB < valorA) && (valorB < valorC)) {
                    alert("SOMA RESULTANTE: " + (valorA + valorC));
                } else {
                    alert("SOMA RESULTANTE: " + (valorA + valorB));
                }
            }            
        },
    },
    {
        name: "30",
        type: "Condicional",
        exercise: () => {
            let valorA, valorB, valorC, maior, menor, medio;

            valorA = parseInt(prompt("DIGITE O PRIMEIRO NUMERO:"));
            valorB = parseInt(prompt("DIGITE O SEGUNDO NUMERO:"));
            valorC = parseInt(prompt("DIGITE O TERCEIRO NUMERO:"));
            
            if ((valorA > valorB) && (valorA > valorC)) {
                maior = valorA;
                if (valorB > valorC) {
                    medio = valorB;
                    menor = valorC;
                } else {
                    medio = valorC;
                    menor = valorB;
                }
            } else if ((valorB > valorA) && (valorB > valorC)) {
                maior = valorB;
                if (valorA > valorC) {
                    medio = valorA;
                    menor = valorC;
                } else {
                    medio = valorC;
                    menor = valorA;
                }
            } else {
                maior = valorC;
                if (valorA > valorB) {
                    medio = valorA;
                    menor = valorB;
                } else {
                    medio = valorB;
                    menor = valorA;
                }
            }
            
            alert("ORDENACAO: " + menor + ", " + medio + ", " + maior);            
        },
    },
    {
        name: "31",
        type: "Condicional",
        exercise: () => {
            let valorA, valorB, valorC;

            valorA = parseInt(prompt("DIGITE O PRIMEIRO LADO:"));
            valorB = parseInt(prompt("DIGITE O SEGUNDO LADO:"));
            valorC = parseInt(prompt("DIGITE O TERCEIRO LADO:"));
            
            if (valorA < (valorB + valorC) && valorB < (valorA + valorC) && valorC < (valorA + valorB)) {
                alert("E UM TRIANGULO");
            } else {
                alert("NAO E TRIANGULO");
            }            
        },
    },
    {
        name: "32",
        type: "Condicional",
        exercise: () => {
            let pontoA, pontoB, nomeA, nomeB;

            nomeA = prompt("DIGITE O PRIMEIRO TIME:");
            nomeB = prompt("DIGITE O SEGUNDO TIME:");
            
            pontoA = parseInt(prompt("DIGITE A PONTUACAO DO TIME " + nomeA + ":"));
            pontoB = parseInt(prompt("DIGITE A PONTUACAO DO TIME " + nomeB + ":"));
            
            if (pontoA > pontoB) {
                alert("VENCEDOR: " + nomeA);
            } else if (pontoB > pontoA) {
                alert("VENCEDOR: " + nomeB);
            } else {
                alert("EMPATE");
            }            
        },
    },
    {
        name: "33",
        type: "Condicional",
        exercise: () => {
            let valorA, valorB;

            valorA = parseInt(prompt("DIGITE O PRIMEIRO VALOR:"));
            valorB = parseInt(prompt("DIGITE O SEGUNDO VALOR:"));
            
            if (valorA > valorB) {
                alert("PRIMEIRO E MAIOR");
            } else if (valorB > valorA) {
                alert("SEGUNDO E MAIOR");
            } else {
                alert("NUMEROS IGUAIS");
            }            
        },
    },
    {
        name: "35",
        type: "Condicional",
        exercise: () => {
            let litros, valorPago, descontoLitro, precoLitro, tipoCombustivel;

            litros = parseInt(prompt("DIGITE A QUANTIDADE DE LITROS:"));
            tipoCombustivel = prompt("DIGITE O TIPO DO COMBUSTIVEL [A/G]:");
            
            if (tipoCombustivel === "A") {
                precoLitro = 2.9;
                if (litros > 20) {
                    descontoLitro = litros * precoLitro * (5 / 100);
                } else {
                    descontoLitro = litros * precoLitro * (3 / 100);
                }
            } else {
                precoLitro = 3.3;
                if (litros > 20) {
                    descontoLitro = litros * precoLitro * (6 / 100);
                } else {
                    descontoLitro = litros * precoLitro * (4 / 100);
                }
            }
            
            valorPago = (litros * precoLitro) - descontoLitro;
            
            alert("VALOR A SER PAGO PELOS " + litros + "L DE " + tipoCombustivel + ": R$ " + valorPago);            
        },
    },
    {
        name: "36",
        type: "Condicional",
        exercise: () => {
            let homemA, homemB, mulherA, mulherB;
            let homemVelho, homemNovo, mulherVelha, mulherNova;
            
            homemA = parseInt(prompt("DIGITE A IDADE DO PRIMEIRO HOMEM:"));
            homemB = parseInt(prompt("DIGITE A IDADE DO SEGUNDO HOMEM:"));
            mulherA = parseInt(prompt("DIGITE A IDADE DA PRIMEIRA MULHER:"));
            mulherB = parseInt(prompt("DIGITE A IDADE DA SEGUNDA MULHER:"));
            
            if (homemA > homemB) {
                homemVelho = homemA;
                homemNovo = homemB;
            } else {
                homemVelho = homemB;
                homemNovo = homemA;
            }
            
            if (mulherA > mulherB) {
                mulherVelha = mulherA;
                mulherNova = mulherB;
            } else {
                mulherVelha = mulherB;
                mulherNova = mulherA;
            }
            
            alert("SOMA DO OPOSTOS: " + (homemVelho + mulherNova));
            alert("PRODUTO DO OPOSTOS: " + (homemNovo * mulherVelha));            
        },
    },
    {
        name: "37",
        type: "Condicional",
        exercise: () => {
            let macaQuilo, morangoQuilo;
            let macaPreco, morangoPreco, valorTotal;
            
            macaQuilo = parseInt(prompt("DIGITE A QUANTIDADE DE MACAS [KG]:"));
            morangoQuilo = parseInt(prompt("DIGITE A QUANTIDADE DE MORANGOS [KG]:"));
            
            if (macaQuilo > 5) {
                macaPreco = 1.5;
            } else {
                macaPreco = 1.8;
            }
            
            if (morangoQuilo > 5) {
                morangoPreco = 2.2;
            } else {
                morangoPreco = 2.5;
            }
            
            valorTotal = (morangoQuilo * morangoPreco) + (macaQuilo * macaPreco);
            
            if ((macaQuilo + morangoQuilo > 8) || (valorTotal > 25.0)) {
                valorTotal = valorTotal - (valorTotal / 10);
            }
            
            alert("VALOR A SER PAGO: R$ " + valorTotal.toFixed(2));            
        },
    },
    {
        name: "38",
        type: "Condicional",
        exercise: () => {
            let usuario, senha;
            const usuarioCorreto = 1234;
            const senhaCorreta = 9999;
            
            usuario = parseInt(prompt("DIGITE O USUARIO:"));
            
            if (usuario === usuarioCorreto) {
                alert("USUARIO CORRETO");
                
                senha = parseInt(prompt("DIGITE A SENHA:"));
            
                if (senha === senhaCorreta) {
                    alert("ACESSO PERMITIDO");
                } else {
                    alert("SENHA INCORRETA");
                }
            } else {
                alert("USUARIO INCORRETO");
            }            
        },
    },
    {
        name: "40",
        type: "Condicional",
        exercise: () => {
            let nome;
            let precoUnitario, total, desconto;
            let quantidade;
            
            nome = prompt("DIGITE O NOME DO PRODUTO:");
            precoUnitario = parseFloat(prompt("DIGITE O PRECO UNITARIO: R$"));
            quantidade = parseInt(prompt("DIGITE A QUANTIDADE ADQUIRIDA:"));
            
            total = quantidade * precoUnitario;
            
            if (quantidade <= 5) {
                desconto = (total / 100) * 2;
            } else if (quantidade > 5 && quantidade <= 10) {
                desconto = (total / 100) * 3;
            } else {
                desconto = (total / 100) * 5;
            }
            
            alert("TOTAL A PAGAR COM DESCONTO DO PRODUTO " + nome + ": R$ " + (total - desconto).toFixed(2));            
        },
    },
    {
        name: "41",
        type: "Condicional",
        exercise: () => {
            let notaUm, notaDois, notaTres, mediaAtividade, media;
            let conceito;
            
            notaUm = parseFloat(prompt("DIGITE A 1 NOTA:"));
            notaDois = parseFloat(prompt("DIGITE A 2 NOTA:"));
            notaTres = parseFloat(prompt("DIGITE A 3 NOTA:"));
            mediaAtividade = parseFloat(prompt("DIGITE A MEDIA DAS ATIVIDADES:"));
            
            media = notaUm + (notaDois * 2) + (notaTres * 3) + mediaAtividade;
            
            if (media >= 9.0) {
                conceito = "A";
            } else if (media >= 7.5) {
                conceito = "B";
            } else if (media >= 6) {
                conceito = "C";
            } else {
                conceito = "D";
            }
            
            alert("CONCEITO DO ALUNO: " + conceito);            
        },
    },
    {
        name: "42",
        type: "Condicional",
        exercise: () => {
            let codigo, anoNascimento, anoEntrada, idade, tempoEmpresa;
            let resultante;
            
            codigo = parseInt(prompt("DIGITE O NUMERO DO EMPREGADO:"));
            anoNascimento = parseInt(prompt("DIGITE O ANO DE NASCIMENTO DO EMPREGADO:"));
            anoEntrada = parseInt(prompt("DIGITE O ANO DE ENTRADA NA EMPRESA:"));
            
            idade = 2024 - anoNascimento;
            tempoEmpresa = 2024 - anoEntrada;
            
            if (idade >= 65 || tempoEmpresa >= 30 || (idade >= 60 && tempoEmpresa >= 25)) {
                resultante = "PODE REQUERER APOSENTADORIA";
            } else {
                resultante = "NAO PODE REQUERER APOSENTADORIA";
            }
            
            alert("FUNCIONARIO: " + codigo +
                  "\nIDADE: " + idade + " ANOS" +
                  "\nTRABALHANDO: " + tempoEmpresa + " ANOS" +
                  "\nSITUACAO: " + resultante
            );            
        },
    },
    {
        name: "43",
        type: "While",
        exercise: () => {

        },
    },
]