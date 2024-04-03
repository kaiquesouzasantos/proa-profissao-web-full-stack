package estruturaCondicional;

import java.util.Scanner;

public class Exercicio_37 {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        int macaQuilo, morangoQuilo;
        double macaPreco, morangoPreco, valorTotal;

        exibeTexto("DIGITE A QUANTIDADE DE MACAS[KG]: ");
        macaQuilo = entrada.nextInt();

        exibeTexto("DIGITE A QUANTIDADE DE MORANGOS[KG]: ");
        morangoQuilo = entrada.nextInt();

        macaPreco = (macaQuilo > 5) ? 1.5 : 1.8;
        morangoPreco = (morangoQuilo > 5) ? 2.2 : 2.5;

        valorTotal = (morangoQuilo * morangoPreco) + (macaQuilo * macaPreco);

        if((macaQuilo + morangoQuilo > 8) || (valorTotal > 25.0))
            valorTotal -= (valorTotal/10);

        exibeTexto("VALOR A SER PAGO: R$" + valorTotal);
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
