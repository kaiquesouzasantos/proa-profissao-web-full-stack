class PasswordGenerator {
    constructor() {
        this.charSets = {
            lowercase: "abcdefghijklmnopqrstuvwxyz",
            uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            numbers: "0123456789",
            symbols: "^!$%&|[](){}:.,*+-#@<>~"
        }
    }

    generatePassword(options, passwordLength) {
        let staticPassword = ""
        let randomPassword = ""
        let excludeDuplicate = false

        // configura a geracao com base nas preferencias
        options.forEach(option => {
            if (option.checked) {
                switch (option.id) {
                    case "exc-duplicate":
                        excludeDuplicate = true
                        break
                    case "spaces":
                        staticPassword += `  ${staticPassword}  `
                        break
                    default:
                        staticPassword += this.charSets[option.id]
                        break
                }
            }
        })

        for (let i = 0; i < passwordLength; i++) {
            let randomChar = staticPassword[Math.floor(Math.random() * staticPassword.length)]

            if (excludeDuplicate) {
                // se ja houver, retorna a tentativa na iteracao
                
                if (!randomPassword.includes(randomChar) || randomChar == " ") {
                    randomPassword += randomChar
                } else {
                    i--
                }
            } else {
                randomPassword += randomChar
            }
        }

        return randomPassword
    }
}

class DOMManipulator {
    constructor() {
        this.lengthSliderInput = DOMSelector.query(".pass-length input")
        this.optionInputs = DOMSelector.queryAll(".option input")
        this.copyIconSpan = DOMSelector.query(".input-box span")
        this.passwordInput = DOMSelector.query(".input-box input")
        this.passIndicator = DOMSelector.query(".pass-indicator")
        this.generateBtn = DOMSelector.query(".generate-btn")

        this.passwordGenerator = new PasswordGenerator()

        this.setupEventListeners()
    }

    setupEventListeners() {
        this.copyIconSpan.addEventListener("click", this.copyPassword.bind(this))
        this.lengthSliderInput.addEventListener("input", this.updateSlider.bind(this))
        this.generateBtn.addEventListener("click", this.generatePassword.bind(this))
    }

    updateSlider() {
        DOMSelector.query(".pass-length span").innerText = this.lengthSliderInput.value

        this.generatePassword()
        this.updatePassIndicator()
    }

    updatePassIndicator() {
        this.passIndicator.id = this.lengthSliderInput.value <= 8 ? "weak" : this.lengthSliderInput.value <= 16 ? "medium" : "strong"
    }

    generatePassword() {
        this.passwordInput.value = this.passwordGenerator.generatePassword(
            Array.from(this.optionInputs), this.lengthSliderInput.value
        )
    }

    copyPassword() {
        navigator.clipboard.writeText(this.passwordInput.value)

        this.copyIconSpan.innerText = "check"
        this.copyIconSpan.style.color = "#4285F4"

        setTimeout(() => {
            this.copyIconSpan.innerText = "copy_all"
            this.copyIconSpan.style.color = "#707070"
        }, 1500)
    }
}

class DOMSelector {
    static query(selector) {
        return document.querySelector(selector)
    }

    static queryAll(selector) {
        return document.querySelectorAll(selector)
    }
}

new DOMManipulator().updateSlider()
