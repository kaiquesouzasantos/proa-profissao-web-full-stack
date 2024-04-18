export const exercises = [{
        name: "1",
        type: "basic",
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
        type: "basic",
        exercise: () => {
            let valor = parseInt(prompt("DIGITE UM VALOR: "));

            alert("ANTECESSOR: " + (valor - 1));
        },
    },
    {
        name: "6",
        type: "basic",
        exercise: () => {
            let base, altura;

            base = parseInt(prompt("DIGITE A DIMENSAO DA BASE:"));
            altura = parseInt(prompt("DIGITE A DIMENSAO DA ALTURA:"));

            alert("AREA: " + (base * altura));
        },
    },
    {
        name: "7",
        type: "basic",
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
        type: "basic",
        exercise: () => {
            let total, branco, nulo, valido;

            total = parseInt(prompt("DIGITE O TOTAL DE ELEITORES:"));
            branco = parseInt(prompt("DIGITE O NUMERO DE VOTOS BRANCOS:"));
            nulo = parseInt(prompt("DIGITE O NUMERO DE VOTOS NULOS:"));
            valido = parseInt(prompt("DIGITE O NUMERO DE VOTOS VALIDOS:"));

            alert("PERCENTUAL BRANCO: " + (total / 100 * branco) + "%");
            alert("PERCENTUAL NULO: " + (total / 100 * nulo) + "%");
            alert("PERCENTUAL VALIDO: " + (total / 100 * valido) + "%");
        },
    },
    {
        name: "9",
        type: "basic",
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
        type: "basic",
        exercise: () => {
            let custoFabrica, custoImposto, custoDistribuidor, resultante;

            custoFabrica = parseFloat(prompt("DIGITE O VALOR DE FABRICA: R$"));

            custoImposto = (custoFabrica / 100) * 45;
            custoDistribuidor = (custoFabrica / 100) * 18;
            resultante = custoFabrica + custoImposto + custoDistribuidor;

            alert("VALOR PARA O CONSUMIDOR: R$" + resultante);
        },
    },
    {
        name: "11",
        type: "basic",
        exercise: () => {
            let carrosVendidos, valorVendido, salarioFixo, comissaoFixa, resultante;

            carrosVendidos = parseFloat(prompt("DIGITE O NUMERO DE CARROS VENDIDOS:"));
            valorVendido = parseFloat(prompt("DIGITE O VALOR TOTAL DOS CARROS VENDIDOS: R$"));
            salarioFixo = parseFloat(prompt("DIGITE O VALOR DO PAGAMENTO FIXO: R$"));
            comissaoFixa = parseFloat(prompt("DIGITE O VALOR DA COMISSAO FIXA: R$"));

            resultante = salarioFixo + (comissaoFixa * carrosVendidos) + (valorVendido / 100 * 5);

            alert("SALARIO RESULTANTE: R$" + resultante);
        },
    },
    {
        name: "12",
        type: "basic",
        exercise: () => {
            let celsius, farenheit;

            farenheit = parseFloat(prompt("DIGITE A TEMPERATURA EM [F]:"));
            celsius = ((farenheit - 32) * 5) / 9;

            alert("TEMPERATURA EM CELSIUS: " + celsius);
        },
    },
    {
        name: "13",
        type: "basic",
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
        type: "conditional",
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
        type: "conditional",
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
        type: "conditional",
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
        type: "conditional",
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
        type: "conditional",
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
        type: "conditional",
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
        type: "conditional",
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
        type: "conditional",
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
        type: "conditional",
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
        type: "conditional",
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
        type: "conditional",
        exercise: () => {
            let salarioFixo, valorVendas, comissao;

            salarioFixo = parseFloat(prompt("DIGITE O SALARIO FIXO: R$"));
            valorVendas = parseFloat(prompt("DIGITE O VALOR TOTAL DAS VENDAS: R$"));

            if (valorVendas > 1500) {
                comissao = ((1500 / 100) * 3) + ((valorVendas - 1500) / 100 * 5);
            } else {
                comissao = (valorVendas / 100) * 3;
            }

            alert("PAGAMENTO TOTAL: R$" + (salarioFixo + comissao));
        },
    },
    {
        name: "25",
        type: "conditional",
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
        type: "conditional",
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
        type: "conditional",
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
        type: "conditional",
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
        type: "conditional",
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
        type: "conditional",
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
        type: "conditional",
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
        type: "conditional",
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
        type: "conditional",
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
        type: "conditional",
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
        type: "conditional",
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
        type: "conditional",
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
        type: "conditional",
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
        type: "conditional",
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
        type: "conditional",
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
        type: "conditional",
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

    //

    {
        name: "44",
        type: "while",
        exercise: () => {
            function divide(valorA, valorB) {
                return valorA / valorB;
            }

            let valorA, valorB;

            valorA = parseInt(prompt("DIGITE O PRIMEIRO VALOR A SER PROCESSADO:"));
            do {
                valorB = parseInt(prompt("DIGITE O SEGUNDO VALOR A SER PROCESSADO:"));
            } while (valorB === 0);

            alert("RESULTANTE: " + divide(valorA, valorB));
        },
    },
    {
        name: "45",
        type: "while",
        exercise: () => {
            function divide(valorA, valorB) {
                return valorA / valorB;
            }

            let valorA, valorB;

            valorA = parseInt(prompt("DIGITE O PRIMEIRO VALOR A SER PROCESSADO:"));
            do {
                valorB = parseInt(prompt("DIGITE O SEGUNDO VALOR A SER PROCESSADO:"));
            } while (valorB === 0);

            alert("RESULTANTE: " + divide(valorA, valorB));
        },
    },
    {
        name: "46",
        type: "while",
        exercise: () => {
            function verificaZero(valor) {
                return valor === 0;
            }

            function divide(valorA, valorB) {
                return valorA / valorB;
            }

            let valorA, valorB;

            valorA = parseInt(prompt("DIGITE O PRIMEIRO VALOR A SER PROCESSADO:"));
            do {
                valorB = parseInt(prompt("DIGITE O SEGUNDO VALOR A SER PROCESSADO:"));
                if (verificaZero(valorB)) {
                    alert("VALOR INVÁLIDO");
                }
            } while (valorB === 0);

            alert("RESULTANTE: " + divide(valorA, valorB));
        },
    },
    {
        name: "47",
        type: "while",
        exercise: () => {
            function verificaZero(valor) {
                return valor === 0;
            }

            function divide(valorA, valorB) {
                return valorA / valorB;
            }

            let valorA, valorB;

            valorA = parseInt(prompt("DIGITE O PRIMEIRO VALOR A SER PROCESSADO:"));
            do {
                valorB = parseInt(prompt("DIGITE O SEGUNDO VALOR A SER PROCESSADO:"));
                if (verificaZero(valorB)) {
                    alert("VALOR INVÁLIDO");
                }
            } while (valorB < 0 || valorB > 10);

            alert("RESULTANTE: " + divide(valorA, valorB));
        },
    },
    {
        name: "48",
        type: "while",
        exercise: () => {
            let somaNotas = 0;
            let contador = 1;
            let nota;

            while (contador <= 2) {
                nota = parseFloat(prompt("DIGITE O " + contador + "ª NOTA:"));

                if (nota >= 0 && nota <= 10) {
                    somaNotas += nota;
                } else {
                    alert("NÚMERO INVÁLIDO! FORA DO INTERVALO ACEITO.");
                }

                contador++;
            }

            alert("MÉDIA DO ALUNO: " + (somaNotas / 2));
        },
    },
    {
        name: "49",
        type: "while",
        exercise: () => {
            function verificaNota(nota) {
                return nota >= 0 && nota <= 10;
            }

            let somaNotas = 0;
            let contador = 1;
            let nota;

            while (contador <= 2) {
                do {
                    nota = parseFloat(prompt("DIGITE O " + contador + "ª NOTA:"));
                    if (!verificaNota(nota)) {
                        alert("NÚMERO INVÁLIDO! FORA DO INTERVALO ACEITO.");
                    }
                } while (!verificaNota(nota));

                somaNotas += nota;
                contador++;
            }

            alert("MÉDIA DO ALUNO: " + (somaNotas / 2));
        },
    },

    //

    {
        name: "50",
        type: "for",
        exercise: () => {
            alert("ACESSE O CONSOLE")

            for (let contador = 1; contador <= 10; contador++) {
                console.log(contador);
            }
        },
    },
    {
        name: "51",
        type: "for",
        exercise: () => {
            alert("ACESSE O CONSOLE")

            for (let contador = 10; contador >= 1; contador--) {
                console.log(contador);
            }
        },
    },
    {
        name: "52",
        type: "for",
        exercise: () => {
            alert("ACESSE O CONSOLE")

            for (let contador = 101; contador <= 110; contador++) {
                console.log(contador);
            }
        },
    },
    {
        name: "53",
        type: "for",
        exercise: () => {
            alert("ACESSE O CONSOLE")

            let numero = parseInt(prompt("DIGITE UM NUMERO A SER PROCESSADO:"));

            for (let contador = 1; contador <= numero; contador++) {
                console.log(contador);
            }
        },
    },
    {
        name: "54",
        type: "for",
        exercise: () => {
            let numero;

            do {
                numero = parseInt(prompt("DIGITE UM NUMERO A SER PROCESSADO:"));
            } while (numero <= 0);

            alert("ACESSE O CONSOLE")

            for (let contador = 0; contador <= numero; contador++) {
                console.log(contador);
            }
        },
    },
    {
        name: "55",
        type: "for",
        exercise: () => {
            alert("ACESSE O CONSOLE")

            for (let contador = 1; contador <= 10; contador++) {
                console.log("8 x " + contador + " = " + contador * 8);
            }
        },
    },
    {
        name: "56",
        type: "for",
        exercise: () => {
            alert("ACESSE O CONSOLE")

            let numero = parseInt(prompt("DIGITE O NUMERO DA TABUADA:"));

            for (let contador = 1; contador <= 10; contador++) {
                console.log(numero + " x " + contador + " = " + (contador * numero));
            }
        },
    },

    //

    {
        name: "57",
        type: "accumulator",
        exercise: () => {
            alert("ACESSE O CONSOLE")

            let contador = 1;

            while (contador <= 10) {
                console.log(contador);
                contador++;
            }
        },
    },
    {
        name: "58",
        type: "accumulator",
        exercise: () => {
            alert("ACESSE O CONSOLE")

            let contador = 10;

            do {
                console.log(contador);
                contador--;
            } while (contador >= 1);

        },
    },
    {
        name: "59",
        type: "accumulator",
        exercise: () => {
            alert("ACESSE O CONSOLE")

            let negativos = 0;

            for (let contador = 1; contador <= 10; contador++) {
                let entrada = parseInt(prompt("DIGITE O " + contador + " NUMERO:"));

                if (entrada < 0) {
                    negativos++;
                }
            }

            alert("CONTAGEM DE NUMEROS NEGATIVOS: " + negativos);

        },
    },
    {
        name: "60",
        type: "accumulator",
        exercise: () => {
            let intervalo = 0;

            for (let contador = 1; contador <= 10; contador++) {
                let numero = parseInt(prompt("DIGITE O " + contador + " NUMERO:"));

                if (numero >= 10 && numero <= 20) {
                    intervalo++;
                }
            }

            alert("CONTAGEM DE NUMEROS ENTRE [10, 20]: " + intervalo);
            alert("CONTAGEM DE NUMEROS FORA DO INTERVALO: " + (10 - intervalo));

        },
    },
    {
        name: "61",
        type: "accumulator",
        exercise: () => {
            let somaEntrada = 0;

            for (let contador = 1; contador <= 10; contador++) {
                let entrada = parseInt(prompt("DIGITE O " + contador + " NUMERO:"));
                somaEntrada += entrada;
            }

            let mediaAritmetica = somaEntrada / 10;
            alert("MEDIA ARITMETICA: " + mediaAritmetica);
        },
    },
    {
        name: "62",
        type: "accumulator",
        exercise: () => {
            let somaNotas = 0;

            let quantidadeAlunos = parseInt(prompt("DIGITE O NUMERO DE ALUNOS QUE A CLASSE POSSUI:"));

            for (let contador = 1; contador <= quantidadeAlunos; contador++) {
                let nota = parseFloat(prompt("DIGITE A NOTA DO " + contador + " ALUNO:"));
                somaNotas += nota;
            }

            let notaMedia = somaNotas / quantidadeAlunos;
            alert("NOTA MEDIA DA SALA: " + notaMedia);
        },
    },
    {
        name: "63",
        type: "accumulator",
        exercise: () => {
            let somaEntrada = 0;

            for (let contador = 1; contador <= 10; contador++) {
                let entrada = parseInt(prompt("DIGITE O " + contador + " NUMERO:"));
                somaEntrada += entrada;
            }

            alert("SOMATORIA RESULTANTE: " + somaEntrada);
        },
    },
    {
        name: "64",
        type: "accumulator",
        exercise: () => {
            let somaEntrada = 0;

            for (let contador = 1; contador <= 10; contador++) {
                let valor = parseInt(prompt("DIGITE O " + contador + " NUMERO:"));
                if (valor < 40) {
                    somaEntrada += valor;
                }
            }

            alert("SOMATORIA RESULTANTE: " + somaEntrada);
        },
    },
    {
        name: "65",
        type: "accumulator",
        exercise: () => {
            let somaIntervalo = 0;

            let valorA = parseInt(prompt("DIGITE O NUMERO DE INICIO (MENOR):"));
            let valorB = parseInt(prompt("DIGITE O NUMERO DE FIM (MAIOR):"));

            for (let contador = valorA; contador <= valorB; contador++) {
                somaIntervalo += contador;
            }

            alert("SOMATORIA RESULTANTE DO INTERVALO [" + valorA + "," + valorB + "]: " + somaIntervalo);
        },
    },
    {
        name: "66",
        type: "accumulator",
        exercise: () => {
            let somaIntervalo = 0,
                maior, menor;

            let valorA = parseInt(prompt("DIGITE O NUMERO DE INICIO (MENOR):"));
            let valorB = parseInt(prompt("DIGITE O NUMERO DE FIM (MAIOR):"));

            if (valorA > valorB) {
                maior = valorA;
                menor = valorB;
            } else {
                maior = valorB;
                menor = valorA;
            }

            for (let contador = menor; contador <= maior; contador++) {
                somaIntervalo += contador;
            }

            alert("SOMATORIA RESULTANTE DO INTERVALO [" + menor + "," + maior + "]: " + somaIntervalo);
        },
    },
    {
        name: "67",
        type: "accumulator",
        exercise: () => {
            let somaIntervalo = 0;

            for (let contador = 15; contador <= 100; contador++) {
                somaIntervalo += contador;
            }

            alert("SOMA RESULTANTE DO INTERVALO [15, 100]: " + somaIntervalo);
        },
    },
    {
        name: "68",
        type: "accumulator",
        exercise: () => {
            let somaValores = 0;
            let itensEstoque;

            itensEstoque = parseInt(prompt("DIGITE A QUANTIDADE DE ITENS EM ESTOQUE: "));

            for (let contador = 1; contador <= itensEstoque; contador++) {
                let entrada = parseFloat(prompt("DIGITE O VALOR DO " + contador + " ITEM: R$"));
                somaValores += entrada;
            }

            alert("SOMATORIA RESULTANTE DE ESTOQUE: R$ " + somaValores);
            alert("VALOR MEDIO DE ITENS: R$ " + (somaValores / itensEstoque));

        },
    },
    {
        name: "69",
        type: "accumulator",
        exercise: () => {
            let somaValores = 0;
            let contadorItens = 0;
            let continuarLeitura;

            do {
                contadorItens++;
                let entrada = parseFloat(prompt("DIGITE O VALOR DO " + contadorItens + " ITEM: R$"));
                somaValores += entrada;

                continuarLeitura = prompt("DESEJA CONTINUAR NA ADICAO DE VALORES EM ESTOQUE[S/N]? ").toUpperCase();
            } while (continuarLeitura === "S");

            alert("SOMATORIA RESULTANTE DE ESTOQUE: R$ " + somaValores);
            alert("VALOR MEDIO DE ITENS: R$ " + (somaValores / contadorItens));
        },
    },

    //

    {
        name: "70",
        type: "additional",
        exercise: () => {
            let maior = 0;
            let menor = 10000000000;
            let numero;

            for (let contador = 1; contador <= 10; contador++) {
                numero = parseInt(prompt("DIGITE O " + contador + " VALOR:"));

                if (numero > maior) {
                    maior = numero;
                } else if (numero < menor) {
                    menor = numero;
                }
            }

            alert("MAIOR VALOR: " + maior);
            alert("MENOR VALOR: " + menor);
        },
    },
    {
        name: "71",
        type: "additional",
        exercise: () => {
            let maior = 0;
            let media = 0;
            let numero, leituras;

            leituras = parseInt(prompt("DIGITE A QUANTIDADE DE NUMEROS QUE IRA INSERIR:"));

            for (let contador = 1; contador <= leituras; contador++) {
                numero = parseInt(prompt("DIGITE O " + contador + " VALOR:"));
                media += numero;

                if (numero > maior) {
                    maior = numero;
                }
            }

            alert("MAIOR VALOR: " + maior);
            alert("MEDIA DOS VALORES: " + (media / leituras));
        },
    },
    {
        name: "72",
        type: "additional",
        exercise: () => {
            let leituras = 15;
            let maior = 0;
            let media = 0;
            let valor;

            for (let contador = 1; contador <= leituras; contador++) {
                valor = parseFloat(prompt("DIGITE O PRECO DO PRODUTO " + contador + ": R$"));
                media += valor;

                if (valor > maior) {
                    maior = valor;
                }
            }

            alert("PRODUTO MAIS CARO: R$ " + maior);
            alert("MEDIA DE PRECOS: R$ " + (media / leituras));
        },
    },
]