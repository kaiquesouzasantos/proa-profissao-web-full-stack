package desafios.metodos;

import java.util.Scanner;

public class PerimetroCirculo {
    /*
        Crie um método chamado CalcularPerimetroCirculo que receba o raio de um círculo como parâmetro e retorne o perímetro do círculo.
    */

    private static final Scanner entrada = new Scanner(System.in);
    private static final double PI = 3.14;

    public static void main(String[] args) {
        exibeTexto("DIGITE O RAIO DO CIRCULO[CM]: ");
        System.out.printf("PERIMETRO: %.2f CM", getPerimetro(entrada.nextInt()));
    }

    private static double getPerimetro(double raio){
        return  2 * raio * PI;
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
