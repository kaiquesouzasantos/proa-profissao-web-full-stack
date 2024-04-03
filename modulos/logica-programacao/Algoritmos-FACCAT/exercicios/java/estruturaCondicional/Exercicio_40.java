package estruturaCondicional;

import java.util.Scanner;

public class Exercicio_40 {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        double  precoUnitario, total, desconto;

        exibeTexto("DIGITE O NOME DO PRODUTO: ");
        String nome = entrada.next();

        exibeTexto("DIGITE O PRECO UNITARIO: R$");
        precoUnitario = entrada.nextDouble();

        exibeTexto("DIGITE A QUANTIDADE ADQUIRIDA: ");
        int quantidade = entrada.nextInt();

        total = (quantidade * precoUnitario);

        if(quantidade <= 5)
            desconto = calculaDesconto(total, 2);
        else if(quantidade <= 10)
            desconto = calculaDesconto(total, 3);
        else
            desconto = calculaDesconto(total, 5);

        exibeTexto("TOTAL A PAGAR COM DESCONTO DO PRODUTO " + nome + ": R$" + (total - desconto));
    }

    private static double calculaDesconto(double total, int porcentagem) {
        return (total/100) * porcentagem;
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
