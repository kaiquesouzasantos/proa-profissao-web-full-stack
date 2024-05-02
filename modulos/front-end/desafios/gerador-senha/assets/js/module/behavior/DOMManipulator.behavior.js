import { DOMSelector } from '../service/DOMSelector.service.js'

export class DOMManipulator {
    constructor(passwordGenerator) {
        this.lengthSliderInput = DOMSelector.query(".pass-length input")
        this.optionInputs = DOMSelector.queryAll(".option input")
        this.copyIconSpan = DOMSelector.query(".input-box span")
        this.passwordInput = DOMSelector.query(".input-box input")
        this.passIndicator = DOMSelector.query(".pass-indicator")
        this.generateBtn = DOMSelector.query(".generate-btn")

        this.passwordGenerator = passwordGenerator

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