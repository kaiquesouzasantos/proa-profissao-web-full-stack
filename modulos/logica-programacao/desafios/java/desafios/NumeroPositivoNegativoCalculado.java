package desafios;

import java.util.Scanner;

public class NumeroPositivoNegativoCalculado {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        exibeTexto("DIGITE UM NUMERO A SER PROCESSADO: ");
        double numero = entrada.nextDouble();

        exibeTexto(String.format("RESULTANTE: %.2f", calculaNumero(numero)));
    }

    private static double calculaNumero(double numero) {
        return (numero > 0) ? (Math.sqrt(numero)) : (Math.pow(numero, 2));
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}