package estruturaRepeticaoWhile;

import java.util.Scanner;

public class Exercicio_49 {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        double somaNotas = 0, nota, contador = 1;

        while (contador <= 2) {
            do {
                exibeTexto("DIGITE O " + contador + " NOTA: ");
                nota = entrada.nextInt();

                if(verificaNota(nota))
                    somaNotas += nota;
                else
                    exibeTexto("NUMERO INVALIDO! FORA DO INTERVALO ACEITO.");
            } while (!verificaNota(nota));

            contador++;
        }

        exibeTexto("MEDIA DO ALUNO: " + (somaNotas/2));
    }

    private static boolean verificaNota(double nota) {
        return nota >= 0 && nota <= 10;
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
