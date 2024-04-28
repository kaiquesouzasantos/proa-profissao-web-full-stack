export default class AcademicoRepository {
    static init() {
        localStorage.setItem(
            "academicoList", JSON.stringify([])
        )
    }

    static get() {
        return JSON.parse(localStorage.getItem("academicoList"))
    }

    static set(item) {
        let list = this.get()
        list.push(item)

        localStorage.setItem(
            "academicoList", JSON.stringify(list)
        )
    }
}
