package estruturaRepeticaoComAcumuladores;

public class Exercicio_67 {
    public static void main(String[] args) {
        int somaIntervalo = 0;

        for (int contador = 15; contador <= 100; contador++) {
            somaIntervalo += contador;
        }

        exibeTexto("SOMA RESULTANTE DO INTERVALO[15, 100]: " + somaIntervalo);
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
