package estrututraCondicional;

import java.util.Scanner;

public class DivisiveisPorDoisTres {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        for(int contador = 1; contador <= 4; contador++) {
            exibeTexto("DIGITE O NUMERO " + contador + " A SER VERIFICADO: ");
            int numero = entrada.nextInt();


            if (verificaDivisibilidade(numero, 2) && verificaDivisibilidade(numero, 3))
                exibeTexto("O NUMERO " + numero + " E DIVISIVEL POR 2 E 3");
            else
                exibeTexto("O NUMERO " + numero + " NAO E DIVISIVEL POR 2 E 3");
        }
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
