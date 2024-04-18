package basico;

import java.util.Scanner;

public class Exercicio_12 {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        exibeTexto("DIGITE A TEMPERATURA EM [F]: ");
        double farenheit = entrada.nextInt();

        exibeTexto("TEMPERATURA EM CELSIUS: " +  converteFarenheitCelsius(farenheit));
    }

    private static double converteFarenheitCelsius(double farenheit) {
        return ((farenheit - 32) * 5) / 9;
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
