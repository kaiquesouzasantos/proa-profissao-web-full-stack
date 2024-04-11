import { DOM } from "./module/service/dom.service.js"
import { Container } from "./module/behavior/container.behavior.js"
import { Map } from "./module/service/map.service.js"
import { Localization } from "./module/service/localization.service.js"

DOM.getElement("data-button").addEventListener("click", () => {    
    new Localization(
        new Map(
            new Container().addMap()
        ).render()
    ).startTracking()
})