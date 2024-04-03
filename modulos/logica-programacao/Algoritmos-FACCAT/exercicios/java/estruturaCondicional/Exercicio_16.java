package estruturaCondicional;

import java.util.Scanner;

public class Exercicio_16 {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        double preco = 1.3;

        exibeTexto("DIGITE A QUANTIDADE DE MACAS: ");
        int macas = entrada.nextInt();

        if(macas >= 12)
            preco = 1;

        exibeTexto("VALOR TOTAL: R$" + (macas * preco));
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
