package estruturaRepeticaoComparadores;

import java.util.Scanner;

public class Exercicio_72 {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        int leituras = 15;
        double maior = 0, media = 0, valor;

        for(int contador = 1; contador <= leituras; contador++) {
            exibeTexto("DIGITE O PRECO DO PRODUTO " + contador + ": R$");
            media += valor = entrada.nextInt();

            if(valor > maior)
                maior = valor;
        }

        exibeTexto("PRODUTO MAIS CARO: R$ " + maior);
        exibeTexto("MEDIAS DE PRECOS: R$ " + (media / leituras));
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
