import { DOM } from "./dom.service.js"

export class Manipulation {
    static addComponent({type, name, exercise}) {
        DOM.getContainer().innerHTML += `
        <div class="exercise">
            <span class="tag tag-${type}"><i class="fa-solid fa-code"></i></span>
            <h2>${name}</h2>

            <i class="fa-solid fa-play icon icon-${type}"></i>
        </div>
        `

        this.addRunnerExercise(name, exercise)
    }

    static addRunnerExercise(name, exercise) {
        DOM.getById(`button-${name}`)?.addEventListener("click", exercise)
    }
}