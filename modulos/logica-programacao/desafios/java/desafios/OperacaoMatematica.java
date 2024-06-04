package desafios;

import java.util.Scanner;

public class OperacaoMatematica {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
        exibeTexto("DIGITE UMA NOTA A SER PROCESSADA [numero operado numero]: ");
        String expressao = entrada.nextLine();

        exibeTexto("RESULTADO: " + calculaExpressao(expressao));
    }

    private static double calculaExpressao(String expressao) {
        String[] separacao = separaExpressao(expressao);

        return executaOperacao(
            Double.parseDouble(separacao[0]), Double.parseDouble(separacao[2]), separacao[1]
        );
    }

    private static String[] separaExpressao(String expressao) {
        return expressao.split(" ");
    }

    private static double executaOperacao(double operando1, double operando2, String operador) {
        switch (operador) {
            case "+":
                return operando1 + operando2;
            case "-":
                return operando1 - operando2;
            case "*":
                return operando1 * operando2;
            case "/":
                if (operando2 == 0)
                    throw new IllegalArgumentException("Divisao por zero");
                return operando1 / operando2;
            default:
                throw new IllegalArgumentException("Operador invalido");
        }
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
