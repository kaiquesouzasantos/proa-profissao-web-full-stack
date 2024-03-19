package estruturaRepeticaoWhile;

public class SomaCentena {
    public static void main(String[] args) {
        int contador = 1, soma = 0;

        while (contador <= 100) {
            soma += contador;
            contador++;
        }

        exibeTexto("SOMA DOS NUMEROS ENTRE 1 E 100 E: " + soma);
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
