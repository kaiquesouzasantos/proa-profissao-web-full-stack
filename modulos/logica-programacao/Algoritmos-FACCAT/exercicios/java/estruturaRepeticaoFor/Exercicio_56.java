package estruturaRepeticaoFor;

import java.util.Scanner;

public class Exercicio_56 {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        exibeTexto("DIGITE O NUMERO DA TABUADA: ");
        int numero = entrada.nextInt();

        for(int contador = 1; contador <= 10; contador++) {
            exibeTexto(numero + " x " + contador + " = " + (contador * numero));
        }
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
