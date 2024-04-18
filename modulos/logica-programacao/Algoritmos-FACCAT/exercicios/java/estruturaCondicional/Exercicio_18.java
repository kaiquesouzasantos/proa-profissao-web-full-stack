package estruturaCondicional;

import java.util.Scanner;

public class Exercicio_18 {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        int anoAtual, anoNascimento, idade;

        exibeTexto("DIGITE O ANO ATUAL: ");
        anoAtual = entrada.nextInt();

        exibeTexto("DIGITE O ANO DO SEU NASCIMENTO: ");
        anoNascimento = entrada.nextInt();

        idade = anoAtual - anoNascimento;

        exibeTexto("VOCE" + retornaEstadoVoto(idade) + "PODERA VOTAR ESSE ANO");
    }

    private static String retornaEstadoVoto(int idade) {
        return (idade >= 18) ? "" : " NAO ";
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
