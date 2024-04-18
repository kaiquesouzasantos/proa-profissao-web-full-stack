package basico;

import java.util.Scanner;

public class CelsiusParaFahrenheit {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        exibeTexto("DIGITE A TEMPERATURA EM CELSIUS: ");
        double temperaturaCelsius = entrada.nextDouble();

        exibeTexto(
                "TEMPERATURA EM FAHRENHEIT: " + converteCelsiusParaFahrenheit(temperaturaCelsius)
        );
    }

    private static double converteCelsiusParaFahrenheit(double celsius) {
        return ((9 * celsius) + 160) / 5;
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
