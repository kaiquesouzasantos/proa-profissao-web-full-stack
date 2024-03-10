package basico;

import java.util.Scanner;

public class SalarioProfessor {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        exibeTexto("DIGITE A QUANTIDADE DE HORAS TRABALHADAS: ");
        int horasTrabalhadas = entrada.nextInt();

        exibeTexto("DIGITE O VALOR DA HORA TRABALHADA: R$ ");
        double valorHora = entrada.nextDouble();

        exibeTexto("DIGITE A O PERCENTUAL DE CONTRIBUICAO AO INSS: ");
        double percentualDesconto = entrada.nextDouble();

        double salarioBruto = calculaSalarioBruto(horasTrabalhadas, valorHora);
        double valorDesconto = calculaValorDesconto(salarioBruto, percentualDesconto);
        double salarioLiquido = calculaSalarioLiquido(salarioBruto, valorDesconto);

        exibeTexto(
                "SALARIO LIQUIDO: R$ " + salarioLiquido + "\nSALARIO BRUTO: R$ " + salarioBruto + "\nVALOR DESCONTADO: R$ " + valorDesconto
        );
    }

    private static double calculaSalarioBruto(int horasTrabalhadas, double valorHora) {
        return horasTrabalhadas * valorHora;
    }

    private static double calculaValorDesconto(double salarioBruto, double percentualDesconto) {
        return ((percentualDesconto / 100) * salarioBruto);
    }

    private static double calculaSalarioLiquido(double salarioBruto, double valorDesconto) {
        return salarioBruto - valorDesconto;
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
