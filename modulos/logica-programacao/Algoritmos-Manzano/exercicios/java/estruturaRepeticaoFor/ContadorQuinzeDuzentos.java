package estruturaRepeticaoFor;

public class ContadorQuinzeDuzentos {
    public static void main(String[] args) {
        for(int contador = 15; contador <= 200; contador++) {
            exibeTexto("O QUADRADO DO NUMERO "+ contador + " E: " + (contador * contador));
        }
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
