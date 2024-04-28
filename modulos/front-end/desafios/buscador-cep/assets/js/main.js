class ClientCep {
    constructor(responseView) {
        this.responseView = responseView
    }

    async setInformations(cep) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(response => {
                this.responseView.setOutputContainer(response)
            })
            .catch(
                () => {
                    this.responseView.setVisibleContainer("none")
                    alert("CEP NAO ENCONTRADO, TENTE NOVAMENTE!")
                }
            )
    }
}

class ResponseView {
    constructor() {
        this.container = DOMSelector.getByData("result-informations")
        this.logradouro = DOMSelector.getByData("logradouro")
        this.complemento = DOMSelector.getByData("complemento")
        this.estado = DOMSelector.getByData("estado")
        this.cidade = DOMSelector.getByData("cidade")
        this.bairro = DOMSelector.getByData("bairro")
        this.ddd = DOMSelector.getByData("ddd")
    }

    setVisibleContainer(type) {
        this.container.style.display = type
    }

    setOutputContainer(response) {
        this.logradouro.value = this.returnResponseTraitment(response.logradouro)
        this.complemento.value = this.returnResponseTraitment(response.complemento)
        this.estado.value = this.returnResponseTraitment(response.uf)
        this.cidade.value = this.returnResponseTraitment(response.localidade)
        this.bairro.value = this.returnResponseTraitment(response.bairro)
        this.ddd.value = this.returnResponseTraitment(response.ddd)

        this.setVisibleContainer("block")
    }

    returnResponseTraitment(response) {
        return response || "Indisponivel"
    }
}

class DOMSelector {
    static getByData(data) {
        return document.querySelector(`[data-${data}]`)
    }
}

const clientCep = new ClientCep(new ResponseView())

DOMSelector.getByData("search").addEventListener("click", () => {
    clientCep.setInformations(DOMSelector.getByData("input").value)
})