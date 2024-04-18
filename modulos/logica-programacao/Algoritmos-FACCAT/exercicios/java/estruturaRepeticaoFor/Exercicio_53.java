package estruturaRepeticaoFor;

import java.util.Scanner;

public class Exercicio_53 {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        exibeTexto("DIGITE UM NUMERO A SER PROCESSADO: ");
        int numero = entrada.nextInt();

        for(int contador = 1; contador <= numero; contador++) {
            exibeTexto(String.valueOf(contador));
        }
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
