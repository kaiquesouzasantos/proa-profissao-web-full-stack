package desafios.metodos;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class MenorNumero {
    /*
        Crie um método chamado ObterMenorNumero que receba três inteiros como parâmetros e retorne o menor entre eles.
    */

    private static final Scanner entrada = new Scanner(System.in);
    private static final List<Integer> valores = new ArrayList<>();

    public static void main(String[] args) {
        exibeTexto("MENOR NUMERO DE UM CONJUNTO");

        for(int i = 1; i <= 3; i++) {
            exibeTexto("DIGITE O " + i + " A SER PROCESSADO: ");
            valores.add(entrada.nextInt());
        }

        exibeTexto("MENOR NUMERO: " + getMenorNumero());
    }

    private static int getMenorNumero() {
        return valores.stream().reduce(Integer::min).orElse(0);
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
