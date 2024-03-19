package basico;

import java.util.Scanner;

public class RealParaDolar {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        exibeTexto("DIGITE O VALOR OBTIDO EM REAL: R$ ");
        double quantidadeReal = entrada.nextDouble();

        exibeTexto("DIGITE O VALOR DA COTACAO ATUAL PARA O DOLAR: U$ ");
        double cotacao = entrada.nextDouble();

        exibeTexto("ADJACENCIA DA CONVERSAO EM DOLARES: U$ " + converteRealParaDolar(
                quantidadeReal, cotacao
        ));
    }

    private static double converteRealParaDolar(double quantidadeReal, double cotacao) {
        return quantidadeReal * cotacao;
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
