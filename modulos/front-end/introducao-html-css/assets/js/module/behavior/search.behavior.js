import { Treatment } from "../component/traetment.component.js"

export class Search {
    static filter(search) {
        let topics = document.getElementsByName("topic")
        topics.forEach(
            topic => {
                if(!this.format(topic.textContent).includes(this.format(search))) 
                    topic.style.display = "none"
                else
                    topic.style.display = "block"
            }
        )
    }

    static format(text) {
        return Treatment.mutateFormateSearch(text)
    }
}