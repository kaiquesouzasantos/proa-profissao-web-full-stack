package estruturaRepeticaoFor;

import java.util.Scanner;

public class Exercicio_54 {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        int numero;

        do {
            exibeTexto("DIGITE UM NUMERO A SER PROCESSADO: ");
            numero = entrada.nextInt();
        } while (numero <= 0);

        for(int contador = 0; contador <= numero; contador++) {
            exibeTexto(String.valueOf(contador));
        }
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
