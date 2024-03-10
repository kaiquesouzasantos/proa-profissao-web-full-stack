package basico;

import java.util.Scanner;

public class PrestacaoAtrasada {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        exibeTexto("DIGITE O VALOR INICIAL DA PRESTACAO: R$");
        double valor = entrada.nextDouble();

        exibeTexto("DIGITE O PERCENTUAL DE TAXA: ");
        double percentualTaxa = entrada.nextDouble();

        exibeTexto("DIGITE O TEMPO ATRASADO (D): ");
        int tempo = entrada.nextInt();

        exibeTexto(
                "VALOR DA PRESTACAO A SER PAGA EM ATRASO: R$" + calculaValorPrestacao(
                        valor, calculaValorTaxaAdicional(
                                percentualTaxa, valor, tempo
                        )
                )
        );
    }

    private static double calculaValorTaxaAdicional(double percentualTaxa, double valor, int tempo) {
        return (valor * (percentualTaxa / 100)) * tempo;
    }

    private static double calculaValorPrestacao(double taxaAdicional, double valor) {
        return taxaAdicional + valor;
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }

}
