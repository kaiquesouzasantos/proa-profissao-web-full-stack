package estruturaRepeticaoWhile;

public class SomenteImapes {
    public static void main(String[] args) {
        int contador = 0;

        while (contador <= 20) {
            if (verificaImpar(contador))
                exibeTexto("O NUMERO " + contador +" E IMPAR");
            contador++;
        }
    }

    private static boolean verificaImpar(int numero) {
        return numero % 2 != 0;
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
