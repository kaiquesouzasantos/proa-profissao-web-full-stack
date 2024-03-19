package estruturaRepeticaoFor;

import java.util.Scanner;

public class TabuadaDez {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        exibeTexto("DIGITE O NUMERO DE BASE DA TABUADA: ");
        int valorTabuada = entrada.nextInt();

        for (int contador = 1; contador <= 10; contador++) {
            exibeTexto(valorTabuada + " X " + contador + " = " + (valorTabuada * contador));
        }
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
