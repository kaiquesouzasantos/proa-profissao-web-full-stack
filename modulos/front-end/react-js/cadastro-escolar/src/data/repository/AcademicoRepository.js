import { AcademicoModel } from "../model/AcademicoModel";

export default class AcademicoRepository {
    constructor() {
        this.reference = "academicoList"
        this.init()
    }

    init() {
        localStorage.setItem(
            this.reference, JSON.stringify([])
        )

        this.set(new AcademicoModel(
            "Kaique Souza Santos", "12345", "kaique@gmail.com", "senha123", "12/02/2006",
            "(00) 00000-0000", "PROA Profissao", "Vespertino"
        ))

        this.set(new AcademicoModel(
            "Kaique Souza Santos2", "12345", "kaique@gmail.com", "senha123", "12/02/2006",
            "(00) 00000-0000", "PROA Profissao", "Vespertino"
        ))
    }

    get() {
        return JSON.parse(localStorage.getItem(this.reference))
    }

    set(item) {
        let list = this.get()
        list.push(item)

        localStorage.setItem(
            this.reference, JSON.stringify(list)
        )
    }
}
