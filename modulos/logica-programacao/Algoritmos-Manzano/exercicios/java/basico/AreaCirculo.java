package basico;

import java.util.Scanner;

public class AreaCirculo {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        exibeTexto("DIGITE O RAIO DA CIRCUNFERENCIA: ");
        double raio = entrada.nextDouble();

        exibeTexto("AREA DA CIRCUNFERENCIA: " + retornaArea(raio));
    }

    private static double retornaArea(double raio) {
        return ((raio * raio) * 3.14);
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
