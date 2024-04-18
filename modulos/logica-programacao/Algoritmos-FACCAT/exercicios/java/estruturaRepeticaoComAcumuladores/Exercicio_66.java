package estruturaRepeticaoComAcumuladores;

import java.util.Scanner;

public class Exercicio_66 {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        int somaIntervalo = 0, valorA, valorB, maior, menor;

        exibeTexto("DIGITE O NUMERO DE INCIO(MENOR): ");
        valorA = entrada.nextInt();

        exibeTexto("DIGITE O NUMERO DE FINAL(MNIOR): ");
        valorB = entrada.nextInt();

        if(valorA > valorB) {
            maior = valorA;
            menor = valorB;
        } else {
            maior = valorB;
            menor = valorA;
        }

        for (int contador = menor; contador <= maior; contador++) {
            somaIntervalo += contador;
        }

        exibeTexto("SOMATORIA RESULTANTE DO INTERVALOR[" + menor + "," + maior + "]: " + somaIntervalo);
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
