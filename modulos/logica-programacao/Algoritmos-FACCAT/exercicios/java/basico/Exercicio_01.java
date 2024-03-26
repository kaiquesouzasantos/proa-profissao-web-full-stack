package basico;

public class Exercicio_01 {
    public static void main(String[] args) {
        int valorA = 10, valorB = 20, valorAuxiliar;

        exibeTexto("VALOR A: " + valorA);
        exibeTexto("VALOR B: " + valorB);

        valorAuxiliar = valorB;
        valorB = valorA;
        valorA = valorAuxiliar;

        exibeTexto("VALOR A: " + valorA);
        exibeTexto("VALOR B: " + valorB);
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
