package desafios.metodos;

import java.util.Scanner;

public class DiferenciandoTriangulos {
    /*
        Escreva um programa que leia três lados de um triângulo e verifique se eles formam um triângulo válido.
        Para isso, a soma de dois lados deve ser sempre maior que o terceiro lado.
    */

    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        exibeTexto("DIGITE A MEDIDA DO LADO A: ");
        double valorA = entrada.nextDouble();

        exibeTexto("DIGITE A MEDIDA DO LADO D: ");
        double valorB = entrada.nextDouble();

        exibeTexto("DIGITE A MEDIDA DO LADO C: ");
        double valorC = entrada.nextDouble();

        exibeTexto("RESULTANTE DADOS OS VALORES FORNECIDOS: " + verificaMedidas(valorA, valorB, valorC));
    }

    private static String verificaMedidas(double valorA, double valorB, double valorC) {
        if (!((valorA < valorB + valorC) && (valorB < valorA + valorC) && (valorC < valorA + valorB)))
            return "NAO E TRIANGULO";
        else if (valorA == valorB && valorB == valorC)
            return "TRIANGULO EQUILATERO";
        else if (valorA == valorB || valorA == valorC || valorB == valorC)
            return "TRIANGULO ISOCELES";
        else
            return "TRIANGULO ESCALENO";
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
