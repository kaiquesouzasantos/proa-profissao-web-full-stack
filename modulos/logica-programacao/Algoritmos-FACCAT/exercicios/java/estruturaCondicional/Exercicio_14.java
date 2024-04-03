package estruturaCondicional;

import java.util.Scanner;

public class Exercicio_14 {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        exibeTexto("DIGITE UM NUMERO: ");
        int numero = entrada.nextInt();

        exibeTexto("NUMERO " + retornaEstadoValor(numero) + " QUE DEZ!");
    }

    private static String retornaEstadoValor(int numero) {
        return (numero > 10) ? "E MAIOR" : "NAO E MAIOR";
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
