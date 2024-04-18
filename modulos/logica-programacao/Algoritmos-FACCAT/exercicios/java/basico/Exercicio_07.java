package basico;

import java.util.Scanner;

public class Exercicio_07 {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        exibeTexto("DIGITE SUA IDADE NA UNIDADE [ANO]: ");
        int ano = entrada.nextInt();

        exibeTexto("DIGITE SUA IDADE NA UNIDADE [MES]: ");
        int mes = entrada.nextInt();

        exibeTexto("DIGITE SUA IDADE NA UNIDADE [DIA]: ");
        int dia = entrada.nextInt();
        
        exibeTexto("IDADE EM DIAS: " + contabilizaDias(ano, mes, dia));
    }

    private static int contabilizaDias(int ano, int mes, int dia) {
        return dia + (365 * ano) + (30 * mes);
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
