package desafios.metodos;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class MediaLista {
    /*
        Crie uma função que calcule a média de uma lista de números passada como parâmetro.
    */

    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        List<Double> valores = new ArrayList<>();

        while(true) {
            exibeTexto("DIGITE UM NUMERO [0 - CANCELA]: ");
            double valor = entrada.nextDouble();

            if(valor == 0)
                break;
            else
                valores.add(valor);
        }

        System.out.println(calculaMedia(valores));
    }

    private static double calculaMedia(List<Double> valores) {
        return valores.stream().reduce(Double::sum).orElse(0.0) / valores.size();
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
