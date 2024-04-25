const random_margin = ["-5px", "1px", "5px", "10px", "7px"]
const random_colors = ["#c2ff3d", "#ff3de8", "#3dc2ff", "#04e022", "#bc83e6", "#ebb328"]
const random_degree = ["rotate(3deg)", "rotate(1deg)", "rotate(-1deg)", "rotate(-3deg)", "rotate(-5deg)", "rotate(-8deg)"]
let index = 0

window.onload = () => {
    selectUserInput()
}

document.querySelector("#add_note").addEventListener("click", () => {
    showModal()
})

document.querySelector("#hide").addEventListener("click", () => {
    hideModal()
})

document.querySelector("#user_input").addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const text = document.querySelector("#user_input").value.trim()
        
        if (text !== "") {
            if (!noteExists(text)) {
                createStickyNote(text)
            }
        }
    }
})

const selectUserInput = () => {
    document.querySelector("#user_input").select()
}

const showModal = () => {
    document.querySelector("#modal").style.display = "block"
}

const hideModal = () => {
    document.querySelector("#modal").style.display = "none"
}

const noteExists = (text) => {
    const notes = document.querySelectorAll(".note")

    for (const note of notes) {
        if (note.querySelector(".details h1").textContent === text) {
            return true
        }
    }

    return false
}

const createStickyNote = (text) => {
    const note = document.createElement("div")
    const details = document.createElement("div")
    const noteText = document.createElement("h1")

    note.className = "note"
    details.className = "details"
    noteText.textContent = text

    details.appendChild(noteText)
    note.appendChild(details)

    if (index > random_colors.length - 1)
        index = 0

    note.setAttribute(
        "style", 
        `margin:${random_margin[Math.floor(Math.random() * random_margin.length)]};
        background-color:${random_colors[index++]};
        transform:${random_degree[Math.floor(Math.random() * random_degree.length)]};`
    )

    note.addEventListener("dblclick", () => {
        note.remove()
    })

    document.querySelector("#all_notes").appendChild(note)
}
