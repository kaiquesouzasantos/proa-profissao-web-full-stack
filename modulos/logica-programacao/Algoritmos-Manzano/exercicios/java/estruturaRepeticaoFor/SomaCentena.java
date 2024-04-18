package estruturaRepeticaoFor;

public class SomaCentena {
    public static void main(String[] args) {
        int soma = 0;

        for (int contador = 1; contador <= 100; contador++) {
            soma += contador;
        }

        exibeTexto("SOMA DOS NUMEROS ENTRE 1 E 100 E: " + soma);
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
