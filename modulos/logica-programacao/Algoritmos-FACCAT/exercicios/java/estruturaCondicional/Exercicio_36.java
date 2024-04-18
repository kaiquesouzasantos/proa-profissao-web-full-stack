package estruturaCondicional;

import java.util.Scanner;

public class Exercicio_36 {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        int homemA, homemB, mulherA, mulherB, homemVelho, homemNovo, mulherVelha, mulherNova;

        exibeTexto("DIGITE A IDADE DO PRIMEIRO HOMEM: ");
        homemA = entrada.nextInt();

        exibeTexto("DIGITE A IDADE DO SEGUNDO HOMEM: ");
        homemB = entrada.nextInt();

        exibeTexto("DIGITE A IDADE DA PRIMEIRA MULHER: ");
        mulherA = entrada.nextInt();

        exibeTexto("DIGITE A IDADE DA SEGUNDA MULHER: ");
        mulherB = entrada.nextInt();

        if(homemA > homemB) {
            homemVelho = homemA;
            homemNovo = homemB;
        } else {
            homemVelho = homemB;
            homemNovo = homemA;
        }

        if(mulherA > mulherB) {
            mulherVelha = mulherA;
            mulherNova = mulherB;
        } else {
            mulherVelha = mulherB;
            mulherNova = mulherA;
        }

        exibeTexto("SOMA DO OPOSTOS:" + (homemVelho + mulherNova));
        exibeTexto("PRODUTO DO OPOSTOS:" + (homemNovo * mulherVelha));
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
