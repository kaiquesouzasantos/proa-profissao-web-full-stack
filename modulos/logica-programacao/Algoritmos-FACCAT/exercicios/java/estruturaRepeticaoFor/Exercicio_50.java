package estruturaRepeticaoFor;

public class Exercicio_50 {
    public static void main(String[] args) {
        for(int contador = 1; contador <= 10; contador++) {
            exibeTexto(String.valueOf(contador));
        }
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
