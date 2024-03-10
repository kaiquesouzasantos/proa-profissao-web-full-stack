package estrututraCondicional;

import java.util.Scanner;

public class AprovacaoAluno {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        double notas = 0;

        for(int contador = 1; contador <= 4; contador++) {
            exibeTexto("DIGITE A " + contador + " NOTA: ");
            notas += entrada.nextDouble();
        }

        double media = calculaMedia(notas, 4);
        exibeTexto("ALUNO " + retornaEstadoAprovacao(media) + " COM MEDIA " + media);
    }

    private static double calculaMedia(double soma, int divisor) {
        return soma / divisor;
    }

    private static String retornaEstadoAprovacao(double media) {
        if (media >= 5)
            return "APROVADO";
        return "REPROVADO";
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
