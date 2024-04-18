package estruturaCondicional;

import java.util.Scanner;

public class Exercicio_25 {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        exibeTexto("DIGITE O NUMERO DA CONTA: ");
        int numeroConta = entrada.nextInt();

        exibeTexto("DIGITE O SALDO: R$");
        double saldo = entrada.nextDouble();

        exibeTexto("DIGITE VALOR A SER DEBITADO: R$");
        saldo -= entrada.nextDouble();

        exibeTexto("CONTA " + numeroConta + " TEM O SALDO: " + verificaSaldo(saldo));
    }

    private static String verificaSaldo(double saldo) {
        return (saldo > 0) ? "POSITIVO" : "NEGATIVO";
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
