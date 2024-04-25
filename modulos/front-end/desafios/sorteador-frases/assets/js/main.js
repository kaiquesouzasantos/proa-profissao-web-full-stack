const buttonQuote = document.getElementById("button-quote")
const content = document.getElementById("quote")
const authorQuote = document.getElementById("author")
const apiURL = "https://api.quotable.io/random"

const buttonQuoteText = `Get a Quote<i class="fa-solid fa-arrows-rotate"></i>`

function updateLoadingUI() {
  setContent(
    "Updating...", "Updating...",  "Loading", true
  )
}

async function handleSuccessResponse(data) {
  setContent(
    data.content, "(" + data.author + ")", buttonQuoteText, false
  )
}

function handleErrorResponse() {
  setContent(
    "Sorry, an error occurred!", "Try again", buttonQuoteText, false
  )
}

function setContent(contentText, author, buttonText, buttonState) {
  content.innerText = contentText
  authorQuote.innerText = author
  buttonQuote.innerHTML = buttonText
  buttonQuote.disabled = buttonState
}

async function getQuote() {
  updateLoadingUI()

  handleSuccessResponse(
    await fetch(apiURL)
      .then(response => response.json())
      .catch(() =>  handleErrorResponse())
  )
}

buttonQuote.addEventListener("click", getQuote)