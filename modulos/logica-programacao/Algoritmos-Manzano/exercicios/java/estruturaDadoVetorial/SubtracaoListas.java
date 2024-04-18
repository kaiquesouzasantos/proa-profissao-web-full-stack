package estruturaDadoVetorial;

import java.util.Random;

public class SubtracaoListas {
    public static void main(String[] args) {
        int limite = 20;

        int[] listaA = retornaLista(limite);
        int[] listaB = retornaLista(limite);
        int[] listaC = new int[limite];

        for(int contador = 0; contador < limite; contador++) {
            listaC[contador] = (listaA[contador] - listaB[contador]);
            exibeTexto(listaA[contador] + " - " + listaB[contador] + " = " + listaC[contador]);
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
