package estruturaRepeticaoDoWhile;

public class DivisiveisQuatro {
    public static void main(String[] args) {
        int contador = 1;

        do {
            if (contador % 4 == 0)
                exibeTexto("O NUMERO " + contador + " E POR QUATRO");

            contador++;
        } while (contador <= 200);
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
