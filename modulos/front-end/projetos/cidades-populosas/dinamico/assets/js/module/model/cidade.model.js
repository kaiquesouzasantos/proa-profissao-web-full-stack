export class Cidade {
    constructor(nome, populacao, descricao, imagem_reduzida, imagem_ampliada) {
        this.nome = nome
        this.populacao = populacao
        this.descricao = descricao
        this.imagem_reduzida = imagem_reduzida
        this.imagem_ampliada = imagem_ampliada
        this.id = this.factoryId()
    }

    factoryId() {
        return this.nome.toLowerCase().replace(" ", "-")
    }
}