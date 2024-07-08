package desafios.vetores.application.service;

import java.util.*;
import java.util.stream.Collectors;

public class SumarizadorService {
    private List<Integer> lista;

    public SumarizadorService(List<Integer> lista) {
        this.lista = new ArrayList<>(lista);
    }

    public int getSoma() {
        return lista.stream().reduce(Integer::sum).orElse(0);
    }

    public int getMaior() {
        return lista.stream().reduce(Integer::max).orElse(0);
    }

    public int getMenor() {
        return lista.stream().reduce(Integer::min).orElse(0);
    }

    public double getMedia() {
        return getSoma() / (double) lista.size();
    }

    public List<Integer> getInvertido() {
        return lista.stream()
                .sorted(Comparator.reverseOrder())
                .collect(Collectors.toList());
    }

    public List<Integer> getPares() {
        return lista.stream()
                .filter(valor -> valor % 2 == 0)
                .collect(Collectors.toList());
    }

    public List<Integer> getCrescente() {
        return lista.stream()
                .sorted()
                .collect(Collectors.toList());
    }

    public Map<Integer, Integer> getContadorOcorrencias() {
        Map<Integer, Integer> contabilizacao = new HashMap<>();

        lista.stream()
                .collect(Collectors.toSet())
                .forEach(valor -> contabilizacao.put(valor, (int) lista.stream().filter(numero -> numero == valor).count()));

        return contabilizacao;
    }

    public boolean exists(int numero) {
        return lista.stream().anyMatch(valor -> valor == numero);
    }

    public void remove(int numero) {
        lista = lista.stream()
                .filter(valor -> valor != numero)
                .collect(Collectors.toList());
    }

    public void appendVetor(List<Integer> novaLista) {
        lista.addAll(novaLista);
    }
}