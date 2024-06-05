package desafios;

import java.util.Scanner;

public class CategorizandoMassaCorporal {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        exibeTexto("DIGITE O SEU PESO[KG]: ");
        double peso = entrada.nextDouble();

        exibeTexto("DIGITE A SUA ALTURA[M]: ");
        double altura = entrada.nextDouble();

        double massaCorporal = calculaMassaCorporal(peso, altura);

        exibeTexto(
                String.format("COM O IMC [%.2f] VOCE ESTA CATEGORIZADO EM: %s", massaCorporal, retornaCategoria(massaCorporal))
        );
    }

    private static double calculaMassaCorporal(double peso, double altura) {
        return (peso/ (altura * altura));
    }

    private static String retornaCategoria(double imc) {
        if (imc <= 18.5)
            return "ABAIXO DO PESO";
        else if (imc >= 18.6 && imc <= 24.9)
            return "PESO NORMAL";
        else if (imc >= 25.0 && imc <= 29.9)
            return "SOBREPESO";
        else if (imc >= 30.0 && imc <= 34.9)
            return "OBESIDADE GRAU 1";
        else if (imc >= 35.0 && imc <= 39.9)
            return "OBESIDADE GRAU 2";
        else
            return "OBESIDADE GRAU 3";
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
