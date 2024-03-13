package estruturaRepeticaoFor;

public class SequenciaFatorialImpar {
    public static void main(String[] args) {
        for(int contador = 1; contador <= 10; contador++) {
            if(verificaImpar(contador))
                exibeTexto("O NUMERO " + contador + " E IMPAR E SEU FATORIAL E: " + calculaFatorial(contador));
        }
    }

    private static boolean verificaImpar(int numero) {
        return numero % 2 != 0;
    }

    private static double calculaFatorial(int numero) {
        double saida = 1;

        for (;numero >= 1; numero--) {
            saida *= numero;
        }

        return saida;
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
