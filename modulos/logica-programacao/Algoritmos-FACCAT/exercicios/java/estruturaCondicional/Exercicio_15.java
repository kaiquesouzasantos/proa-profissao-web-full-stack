package estruturaCondicional;

import java.util.Scanner;

public class Exercicio_15 {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        exibeTexto("DIGITE UM NUMERO: ");
        int numero = entrada.nextInt();

        exibeTexto("NUMERO " + retornaEstadoValor(numero));
    }

    private static String retornaEstadoValor(int numero) {
        return (numero > 0) ? "POSITIVO" : "NEGATIVO";
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
