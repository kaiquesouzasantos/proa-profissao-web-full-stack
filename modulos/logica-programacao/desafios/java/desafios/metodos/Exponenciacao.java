package desafios.metodos;

import java.util.Scanner;

public class Exponenciacao {
    /*
        Crie uma função que calcule a potência de um número inteiro base elevado a um expoente inteiro positivo.
    */

    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        exibeTexto("DIGITE UM NUMERO A SER EXPONENCIADO [BASE]: ");
        double base = entrada.nextDouble();

        exibeTexto("DIGITE O SEU EXPOENTE: ");
        double expoente = entrada.nextDouble();

        exibeTexto("RESULTANTE: " + exponencia(base, expoente));
    }

    private static double exponencia(double base, double expoente) {
        return Math.pow(base, expoente);
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
