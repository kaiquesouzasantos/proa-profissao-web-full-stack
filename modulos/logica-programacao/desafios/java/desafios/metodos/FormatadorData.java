package desafios.metodos;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class FormatadorData {
    /*
        Crie um método chamado ObterDataAtual que não receba parâmetros e retorne a data atual como uma string no formato "dd/MM/yyyy".
    */

    public static void main(String[] args) {
        exibeTexto("DATA ATUAL: " + getDataAtual());
    }

    private static String getDataAtual() {
        return DateTimeFormatter
                .ofPattern("dd/MM/YYYY")
                .format(LocalDateTime.now());
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
