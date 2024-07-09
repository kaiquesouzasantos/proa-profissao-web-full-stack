package desafios.vetores.application.service;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class SumarizadorService {
    private final List<Integer> lista;

    public SumarizadorService(List<Integer> lista) {
        this.lista = new ArrayList<>(lista);
    }

    public int getSoma() {
        return getListaStream().reduce(Integer::sum).orElse(0);
    }

    public int getMaior() {
        return getListaStream().reduce(Integer::max).orElse(0);
    }

    public int getMenor() {
        return getListaStream().reduce(Integer::min).orElse(0);
    }

    public double getMedia() {
        return getSoma() / (double) lista.size();
    }

    public List<Integer> getInvertido() {
        return getListaStream()
                .sorted(Comparator.reverseOrder())
                .collect(Collectors.toList());
    }

    public List<Integer> getPares() {
        return getListaStream()
                .filter(valor -> valor % 2 == 0)
                .collect(Collectors.toList());
    }

    public List<Integer> getCrescente() {
        return getListaStream()
                .sorted()
                .collect(Collectors.toList());
    }

    public Map<Integer, Integer> getContadorOcorrencias() {
        Map<Integer, Integer> contabilizacao = new HashMap<>();

        new HashSet<>(lista)
                .forEach(valor -> contabilizacao.put(valor, (int) lista.stream().filter(numero -> numero == valor).count()));

        return contabilizacao;
    }

    public boolean exists(int numero) {
        return lista.stream().anyMatch(valor -> valor == numero);
    }

    public void remove(int numero) {
        lista.remove(numero);
    }

    public void appendVetor(List<Integer> novaLista) {
        lista.addAll(novaLista);
    }

    private Stream<Integer> getListaStream() {
        return lista.stream();
    }
}