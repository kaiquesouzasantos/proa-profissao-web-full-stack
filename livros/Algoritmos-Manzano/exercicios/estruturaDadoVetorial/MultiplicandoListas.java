package estruturaDadoVetorial;

import java.util.Arrays;

public class MultiplicandoListas {
    public static void main(String[] args) {
        int[] listaA = {1,2,3,4,5,6,7,8};
        int[] listaB = new int[8];

        for(int contador = 0; contador < 8; contador++) {
            listaB[contador] = (listaA[contador] * 3);
        }
        
        exibeTexto("LISTA A: " + Arrays.toString(listaA));
        exibeTexto("LISTA B: " + Arrays.toString(listaB));
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
