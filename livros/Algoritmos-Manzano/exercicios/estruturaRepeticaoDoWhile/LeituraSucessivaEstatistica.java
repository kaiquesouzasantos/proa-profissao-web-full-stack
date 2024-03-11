package estruturaRepeticaoDoWhile;

import java.util.Scanner;

public class LeituraSucessivaEstatistica {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        int contador = 0;
        double numero = 0, soma = 0;

        do {
            contador++;
            soma += numero;

            exibeTexto("DIGITE O " + contador + " NUMERO A SER PROCESSADO: ");
            numero = entrada.nextDouble();
        } while (numero > 0);

        exibeTexto(
                "SOMATORIO: " + soma + " | MEDIA ARITMETICA: " + calculaMedia(soma, contador - 1) + " | LEITURAS: " + contador
        );
    }

    private static double calculaMedia(double soma, int leituras) {
        if (leituras == 0)
            return 0.0;

        return soma / leituras;
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }

}
