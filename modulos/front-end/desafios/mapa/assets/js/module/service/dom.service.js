export class DOM {
    static getElement(query) {
        return document.querySelector(`[${query}]`)
    }
}