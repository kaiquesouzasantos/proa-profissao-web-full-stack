import { DOM } from "./dom.service.js"

export class Manipulation {
    static addComponent({type, name, exercise}) {
        DOM.getContainer().innerHTML += `
        <div class="exercise">
            <p class="tag">${type}</p>
            <h2>Exercicio ${name}</h2>

            <i class="fa-solid fa-play icon"></i>
        </div>
        `

        this.addRunnerExercise(name, exercise)
    }

    static addRunnerExercise(name, exercise) {
        DOM.getById(`button-${name}`)?.addEventListener("click", () => exercise())
    }
}