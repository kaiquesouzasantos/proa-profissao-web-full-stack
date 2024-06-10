package desafios;

import java.util.Scanner;

public class Temporizador {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) throws Exception {
        exibeTexto("DIGITE O TEMPO EM MINUTOS: ");
        int contadorMinuto = entrada.nextInt();

        exibeTexto("DIGITE O TEMPO EM SEGUNDOS: ");
        int contadorSegundo = entrada.nextInt();

        for (; contadorMinuto >= 0; contadorMinuto--) {
            for(; contadorSegundo >= 0; contadorSegundo--) {
                System.out.println(formatNumber(contadorMinuto) + ":" + formatNumber(contadorSegundo));
                Thread.sleep(1000);
            }

            contadorSegundo = 59;
        }
    }

    private static String formatNumber(int numero) {
        return (numero < 10) ? "0"+numero : ""+numero;
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
