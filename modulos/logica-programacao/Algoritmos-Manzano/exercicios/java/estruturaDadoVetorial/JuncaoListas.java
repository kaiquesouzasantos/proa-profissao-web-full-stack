package estruturaDadoVetorial;

import java.util.Arrays;
import java.util.Random;

public class JuncaoListas {
    public static void main(String[] args) {
        int quantidadeItens = 15;

        int[] listaA = retornaLista(quantidadeItens);
        int[] listaB = retornaLista(quantidadeItens);
        int[] listaC = new int[quantidadeItens * 2];

        for (int contador = 0; contador < quantidadeItens; contador++) {
            listaC[contador] = listaA[contador];
        }

        for (int contador = quantidadeItens, contadorListaB = 0; contador < (quantidadeItens * 2); contador++, contadorListaB++) {
            listaC[contador] = listaB[contadorListaB];
        }

        exibeTexto("LISTA A: " + Arrays.toString(listaA));
        exibeTexto("LISTA B: " + Arrays.toString(listaB));
        exibeTexto("LISTA RESULTANTE: " + Arrays.toString(listaC));
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
