package basico;

import java.util.Scanner;
import java.util.ServiceLoader;

public class Exercicio_11 {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        double valorVendido, salarioFixo, comissaoFixa;

        exibeTexto("DIGITE O NUMERO DE CARROS VENDIDOS: ");
        int carrosVendidos = entrada.nextInt();

        exibeTexto("DIGITE O VALOR TOTAL DOS CARROS VENDIDOS: R$");
        valorVendido = entrada.nextDouble();

        exibeTexto("DIGITE O VALOR DO PAGAMENTO FIXO: R$");
        salarioFixo = entrada.nextDouble();

        exibeTexto("DIGITE O VALOR DA COMISSAO FIXA: R$");
        comissaoFixa = entrada.nextDouble();

        exibeTexto(
                "SALARIO RESULTANTE: R$ " + calculaSalarioVendedor(salarioFixo, comissaoFixa, valorVendido, carrosVendidos)
        );
    }

    private static double calculaSalarioVendedor(double salarioFixo, double comissaoFixa, double valorVendido, int carrosVendidos) {
        return salarioFixo + (comissaoFixa * carrosVendidos) + (valorVendido/100 * 5);
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
