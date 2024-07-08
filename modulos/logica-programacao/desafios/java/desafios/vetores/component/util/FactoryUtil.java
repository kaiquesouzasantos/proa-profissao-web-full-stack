package desafios.vetores.component.util;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class FactoryUtil {
    private static final Random random = new Random();

    public static List<Integer> getLista(int tamanho) {
        List<Integer> lista = new ArrayList<>();

        for(int i = 0; i < tamanho; i++) {
            lista.add(getNumeroAleatorio());
        }

        return lista;
    }

    private static int getNumeroAleatorio() {
        return random.nextInt(100) + 1;
    }
}
