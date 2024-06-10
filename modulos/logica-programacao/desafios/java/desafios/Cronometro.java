package desafios;

public class Cronometro {
    public static void main(String[] args) throws Exception{
        for (int contadorMinuto = 0; contadorMinuto < 60; contadorMinuto++) {
            for(int contadorSegundo = 0; contadorSegundo < 60; contadorSegundo++) {
                System.out.println(formatNumber(contadorMinuto) + ":" + formatNumber(contadorSegundo));
                Thread.sleep(1000);
            }
        }
    }

    private static String formatNumber(int numero) {
        return (numero < 10) ? "0"+numero : ""+numero;
    }
}
