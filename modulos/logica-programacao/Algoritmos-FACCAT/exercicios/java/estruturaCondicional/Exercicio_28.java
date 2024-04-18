package estruturaCondicional;

import java.util.Scanner;

public class Exercicio_28 {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        int valorA, valorB, valorC;

        exibeTexto("DIGITE O PRIMEIRO NUMERO: ");
        valorA = entrada.nextInt();

        exibeTexto("DIGITE O SEGUNDO NUMERO: ");
        valorB = entrada.nextInt();

        exibeTexto("DIGITE O TERCEIRO NUMERO: ");
        valorC = entrada.nextInt();

        exibeTexto("MAIOR VALOR: " + retornaMaior(valorA, valorB, valorC));
    }

    private static int retornaMaior(int valorA, int valorB, int valorC) {
        if((valorA > valorB) && (valorA > valorC))
            return valorA;
        else if((valorB > valorA) && (valorB > valorC))
            return valorB;

        return valorC;
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
