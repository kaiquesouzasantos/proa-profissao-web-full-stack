package estruturaRepeticaoFor;

public class SequenciaFibonacci {
    public static void main(String[] args) {
        int atual = 0;

        for (int termo = 1, posterior = 1; termo <= 15; termo++) {
            posterior += atual;
            atual = posterior - atual;
        }

        exibeTexto("15 TERMO DA SEQUENCIA FIBONACCI: " + atual);
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
