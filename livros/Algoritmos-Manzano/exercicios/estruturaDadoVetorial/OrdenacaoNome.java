package estruturaDadoVetorial;

import java.util.Arrays;
import java.util.Scanner;

public class OrdenacaoNome {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        int quantidadeItens = 20;
        String[] lista = new String[quantidadeItens];

        for(int contador = 0; contador < quantidadeItens; contador++) {
            exibeTexto("DIGITE O " + (contador + 1) + " NOME A SER PROCESSADO: ");
            lista[contador] = entrada.next();
        }

        Arrays.sort(lista);

        exibeTexto("NOMES: " + Arrays.toString(lista));

        exibeTexto("DIGITE UM NOME A SER PESQUISADO NA LISTA: ");
        String nomePesquisado = entrada.next();

        for (int contador = 0; contador < quantidadeItens; contador++) {
            if (lista[contador].equalsIgnoreCase(nomePesquisado)) {
                exibeTexto("NOME: " + lista[contador] + " | INDICE: " + contador);
                break;
            }

            exibeTexto("NOME: " + lista[contador] + " | INDICE: NAO ENCONTRADO");
        }
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
