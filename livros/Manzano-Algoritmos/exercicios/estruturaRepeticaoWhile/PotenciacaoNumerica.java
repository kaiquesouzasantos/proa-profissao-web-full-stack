package estruturaRepeticaoWhile;

import java.util.Scanner;

public class PotenciacaoNumerica {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        exibeTexto("DIGITE O VALOR DO EXPONENCIADO: ");
        int exponenciado = entrada.nextInt();

        exibeTexto("DIGITE O VALOR DO EXPOENTE: ");
        int expoente = entrada.nextInt();

        int contador = 1, ultimoValor = 1;

        while (contador <= expoente) {
            ultimoValor *= exponenciado;
            exibeTexto(exponenciado + "^" + contador + " = " + ultimoValor);
            contador++;
        }
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
