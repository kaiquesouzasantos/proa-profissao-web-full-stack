import { DOM } from '../service/dom.service.js'

export class Roll {
    constructor(imageGeneric, listDice) {
        this.imageGeneric = imageGeneric
        this.listDice = listDice
    }

    roll() {
        this.animation()

        setTimeout(
            () => {
                this.stopAnimation()

                let numberOne = this.randomNumber()
                let numberTwo = this.randomNumber()

                this.addDice("data-dice-01", this.getImageDice(numberOne))
                this.addDice("data-dice-02", this.getImageDice(numberTwo))

                this.addResult(numberOne, numberTwo)
            }, 1000
        )
    }

    addDice(reference, dice) {
        DOM.getElement(reference).setAttribute("src", dice)
    }

    addResult(numberOne, numberTwo) {
        DOM.getElement("data-result").innerHTML = `Your Total Roll Is <span>${(numberOne + numberTwo + 2)}</span>`
    }

    animation() {
        DOM.getElements(this.imageGeneric)
            .forEach(
                element => element.classList.add("shake")
            )
    }

    stopAnimation() {
        DOM.getElements(this.imageGeneric)
            .forEach(
                element => element.classList.remove("shake")
            )
    }

    randomNumber() {
        return Math.floor(Math.random() * 6)
    }

    getImageDice(number) {
        return this.listDice[number].image
    }
}