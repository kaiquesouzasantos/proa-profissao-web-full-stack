package estruturaCondicional;

import java.util.Scanner;

public class Exercicio_29 {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        int valorA, valorB, valorC;

        exibeTexto("DIGITE O PRIMEIRO NUMERO: ");
        valorA = entrada.nextInt();

        exibeTexto("DIGITE O SEGUNDO NUMERO: ");
        valorB = entrada.nextInt();

        exibeTexto("DIGITE O TERCEIRO NUMERO: ");
        valorC = entrada.nextInt();

        exibeTexto("SOMA RESULTANTE: " + retornaSomaExtremos(valorA, valorB, valorC));
    }

    private static int retornaSomaExtremos(int valorA, int valorB, int valorC) {
        if((valorA < valorB) && (valorA < valorC))
            return valorB + valorC;
        else if((valorB < valorA) && (valorB < valorC))
            return valorA + valorC;

        return valorA + valorB;
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
