package basico;

import java.util.Locale;
import java.util.Scanner;

public class DolarParaReal {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        exibeTexto("DIGITE O VALOR OBTIDO EM DOLAR: U$ ");
        double quantidadeDolar = entrada.nextDouble();

        exibeTexto("DIGITE O VALOR DA COTACAO ATUAL PARA O REAL: R$ ");
        double cotacao = entrada.nextDouble();

        exibeTexto("ADJACENCIA DA CONVERSAO EM REAIS: R$ " + converteDolarParaReal(
                quantidadeDolar, cotacao
        ));
    }

    private static double converteDolarParaReal(double quantidadeDolar, double cotacao) {
        return quantidadeDolar * cotacao;
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
