package estruturaRepeticaoDoWhile;

public class SomatorioGraos {
    public static void main(String[] args) {
        int contador = 1;
        double graos = 1, soma = 0;

        do {
            graos *= 2;
            soma += graos;

            contador++;
        } while (contador <= 64);

        exibeTexto("SOMATORIO DE GRAOS: " + soma);
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
