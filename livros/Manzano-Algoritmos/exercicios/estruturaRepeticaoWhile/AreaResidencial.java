package estruturaRepeticaoWhile;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class AreaResidencial {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        List<Comodo> comodos = new ArrayList<>();
        String prosseguir = "SIM";

        while (prosseguir.equalsIgnoreCase("SIM")) {
            exibeTexto("DIGITE O NOME DO COMODO: ");
            String nome = entrada.next().toUpperCase();

            exibeTexto("DIGITE A LARGURA DELE (M): ");
            double largura = entrada.nextDouble();

            exibeTexto("DIGITE O COMPRIMENTO DELE (M): ");
            double comprimento = entrada.nextDouble();

            exibeTexto("DESEJA CONTINUAR? [SIM / NAO]");
            prosseguir = entrada.next();

            comodos.add(new Comodo(nome, largura, comprimento));
        }

        exibeTexto(
                "AREA TOTAL CONSTRUIDA: " + comodos.stream().map(Comodo::getArea).reduce(Double::sum).orElse(0.0)
        );

        comodos.forEach(
                comodo -> exibeTexto(comodo.toString())
        );
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}

class Comodo {
    private final String nome;
    private final double area;

    public Comodo(String nome, double largura, double comprimento) {
        this.nome = nome;
        this.area = this.calculaArea(largura, comprimento);
    }

    public double getArea() {
        return area;
    }

    private double calculaArea(double largura, double comprimento) {
        return largura * comprimento;
    }

    @Override
    public String toString() {
        return "COMODO: " + nome + " | AREA (M^2): " + area;
    }
}
