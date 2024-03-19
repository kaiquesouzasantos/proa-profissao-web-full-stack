package estruturaDadoVetorial;

import java.util.Arrays;
import java.util.Random;

public class JuncaoListasMultiplas {
    public static void main(String[] args) {
        int quantidadeItens = 5;

        int[] listaA = retornaLista(quantidadeItens);
        int[] listaB = retornaLista(quantidadeItens);
        int[] listaC = retornaLista(quantidadeItens);
        int[] listaD = new int[quantidadeItens * 3];

        for (int contadorListaMaior = 0, contadorListaMenor = 0; contadorListaMaior < (quantidadeItens * 3); contadorListaMaior++, contadorListaMenor++) {
            if (contadorListaMaior < quantidadeItens)
                listaD[contadorListaMaior] = listaA[contadorListaMenor];
            else if (contadorListaMaior < quantidadeItens * 2)
                listaD[contadorListaMaior] = listaB[contadorListaMenor];
            else
                listaD[contadorListaMaior] = listaC[contadorListaMenor];


            // ao passar pelo loop condicional, o contador da lista e incrementado, entao o -1 se torna 0.
            if (contadorListaMenor == 4)
                contadorListaMenor = -1;
        }

        exibeTexto("LISTA A: " + Arrays.toString(listaA));
        exibeTexto("LISTA B: " + Arrays.toString(listaB));
        exibeTexto("LISTA C: " + Arrays.toString(listaC));
        exibeTexto("LISTA RESULTANTE: " + Arrays.toString(listaD));
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
