package basico;

import java.util.List;
import java.util.Scanner;

public class ApuracaoEleitoral {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        // BLOCO DE ATRIBUICAO DE TIPOS DE VOTOS
        List<Candidato> tiposCandidatos = List.of(
                new Candidato("NULO"), new Candidato("BRANCO"),
                new Candidato("A"), new Candidato("B"), new Candidato("C")
        );

        // ITERACAO PARA ATRIBUICAO DE VOTOS
        tiposCandidatos.forEach(
                candidato -> {
                    exibeTexto("DIGITE A QUANTIDADE DE VOTOS DO CANDIDATO DO TIPO " + candidato.getNome() + ":");
                    candidato.setVotos(entrada.nextInt());
                }
        );

        // ATRIBUICAO DE SOMA DE VOTOS
        int totalVotos = tiposCandidatos.stream().map(Candidato::getVotos).reduce(Integer::sum).get();

        // BLOCO DE EXIBICAO DE ESTATISTICAS
        exibeTexto("TOTAL DE VOTOS: " + totalVotos);

        for(Candidato candidato : tiposCandidatos) {
            double percentualVotos = calculaPercentualRelacional(totalVotos, candidato.getVotos());
            exibeTexto("CANDIDATO " + candidato.getNome() + " | PERCENTUAL DE VOTOS: " + percentualVotos + "%");
        }
    }

    private static double calculaPercentualRelacional(int total, int valor) {
        return ((double) valor / total) * 100;
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}

class Candidato {
    private final String nome;
    private int votos;

    public Candidato(String nome) {
        this.nome = nome;
    }

    public String getNome() {
        return nome;
    }

    public void setVotos(int votos) {
        this.votos = votos;
    }

    public int getVotos() {
        return votos;
    }
}
