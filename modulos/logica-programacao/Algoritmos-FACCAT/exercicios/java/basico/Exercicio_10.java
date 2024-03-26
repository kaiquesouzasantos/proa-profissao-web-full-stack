package basico;

import java.util.Scanner;

public class Exercicio_10 {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        double custoFabrica, custoImposto, custoDistribuidor;

        exibeTexto("DIGITE O VALOR DE FABRICA: R$");
        custoFabrica = entrada.nextDouble();

        custoImposto = aplicaCusto(custoFabrica, 45);
        custoDistribuidor = aplicaCusto(custoFabrica, 18);

        exibeTexto("VALOR PARA O CONSUMIDOR: R$" + (custoFabrica + custoImposto + custoDistribuidor));
    }

    private static double aplicaCusto(double custo, double percentualReajuste) {
        return (custo/100) * percentualReajuste;
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
