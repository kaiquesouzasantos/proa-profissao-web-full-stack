package basico;

import java.util.Scanner;

public class Exercicio_09 {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        double salario, percentualReajuste;

        exibeTexto("DIGITE O SALARIO ATUAL: R$");
        salario = entrada.nextDouble();

        exibeTexto("DIGITE O PERCENTUAL DE REAJUSTE: ");
        percentualReajuste = entrada.nextDouble();

        exibeTexto("SALARIO REAJUSTADO: R$" +  aplicaReajuste(salario, percentualReajuste));
    }

    private static double aplicaReajuste(double salario, double percentualReajuste) {
        return  salario + ((salario/100) * percentualReajuste);
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
