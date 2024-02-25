export class Requester {
    static getIdentificationProduct() {
        return new URLSearchParams(window.location.search).get("id")
    }
}