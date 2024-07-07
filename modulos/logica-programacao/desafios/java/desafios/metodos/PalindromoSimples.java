package desafios.metodos;

import java.util.Scanner;

public class PalindromoSimples {
    /*
        Desenvolva um método que receba uma string como entrada e retorne verdadeiro se ela for um palíndromo
        (ou seja, se ela pode ser lida da mesma forma de trás para frente), e falso caso contrário.
    */

    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        exibeTexto("DIGITE UM NUMERO A SER PROCESSADO: ");
        String texto = entrada.next();

        exibeTexto("TEXTO [" + (verificaPalindromo(texto) ? "VERDADEIRO" : "FALSO") + "] PARA PALINDROMO");
    }

    private static boolean verificaPalindromo(String texto) {
        return texto.equalsIgnoreCase(
                new StringBuilder(texto).reverse().toString()
        );
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
