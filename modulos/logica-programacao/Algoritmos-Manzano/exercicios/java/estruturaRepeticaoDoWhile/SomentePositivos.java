package estruturaRepeticaoDoWhile;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class SomentePositivos {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        List<Integer> valores = new ArrayList<>();
        int valorEntrada = 0;

        do {
            exibeTexto("DIGITE UM NUMERO A SER PROCESSADO: ");
            valorEntrada = entrada.nextInt();

            if (valorEntrada >= 0)
                valores.add(valorEntrada);
        } while (valorEntrada >= 0);

        valores = valores.stream().sorted().toList();

        exibeTexto("MAIOR VALOR: " + valores.getLast());
        exibeTexto("MENOR VALOR: " + valores.getFirst());
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
