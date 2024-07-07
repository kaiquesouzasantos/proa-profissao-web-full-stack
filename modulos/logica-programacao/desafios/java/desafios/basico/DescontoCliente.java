package desafios.basico;

import java.util.Scanner;

public class DescontoCliente {
    /*
        Escreva um programa que leia o valor de uma compra e a categoria do cliente
        (1 para comum, 2 para associado e 3 para VIP). Aplique os seguintes descontos:
        - Comum: Sem desconto
        - Associado: 10% de desconto
        - VIP: 20% de desconto
        Informe o valor final da compra.
    */

    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        exibeTexto("DIGITE O VALOR DA COMPRA: R$");
        double valor = entrada.nextDouble();

        exibeTexto("DIGITE A CATEGORIA DO CLIENTE[COMUM, ASSOCIADO OU VIP]");
        String categoria = entrada.next();

        exibeTexto(
                String.format("VALOR A SER PAGO: R$ %.2f", aplicaDesconto(valor, categoria))
        );
    }

    private static double aplicaDesconto(double valor, String categoria) {
        if(categoria.equalsIgnoreCase("ASSOCIADO"))
            return (valor * 0.9);
        else if(categoria.equalsIgnoreCase("VIP"))
            return (valor * 0.8);
        else
            return (valor);
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
