package estruturaCondicional;

import java.util.Scanner;

public class Exercicio_21 {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        int horaInicio, horaTermino;

        exibeTexto("DIGITE O HORARIO DE INCIO DA PARTIDA: ");
        horaInicio = entrada.nextInt();

        exibeTexto("DIGITE O HORARIO DE TERMINO DA PARTIDA: ");
        horaTermino = entrada.nextInt();

        exibeTexto("DURACAO DA PARTIDA: " + verificaDuracao(horaTermino - horaInicio) + "h");
    }

    private static int verificaDuracao(int duracao) {
        return (duracao < 0) ? duracao + 24 : duracao;
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
