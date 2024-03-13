package estruturaDadoVetorialBuscaBinaria;

import java.util.Arrays;
import java.util.Random;

public class NumeroBuscaBinaria {
    public static void main(String[] args) {
        int quantidadeItens = 10;
        int[] listaA = {1,2,3,4,5,6,7,8,9,19};

        exibeTexto("LISTA A: " + Arrays.toString(listaA));

        /*
        Bubble Sort
            itera sobre uma lista de elementos, comparando cada elemento com seus sucessores e os troca de posição se estiverem fora de ordem,
            movendo os elementos menores para a esquerda e os maiores para a direita.
        */
        for (int i = 0; i < quantidadeItens; i++) {
            for (int j = i + 1; j < quantidadeItens; j++) {
                if (listaA[i] > listaA[j]) {
                    int numero = listaA[i];
                    listaA[i] = listaA[j];
                    listaA[j] = numero;
                }
            }
        }

        exibeTexto("LISTA A ORDENADA: " + Arrays.toString(listaA));

        /*
            Algoritmo de busca binaria em vetores que segue o paradigma de divisão e conquista. Ela parte do pressuposto de que o vetor está ordenado e
            realiza sucessivas divisões do espaço de busca comparando o elemento buscado com o elemento no meio do vetor.

            O 'meio' e a resultante da media aritmetica da soma dos INDICES dos extremos.
        */
        int comeco = 0, fim = quantidadeItens - 1, meio, pesquisado = 0;

        while (comeco <= fim) {
            meio = (comeco + fim) / 2;

            if (pesquisado == listaA[meio]) {
                exibeTexto("ENCONTRADO COM SUCESSO | INDICE: " + meio);
                break;
            } else if (pesquisado < listaA[meio]) {
                fim = meio - 1;
            } else {
                comeco = meio + 1;
            }
        }
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
