package estruturaCondicional;

import java.util.Scanner;

public class Exercicio_31 {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        int valorA, valorB, valorC;

        exibeTexto("DIGITE O PRIMEIRO NUMERO: ");
        valorA = entrada.nextInt();

        exibeTexto("DIGITE O SEGUNDO NUMERO: ");
        valorB = entrada.nextInt();

        exibeTexto("DIGITE O TERCEIRO NUMERO: ");
        valorC = entrada.nextInt();

        exibeTexto("COM BASE NOS VALORES, ELE " + verificaTriangulo(valorA, valorB, valorC));
    }

    private static String verificaTriangulo(int valorA, int valorB, int valorC) {
        if ((valorA < (valorB + valorC)) && (valorB < (valorA + valorC)) && (valorC < (valorA + valorC)))
            return "E UM TRIANGULO!";

        return "NAO E TRIANGULO!";
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
