export class DOM {
    static getElementByData(query) {
        return document.querySelector(`[data-${query}]`)
    }
}