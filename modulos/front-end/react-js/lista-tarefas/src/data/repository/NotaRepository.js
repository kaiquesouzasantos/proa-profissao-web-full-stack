export default class NotaRepository {
    static init() {
        localStorage.setItem("notaList", JSON.stringify([]))
    }

    static get() {
        return JSON.parse(localStorage.getItem("notaList"))
    }

    static remove(content) {
        localStorage.setItem("notaList", JSON.stringify(
            this.get().filter(item => item.conteudo !== content)
        ))
    }

    static set(item) {
        let list = this.get()
        list.push(item)
        localStorage.setItem("notaList", JSON.stringify(list))
    }
}