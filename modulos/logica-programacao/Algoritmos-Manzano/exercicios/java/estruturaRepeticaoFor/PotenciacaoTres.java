package estruturaRepeticaoFor;

public class PotenciacaoTres {
    public static void main(String[] args) {
        for (int contador = 0; contador <= 15; contador++) {
            exibeTexto(3 +"^" + contador +" = " + retornaExponenciado(3, contador));
        }
    }

    private static double retornaExponenciado(int numero, int expoente) {
        return Math.pow(numero, expoente);
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
