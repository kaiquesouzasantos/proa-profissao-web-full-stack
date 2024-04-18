package estruturaCondicional;

import java.util.Scanner;

public class Exercicio_20 {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        int valorA, valorB;

        exibeTexto("DIGITE O PRIMEIRO VALOR: ");
        valorA = entrada.nextInt();

        exibeTexto("DIGITE O SEGUNDO VALOR: ");
        valorB = entrada.nextInt();

        if(valorA > valorB)
            exibeTexto("ORDENACAO: " + valorB + "," + valorA);
        else
            exibeTexto("ORDENACAO: " + valorA + "," + valorB);
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
