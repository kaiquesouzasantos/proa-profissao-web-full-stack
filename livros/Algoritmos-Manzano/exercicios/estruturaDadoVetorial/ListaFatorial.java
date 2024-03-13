package estruturaDadoVetorial;

import java.util.Arrays;
import java.util.Random;

public class ListaFatorial {
    public static void main(String[] args) {
        int quantidadeItens = 15;

        int[] listaA = retornaLista(quantidadeItens);
        int[] listaB = new int[quantidadeItens];

        for (int contador = 0; contador < quantidadeItens; contador++) {
            listaB[contador] = calculaFatorial(listaA[contador]);
        }

        exibeTexto("LISTA A: " + Arrays.toString(listaA));
        exibeTexto("LISTA B: " + Arrays.toString(listaB));
    }

    private static int calculaFatorial(int numero) {
        int saida = 1;

        for (;numero >= 1; numero--) {
            saida *= numero;
        }

        return saida;
    }

    private static int[] retornaLista(int limite) {
        int[] lista = new int[limite];

        for (int contador = 0; contador < limite; contador++)
            lista[contador] = retornaNumeroAleatorio();

        return lista;
    }

    private static int retornaNumeroAleatorio() {
        return new Random().nextInt(20);
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
