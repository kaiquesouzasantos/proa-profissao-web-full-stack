package estrututraCondicional;

import java.util.Scanner;

public class AprovacaoAlunoComRecuperacao {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        double notas = 0;

        for(int contador = 1; contador <= 4; contador++) {
            exibeTexto("DIGITE A " + contador + " NOTA: ");
            notas += entrada.nextDouble();
        }

        double media = calculaMedia(notas, 4);

        if (retornaEstadoAprovacao(media, 7)) {
            exibeTexto("ALUNO APROVADO COM MEDIA " + media);
        } else {
            exibeTexto("DIGITE A NOTA DO EXAME DE RECUPERACAO: ");
            notas += entrada.nextDouble();
            media = calculaMedia(notas, 5);

            exibeTexto(
                    "ALUNO " + (retornaEstadoAprovacao(media, 5) ? "APROVADO" : "REPROVADO") + " COM MEDIA " + media
            );
        }
    }

    private static double calculaMedia(double soma, int divisor) {
        return soma / divisor;
    }

    private static boolean retornaEstadoAprovacao(double media, int aceitavel) {
        return media >= aceitavel;
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
