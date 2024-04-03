package estruturaCondicional;

import java.util.Scanner;

public class Exercicio_23 {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        double altura, pesoIdeal;
        String nome, sexo;

        exibeTexto("DIGITE SEU NOME: ");
        nome = entrada.next();

        exibeTexto("DIGITE SEU SEXO(F/M): ");
        sexo = entrada.next();

        exibeTexto("DIGITE SUA ALTURA(M): ");
        altura = entrada.nextDouble();

        if (sexo.equalsIgnoreCase("M"))
            pesoIdeal = (72.7 * altura) - 58;
        else
            pesoIdeal = (62.1 * altura) - 44.7;

        exibeTexto(nome + ", SEU PESO IDEAL E: " + pesoIdeal + "kg");
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
