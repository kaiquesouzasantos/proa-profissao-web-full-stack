export class DOM {
    static getElement(query) {
        return document.querySelector(`[${query}]`)
    }

    static getElements(query) {
        return document.querySelectorAll(query)
    }
}