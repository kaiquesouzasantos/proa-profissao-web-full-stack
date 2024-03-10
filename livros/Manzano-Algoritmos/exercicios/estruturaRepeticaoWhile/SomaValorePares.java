package estruturaRepeticaoWhile;

public class SomaValorePares {
    public static void main(String[] args) {
        int contador = 1, soma = 0;

        while (contador <= 500) {
            soma += retornaPar(contador);
            contador++;
        }

        exibeTexto("SOMA DOS NUMEROS PARES ENTRE 1 E 500 E: " + soma);
    }

    private static int retornaPar(int numero) {
        return numero % 2 == 0 ? numero : 0;
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
