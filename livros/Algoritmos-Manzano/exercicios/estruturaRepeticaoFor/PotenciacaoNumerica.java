package estruturaRepeticaoFor;

import java.util.Scanner;

public class PotenciacaoNumerica {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        exibeTexto("DIGITE O VALOR DO EXPONENCIADO: ");
        int exponenciado = entrada.nextInt();

        exibeTexto("DIGITE O VALOR DO EXPOENTE: ");
        int expoente = entrada.nextInt();

        for (int contador = 1, ultimoValor = 1;contador <= expoente; contador++) {
            ultimoValor *= exponenciado;
            exibeTexto(exponenciado + "^" + contador + " = " + ultimoValor);
        }
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
