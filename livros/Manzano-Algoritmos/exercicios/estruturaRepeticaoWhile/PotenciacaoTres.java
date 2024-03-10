package estruturaRepeticaoWhile;

public class PotenciacaoTres {
    public static void main(String[] args) {
        int contador = 0;

        while (contador <= 15) {
            exibeTexto(3 +"^" + contador +" = " + retornaExponenciado(3, contador));
            contador++;
        }
    }

    private static double retornaExponenciado(int numero, int expoente) {
        return Math.pow(numero, expoente);
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
