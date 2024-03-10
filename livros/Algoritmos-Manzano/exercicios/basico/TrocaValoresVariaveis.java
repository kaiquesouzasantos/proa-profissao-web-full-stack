package basico;

import java.util.Scanner;

public class TrocaValoresVariaveis {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        int auxiliar, valorA, valorB;

        exibeTexto("DIGITE O VALOR A: ");
        auxiliar = valorA = entrada.nextInt();

        exibeTexto("DIGITE O VALOR B: ");
        valorA = valorB = entrada.nextInt();

        valorB = auxiliar;

        exibeTexto("VALOR A (ATUAL): " + valorA + " | VALOR B (ATUAL): " + valorB);
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
