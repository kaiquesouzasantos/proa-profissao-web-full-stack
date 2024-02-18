import { Treatment } from "./traetment.component.js"

export class Manipulator {
    static addTopic(content) {
        this.addView(content)
        this.addNavigation(content)
    }

    static addView(topic) {
        this.addElementHTML(
            document.getElementsByTagName("main")[0],
            Treatment.constructView(topic)
        )
    }

    static addNavigation(topic) {
        this.addElementHTML(
            document.getElementById("navbar"),
            Treatment.constructNavigation(topic)
        )
    }

    static addElementHTML(element, content) {
        element.innerHTML += `${content}`
    }
}