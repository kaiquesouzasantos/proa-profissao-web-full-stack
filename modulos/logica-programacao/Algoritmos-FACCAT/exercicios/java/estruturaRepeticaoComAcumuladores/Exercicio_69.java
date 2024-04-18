package estruturaRepeticaoComAcumuladores;

import java.util.Scanner;

public class Exercicio_69 {
    private static final Scanner entrada= new Scanner(System.in);

    public static void main(String[] args) {
        double somaValores = 0;
        int contadorItens = 0;
        String continuarLeitura;

        do {
            contadorItens++;
            exibeTexto("DIGITE O VALOR DO " + contadorItens + " ITEM: R$");
            somaValores += entrada.nextDouble();

            exibeTexto("DESEJA CONTINUAR NA ADICAO DE VALORES EM ESTOQUE[S/N]? ");
            continuarLeitura = entrada.next();
        } while (continuarLeitura.equalsIgnoreCase("S"));

        exibeTexto("SOMATORIA RESULTANTE DE ESTOQUE: R$" + somaValores);
        exibeTexto("VALOR MEDIO DE ITENS: R$" + (somaValores / contadorItens));
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
