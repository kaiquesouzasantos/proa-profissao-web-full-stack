package desafios.metodos;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class MediaPonderada {
    /*
        Escreva uma função que calcule a média ponderada de três valores, onde os pesos são passados como argumentos.
    */

    private static final Scanner entrada = new Scanner(System.in);
    private static final List<Valor> valores = new ArrayList<>();

    public static void main(String[] args) {
        exibeTexto("CALCULO DE MEDIA PONDERADA");

        for(int i = 1; i <= 3; i++) {
            exibeTexto("DIGITE O " + i +" VALOR: ");
            double valor = entrada.nextDouble();

            exibeTexto("QUAL E O SEU PESO? ");
            double peso = entrada.nextDouble();

            valores.add(
                    new Valor(peso, valor)
            );
        }

        exibeTexto("MEDIA PONDERADA DO CONJUNTO: " + calculaMediaPonderada());
    }

    private static double calculaMediaPonderada() {
        return getSomaValores() / getSomaPeso();
    }

    private static double getSomaValores() {
        return valores.stream().map(valor -> valor.getPeso() * valor.getValor()).reduce(Double::sum).orElse(0.0);
    }

    private static double getSomaPeso() {
        return valores.stream().map(Valor::getPeso).reduce(Double::sum).orElse(0.0);
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}

class Valor {
    private final double peso, valor;

    public Valor(double peso, double valor) {
        this.peso = peso;
        this.valor = valor;
    }

    public double getPeso() {
        return peso;
    }

    public double getValor() {
        return valor;
    }
}
