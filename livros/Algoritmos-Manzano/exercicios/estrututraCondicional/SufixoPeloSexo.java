package estrututraCondicional;

import java.util.Scanner;

public class SufixoPeloSexo {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        exibeTexto("DIGITE O NOME: ");
        String nome = entrada.next().toUpperCase();

        exibeTexto("PREFIXO MASCULINO OU FEMININO? [M / F]");
        String sexo = entrada.next();

        exibeTexto("OLA, " + concatenaSufixo(nome, sexo));
    }

    private static String concatenaSufixo(String nome, String sexo) {
         return nome + " " + retornaSufixo(sexo);
    }

    private static String retornaSufixo(String sexo) {
        if (sexo.equalsIgnoreCase("M"))
            return "SR.";
        else if (sexo.equalsIgnoreCase("F"))
            return "SRA.";
        return "NA.";
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
