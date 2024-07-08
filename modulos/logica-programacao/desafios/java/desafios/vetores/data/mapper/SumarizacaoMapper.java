package desafios.vetores.data.mapper;

import desafios.vetores.application.service.SumarizadorService;
import desafios.vetores.data.dto.SumarizacaoDto;

public class SumarizacaoMapper {
    public static SumarizacaoDto toMapper(SumarizadorService service) {
        return new SumarizacaoDto(
                service.getSoma(), service.getMaior(), service.getMenor(),
                service.getMedia(), service.getInvertido(), service.getPares(),
                service.getCrescente(), service.getContadorOcorrencias()
        );
    }
}
