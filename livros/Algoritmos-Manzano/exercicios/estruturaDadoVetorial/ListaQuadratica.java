package estruturaDadoVetorial;

import java.util.Random;

public class ListaQuadratica {
    public static void main(String[] args) {
        int limite = 15;

        int[] listaA = retornaLista(limite);
        int[] listaB = new int[limite];

        for(int contador = 0; contador < limite; contador++) {
            listaB[contador] = (listaA[contador] * listaA[contador]);
            exibeTexto(listaA[contador] + " ^ 2 = " + listaB[contador]);
        }
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
