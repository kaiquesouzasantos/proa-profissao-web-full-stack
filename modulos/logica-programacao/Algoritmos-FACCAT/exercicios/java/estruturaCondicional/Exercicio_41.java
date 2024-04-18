package estruturaCondicional;

import java.util.Scanner;

public class Exercicio_41 {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        double notaUm, notaDois, notaTres, mediaAtividade, media;

        exibeTexto("DIGITE A 1 NOTA: ");
        notaUm = entrada.nextDouble();

        exibeTexto("DIGITE A 2 NOTA: ");
        notaDois = entrada.nextDouble();

        exibeTexto("DIGITE A 3 NOTA: ");
        notaTres = entrada.nextDouble();

        exibeTexto("DIGITE A MEDIA DAS ATIVIDADES: ");
        mediaAtividade = entrada.nextDouble();

        media = notaUm + (notaDois * 2) + (notaTres * 3) + mediaAtividade;

        exibeTexto("CONCEITO DO ALUNO: " + calculaConceito(media));
    }

    private static String calculaConceito(double media) {
        if (media >= 9) {
            return "A";
        } else if(media >= 7.5) {
            return "B";
        } else if(media >= 6) {
            return "C";
        }

        return "D";
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
