package basico;

import java.util.Scanner;

public class DiferencaValoresQuadraticos {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        exibeTexto("DIGITE O VALOR A: ");
        int valorA = entrada.nextInt();

        exibeTexto("DIGITE O VALOR B: ");
        int valorB = entrada.nextInt();

        exibeTexto("DIFERENCA DOS QUADRATICOS: " + calculaDiferenca(valorA, valorB));
    }

    private static double calculaDiferenca(int valorA, int valorB) {
        return (valorA * valorA) - (valorB * valorB);
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
