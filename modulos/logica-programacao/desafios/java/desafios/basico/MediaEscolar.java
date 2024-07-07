package desafios.basico;

import java.util.Scanner;

public class MediaEscolar {
    /*
        Escreva um programa que leia três notas de um aluno e calcule a média. Informe se o aluno está aprovado (média >= 7),
        em recuperação (5 <= média < 7) ou reprovado (média < 5).
    */

    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        double notas = 0;

        for(int contador = 1; contador <= 3; contador++) {
            System.out.println("DIGITE A " + contador + " NOTA: ");
            notas += entrada.nextDouble();
        }

        double media = calculaMedia(notas, 3);
        System.out.printf("ALUNO ESTA " + retornaEstadoAprovacao(media) + " COM MEDIA %.2f",  media);
    }

    private static double calculaMedia(double soma, int divisor) {
        return soma / divisor;
    }

    private static String retornaEstadoAprovacao(double media) {
        if (media >= 7)
            return "APROVADO";
        else if(media >= 5)
            return "RECUPERACAO";
        return "REPROVADO";
    }
}
