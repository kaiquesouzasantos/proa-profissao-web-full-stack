package desafios;

import java.util.Scanner;

public class IntervaloDezena {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        exibeTexto("DIGITE UM NUMERO A SER PROCESSADO: ");
        int numero = entrada.nextInt();

        exibeTexto(
                "O NUMERO [" + numero + "]" + (!verificaIntervalo(numero) ? " NAO" : "") + " ESTA RETIDO NO INTERVALO"
        );
    }

    public static boolean verificaIntervalo(int numero) {
        return numero >= 10 && numero <= 20;
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
