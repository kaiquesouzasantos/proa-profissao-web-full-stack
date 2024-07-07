package desafios.metodos;

import java.util.Scanner;

public class NumeroFatorial {
    /*
        Escreva um método para calcular o fatorial de um número inteiro positivo passado como parâmetro.
    */

    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        exibeTexto("DIGITE UM NUMERO A SER PROCESSADO: ");
        int numero = entrada.nextInt();

        verificaPositivo(numero);
        exibeTexto("RESULTANTE FATORIAL: " + calculaFatorial(numero));
    }

    private static int calculaFatorial(int numero) {
        int retorno = 1;

        for(; numero > 1; numero--) {
            retorno *= numero;
        }

        return retorno;
    }

    private static void verificaPositivo(int numero) {
        if(numero <= 0) {
            exibeTexto("[VALOR INVALIDO!]");
            System.exit(0);
        }
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
