package estruturaRepeticaoFor;

public class MultiploDezCelsius {
    public static void main(String[] args) {
        for (int contador = 1; contador <= 10; contador++) {
            int celsius = 10 * contador;
            exibeTexto(celsius + " C = " + converteCelsiusParaFahrenheit(celsius) + " F");
        }
    }

    private static double converteCelsiusParaFahrenheit(int celsius) {
        return ((9 * celsius) + 160) / 5;
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
