package estrututraCondicional;

import java.util.Scanner;

public class ValoresFaixaPermitida {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        exibeTexto("DIGITE O NUMERO A SER VERIFICADO: ");
        double numero = entrada.nextDouble();

        if (numero < 1 || numero > 9)
            exibeTexto("O NUMERO " + numero + " ESTA FORA DA FAIXA PERMITIDA DE VALORES");
        else
            exibeTexto("O NUMERO " + numero + " ESTA NA FAIXA PERMITIDA DE VALORES");
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
