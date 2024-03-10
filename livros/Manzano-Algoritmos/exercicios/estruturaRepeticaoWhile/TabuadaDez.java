package estruturaRepeticaoWhile;

import java.util.Scanner;

public class TabuadaDez {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        exibeTexto("DIGITE O NUMERO DE BASE DA TABUADA: ");
        int valorTabuada = entrada.nextInt();

        int contador = 1;
        while (contador <= 10) {
            exibeTexto(valorTabuada + " X " + contador + " = " + (valorTabuada * contador));
            contador++;
        }
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
