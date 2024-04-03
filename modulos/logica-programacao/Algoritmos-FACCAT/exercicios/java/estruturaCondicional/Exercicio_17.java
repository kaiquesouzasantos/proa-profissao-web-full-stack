package estruturaCondicional;

import java.util.Scanner;

public class Exercicio_17 {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        double notaUm, notaDois, media;

        exibeTexto("DIGITE A PRIMEIRA NOTA: ");
        notaUm = entrada.nextDouble();

        exibeTexto("DIGITE A SEGUNDA NOTA: ");
        notaDois = entrada.nextDouble();

        media = (notaUm + notaDois) / 2;

        exibeTexto("ALUNO " + retornaEstadoAprovacao(media) + " COM MEDIA: " + media);
    }

    private static String retornaEstadoAprovacao(double media) {
        return (media >= 6) ? "APROVADO" : "REPROVADO";
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
