package desafios.vetores;

import desafios.vetores.application.service.SumarizadorService;
import desafios.vetores.component.util.FactoryUtil;
import desafios.vetores.data.mapper.SumarizacaoMapper;

public class SumarizadorVetor {
    public static void main(String[] args) {
        System.out.println(
                SumarizacaoMapper.toMapper(
                        new SumarizadorService(FactoryUtil.getLista(100)))
        );
    }
}
