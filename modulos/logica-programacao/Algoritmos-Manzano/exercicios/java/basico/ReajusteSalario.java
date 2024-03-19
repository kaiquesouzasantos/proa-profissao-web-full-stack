package basico;

import java.util.Scanner;

public class ReajusteSalario {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        exibeTexto("DIGITE O SALARIO ATUAL: R$ ");
        double salario = entrada.nextDouble();

        exibeTexto("DIGITE O PERCENTUAL DE REAJUSTE: ");
        double percentualReajsute = entrada.nextDouble();

        exibeTexto("SALARIO REAJUSTADO: R$ " + calculaSalarioReajustado(
                salario, calculaValorReajuste(salario, percentualReajsute)
        ));
    }

    private static double calculaValorReajuste(double salario, double percentualReajuste) {
        return (percentualReajuste / 100) * salario;
    }

    private static double calculaSalarioReajustado(double salarioAtual, double valorReajuste) {
        return salarioAtual + valorReajuste;
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
