import { Manipulator } from "./component/manipulator.component.js"
import { Requester } from "./component/requester.component.js"
import { CIDADE_LIST } from "./data/cidade.list.js"

/* Renderiza as Cidades na Home */
document.addEventListener("DOMContentLoaded", () => {
    if(document.getElementsByClassName("main-home")[0]) {
        CIDADE_LIST.forEach(
            cidade => Manipulator.addCidade(cidade)
        )
    }
})

/* Renderiza Informacoes da Cidade Respectiva a Clicada na Home na Tela de Detalhamento */
document.addEventListener("DOMContentLoaded", () => {
    if(document.getElementsByClassName("main-detalhamento")[0]) {
        Manipulator.addFullCidade(
            CIDADE_LIST.find(
                cidade => cidade.id == Requester.requestHttp()
            )
        )
    }
})