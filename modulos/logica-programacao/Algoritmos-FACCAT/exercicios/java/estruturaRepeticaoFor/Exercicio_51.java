package estruturaRepeticaoFor;

public class Exercicio_51 {
    public static void main(String[] args) {
        for(int contador = 10; contador >= 1; contador--) {
            exibeTexto(String.valueOf(contador));
        }
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
