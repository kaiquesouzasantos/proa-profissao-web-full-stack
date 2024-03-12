package estruturaDadoVetorial;

import java.util.Arrays;
import java.util.Random;

public class JuncaoListasMaiores {
    public static void main(String[] args) {
        int[] listaA = retornaLista(20);
        int[] listaB = retornaLista(30);
        int[] listaC = new int[50];

        for (int contador = 0; contador < 20; contador++) {
            listaC[contador] = listaA[contador];
        }

        for (int contador = 20, contadorListaB = 0; contador < 50; contador++, contadorListaB++) {
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
