package estrututraCondicional;

import java.util.Scanner;

public class DivisivelPorQuatroCinco {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        exibeTexto("DIGITE O NUMERO A SER VERIFICADO: ");
        int numero = entrada.nextInt();


        if (verificaDivisibilidade(numero, 4) && verificaDivisibilidade(numero, 5))
            exibeTexto("O NUMERO " + numero + " E DIVISIVEL POR 4 E 5");
        else
            exibeTexto("O NUMERO " + numero + " NAO E DIVISIVEL POR 4 E 5");
    }

    private static boolean verificaDivisibilidade(int numero, int divisor) {
        return retornaRestoDivisao(numero, divisor) == 0;
    }

    private static int retornaRestoDivisao(int dividendo, int divisor) {
        return dividendo % divisor;
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
