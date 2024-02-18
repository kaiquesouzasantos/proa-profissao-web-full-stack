import { Constructor } from "./contructor.component.js"

export class Manipulator {
    static addTopic(content) {
        this.addView(content)
        this.addNavigation(content)
    }

    static addView(topic) {
        this.addElementHTML(
            document.getElementsByTagName("main")[0],
            Constructor.constructView(topic)
        )
    }

    static addNavigation(topic) {
        this.addElementHTML(
            document.getElementById("navbar"),
            Constructor.constructNavigation(topic)
        )
    }

    static addElementHTML(element, content) {
        element.innerHTML += `${content}`
    }
}