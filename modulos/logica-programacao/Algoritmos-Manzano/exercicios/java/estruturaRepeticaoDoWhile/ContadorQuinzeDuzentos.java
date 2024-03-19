package estruturaRepeticaoDoWhile;

public class ContadorQuinzeDuzentos {
    public static void main(String[] args) {
        int contador = 15;

        do {
            exibeTexto("O QUADRADO DO NUMERO "+ contador + " E: " + (contador * contador));
            contador++;
        } while (contador <= 200);
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
