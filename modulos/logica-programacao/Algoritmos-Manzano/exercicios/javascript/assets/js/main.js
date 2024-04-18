import { Manipulator } from "./module/service/manipulator.service.js"
import { exercises } from "./module/data/exercises.data.js"

window.addEventListener("load", () => {
    exercises.forEach(
        exercise => Manipulator.addComponent(exercise)
    )
})