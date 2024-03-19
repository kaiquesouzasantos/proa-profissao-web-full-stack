package estrututraCondicional;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class ValoresOrdemCrescente {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        List<Double> valores = new ArrayList<>();

        for(int contador = 1; contador <= 3; contador++) {
            exibeTexto("DIGITE O " + contador + " VALOR: ");
            valores.add(entrada.nextDouble());
        }

        exibeTexto("ORDEM CRESCENTE: " + valores.stream().sorted().toList());
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
