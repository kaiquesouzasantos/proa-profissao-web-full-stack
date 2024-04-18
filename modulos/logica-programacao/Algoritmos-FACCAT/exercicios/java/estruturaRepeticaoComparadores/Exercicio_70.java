package estruturaRepeticaoComparadores;

import java.util.Scanner;

public class Exercicio_70 {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        int maior = 0, menor = 10000000000, numero;

        for(int contador = 1; contador <= 10; contador++) {
            exibeTexto("DIGITE O " + contador + " VALOR: ");
            numero = entrada.nextInt();

            if(numero > maior)
                maior = numero;
            else if(numero < menor)
                menor = numero;
        }

        exibeTexto("MAIOR VALOR: " + maior);
        exibeTexto("MENOR VALOR: " + menor);
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
