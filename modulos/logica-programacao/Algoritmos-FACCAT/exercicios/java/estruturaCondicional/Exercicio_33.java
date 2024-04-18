package estruturaCondicional;

import java.util.Scanner;

public class Exercicio_33 {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        int valorA, valorB;

        exibeTexto("DIGITE O PRIMEIRO NUMERO: ");
        valorA = entrada.nextInt();

        exibeTexto("DIGITE O SEGUNDO NUMERO: ");
        valorB = entrada.nextInt();

        if(valorA > valorB)
            exibeTexto("O PRIMEIRO NUMERO TEM O MAIOR VALOR");
        else if(valorB > valorA)
            exibeTexto("O SEGUNDO NUMERO TEM O MAIOR VALOR");
        else
            exibeTexto("OS NUMEROS TEM O MESMO VALOR");
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
