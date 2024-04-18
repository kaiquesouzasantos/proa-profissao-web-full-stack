package estruturaRepeticaoComAcumuladores;

import java.util.Scanner;

public class Exercicio_63 {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        int somaEntrada = 0;

        for (int contador = 1; contador <= 10; contador++) {
            exibeTexto("DIGITE O " + contador + " NUMERO: ");
            somaEntrada += entrada.nextInt();
        }

        exibeTexto("SOMATORIA RESULTANTE: " + somaEntrada);
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
