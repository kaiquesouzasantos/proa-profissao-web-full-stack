export class DOMSelector {
    static query(selector) {
        return document.querySelector(selector)
    }

    static queryAll(selector) {
        return document.querySelectorAll(selector)
    }
}