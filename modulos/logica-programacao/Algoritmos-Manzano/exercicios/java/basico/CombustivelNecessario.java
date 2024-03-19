package basico;

import java.util.Scanner;

public class CombustivelNecessario {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        exibeTexto("DIGITE O TEMPO NECESSARIO (H): ");
        int tempoGasto = entrada.nextInt();

        exibeTexto("DIGITE A VELOCIDADE MEDIA (KM): ");
        int velocidade = entrada.nextInt();

        double combustivelNecessario = calculaCombustivelNecessario(
                calculaDistancia(tempoGasto, velocidade), 12
        );

        exibeTexto(
                "LITROS NECESSARIOS PARA A VIAGEM: " + combustivelNecessario + " L"
        );
    }

    private static int calculaDistancia(int tempoGasto, int velocidade) {
        return tempoGasto * velocidade;
    }

    private static double calculaCombustivelNecessario(int distancia, int litroPorQuilometro) {
        return distancia / litroPorQuilometro;
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
