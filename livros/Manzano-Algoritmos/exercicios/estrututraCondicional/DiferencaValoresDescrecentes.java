package estrututraCondicional;

import java.util.List;
import java.util.Scanner;

public class DiferencaValoresDescrecentes {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        exibeTexto("DIGITE O PRIMEIRO VALOR: ");
        int valorA = entrada.nextInt();

        exibeTexto("DIGITE O SEGUNDO VALOR: ");
        int valorB = entrada.nextInt();

        exibeTexto("A DIFERENCA DO MAIOR VALOR PELO MENOR E: " + calculaDiferenca(valorA, valorB));
    }

    private static int calculaDiferenca(int valorA, int valorB) {
        var ordenacao = List.of(valorA, valorB).reversed();
        return ordenacao.getFirst() - ordenacao.getLast();
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
