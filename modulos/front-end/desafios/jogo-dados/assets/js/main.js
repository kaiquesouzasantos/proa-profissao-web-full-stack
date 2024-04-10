import { Roll } from "./module/behavior/roll.behavior.js"
import { DOM } from "./module/service/dom.service.js"
import { diceList } from "./module/data/dice.data.js"

window.addEventListener("DOMContentLoaded", () => {
    new Roll(
        "img", diceList
    ).roll()
})

DOM.getElement("data-sorted").addEventListener("click", () => {
    new Roll(
        "img", diceList
    ).roll()
})