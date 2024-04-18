package basico;

import java.util.Scanner;

public class Exercicio_08 {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        int total, branco, nulo, valido;

        exibeTexto("DIGITE O TOTAL DE ELEITORES: ");
        total = entrada.nextInt();

        exibeTexto("DIGITE O NUMERO DE VOTOS BRANCOS: ");
        branco = entrada.nextInt();

        exibeTexto("DIGITE O NUMERO DE VOTOS NULOS: ");
        nulo = entrada.nextInt();

        exibeTexto("DIGITE O NUMERO DE VOTOS VALIDOS: ");
        valido = entrada.nextInt();

        exibeTexto("PERCENTUAL BRANCO: " + calculaPorcentagem(branco, total) + "%");
        exibeTexto("PERCENTUAL NULO: " + calculaPorcentagem(nulo, total) + "%");
        exibeTexto("PERCENTUAL VALIDO: " + calculaPorcentagem(valido, total) + "%");
    }

    private static double calculaPorcentagem(int valor, int total) {
        return (total/100) * valor;
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
