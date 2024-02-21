export class Requester {
    static requestHttp() {
        return new URLSearchParams(window.location.search).get("cidade")
    }
}