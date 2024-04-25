getElement("increase").addEventListener("click", () => {
  changeCount(1)
})

getElement("decrease").addEventListener("click", () => {
  changeCount(-1)
})

let count = 0

changeCount = (number) => {
  count += number
  getElement("count").textContent = count
}

function getElement(query) {
  return document.querySelector(`[data-${query}]`)
}
