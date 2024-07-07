package desafios.metodos;

import java.util.List;
import java.util.Scanner;
import java.util.Set;

public class ContadorVogal {
    /*
        Escreva uma função que conte o número de vogais em uma string.
    */

    private static final Scanner entrada = new Scanner(System.in);
    private static final Set<String> vogais = Set.of("a", "e", "i", "o", "u", "A", "E", "I", "O", "U");

    public static void main(String[] args) {
        exibeTexto("DIGITE UM TEXTO: ");
        String texto = entrada.next();

        exibeTexto(texto + " POSSUI: " + contador(texto) + " VOGAIS");
    }

    private static long contador(String texto) {
        return formatador(texto).stream().filter(vogais::contains).count();
    }

    private static List<String> formatador(String texto) {
        return List.of(
                texto.replace(" ", "").split("")
        );
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
