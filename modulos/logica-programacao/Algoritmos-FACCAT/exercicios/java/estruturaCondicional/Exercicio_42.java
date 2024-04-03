package estruturaCondicional;

import java.util.Scanner;

public class Exercicio_42 {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        int codigo, anoNascimento, anoEntrada, idade, tempoEmpresa, anoAtual = 2024;

        exibeTexto("DIGITE O NUMERO DO EMPREGADO: ");
        codigo = entrada.nextInt();

        exibeTexto("DIGITE O ANO DE NASCIMENTO DO EMPREGADO: ");
        anoNascimento = entrada.nextInt();

        exibeTexto("DIGITE O ANO DE ENTRADA NA EMPRESA: ");
        anoEntrada = entrada.nextInt();

        idade = anoAtual - anoNascimento;
        tempoEmpresa = anoAtual - anoEntrada;

        exibeTexto("FUNCIONARIO:" + codigo);
        exibeTexto("IDADE:" + idade + " ANOS");
        exibeTexto("TRABALHANDO:" + tempoEmpresa + " ANOS");
        exibeTexto("SITUACAO:" + verificaEstadoAposentadoria(idade, tempoEmpresa));
    }

    private static String verificaEstadoAposentadoria(int idade, int tempoEmpresa) {
        if((idade >= 65) || (tempoEmpresa >= 30))
            return "PODE REQUERER APOSENTADORIA";
        else if((idade >= 60) && (tempoEmpresa >= 25))
            return "PODE REQUERER APOSENTADORIA";

        return "NAO PODE REQUERER APOSENTADORIA";
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
