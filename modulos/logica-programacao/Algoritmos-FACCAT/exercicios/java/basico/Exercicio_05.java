package basico;

import java.util.Scanner;

public class Exercicio_05 {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        exibeTexto("DIGITE UM VALOR: ");
        int valor = entrada.nextInt();

        exibeTexto("ANTECESSOR: " + (valor-1));
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
