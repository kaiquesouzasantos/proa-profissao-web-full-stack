export const exercises = [{
        name: "Area do Circulo",
        type: "basic",
        exercise: () => {
            function retornaArea(raio) {
                return raio * raio * 3.14;
            }

            let raio = parseFloat(prompt("DIGITE O RAIO DA CIRCUNFERENCIA:"));
            alert("AREA DA CIRCUNFERENCIA: " + retornaArea(raio));
        },
    },
    {
        name: "Calculo de Produtos",
        type: "basic",
        exercise: () => {
            let valorA, valorB, valorC, valorD;

            valorA = parseInt(prompt("DIGITE O PRIMEIRO VALOR: "));
            valorB = parseInt(prompt("DIGITE O SEGUNDO VALOR: "));
            valorC = parseInt(prompt("DIGITE O TERCEIRO VALOR: "));
            valorD = parseInt(prompt("DIGITE O QUARTO VALOR: "));

            alert("RESULTANTE DO PRODUTO DO 1 COM O 3 VALOR: " + (valorA * valorC));
            alert("RESULTANTE DA SOMA DO 2 COM O 4 VALOR: " + (valorB + valorD));
        },
    },
    {
        name: "Celsius Para Fahrenheit",
        type: "basic",
        exercise: () => {
            function converteCelsiusParaFahrenheit(celsius) {
                return ((9 * celsius) + 160) / 5;
            }

            let temperaturaCelsius, temperaturaFahrenheit;

            temperaturaCelsius = parseFloat(prompt("DIGITE A TEMPERATURA EM CELSIUS: "));
            temperaturaFahrenheit = converteCelsiusParaFahrenheit(temperaturaCelsius);

            alert("TEMPERATURA EM FAHRENHEIT: " + temperaturaFahrenheit);
        },
    },
    {
        name: "Combustivel Necessario",
        type: "basic",
        exercise: () => {
            function calculaDistancia(tempoGasto, velocidade) {
                return tempoGasto * velocidade;
            }

            function calculaCombustivelNecessario(distancia, litroPorQuilometro) {
                return distancia / litroPorQuilometro;
            }

            let tempoGasto, velocidade, combustivelNecessario;

            tempoGasto = parseInt(prompt("DIGITE O TEMPO NECESSARIO (H): "));
            velocidade = parseInt(prompt("DIGITE A VELOCIDADE MEDIA (KM): "));

            combustivelNecessario = calculaCombustivelNecessario(calculaDistancia(tempoGasto, velocidade), 12);

            alert("LITROS NECESSARIOS PARA A VIAGEM: " + combustivelNecessario + " L");
        },
    },
    {
        name: "Diferenca de Quadraticos",
        type: "basic",
        exercise: () => {
            function calculaDiferenca(valorA, valorB) {
                return (valorA * valorA) - (valorB * valorB);
            }

            let valorA, valorB;

            valorA = parseInt(prompt("DIGITE O VALOR A: "));
            valorB = parseInt(prompt("DIGITE O VALOR B: "));

            alert("DIFERENCA DOS QUADRATICOS: " + calculaDiferenca(valorA, valorB));
        },
    },
    {
        name: "Dolar Para Real",
        type: "basic",
        exercise: () => {
            function converteDolarParaReal(quantidadeDolar, cotacao) {
                return quantidadeDolar * cotacao;
            }

            let quantidadeDolar, cotacao, valorEmReal;

            quantidadeDolar = parseFloat(prompt("DIGITE O VALOR OBTIDO EM DOLAR: U$ "));
            cotacao = parseFloat(prompt("DIGITE O VALOR DA COTACAO ATUAL PARA O REAL: R$ "));

            valorEmReal = converteDolarParaReal(quantidadeDolar, cotacao);

            alert("ADJACENCIA DA CONVERSAO EM REAIS: R$ " + valorEmReal);
        },
    },
    {
        name: "Fahrenheit Para Celsius",
        type: "basic",
        exercise: () => {
            function converteFahrenheitParaCelsius(fahrenheit) {
                return ((fahrenheit - 32) * 5) / 9;
            }

            let temperaturaFahrenheit, temperaturaCelsius;

            temperaturaFahrenheit = parseFloat(prompt("DIGITE A TEMPERATURA EM FAHRENHEIT: "));
            temperaturaCelsius = converteFahrenheitParaCelsius(temperaturaFahrenheit);

            alert("TEMPERATURA EM CELSIUS: " + temperaturaCelsius);
        },
    },
    {
        name: "Prestacao Atrasada",
        type: "basic",
        exercise: () => {
            function calculaValorTaxaAdicional(percentualTaxa, valor, tempo) {
                return (valor * (percentualTaxa / 100)) * tempo;
            }

            function calculaValorPrestacao(taxaAdicional, valor) {
                return taxaAdicional + valor;
            }

            let valor, percentualTaxa, tempo, taxaAdicional;

            valor = parseFloat(prompt("DIGITE O VALOR INICIAL DA PRESTAÇÃO: R$"));
            percentualTaxa = parseFloat(prompt("DIGITE O PERCENTUAL DE TAXA: "));
            tempo = parseInt(prompt("DIGITE O TEMPO ATRASADO (D): "));

            taxaAdicional = calculaValorTaxaAdicional(percentualTaxa, valor, tempo);

            alert("VALOR DA PRESTAÇÃO A SER PAGA EM ATRASO: R$ " + calculaValorPrestacao(taxaAdicional, valor));
        },
    },
    {
        name: "Quadrado da Soma",
        type: "basic",
        exercise: () => {
            function retornaValorQuadratico(valor) {
                return valor * valor;
            }

            let soma = 0,
                valor;

            for (let contador = 1; contador <= 3; contador++) {
                valor = parseFloat(prompt("DIGITE O " + contador + " VALOR: "));
                soma += valor;
            }

            alert("SOMA DOS NÚMEROS QUADRÁTICOS: " + retornaValorQuadratico(soma));
        },
    },
    {
        name: "Reajuste de Salario",
        type: "basic",
        exercise: () => {
            function calculaValorReajuste(salario, percentualReajuste) {
                return (percentualReajuste / 100) * salario;
            }

            function calculaSalarioReajustado(salarioAtual, valorReajuste) {
                return salarioAtual + valorReajuste;
            }

            let salario, percentualReajuste, valorReajuste, salarioReajustado;

            salario = parseFloat(prompt("DIGITE O SALÁRIO ATUAL: R$ "));
            percentualReajuste = parseFloat(prompt("DIGITE O PERCENTUAL DE REAJUSTE: "));

            valorReajuste = calculaValorReajuste(salario, percentualReajuste);
            salarioReajustado = calculaSalarioReajustado(salario, valorReajuste);

            alert("SALÁRIO REAJUSTADO: R$ " + salarioReajustado);
        },
    },
    {
        name: "Real Para Dolar",
        type: "basic",
        exercise: () => {
            function converteRealParaDolar(quantidadeReal, cotacao) {
                return quantidadeReal * cotacao;
            }

            let quantidadeReal, cotacao, quantidadeDolar;

            quantidadeReal = parseFloat(prompt("DIGITE O VALOR OBTIDO EM REAL: R$ "));
            cotacao = parseFloat(prompt("DIGITE O VALOR DA COTAÇÃO ATUAL PARA O DÓLAR: U$ "));

            quantidadeDolar = converteRealParaDolar(quantidadeReal, cotacao);

            alert("ADJACÊNCIA DA CONVERSÃO EM DÓLARES: U$ " + quantidadeDolar);
        },
    },
    {
        name: "Salario do Professor",
        type: "basic",
        exercise: () => {
            function calculaSalarioBruto(horasTrabalhadas, valorHora) {
                return horasTrabalhadas * valorHora;
            }

            function calculaValorDesconto(salarioBruto, percentualDesconto) {
                return (percentualDesconto / 100) * salarioBruto;
            }

            function calculaSalarioLiquido(salarioBruto, valorDesconto) {
                return salarioBruto - valorDesconto;
            }

            let horasTrabalhadas, valorHora, percentualDesconto, salarioBruto, valorDesconto, salarioLiquido;

            horasTrabalhadas = parseInt(prompt("DIGITE A QUANTIDADE DE HORAS TRABALHADAS: "));
            valorHora = parseFloat(prompt("DIGITE O VALOR DA HORA TRABALHADA: R$ "));
            percentualDesconto = parseFloat(prompt("DIGITE O PERCENTUAL DE CONTRIBUIÇÃO AO INSS: "));

            salarioBruto = calculaSalarioBruto(horasTrabalhadas, valorHora);
            valorDesconto = calculaValorDesconto(salarioBruto, percentualDesconto);
            salarioLiquido = calculaSalarioLiquido(salarioBruto, valorDesconto);

            alert("SALÁRIO LÍQUIDO: R$ " + salarioLiquido + "\nSALÁRIO BRUTO: R$ " + salarioBruto + "\nVALOR DESCONTADO: R$ " + valorDesconto);
        },
    },
    {
        name: "Salario do Professor",
        type: "basic",
        exercise: () => {
            function calculaSalarioBruto(horasTrabalhadas, valorHora) {
                return horasTrabalhadas * valorHora;
            }

            function calculaValorDesconto(salarioBruto, percentualDesconto) {
                return (percentualDesconto / 100) * salarioBruto;
            }

            function calculaSalarioLiquido(salarioBruto, valorDesconto) {
                return salarioBruto - valorDesconto;
            }

            let horasTrabalhadas, valorHora, percentualDesconto, salarioBruto, valorDesconto, salarioLiquido;

            horasTrabalhadas = parseInt(prompt("DIGITE A QUANTIDADE DE HORAS TRABALHADAS: "));
            valorHora = parseFloat(prompt("DIGITE O VALOR DA HORA TRABALHADA: R$ "));
            percentualDesconto = parseFloat(prompt("DIGITE O PERCENTUAL DE CONTRIBUIÇÃO AO INSS: "));

            salarioBruto = calculaSalarioBruto(horasTrabalhadas, valorHora);
            valorDesconto = calculaValorDesconto(salarioBruto, percentualDesconto);
            salarioLiquido = calculaSalarioLiquido(salarioBruto, valorDesconto);

            alert("SALÁRIO LÍQUIDO: R$ " + salarioLiquido + "\nSALÁRIO BRUTO: R$ " + salarioBruto + "\nVALOR DESCONTADO: R$ " + valorDesconto);
        },
    },
    {
        name: "Soma dos Quadraticos",
        type: "basic",
        exercise: () => {
            function retornaValorQuadratico(valor) {
                return valor * valor;
            }

            let soma = 0,
                valor;

            for (let contador = 1; contador <= 3; contador++) {
                valor = parseFloat(prompt("DIGITE O " + contador + " VALOR: "));
                soma += retornaValorQuadratico(valor);
            }

            alert("SOMA DOS NÚMEROS QUADRÁTICOS: " + soma);
        },
    },
    {
        name: "Troca de Valores",
        type: "basic",
        exercise: () => {
            let auxiliar, valorA, valorB;

            valorA = parseInt(prompt("DIGITE O VALOR A: "));
            valorB = parseInt(prompt("DIGITE O VALOR B: "));

            auxiliar = valorA;
            valorA = valorB;
            valorB = auxiliar;

            alert("VALOR A (ATUAL): " + valorA + " | VALOR B (ATUAL): " + valorB);
        },
    },
    {
        name: "Volume da Lata de Oleo",
        type: "basic",
        exercise: () => {
            function calculaVolume(raio, altura) {
                return 3.14 * (raio * raio) * altura;
            }

            let raio, altura, volume;

            raio = parseFloat(prompt("DIGITE O RAIO DA LATA DE ÓLEO: "));
            altura = parseFloat(prompt("DIGITE A ALTURA DA LATA DE ÓLEO: "));

            volume = calculaVolume(raio, altura);

            alert("VOLUME TOTAL: " + volume + " UN^3");
        },
    },
    {
        name: "Volume do Retangulo",
        type: "basic",
        exercise: () => {
            function calculaVolumeRetangular(comprimento, largura, altura) {
                return comprimento * largura * altura;
            }

            let comprimento, largura, altura, volume;

            comprimento = parseInt(prompt("DIGITE O COMPRIMENTO DA CAIXA (CM): "));
            largura = parseInt(prompt("DIGITE A LARGURA DA CAIXA (CM): "));
            altura = parseInt(prompt("DIGITE A ALTURA DA CAIXA (CM): "));

            volume = calculaVolumeRetangular(comprimento, largura, altura);

            alert("VOLUME TOTAL: " + volume + " UN^3");
        },
    },

    // 

    {
        name: "Aprovacao de Aluno",
        type: "conditional",
        exercise: () => {
            let notas = 0;

            for (let contador = 1; contador <= 4; contador++) {
                notas += parseFloat(prompt("DIGITE A " + contador + " NOTA: "));
            }

            let media = notas / 4;

            if (media >= 5) {
                alert("ALUNO APROVADO COM MEDIA " + media);
            } else {
                alert("ALUNO REPROVADO COM MEDIA " + media);
            }
        },
    },
    {
        name: "Aprovacao com Recuperacao",
        type: "conditional",
        exercise: () => {
            let notas = 0;

            for (let contador = 1; contador <= 4; contador++) {
                notas += parseFloat(prompt("DIGITE A " + contador + " NOTA: "));
            }

            let media = notas / 4;

            if (media >= 7) {
                alert("ALUNO APROVADO COM MEDIA " + media);
            } else {
                notas = parseFloat(prompt("DIGITE A NOTA DO EXAME DE RECUPERACAO: "));
                media = (notas + media) / 2;

                if (media >= 5) {
                    alert("ALUNO APROVADO COM MEDIA " + media);
                } else {
                    alert("ALUNO REPROVADO COM MEDIA " + media);
                }
            }
        },
    },
    {
        name: "Diferenca de Descrecentes",
        type: "conditional",
        exercise: () => {
            let valorA = parseFloat(prompt("DIGITE O PRIMEIRO VALOR: "));
            let valorB = parseFloat(prompt("DIGITE O SEGUNDO VALOR: "));
            let diferenca;

            if (valorA > valorB) {
                diferenca = valorA - valorB;
            } else {
                diferenca = valorB - valorA;
            }

            alert("A DIFERENCA DO MAIOR VALOR PELO MENOR E: " + diferenca);
        },
    },
    {
        name: "Diferenciando Triangulos",
        type: "conditional",
        exercise: () => {
            let valorA = parseFloat(prompt("DIGITE A MEDIDA DO LADO A: "));
            let valorB = parseFloat(prompt("DIGITE A MEDIDA DO LADO D: "));
            let valorC = parseFloat(prompt("DIGITE A MEDIDA DO LADO C: "));
            let resultado;

            if (!((valorA < valorB + valorC) && (valorB < valorA + valorC) && (valorC < valorA + valorB))) {
                resultado = "NAO E TRIANGULO";
            } else if (valorA === valorB && valorB === valorC) {
                resultado = "TRIANGULO EQUILATERO";
            } else if (valorA === valorB || valorA === valorC || valorB === valorC) {
                resultado = "TRIANGULO ISOSCELES";
            } else {
                resultado = "TRIANGULO ESCALENO";
            }

            alert("RESULTANTE DADOS OS VALORES FORNECIDOS: " + resultado);
        },
    },
    {
        name: "Divisiveis Por 2 e 3",
        type: "conditional",
        exercise: () => {
            for (let contador = 1; contador <= 4; contador++) {
                let numero = parseInt(prompt("DIGITE O NUMERO " + contador + " A SER VERIFICADO: "));

                if (numero % 2 === 0 && numero % 3 === 0) {
                    alert("O NUMERO " + numero + " E DIVISIVEL POR 2 E 3");
                } else {
                    alert("O NUMERO " + numero + " NAO E DIVISIVEL POR 2 E 3");
                }
            }
        },
    },
    {
        name: "Divisivel Por 4 e 5",
        type: "conditional",
        exercise: () => {
            let numero = parseInt(prompt("DIGITE O NUMERO A SER VERIFICADO: "));

            if (numero % 4 === 0 && numero % 5 === 0) {
                alert("O NUMERO " + numero + " E DIVISIVEL POR 4 E 5");
            } else {
                alert("O NUMERO " + numero + " NAO E DIVISIVEL POR 4 E 5");
            }
        },
    },
    {
        name: "Impar ou Par",
        type: "conditional",
        exercise: () => {
            let numero = parseInt(prompt("DIGITE O NUMERO A SER PROCESSADO: "));

            if (numero % 2 === 0) {
                alert("O NUMERO " + numero + " E PAR");
            } else {
                alert("O NUMERO " + numero + " E IMPAR");
            }
        },
    },
    {
        name: "Maior Que 3",
        type: "conditional",
        exercise: () => {
            let numero = parseInt(prompt("DIGITE O NUMERO A SER VERIFICADO: "));

            if (numero <= 3) {
                alert("O NUMERO " + numero + " E MENOR OU IGUAL A TRES");
            }
        },
    },
    {
        name: "Sufixo Pelo Sexo",
        type: "conditional",
        exercise: () => {
            let nome = prompt("DIGITE O NOME: ");
            let sexo = prompt("PREFIXO MASCULINO OU FEMININO? [M / F]");
            let saudacao = "";

            if (sexo.toUpperCase() === "M") {
                saudacao = "SR.";
            } else if (sexo.toUpperCase() === "F") {
                saudacao = "SRA.";
            } else {
                saudacao = "NA.";
            }

            alert("OLA, " + saudacao + " " + nome);
        },
    },
    {
        name: "Valor Absoluto",
        type: "conditional",
        exercise: () => {
            let numero = parseInt(prompt("DIGITE O NUMERO A SER PROCESSADO: "));
            let absoluto;

            if (numero < 0) {
                absoluto = numero * -1;
            } else {
                absoluto = numero;
            }

            alert("NUMERO ABSOLUTO: " + absoluto);
        },
    },
    {
        name: "Extremidades",
        type: "conditional",
        exercise: () => {
            let valores = [];
            let maior, menor;

            for (let contador = 1; contador <= 5; contador++) {
                valores.push(parseFloat(prompt("DIGITE O " + contador + " VALOR: ")));
            }

            maior = valores[0];
            menor = valores[0];

            for (let contador = 1; contador < 5; contador++) {
                if (valores[contador] > maior) {
                    maior = valores[contador];
                } else if (valores[contador] < menor) {
                    menor = valores[contador];
                }
            }

            alert("MAIOR VALOR: " + maior);
            alert("MENOR VALOR: " + menor);
        },
    },
    {
        name: "Faixa Permitida",
        type: "conditional",
        exercise: () => {
            let numero = parseFloat(prompt("DIGITE O NUMERO A SER VERIFICADO: "));

            if (numero < 1 || numero > 9) {
                alert("O NUMERO " + numero + " ESTA FORA DA FAIXA PERMITIDA DE VALORES");
            } else {
                alert("O NUMERO " + numero + " ESTA NA FAIXA PERMITIDA DE VALORES");
            }
        },
    },
    {
        name: "Valores Crescentes",
        type: "conditional",
        exercise: () => {
            let valores = [];

            for (let contador = 1; contador <= 3; contador++) {
                valores.push(parseFloat(prompt("DIGITE O " + contador + " VALOR: ")));
            }

            for (let contador = 1; contador <= 2; contador++) {
                if (valores[contador] > valores[contador + 1]) {
                    let auxiliar = valores[contador];
                    valores[contador] = valores[contador + 1];
                    valores[contador + 1] = auxiliar;
                }
            }

            let resultado = "ORDEM CRESCENTE: ";

            for (let contador = 1; contador <= 3; contador++) {
                if (contador < 3) {
                    resultado += valores[contador] + ", ";
                } else {
                    resultado += valores[contador];
                }
            }

            alert(resultado);
        },
    },

    //

    {
        name: "Leitura de Positivos",
        type: "while",
        exercise: () => {
            let maior = 0;
            let menor = Infinity;
    
            while (true) {
                let leitura = parseFloat(prompt("DIGITE UM NUMERO: "));
                
                if (leitura >= 0) {
                    if (leitura > maior) {
                        maior = leitura;
                    }

                    if (leitura < menor) {
                        menor = leitura;
                    }
                } else {
                    break;
                }
            }
    
            alert("MAIOR NUMERO: " + maior);
            alert("MENOR VALOR: " + menor);
        },
    },
    {
        name: "Multiplos Dez em Celsius",
        type: "while",
        exercise: () => {
            let contador = 1;
            
            while (contador <= 10) {
                let celsius = 10 * contador;
                alert(celsius + " C = " + converteCelsiusParaFahrenheit(celsius) + " F");
                contador++;
            }
        },
    },
    {
        name: "Potenciacao",
        type: "while",
        exercise: () => {
            let exponenciado = parseInt(prompt("DIGITE O VALOR DO EXPONENCIADO: "));
            let expoente = parseInt(prompt("DIGITE O VALOR DO EXPOENTE: "));
            let contador = 1;
            let ultimoValor = 1;
    
            while (contador <= expoente) {
                ultimoValor *= exponenciado;
                alert(exponenciado + "^" + contador + " = " + ultimoValor);
                contador++;
            }
        },
    },
    {
        name: "Potenciacao de 3",
        type: "while",
        exercise: () => {
            let contador = 0;
    
            while (contador <= 15) {
                alert("3^" + contador + " = " + retornaExponenciado(3, contador));
                contador++;
            }
        },
    },
    {
        name: "Sequencia Fibonacci",
        type: "while",
        exercise: () => {
            let termo = 1;
            let atual = 0;
            let posterior = 1;
            let contador = 1;
    
            while (termo <= 15) {
                posterior += atual;
                atual = posterior - atual;
                termo++;
            }
    
            alert("15 TERMO DA SEQUENCIA FIBONACCI: " + atual);
        },
    },
    {
        name: "Soma de Centena",
        type: "while",
        exercise: () => {
            let contador = 1;
            let soma = 0;
    
            while (contador <= 100) {
                soma += contador;
                contador++;
            }
    
            alert("SOMA DOS NUMEROS ENTRE 1 E 100 E: " + soma);
        },
    },
    {
        name: "Soma e Media",
        type: "while",
        exercise: () => {
            let contador = 1;
            let soma = 0;
    
            while (contador <= 10) {
                let valor = parseFloat(prompt("DIGITE O " + contador + " VALOR A SER COMPUTADO: "));
                soma += valor;
                contador++;
            }
    
            alert("SOMATORIA DOS VALORES: " + soma);
            alert("MEDIA ARITMETICA DOS VALORES: " + (soma / 10));
        },
    },
    {
        name: "Soma de Pares",
        type: "while",
        exercise: () => {
            let contador = 1;
            let soma = 0;
    
            while (contador <= 500) {
                soma += retornaPar(contador);
                contador++;
            }
    
            alert("SOMA DOS NUMEROS PARES ENTRE 1 E 500 E: " + soma);
        },
    },
    {
        name: "Somente Impares",
        type: "while",
        exercise: () => {
            let contador = 0;
    
            while (contador <= 20) {
                if (verificaImpar(contador)) {
                    alert("O NUMERO " + contador + " E IMPAR");
                }
                contador++;
            }
        },
    },
    {
        name: "Tabuada do Dez",
        type: "while",
        exercise: () => {
            let valorTabuada = parseInt(prompt("DIGITE O NUMERO DE BASE DA TABUADA: "));
            let contador = 1;
    
            while (contador <= 10) {
                alert(valorTabuada + " X " + contador + " = " + (valorTabuada * contador));
                contador++;
            }
        },
    },

    //

    {
        name: "Calculo da Divisao",
        type: "dowhile",
        exercise: () => {
            let dividendo = parseInt(prompt("DIGITE O NUMERO DIVIDENDO: "));
            let divisor = parseInt(prompt("DIGITE O NUMERO DIVISOR: "));
            let saida = 0;
    
            do {
                dividendo -= divisor;
                saida++;
            } while (dividendo >= divisor);
    
            alert(dividendo + " / " + divisor + " = " + saida);
        },
    },
    {
        name: "Contador de 15 ate 200",
        type: "dowhile",
        exercise: () => {
            let contador = 15;
    
            do {
                alert("O QUADRADO DO NUMERO " + contador + " E: " + (contador * contador));
                contador++;
            } while (contador <= 200);
        },
    },
    {
        name: "Divisiveis por 4",
        type: "dowhile",
        exercise: () => {
            let contador = 1;
    
            do {
                if (contador % 4 === 0) {
                    alert("O NUMERO " + contador + " E POR QUATRO");
                }
                contador++;
            } while (contador <= 200);
        },
    },
    {
        name: "Leitura Sucessiva",
        type: "dowhile",
        exercise: () => {
            let contador = 0;
            let numero = 0;
            let soma = 0;
    
            do {
                contador++;
                soma += numero;
                numero = parseFloat(prompt("DIGITE O " + contador + " NUMERO A SER PROCESSADO: "));
            } while (numero > 0);
    
            alert("SOMATORIO: " + soma + " | MEDIA ARITMETICA: " + (soma / (contador - 1)) + " | LEITURAS: " + (contador - 1));
        },
    },
    {
        name: "Sequencia Fatorial",
        type: "dowhile",
        exercise: () => {
            let valores = [];
            let fatoriais = [];
    
            let contador = 1;
    
            do {
                let valor = parseInt(prompt("DIGITE O " + contador + " NUMERO A SER PROCESSADO: "));
                valores.push(valor);
                fatoriais.push(calculaFatorial(valor));
                contador++;
            } while (contador <= 15);
    
            for (let i = 0; i < 15; i++) {
                alert("O FATORIAL DE " + valores[i] + " E " + fatoriais[i]);
            }
        },
    },
    {
        name: "Sequencia Fatorial Impar",
        type: "dowhile",
        exercise: () => {
            let contador = 1;
    
            do {
                if (verificaImpar(contador)) {
                    alert("O NUMERO " + contador + " E IMPAR E SEU FATORIAL E: " + calculaFatorial(contador));
                }
                contador++;
            } while (contador <= 10);
        },
    },
    {
        name: "Somatorio de Graos",
        type: "dowhile",
        exercise: () => {
            let contador = 1;
            let graos = 1;
            let soma = 0;
    
            do {
                graos *= 2;
                soma += graos;
                contador++;
            } while (contador <= 64);
    
            alert("SOMATORIO DE GRAOS: " + soma);
        },
    },
    {
        name: "Somatorio de Pares",
        type: "dowhile",
        exercise: () => {
            let contador = 1;
            let soma = 0;
    
            do {
                if (verificaPar(contador)) {
                    soma += contador;
                }
                contador++;
            } while (contador <= 500);
    
            alert("SOMATORIO DE VALORES PARES ENTRE 1 E 500: " + soma);
        },
    },
    {
        name: "Somente Positivos",
        type: "dowhile",
        exercise: () => {
            let valorEntrada = 0;
            let maior = 0;
            let menor = Infinity;
    
            do {
                valorEntrada = parseInt(prompt("DIGITE UM NUMERO A SER PROCESSADO: "));
                
                if (valorEntrada >= 0) {
                    if (valorEntrada > maior) {
                        maior = valorEntrada;
                    }
                    if (valorEntrada < menor) {
                        menor = valorEntrada;
                    }
                }
            } while (valorEntrada >= 0);
    
            alert("MAIOR VALOR: " + maior);
            alert("MENOR VALOR: " + menor);
        },
    },

    //

    {
        name: "Contador 15 ate 200",
        type: "for",
        exercise: () => {
            alert("ACESSE O CONSOLE")

            for (let contador = 15; contador <= 200; contador++) {
                console.log("O QUADRADO DO NUMERO " + contador + " E: " + (contador * contador));
            }
        },
    },
    {
        name: "Divisiveis Por 4",
        type: "for",
        exercise: () => {
            alert("ACESSE O CONSOLE")

            for (let contador = 1; contador <= 200; contador++) {
                if (contador % 4 === 0) {
                    console.log("O NUMERO " + contador + " E POR QUATRO");
                }
            }
        },
    },
    {
        name: "Multiplos de Dez em Celsius",
        type: "for",
        exercise: () => {
            alert("ACESSE O CONSOLE")

            for (let contador = 1; contador <= 10; contador++) {
                console.log(contador * 10 + " C = " + converteCelsiusParaFahrenheit(contador * 10) + " F");
            }
        },
    },
    {
        name: "Potenciacao",
        type: "for",
        exercise: () => {
            const exponenciado = parseInt(prompt("DIGITE O VALOR DO EXPONENCIADO: "));
            const expoente = parseInt(prompt("DIGITE O VALOR DO EXPOENTE: "));
    
            let ultimoValor = 1;

            alert("ACESSE O CONSOLE")
    
            for (let contador = 1; contador <= expoente; contador++) {
                ultimoValor *= exponenciado;
                console.log(exponenciado + "^" + contador + " = " + ultimoValor);
            }
        },
    },
    {
        name: "Potenciacao de 3",
        type: "for",
        exercise: () => {
            alert("ACESSE O CONSOLE")

            for (let contador = 0; contador <= 15; contador++) {
                console.log("3^" + contador + " = " + retornaExponenciado(3, contador));
            }
        },
    },
    {
        name: "Sequencia Fatorial Impar",
        type: "for",
        exercise: () => {
            for (let contador = 1; contador <= 10; contador++) {
                if (verificaImpar(contador)) {
                    console.log("O NUMERO " + contador + " E IMPAR E SEU FATORIAL E: " + calculaFatorial(contador));
                }
            }
        },
    },
    {
        name: "Sequencia Fibonacci",
        type: "for",
        exercise: () => {
            let atual = 0;
            let posterior = 1;
    
            for (let i = 2; i <= 15; i++) {
                posterior = posterior + atual;
                atual = posterior - atual;
            }
    
            alert("ACESSE O CONSOLE")

            console.log("15 TERMO DA SEQUENCIA FIBONACCI: " + atual);
        },
    },
    {
        name: "Soma de Centena",
        type: "for",
        exercise: () => {
            let soma = 0;
    
            for (let contador = 1; contador <= 100; contador++) {
                soma += contador;
            }

            alert("ACESSE O CONSOLE")
    
            console.log("SOMA DOS NUMEROS ENTRE 1 E 100 E: " + soma);
        },
    },
    {
        name: "Soma de Pares",
        type: "for",
        exercise: () => {
            let soma = 0;
    
            for (let contador = 1; contador <= 500; contador++) {
                soma += retornaPar(contador);
            }

            alert("ACESSE O CONSOLE")
    
            console.log("SOMA DOS NUMEROS PARES ENTRE 1 E 500 E: " + soma);
        },
    },
    {
        name: "Somente Impares",
        type: "for",
        exercise: () => {
            alert("ACESSE O CONSOLE")

            for (let contador = 0; contador <= 20; contador++) {
                if (verificaImpar(contador)) {
                    console.log("O NUMERO " + contador + " E IMPAR");
                }
            }
        },
    },
    {
        name: "Tabuada do Dez",
        type: "for",
        exercise: () => {
            const valorTabuada = parseInt(prompt("DIGITE O NUMERO DE BASE DA TABUADA: "));
    
            alert("ACESSE O CONSOLE")
            
            for (let contador = 1; contador <= 10; contador++) {
                console.log(valorTabuada + " X " + contador + " = " + (valorTabuada * contador));
            }
        },
    },    
]