package basico;

import java.util.Scanner;

public class VolumeLataOleo {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        exibeTexto("DIGITE O RAIO DA LATA DE OLEO: ");
        double raio = entrada.nextDouble();

        exibeTexto("DIGITE A ALTURA DA LATA DE OLEO: ");
        double altura = entrada.nextDouble();

        exibeTexto("VOLUME TOTAL: " + calculaVolume(raio, altura) + " UN^3");
    }

    private static double calculaVolume(double raio, double altura) {
        return (3.14 * (raio * raio) * altura);
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
