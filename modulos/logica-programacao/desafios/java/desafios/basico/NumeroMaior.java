package desafios.basico;

import java.util.Scanner;

public class NumeroMaior {
    /*
        Escreva um programa que leia dois números inteiros e informe qual deles é o maior.
    */

    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        int valorA, valorB;

        exibeTexto("DIGITE O PRIMEIRO VALOR: ");
        valorA = entrada.nextInt();

        exibeTexto("DIGITE O SEGUNDO VALOR: ");
        valorB = entrada.nextInt();

        exibeTexto("MAIOR VALOR: " + retornaMaiorValor(valorA, valorB));
    }

    private static int retornaMaiorValor(int valorA, int valorB) {
        return (valorA > valorB) ? valorA : valorB;
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
