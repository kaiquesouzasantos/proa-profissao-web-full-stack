package estruturaDadoVetorial;

import java.util.Arrays;
import java.util.Random;

public class ListaMutacaoCondicional {
    public static void main(String[] args) {
        int quantidadeItens = 15;

        double[] listaA = retornaLista(quantidadeItens);
        double[] listaB = new double[quantidadeItens];

        for(int contador = 0; contador < quantidadeItens; contador++) {
            if (verificaPar(contador))
                listaB[contador] = (listaA[contador] / 2);
            else
                listaB[contador] = (listaA[contador] * 1.5);
        }

        exibeTexto("LISTA A: " + Arrays.toString(listaA));
        exibeTexto("LISTA RESULTANTE: " + Arrays.toString(listaB));
    }

    private static boolean verificaPar(double numero) {
        return numero % 2 == 0;
    }

    private static double[] retornaLista(int limite) {
        double[] lista = new double[limite];

        for (int contador = 0; contador < limite; contador++)
            lista[contador] = retornaNumeroAleatorio();

        return lista;
    }

    private static double retornaNumeroAleatorio() {
        return new Random().nextInt(100);
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
