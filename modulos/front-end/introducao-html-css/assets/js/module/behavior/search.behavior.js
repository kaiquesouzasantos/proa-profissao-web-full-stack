import { Treatment } from "../component/traetment.component.js"

export class Search {
    static filter(search) {
        let topics = document.getElementsByName("topic")
        let find = "block"

        topics.forEach(
            topic => {
                if(!this.format(topic.textContent).includes(this.format(search))) 
                    find = "none"
                topic.style.display = find
            }
        )
    }

    static format(text) {
        return Treatment.mutateFormateSearch(text)
    }
}