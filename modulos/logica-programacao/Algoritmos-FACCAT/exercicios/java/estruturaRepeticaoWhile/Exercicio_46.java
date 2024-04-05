package estruturaRepeticaoWhile;

import java.util.Scanner;

public class Exercicio_46 {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        int valorA, valorB = 0;

        exibeTexto("DIGITE O PRIMEIRO VALOR A SER PROCESSADO: ");
        valorA = entrada.nextInt();

        while(valorB == 0) {
            exibeTexto("DIGITE O SEGUNDO VALOR A SER PROCESSADO: ");
            valorB = entrada.nextInt();

            if(verificaZero(valorB))
                exibeTexto("VALOR INVÁLIDO");
        }

        exibeTexto("RESULTANTE: " + divide(valorA, valorB));
    }

    private static boolean verificaZero(int valor) {
        return valor == 0;
    }

    private static double divide(int valorA, int valorB) {
        return valorA / valorB;
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
