package desafios.metodos;

import java.util.Scanner;

public class InverterTexto {
    /*
        Implemente um método que inverta uma string passada como argumento.
    */

    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        exibeTexto("DIGITE UM NUMERO A SER PROCESSADO: ");
        String texto = entrada.next();

        exibeTexto("TEXTO INVERTIDO: " + inverteTexto(texto));
    }

    private static String inverteTexto(String texto) {
        return new StringBuilder(texto).reverse().toString();
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
