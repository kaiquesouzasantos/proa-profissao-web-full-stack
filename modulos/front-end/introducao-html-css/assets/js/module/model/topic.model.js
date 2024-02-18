import { Treatment } from "../component/traetment.component.js"

export class Topic {
    constructor(title, description, code) {
        this.title = title
        this.description = description
        this.code = this.formateCode(code)

        this.constructName()
    }

    constructName() {
        this.name = Treatment.mutateFormateTitleForName(this.title)
    }

    formateCode(code) {
        return Treatment.mutateFormateCode(code)
    }
}