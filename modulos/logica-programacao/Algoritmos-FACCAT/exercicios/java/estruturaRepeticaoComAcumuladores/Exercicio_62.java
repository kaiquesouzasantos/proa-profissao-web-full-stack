package estruturaRepeticaoComAcumuladores;

import java.util.Scanner;

public class Exercicio_62 {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        double somaNotas = 0;

        exibeTexto("DIGITE O NUMERO DE ALUNOS QUE A CLASSE POSSUI: ");
        int quantidadeAlunos = entrada.nextInt();

        for (int contador = 1; contador <= quantidadeAlunos; contador++) {
            exibeTexto("DIGITE A NOTA DO " + contador + "ALUNO: ");
            somaNotas += entrada.nextDouble();
        }

        exibeTexto("NOTA MEDIA DA SALA: " + (somaNotas / quantidadeAlunos));
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
