package estruturaDadoVetorial;

import java.util.Arrays;
import java.util.Scanner;

public class SegregacaoListas {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        int quantidadeItens = 6;

        int[] listaA = new int[quantidadeItens];
        int[] listaB = new int[quantidadeItens];

        for (int contador = 0, contadorA = 0, contadorB = 0; contador < (quantidadeItens * 2); contador++) {
            exibeTexto("DIGITE O " + (contador + 1) + " A SER PROCESSADO: ");
            int numero = entrada.nextInt();

            if (verificaPar(numero) && contadorA < quantidadeItens) {
                listaA[contadorA] = numero;
                contadorA++;
            } else if (contadorB < quantidadeItens) {
                listaB[contadorB] = numero;
                contadorB++;
            }
        }

        exibeTexto("LISTA A: " + Arrays.toString(listaA));
        exibeTexto("LISTA B: " + Arrays.toString(listaB));
    }

    private static boolean verificaPar(double numero) {
        return numero % 2 == 0;
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
