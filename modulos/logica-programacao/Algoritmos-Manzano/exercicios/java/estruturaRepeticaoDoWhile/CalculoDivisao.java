package estruturaRepeticaoDoWhile;

import java.util.Scanner;

public class CalculoDivisao {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        exibeTexto("DIGITE O NUMERO DIVIDENDO: ");
        int dividendo = entrada.nextInt();

        exibeTexto("DIGITE O NUMERO DIVISOR: ");
        int divisor = entrada.nextInt();

        exibeTexto(dividendo + " / " + divisor + " = " + calculaDivisao(dividendo, divisor));
    }

    private static int calculaDivisao(int dividendo, int divisor) {
        int saida = 0;

        do {
            dividendo -= divisor;
            saida++;
        } while (dividendo >= divisor);

        return saida;
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }

}
