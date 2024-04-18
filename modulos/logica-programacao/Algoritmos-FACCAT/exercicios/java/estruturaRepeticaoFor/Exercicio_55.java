package estruturaRepeticaoFor;

public class Exercicio_55 {
    public static void main(String[] args) {
        for(int contador = 1; contador <= 10; contador++) {
            exibeTexto("8 x " + contador + " = " + (contador * 8));
        }
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
