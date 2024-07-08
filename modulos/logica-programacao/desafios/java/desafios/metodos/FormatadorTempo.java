package desafios.metodos;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class FormatadorTempo {
    /*
        Crie um método chamado HoraAtual que não receba parâmetros e retorne a hora atual como uma string no formato "HH:mm".
    */

    public static void main(String[] args) {
        exibeTexto("HORARIO ATUAL: " + getHorarioAtual());
    }

    private static String getHorarioAtual() {
        return DateTimeFormatter
                .ofPattern("HH:mm:ss")
                .format(LocalDateTime.now());
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
