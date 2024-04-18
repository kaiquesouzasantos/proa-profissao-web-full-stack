package estruturaRepeticaoWhile;

import java.util.Scanner;

public class Exercicio_48 {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        double somaNotas = 0, contador = 1;

        while(contador <= 2) {
            exibeTexto("DIGITE O " + contador + " NOTA: ");
            double nota = entrada.nextInt();

            if(nota >= 0 && nota <= 10)
                somaNotas += nota;
            else
                exibeTexto("NUMERO INVALIDO! FORA DO INTERVALO ACEITO.");

            contador++;
        }

        exibeTexto("MEDIA DO ALUNO: " + (somaNotas/2));
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
