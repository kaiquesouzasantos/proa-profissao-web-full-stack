package basico;

import java.util.Scanner;

public class CalculoCruzadoProdutos {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        exibeTexto("DIGITE O PRIMEIRO VALOR: ");
        int valorA = entrada.nextInt();

        exibeTexto("DIGITE O SEGUNDO VALOR: ");
        int valorB = entrada.nextInt();

        exibeTexto("DIGITE O TERCEIRO VALOR: ");
        int valorC = entrada.nextInt();

        exibeTexto("DIGITE O QUARTO VALOR: ");
        int valorD = entrada.nextInt();

        exibeTexto(
                "RESULTANTE DO PRODUTO DO 1 COM O 3 VALOR: " + (valorA * valorC) + " |  RESULTANTE DA SOMA DO 2 COM O 4 VALOR: " + (valorB + valorD)
        );
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
