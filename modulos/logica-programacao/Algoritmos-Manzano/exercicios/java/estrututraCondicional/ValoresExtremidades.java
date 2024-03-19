package estrututraCondicional;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class ValoresExtremidades {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        List<Double> valores = new ArrayList<>();

        for (int contador = 1; contador <= 5; contador++) {
            exibeTexto("DIGITE O " + contador + " VALOR: ");
            valores.add(entrada.nextDouble());
        }

        valores = valores.stream().sorted().toList();

        exibeTexto("MAIOR VALOR: " + valores.getLast());
        exibeTexto("MENOR VALOR: " + valores.getFirst());
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
