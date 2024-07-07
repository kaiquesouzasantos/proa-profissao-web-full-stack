package desafios.basico;

import java.util.Scanner;

public class MediaEscolarConceitual {
    /*
        Escreva um programa que leia a nota de um aluno e converta-a para conceito:
        A (nota >= 9), B (7 <= nota < 9), C (5 <= nota < 7), D (3 <= nota < 5) e F (nota < 3).
    */

    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        exibeTexto("DIGITE UMA NOTA A SER PROCESSADA: ");
        double nota = entrada.nextDouble();

        exibeTexto("PARA A NOTA: " + nota + " O CONCEITO APLICADO E: " + retornaConceito(nota));
    }

    private static String retornaConceito(double nota) {
        if(nota >= 9)
            return "A";
        else if(nota >= 7)
            return "B";
        else if(nota >= 5)
            return "C";
        else if(nota >= 3)
            return "D";

        return "F";
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
