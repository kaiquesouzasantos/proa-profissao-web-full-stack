package estruturaRepeticaoComAcumuladores;

import java.util.Scanner;

public class Exercicio_59 {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        int negativos = 0;

        for (int contador = 1; contador <= 10; contador++) {
            exibeTexto("DIGITE O " + contador + " NUMERO: ");

            if(entrada.nextInt() < 0)
                negativos++;
        }

        exibeTexto("CONTAGEM DE NUMEROS NEGATIVOS: " + negativos);
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
