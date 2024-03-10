package estrututraCondicional;

import java.util.Scanner;

public class MaiorQueTres {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        exibeTexto("DIGITE O NUMERO A SER VERIFICADO: ");
        int numero = entrada.nextInt();

        if (numero <= 3)
            exibeTexto("O NUMERO " + numero + " E MENOR OU IGUAL A TRES");
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
