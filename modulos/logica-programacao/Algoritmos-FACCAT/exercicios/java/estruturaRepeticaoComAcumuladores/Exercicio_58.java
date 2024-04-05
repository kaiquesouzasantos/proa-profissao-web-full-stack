package estruturaRepeticaoComAcumuladores;

public class Exercicio_58 {
    public static void main(String[] args) {
        int contador = 10;

        do {
            exibeTexto(String.valueOf(contador));
            contador--;
        } while (contador >= 1);
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
