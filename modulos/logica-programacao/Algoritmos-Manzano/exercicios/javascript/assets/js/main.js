import { Manipulation } from "./module/service/Manipulator.service.js"
import { exercises } from "./module/data/exercises.data.js"

window.addEventListener("load", () => {
    exercises.forEach(
        exercise => Manipulation.addComponent(exercise)
    )
})