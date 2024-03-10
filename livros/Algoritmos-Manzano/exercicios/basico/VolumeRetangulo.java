package basico;

import java.util.Scanner;

public class VolumeRetangulo {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        exibeTexto("DIGITE O COMPRIMENTO DA CAIXA (CM): ");
        int comprimento = entrada.nextInt();

        exibeTexto("DIGITE A LARGURA DA CAIXA (CM): ");
        int largura = entrada.nextInt();

        exibeTexto("DIGITE A ALTURA DA CAIXA (CM): ");
        int altura = entrada.nextInt();

        exibeTexto(
                "VOLUME TOTAL: " + calculaVolumeRetangular(
                        comprimento, largura, altura
                ) + " UN^3"
        );
    }

    private static int calculaVolumeRetangular(int comprimento, int largura, int altura) {
        return (comprimento * largura * altura);
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
