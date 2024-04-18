package estruturaRepeticaoComAcumuladores;

import java.util.Scanner;

public class Exercicio_65 {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        int somaIntervalo = 0, valorA, valorB;

        exibeTexto("DIGITE O NUMERO DE INCIO(MENOR): ");
        valorA = entrada.nextInt();

        exibeTexto("DIGITE O NUMERO DE FINAL(MNIOR): ");
        valorB = entrada.nextInt();

        for (int contador = valorA; contador <= valorB; contador++) {
            somaIntervalo += contador;
        }

        exibeTexto("SOMATORIA RESULTANTE DO INTERVALOR[" + valorA + "," + valorB + "]: " + somaIntervalo);
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
