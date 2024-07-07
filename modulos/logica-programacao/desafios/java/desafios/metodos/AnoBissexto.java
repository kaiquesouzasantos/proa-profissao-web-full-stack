package desafios.metodos;

import java.util.Scanner;

public class AnoBissexto {
    /*
        Escreva um programa que leia um ano e verifique se ele é bissexto. Um ano é bissexto se for divisível por 4,
        mas não por 100, exceto se for divisível por 400.
    */

    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        exibeTexto("DIGITE UM ANO A SER PROCESSADO: ");
        int ano = entrada.nextInt();


        exibeTexto("O ANO [" + ano + "]" + (!verificaBissexto(ano) ? " NAO" : "") + " E BISSEXTO");
    }

    private static boolean verificaBissexto(int ano) {
        return (ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0);
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
