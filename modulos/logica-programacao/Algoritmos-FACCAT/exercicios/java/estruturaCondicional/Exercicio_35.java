package estruturaCondicional;

import java.util.Scanner;

public class Exercicio_35 {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        double descontoLitro, precoLitro;

        exibeTexto("DIGITE A QUANTIDADE EM LITROS: ");
        int litros = entrada.nextInt();

        exibeTexto("DIGITE O TIPO DO COMBUSTIVEL [A/G]: ");
        String tipoCombustivel = entrada.next();

        if(tipoCombustivel.equalsIgnoreCase("A")) {
            precoLitro = 2.9;
            descontoLitro = (litros > 20) ?
                    calculaDesconto(litros, precoLitro, 5) : calculaDesconto(litros, precoLitro, 3);
        } else {
            precoLitro = 3.3;
            descontoLitro = (litros > 20) ?
                    calculaDesconto(litros, precoLitro, 6) : calculaDesconto(litros, precoLitro, 4);
        }

        exibeTexto("VALOR A SER PAGO PELOS" + litros + "L DE " + tipoCombustivel + ": R$" + calculaPagamento(litros, precoLitro, descontoLitro));
    }

    private static double calculaDesconto(int litros, double precoLitro, int porcentagem) {
        return litros * precoLitro * (porcentagem/100);
    }

    private static double calculaPagamento(int litros, double precoLitro, double descontoLitro) {
        return (litros * precoLitro) - descontoLitro;
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
