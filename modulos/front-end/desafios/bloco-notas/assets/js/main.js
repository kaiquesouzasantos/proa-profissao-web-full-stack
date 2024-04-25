const addBox = document.querySelector(".add-box")
const popupBox = document.querySelector(".popup-box")

const closeBox = popupBox.querySelector("header i")
const titleTag = popupBox.querySelector("input")
const descTag = popupBox.querySelector("textarea")
const addBtn = popupBox.querySelector("button")

const notes = JSON.parse(localStorage.getItem("notes") || "[]")
const menuel = document.querySelector(".iconel")

const showNotes = () => {
  document.querySelectorAll(".note").forEach((note) => note.remove())

  notes.forEach((note, index) => {
    let litag = `
    <li class="note">
      <div class="details">
        <p>${note.title}</p>
        <span>${note.description}</span>
      </div>
      
      <div class="bottom-content">
        <span>${note.date}</span>

        <div class="settings">
          <i onclick=showMenu(this) class="bx bx-cog"></i>

          <ul class="menu">
            <li onclick="editNote(${index},'${note.title}','${note.description}')">
            <i class="bx bx-pencil"></i>Edit</li>
            <li onclick="deleteNote(${index})">
              <i class='bx bx-trash'></i>Delete
            </li>
          </ul>
        </div>
      </div>
    </li>`

    addBox.insertAdjacentHTML("afterend", litag)
  })
}

function showMenu(element) {
  element.parentElement.classList.add("show")

  document.onclick = (e) => {
    if (e.target.tagName != "I" || e.target != element) {
      element.parentElement.classList.remove("show")
    }
  }
}

function deleteNote(noteId) {
  notes.splice(noteId, 1)

  localStorage.setItem("notes", JSON.stringify(notes))
  showNotes()
}

function editNote(noteId, title, description) {
  titleTag.value = title
  descTag.value = description
  addBox.click()

  deleteNote(noteId)
}

addBox.onclick = () => popupBox.classList.add("show")

closeBox.onclick = () => {
  titleTag.value = ""
  descTag.value = ""
  popupBox.classList.remove("show")
}

addBtn.onclick = (e) => {
  e.preventDefault()

  let ti = titleTag.value
  let desc = descTag.value
  let currentDate = new Date()

  let noteInfo = {
    title: ti,
    description: desc,
    date: `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`,
  }

  notes.push(noteInfo)
  localStorage.setItem("notes", JSON.stringify(notes))

  closeBox.click()
  showNotes()
}

showNotes()