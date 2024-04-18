package estruturaCondicional;

import java.util.Scanner;

public class Exercicio_2 {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        int horasTrabalhadas, horasExtras, horasMinimo = 160;
        double valorHora;

        exibeTexto("DIGITE A QUANTIDADE DE HORAS TRABALHADAS: ");
        horasTrabalhadas = entrada.nextInt();

        exibeTexto("DIGITE O VALOR DA HORA: R$");
        valorHora = entrada.nextDouble();

        if (horasTrabalhadas > horasMinimo) {
            horasExtras = horasTrabalhadas - horasMinimo;
            horasTrabalhadas = horasMinimo;
        } else {
            horasExtras = 0;
        }

        exibeTexto("SALARIO: R$" + ((horasTrabalhadas * valorHora) + (horasExtras * (valorHora * 1.5))));
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
