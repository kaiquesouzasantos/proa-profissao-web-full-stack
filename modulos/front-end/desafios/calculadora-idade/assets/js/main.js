import { DOM } from "./module/service/dom.service.js"
import { Age } from "./module/service/age.service.js"
import { Container } from "./module/behavior/container.behavior.js"
import { DateValidation } from "./module/validation/date.validation.js"

const input = DOM.getElementByData("input")

input.addEventListener("change", () => {
    let age = new Age(input.value)
    let validation = DateValidation.isValid(age)

    if(validation) 
        new Container(age, "years", "months", "days").renderDisplay()
    Container.stateError(validation)
})