package estrututraCondicional;

import java.util.Scanner;

public class ValorAbsoluto {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        exibeTexto("DIGITE O NUMERO A SER PROCESSADO: ");
        int numero = entrada.nextInt();

        exibeTexto("NUMERO ABSOLUTO: " + retornaAbsoluto(numero));
    }

    private static int retornaAbsoluto(int numero) {
        if (numero < 0)
            return numero * -1;
        return numero;
    }

    /* ALTERNATIVA

    private static int retornaAbsoluto(int numero) {
        return Math.abs(numero);
    }
    */

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
