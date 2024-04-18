package estruturaCondicional;

import java.util.Arrays;
import java.util.Scanner;

public class Exercicio_30 {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        int valorA, valorB, valorC;

        exibeTexto("DIGITE O PRIMEIRO NUMERO: ");
        valorA = entrada.nextInt();

        exibeTexto("DIGITE O SEGUNDO NUMERO: ");
        valorB = entrada.nextInt();

        exibeTexto("DIGITE O TERCEIRO NUMERO: ");
        valorC = entrada.nextInt();

        exibeTexto(
                "ORDENACAO: " + Arrays.toString(retornaOrdenacao(valorA, valorB, valorC))
        );
    }

    private static int[] retornaOrdenacao(int valorA, int valorB, int valorC) {
        int[] lista = new int[3];

        if((valorA > valorB) && (valorA > valorC)) {
            lista[2] = valorA;

            if(valorB > valorC) {
                lista[1] = valorB;
                lista[0] = valorC;
            } else {
                lista[1] = valorC;
                lista[0] = valorB;
            }
        } else if((valorB > valorA) && (valorB > valorC)) {
            lista[2] = valorB;

            if(valorA > valorC) {
                lista[1] = valorA;
                lista[0] = valorC;
            } else {
                lista[1] = valorC;
                lista[0] = valorA;
            }
        } else {
            lista[2] = valorC;

            if(valorA > valorB) {
                lista[1] = valorA;
                lista[0] = valorB;
            } else {
                lista[1] = valorB;
                lista[0] = valorA;
            }
        }

        return lista;
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
