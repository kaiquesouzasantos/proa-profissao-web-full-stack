package estruturaCondicional;

import java.util.Scanner;

public class Exercicio_27 {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        exibeTexto("DIGITE UM NUMERO: ");
        int valor = entrada.nextInt();

        if(valor > 0)
            exibeTexto("VALOR POSITIVO!");
        else if(valor < 0)
            exibeTexto("VALOR NEGATIVO");
        else
            exibeTexto("VALOR IGUAL A ZERO");
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
