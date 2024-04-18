export class DOM {
    static getById(id) {
        return document.getElementById(id)
    }

    static getContainer() {
        return document.querySelector("[data-container]")
    }
}