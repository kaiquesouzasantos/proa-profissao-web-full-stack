package desafios.metodos;

import java.util.Random;

public class NumeroAleatorio {
    /*
        Crie um método chamado GerarNumeroAleatorio que não receba parâmetros e retorne um número inteiro aleatório entre 1 e 100.
    */

    public static void main(String[] args) {
        exibeTexto("NUMERO ALEATORIO: " + getNumeroAleatorio());
    }

    private static int getNumeroAleatorio() {
        return new Random().nextInt(100) + 1;
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
