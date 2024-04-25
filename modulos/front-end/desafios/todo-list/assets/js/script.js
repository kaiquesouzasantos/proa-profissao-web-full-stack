const addItemToList = (text) => {
  if (text.trim() !== "") { 
    document.querySelector("#to-do-list").appendChild(createItemElement(text))
    document.querySelector("#input").value = ""
  } else {
    alert("Por favor, insira uma tarefa válida.")
  }
}

const createItemElement = (text) => {
  const item = document.createElement("div")
  const div = document.createElement("div")
  const textElement = document.createElement("p")

  item.className = "item"
  textElement.textContent = text

  div.appendChild(
    createIcon("fas fa-trash trash", () => {
      item.remove()
    })
  )

  item.appendChild(textElement)
  item.appendChild(div)

  return item
}

const createIcon = (className, onClick) => {
  const icon = document.createElement("i")

  icon.className = className
  icon.addEventListener("click", onClick)

  return icon
}

document.querySelector("#add-item").addEventListener("click", () => {
  addItemToList(document.querySelector("#input").value)
})
