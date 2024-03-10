package estruturaRepeticaoWhile;

import java.util.Scanner;

public class SomaMediaDezValores {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        int contador = 1;
        double soma = 0;

        while (contador <= 10) {
            exibeTexto("DIGITE O " + contador + " VALOR A SER COMPUTADO: ");
            soma += entrada.nextDouble();

            contador++;
        }

        exibeTexto("SOMATORIA DOS VALORES: " + soma);
        exibeTexto("MEDIA ARITMETICA DOS VALORES: " + (soma / contador));
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
