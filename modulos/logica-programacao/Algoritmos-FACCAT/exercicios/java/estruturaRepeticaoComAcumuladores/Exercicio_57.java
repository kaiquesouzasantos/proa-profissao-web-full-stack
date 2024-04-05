package estruturaRepeticaoComAcumuladores;

public class Exercicio_57 {
    public static void main(String[] args) {
        int contador = 1;

        while (contador <= 10) {
            exibeTexto(String.valueOf(contador));
            contador++;
        }
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
