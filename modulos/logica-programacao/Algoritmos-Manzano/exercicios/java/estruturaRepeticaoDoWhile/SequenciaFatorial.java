package estruturaRepeticaoDoWhile;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class SequenciaFatorial {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        List<Integer> valores = new ArrayList<>();

        for(int contador = 1; contador <= 15; contador++) {
            exibeTexto("DIGITE O " + contador + "NUMERO A SER PROCESSADO: ");
            valores.add(entrada.nextInt());
        }

        valores.forEach(
                valor -> exibeTexto("O FATORIAL DE " + valor + " E " + calculaFatorial(valor))
        );
    }

    private static double calculaFatorial(int numero) {
        double saida = 1;

        do {
            /*
                Na execucao N, saida e igual ao numero.
                Na volta N-1, N = N+1 * N, logo, a decrementacao inicia a multiplicacao fatorial.
                Quando o numero atinge 1, ele para.
            */
            saida *= numero;
            numero--;
        } while (numero >= 1);

        return saida;
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
