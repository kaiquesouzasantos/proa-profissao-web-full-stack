package estruturaRepeticaoWhile;

public class SequenciaFibonacci {
    public static void main(String[] args) {
        int termo = 1, atual = 0, posterior = 1;

        while (termo <= 15) {
            // o termo posterior e a soma dele com o atual
            posterior += atual;

            // o termo atual e a diferenca entre o posterior(atualizado) e o atual
            // sendo assim, eu incremento o termo posterior e mantenho a sequencia atual(Ex: 3 + 5 = 8 (posterior), 8 - 3 = 5 (atual))
            atual = posterior - atual;
            termo++;
        }

        exibeTexto("15 TERMO DA SEQUENCIA FIBONACCI: " + atual);
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
