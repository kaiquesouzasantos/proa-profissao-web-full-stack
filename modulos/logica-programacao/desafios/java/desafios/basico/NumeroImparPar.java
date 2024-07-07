package desafios.basico;

import java.util.Scanner;

public class NumeroImparPar {
    /*
        Escreva um programa que leia um número inteiro e informe se ele é par ou ímpar.
    */

    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        exibeTexto("DIGITE O NUMERO A SER PROCESSADO: ");
        int numero = entrada.nextInt();

        exibeTexto("O NUMERO " + numero + " E " + ((verificaPar(numero)) ? "PAR" : "IMPAR"));
    }

    private static boolean verificaPar(int numero) {
        return numero % 2 == 0;
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
