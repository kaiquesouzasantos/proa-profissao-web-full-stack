package estruturaRepeticaoWhile;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class LeituraInteirosPositivos {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        List<Double> valores = new ArrayList<>();
        double leitura = 0;

        while (verificaPositivo(leitura)) {
            exibeTexto("DIGITE UM NUMERO: ");
            leitura = entrada.nextDouble();

            if(verificaPositivo(leitura))
                valores.add(leitura);
        }

        valores = valores.stream().sorted().toList();

        exibeTexto("MAIOR NUMERO: " + valores.getLast());
        exibeTexto("MENOR VALOR: " + valores.getFirst());
    }

    private static boolean verificaPositivo(double numero) {
        return numero >= 0;
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
