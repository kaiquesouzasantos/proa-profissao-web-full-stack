import { DOM } from "../service/dom.service.js"

export class Container {
    constructor(date, referenceYears, referenceMonths, referenceDays) {
        this.date = date

        this.referenceYears = DOM.getElementByData(referenceYears)
        this.referenceMonths = DOM.getElementByData(referenceMonths)
        this.referenceDays = DOM.getElementByData(referenceDays)
    }

    renderDisplay() {
        this.setElement(this.referenceDays, this.date.getDays())
        this.setElement(this.referenceMonths, this.date.getMonths())
        this.setElement(this.referenceYears, this.date.getYears())
    }

    setElement(element, content) {
        element.textContent = content || "0"
    }

    static stateError(ageValid) {
        DOM.getElementByData("error").style.display = (ageValid) ? "none" : "block"
    }
}