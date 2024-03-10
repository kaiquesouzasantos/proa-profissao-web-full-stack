package basico;

import java.util.Scanner;

public class QuadradoSoma {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        double soma = 0;

        for(int contador = 1; contador <= 3; contador++) {
            exibeTexto("DIGITE O "+ contador +" VALOR: ");
            soma += entrada.nextDouble();
        }

        exibeTexto("SOMA DOS NUMEROS QUADRATICOS: " + retornaValorQuadratico(soma));
    }

    private static double retornaValorQuadratico(double valor) {
        return valor * valor;
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
