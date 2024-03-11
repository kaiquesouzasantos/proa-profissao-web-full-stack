package estruturaRepeticaoFor;

public class DivisiveisQuatro {
    public static void main(String[] args) {
        for(int contador = 1; contador <= 200; contador++) {
            if (contador % 4 == 0)
                exibeTexto("O NUMERO " + contador + " E POR QUATRO");
        }
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
