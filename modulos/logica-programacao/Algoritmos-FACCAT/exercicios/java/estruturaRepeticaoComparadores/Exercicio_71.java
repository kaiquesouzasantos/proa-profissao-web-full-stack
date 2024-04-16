package estruturaRepeticaoComparadores;

import java.util.Scanner;

public class Exercicio_71 {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        int maior = 0, media = 0, numero, leituras;

        exibeTexto("DIGITE A QUANTIDADE DE NUMEROS QUE IRA INSERIR: ");
        leituras = entrada.nextInt();

        for(int contador = 1; contador <= leituras; contador++) {
            exibeTexto("DIGITE O " + contador + " VALOR: ");
            media += numero = entrada.nextInt();

            if(numero > maior)
                maior = numero;
        }

        exibeTexto("MAIOR VALOR: " + maior);
        exibeTexto("MEDIAS DOS VALORES: " + (media / leituras));
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
