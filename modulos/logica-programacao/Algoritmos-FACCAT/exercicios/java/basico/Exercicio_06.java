package basico;

import java.util.Scanner;

public class Exercicio_06 {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        exibeTexto("DIGITE A DIMENSAO DA BASE: ");
        int base = entrada.nextInt();

        exibeTexto("DIGITE A DIMENSAO DA ALTURA: ");
        int altura = entrada.nextInt();

        exibeTexto("AREA: " + (base * altura));
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
