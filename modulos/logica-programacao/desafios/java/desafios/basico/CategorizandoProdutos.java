package desafios.basico;

import java.util.Scanner;

public class CategorizandoProdutos {
    /*
        Escreva um programa que leia o código de um produto e informe a sua categoria:
        - 1 a 10: Alimento não-perecível
        - 11 a 20: Alimento perecível
        - 21 a 30: Vestuário
        - 31 a 40: Eletrônicos
        - Outros: Código inválido
    */

    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        exibeTexto("DIGITE O CODIGO DO PRODUTO: ");
        int codigo = entrada.nextInt();

        exibeTexto("O PRODUTO DE CODIGO [" +codigo +"] ESTA NA CATEGORIA: " + retornaCategoria(codigo));
    }

    private static String retornaCategoria(int codigo) {
        return switch (codigo){
            case 1, 10 -> "ALIMENTO | NAO PERECIVEL";
            case 11, 20 -> "ALIMENTO | PERECIVEL";
            case 21, 30 -> "VESTUARIO";
            case 31, 40 -> "ELETRONICO";
            default -> "INVALIDO";
        };
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
