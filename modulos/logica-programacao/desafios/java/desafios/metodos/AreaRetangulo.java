package desafios.metodos;

import java.util.Scanner;

public class AreaRetangulo {
    /*
        Crie um método chamado CalcularAreaRetangulo que receba a largura e a altura de um retângulo como parâmetros e retorne a área desse retângulo.
    */

    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        exibeTexto("AREA DO RETANGULO");

        exibeTexto("DIGITE A LARGURA[CM]: ");
        double largura = entrada.nextDouble();

        exibeTexto("DIGITE A ALTURA[CM]: ");
        double altura = entrada.nextDouble();

        exibeTexto("AREA DO RETANGULO: " + getArea(altura, largura) + " CM^2");
    }

    private static double getArea(double altura, double largura) {
        return (altura * largura);
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
