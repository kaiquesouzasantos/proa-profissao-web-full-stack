package desafios.metodos;

import java.util.Scanner;

public class Hipotenusa {
    /*
        Crie um método chamado CalcularHipotenusa que receba os comprimentos dos dois catetos de um triângulo retângulo como parâmetros e retorne a hipotenusa.
    */

    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        exibeTexto("HIPOTENUSA DE TRIANGULO");

        exibeTexto("DIGITE O TAMANHO DO CATETO OPOSTO[CM]:");
        double oposto = entrada.nextDouble();

        exibeTexto("DIGITE O TAMANHO DO CATETO ADJACENTE[CM]:");
        double adjacente = entrada.nextDouble();

        System.out.printf("HIPOTENUSA: %.2f CM", getHipotenusa(oposto, adjacente));
    }

    private static double getHipotenusa(double catetoOposto, double catetoAdjacente) {
        return reduzRaiz(
                elevaQuadrado(catetoOposto) + elevaQuadrado(catetoAdjacente)
        );
    }

    private static double elevaQuadrado(double numero) {
        return Math.pow(numero, 2);
    }

    private static double reduzRaiz(double numero) {
        return Math.sqrt(numero);
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
