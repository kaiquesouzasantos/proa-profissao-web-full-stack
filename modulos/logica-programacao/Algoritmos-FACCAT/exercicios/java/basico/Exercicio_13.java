package basico;

import java.util.Scanner;

public class Exercicio_13 {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        double notaUm, notaDois, notaTres;

        exibeTexto("DIGITE A 1 NOTA: ");
        notaUm = entrada.nextDouble();

        exibeTexto("DIGITE A 2 NOTA: ");
        notaDois = entrada.nextDouble();

        exibeTexto("DIGITE A 3 NOTA: ");
        notaTres = entrada.nextDouble();

        exibeTexto(
                "MEDIA FINAL: " + calculaMediaPonderada(notaUm, notaDois, notaTres)
        );
    }

    private static double calculaMediaPonderada(double notaUm, double notaDois, double notaTres) {
        return ((notaUm * 2) + (notaDois * 3) + (notaTres * 5)) / 10;
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
