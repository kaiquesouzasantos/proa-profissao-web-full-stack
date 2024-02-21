import { Constructor } from "./contructor.component.js"

export class Manipulator {
    static addCidade(cidade) {
        this.addElementHTML(
            document.getElementsByTagName("section")[0],
            Constructor.constructView(cidade)
        )
    }

    static addFullCidade(cidade) {
        this.addElementHTML(
            document.getElementsByTagName("main")[0],
            Constructor.constructFullView(cidade)
        )
    }

    static addElementHTML(element, content) {
        element.innerHTML += `${content}`
    }
}