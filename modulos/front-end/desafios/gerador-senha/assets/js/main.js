class Password {
  constructor(passwordElement, chars, length) {
    this.passwordElement = passwordElement
    this.chars = chars
    this.length = length
  }

  create() {
    this.passwordElement.value = this.generate()
  }

  generate() {
    let password = ""

    for (let i = 0; i < this.length; i++) {
      password += this.randomChar(this.chars)
    }

    return password
  }

  copy() {
    let password = this.passwordElement.value

    if (password != "") {
      navigator.clipboard.writeText(password)
        .then(() => {
          alert("Password on Clipboard.")
        })
        .catch(() => {
          alert("Failed to Copy Password.")
        })
    } else {
      alert("Generate Password, Try Again.")
    }
  }

  randomChar(characters) {
    return characters[Math.floor(Math.random() * characters.length)]
  }
}

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*()_+~}{[]-+/"
const length = 40

const password = new Password(
  document.getElementById("password"), chars, length
)

document.getElementById("generate-button").addEventListener("click", () => {
  password.create()
})

document.getElementById("copy-button").addEventListener("click", () => {
  password.copy()
})