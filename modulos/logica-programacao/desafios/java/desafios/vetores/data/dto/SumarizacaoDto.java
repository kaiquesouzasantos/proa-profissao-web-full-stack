package desafios.vetores.data.dto;

import java.util.List;
import java.util.Map;

public record SumarizacaoDto(
        int soma, int maior, int menor, double media,
        List<Integer> inversao, List<Integer> pares,
        List<Integer> crescente, Map<Integer, Integer> ocorrencias
) {
}
