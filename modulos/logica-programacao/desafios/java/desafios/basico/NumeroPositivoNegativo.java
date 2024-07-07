package desafios.basico;

import java.util.Scanner;

public class NumeroPositivoNegativo {
    /*
        Escreva um programa que leia um número inteiro e informe se ele é positivo, negativo ou zero.
    */

    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        exibeTexto("DIGITE UM NUMERO: ");
        int numero = entrada.nextInt();

        exibeTexto("NUMERO " + retornaEstadoValor(numero));
    }

    private static String retornaEstadoValor(int numero) {
        if(numero > 0)
            return "POSITIVO";
        else if(numero < 0)
            return "NEGATIVO";

        return "ZERO";
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
