package desafios.basico;

import java.util.Scanner;

public class IntervaloDezena {
    /*
        Escreva um programa que leia um número e verifique se ele está no intervalo de 10 a 20 (inclusive).
    */

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
