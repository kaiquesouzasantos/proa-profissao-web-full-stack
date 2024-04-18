package estruturaRepeticaoFor;

public class Exercicio_52 {
    public static void main(String[] args) {
        for(int contador = 101; contador <= 110; contador++) {
            exibeTexto(String.valueOf(contador));
        }
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
