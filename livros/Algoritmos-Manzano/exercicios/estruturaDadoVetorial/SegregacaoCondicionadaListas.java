package estruturaDadoVetorial;

import java.util.Arrays;
import java.util.Scanner;

public class SegregacaoCondicionadaListas {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        int quantidadeItens = 12, contador = 0, contadorA = 0, contadorB = 0;

        int[] listaA = new int[quantidadeItens];
        int[] listaB = new int[quantidadeItens];

        while (contadorA < quantidadeItens || contadorB < quantidadeItens) {
            exibeTexto("DIGITE O " + (contador + 1) + " A SER PROCESSADO: ");
            int numero = entrada.nextInt();

            if (verificaDisiviel(numero, 2) && verificaDisiviel(numero, 3) && contadorA < quantidadeItens) {
                listaA[contadorA] = numero;
                contadorA++;
            }

            if (verificaDisiviel(numero, 5)  && contadorB < quantidadeItens) {
                listaB[contadorB] = numero;
                contadorB++;
            }

            contador++;
        }

        exibeTexto("LISTA A: " + Arrays.toString(listaA));
        exibeTexto("LISTA B: " + Arrays.toString(listaB));
    }

    private static boolean verificaDisiviel(double numero, int divisor) {
        return numero % divisor == 0;
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
