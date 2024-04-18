package estruturaDadoVetorial;

public class LeituraDezElementos {
    public static void main(String[] args) {
        int[] valores = {1,2,3,4,5,6,7,8,9,10};

        for(int valor : valores)
            exibeTexto("NUMERO: " + valor);
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
