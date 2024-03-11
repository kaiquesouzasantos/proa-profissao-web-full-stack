package estruturaRepeticaoDoWhile;

public class SomatorioPares {
    public static void main(String[] args) {
        int contador = 1, soma = 0;

        do {
            if (verificaPar(contador))
                soma += contador;

            contador++;
        } while (contador <= 500);

        exibeTexto("SOMATORIO DE VALORES PARES ENTRE 1 E 500: " + soma);
    }

    private static boolean verificaPar(int numero) {
        return numero % 2 == 0;
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
