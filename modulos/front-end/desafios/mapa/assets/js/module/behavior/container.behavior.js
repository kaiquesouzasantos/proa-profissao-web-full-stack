import { DOM } from "../service/dom.service.js"

export class Container {
    constructor() {
        this.container = DOM.getElement("data-container")
    }

    addMap() {
        this.container.innerHTML = "<div id='mapid' class='map'></div>"
        return this
    }

    addError() {
        this.container.innerHTML = "<h2>Enable Use Your Localization and Reload Page</h2>"
        return this
    }
}