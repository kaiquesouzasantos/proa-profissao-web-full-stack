package desafios;

import java.util.Scanner;

public class MaiorCentena {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        exibeTexto("DIGITE UM NUMERO A SER PROCESSADO: ");
        int numero = entrada.nextInt();

        exibeTexto("RESULTANTE: " + calculaValor(numero));
    }

    public static int calculaValor(int numero) {
        return (numero <= 100) ? numero * 2 : numero;
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
