package estruturaRepeticaoFor;

public class SomenteImapes {
    public static void main(String[] args) {
        for (int contador = 0; contador <= 20; contador++) {
            if (verificaImpar(contador))
                exibeTexto("O NUMERO " + contador +" E IMPAR");
        }
    }

    private static boolean verificaImpar(int numero) {
        return numero % 2 != 0;
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
