import { DOM } from "./dom.service.js"

export class Manipulation {
    static addComponent({type, name, exercise}) {
        const component = document.createElement('div')

        component.innerHTML = `
            <div class="exercise">
                <span class="tag tag-${type}"><i class="fa-solid fa-code"></i></span>
                <h2>${name}</h2>

                <i id="button-${name}" class="fa-solid fa-play icon icon-${type}"></i>
            </div>
        `

        DOM.getContainer().appendChild(component);
        this.addRunnerExercise(`button-${name}`, exercise)
    }

    static addRunnerExercise(id, exercise) {
        DOM.getById(id)?.addEventListener("click", exercise)
    }
}