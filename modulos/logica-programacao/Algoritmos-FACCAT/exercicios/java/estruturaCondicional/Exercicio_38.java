package estruturaCondicional;

import java.util.Scanner;

public class Exercicio_38 {
    private static final Scanner entrada = new Scanner(System.in);

    public static void main(String[] args) {
       int usuario, senha, usuarioCorreto = 1234, senhaCorreta = 9999;

       exibeTexto("DIGITE O USUARIO: ");
       usuario = entrada.nextInt();

       if(usuario == usuarioCorreto) {
           exibeTexto("USUARIO CORRETO!");

           exibeTexto("DIGITE A SENHA: ");
           senha = entrada.nextInt();

           if(senha == senhaCorreta)
               exibeTexto("ACESSO PERMITIDO");
           else
               exibeTexto("SENHA INCORRETA");
       } else {
           exibeTexto("USUARIO INCORRETO");
       }
    }

    private static void exibeTexto(String texto) {
        System.out.println(texto);
    }
}
