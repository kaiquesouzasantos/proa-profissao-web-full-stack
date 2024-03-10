package basico;

import java.util.Scanner;

public class FahrenheitParaCelsius {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        exibeTexto("DIGITE A TEMPERATURA EM FAHRENHEIT: ");
        double temperaturaFahrenheit = entrada.nextDouble();

        exibeTexto(
                "TEMPERATURA EM CELSIUS: " + converteFahrenheitParaCelsius(temperaturaFahrenheit)
        );
    }

    private static double converteFahrenheitParaCelsius(double fahrenheit) {
        return ((fahrenheit - 32) * 5) / 9;
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
