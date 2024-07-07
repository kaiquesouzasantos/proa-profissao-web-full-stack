package desafios.metodos;

import java.util.Scanner;

public class Fatorial {
    /*
        Escreva um método para calcular o fatorial de um número inteiro positivo passado como parâmetro.
    */

    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        exibeTexto("DIGITE UM NUMERO INTEIRO: ");
        int numero = entrada.nextInt();

        exibeTexto("VALOR FATORIAL[" + numero + "!]: " + fatorial(numero));
    }

    private static int fatorial(int numero) {
        return (numero == 1) ? numero : numero * fatorial(numero-1);
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
