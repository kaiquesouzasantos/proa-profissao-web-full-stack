package estruturaCondicional;

import java.util.Scanner;

public class Exercicio_32 {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        String nomeA, nomeB;
        int pontoA, pontoB;

        exibeTexto("DIGITE O PRIMEIRO TIME: ");
        nomeA = entrada.next();

        exibeTexto("DIGITE A PONTUACAO DO TIME " + nomeA + ":");
        pontoA = entrada.nextInt();

        exibeTexto("DIGITE O SEGUNDO TIME: ");
        nomeB = entrada.next();

        exibeTexto("DIGITE A PONTUACAO DO TIME " + nomeB + ":");
        pontoB = entrada.nextInt();

        exibeTexto("RESULTADO: " + retornaResultado(nomeA, pontoA, nomeB, pontoB));
    }

    private static String retornaResultado(String nomeA, int pontoA, String nomeB, int pontoB) {
       if(pontoA > pontoB)
           return nomeA + " COM " + pontoA + " PONTOS";
       else if(pontoB > pontoA)
           return nomeB + " COM " + pontoB + " PONTOS";

        return "EMPATE COM " + pontoA + " PONTOS";
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
