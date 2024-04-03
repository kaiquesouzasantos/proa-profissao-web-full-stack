package estruturaCondicional;

import java.util.Scanner;

public class Exercicio_26 {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
       int atual, minimo, maximo;

       exibeTexto("DIGITE O MINIMO EM ESTOQUE: ");
       minimo = entrada.nextInt();

       exibeTexto("DIGITE O MAXIMO EM ESTOQUE: ");
       maximo = entrada.nextInt();

       exibeTexto("DIGITE A QUANTIDADE ATUAL EM ESTOQUE: ");
       atual = entrada.nextInt();

       double media = (maximo + minimo) / 2;

       if (atual >= media)
           exibeTexto("NAO EFETUAR MAIS COMPRAS!");
       else
           exibeTexto("PERMITIDO A EFETUACAO DE COMPRAS!");
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
