package basico;

import java.util.Scanner;

public class SomaQuadraticos {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        double soma = 0;

        for(int contador = 1; contador <= 3; contador++) {
            exibeTexto("DIGITE O "+ contador +" VALOR: ");

            soma += retornaValorQuadratico(
                    entrada.nextDouble()
            );
        }

        exibeTexto("SOMA DOS NUMEROS QUADRATICOS: " + soma);
    }

    private static double retornaValorQuadratico(double valor) {
        return valor * valor;
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
