package estruturaRepeticaoWhile;

public class MultiploDezCelsius {
    public static void main(String[] args) {
        int contador = 1;

        while (contador <= 10) {
            int celsius = 10 * contador;
            exibeTexto(celsius + " C = " + converteCelsiusParaFahrenheit(celsius) + " F");

            contador++;
        }
    }

    private static double converteCelsiusParaFahrenheit(int celsius) {
        return ((9 * celsius) + 160) / 5;
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
