package estruturaCondicional;

import java.util.Scanner;

public class Exercicio_24 {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
       double salarioFixo, valorVendas, valorMinimo = 1500;

       exibeTexto("DIGITE O SALARIO FIXO: R$");
       salarioFixo = entrada.nextDouble();

       exibeTexto("DIGITE O VALOR TOTAL DE VENDAS: R$");
       valorVendas = entrada.nextDouble();

       exibeTexto("PAGAMENTO TOTAL: R$" + (salarioFixo + calculaComissao(valorVendas, valorMinimo)));
    }

    private static double calculaComissao(double valorVendas, double valorMinimo) {
        if (valorVendas > valorMinimo)
            return ((valorMinimo/100) * 3) + ((valorVendas - valorMinimo)/100 * 5);

        return  (valorVendas/100) * 3;
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
