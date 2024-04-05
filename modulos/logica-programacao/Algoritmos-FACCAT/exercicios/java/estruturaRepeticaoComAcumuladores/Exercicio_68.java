package estruturaRepeticaoComAcumuladores;

import java.util.Scanner;

public class Exercicio_68 {
    private static final Scanner entrada= new Scanner(System.in);

    public static void main(String[] args) {
        double somaValores = 0;

        exibeTexto("DIGITE A QUANTIDADE DE ITENS EM ESTOQUE: ");
        int itensEstoque = entrada.nextInt();

        for(int contador = 1; contador <= itensEstoque; contador++) {
            exibeTexto("DIGITE O VALOR DO " + contador + " ITEM: R$");
            somaValores += entrada.nextDouble();
        }

        exibeTexto("SOMATORIA RESULTANTE DE ESTOQUE: R$" + somaValores);
        exibeTexto("VALOR MEDIO DE ITENS: R$" + (somaValores / itensEstoque));
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
