package desafios.basico;

import java.util.Scanner;

public class FaixaEtaria {
    /*
        Escreva um programa que leia a idade de uma pessoa e informe se ela é uma criança (0-12 anos), adolescente (13-17 anos),
        adulto (18-59 anos) ou idoso (60 anos ou mais).
    */

    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        exibeTexto("DIGITE A SUA IDADE: ");
        int idade = entrada.nextInt();

        exibeTexto("AOS " + idade + " ANOS, VOCE SE SITUA NA FAIXA ETARIA: " + retornaEtaria(idade));
    }

    private static String retornaEtaria(int idade) {
        return switch (idade){
            case 0, 12 -> "CRIANCA";
            case 13, 17 -> "ADOLESCENTE";
            case 18, 59 -> "ADULTO";
            default -> "IDOSO";
        };
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}