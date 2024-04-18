package estruturaRepeticaoComAcumuladores;

import java.util.Scanner;

public class Exercicio_60 {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        int intervalo = 0;

        for (int contador = 1; contador <= 10; contador++) {
            exibeTexto("DIGITE O " + contador + " NUMERO: ");
            int numero = entrada.nextInt();

            if((numero >= 10) && (numero <= 20))
                intervalo++;
        }

        exibeTexto("CONTAGEM DE NUMEROS ENTRE [10, 20]: " + intervalo);
        exibeTexto("CONTAGEM DE NUMEROS FORA DO INTERVALO: " + (10 - intervalo));
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
