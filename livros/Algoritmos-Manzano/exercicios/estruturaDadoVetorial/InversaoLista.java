package estruturaDadoVetorial;

import java.util.Arrays;
import java.util.Random;

public class InversaoLista {
    public static void main(String[] args) {
        int quantidadeItens = 20;

        int[] listaA = retornaLista(quantidadeItens);
        int[] listaB = new int[quantidadeItens];

        for (int contador = (quantidadeItens - 1), contadorListaB = 0; contador >= 0; contador--, contadorListaB++) {
            listaB[contadorListaB] = listaA[contador];
        }

        exibeTexto("LISTA A: " + Arrays.toString(listaA));
        exibeTexto("LISTA B: " + Arrays.toString(listaB));
    }

    private static int[] retornaLista(int limite) {
        int[] lista = new int[limite];

        for (int contador = 0; contador < limite; contador++)
            lista[contador] = retornaNumeroAleatorio();

        return lista;
    }

    private static int retornaNumeroAleatorio() {
        return new Random().nextInt(100);
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
