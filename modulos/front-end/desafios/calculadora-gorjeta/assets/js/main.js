const amountInput = document.querySelector("#amount");
const guestsInput = document.querySelector("#guests");
const qualityInput = document.querySelector("#quality");
const tipAmountElement = document.querySelector("#tip-amount");

const calculateTip = () => {
    const amount = parseFloat(amountInput.value)
    const guests = parseInt(guestsInput.value)
    const quality = parseFloat(qualityInput.value)

    if (isNaN(amount) || isNaN(guests) || isNaN(quality) || guests <= 0) {
        showTipAmount("Gorjeta inválida")
        return
    }

    const tip = ((amount * quality) / guests).toFixed(2)
    showTipAmount(`Gorjeta de R$${tip} para cada`)
}

const showTipAmount = (message) => {
    tipAmountElement.textContent = message
    tipAmountElement.classList.add("show")

    setTimeout(() => {
        tipAmountElement.classList.remove("show")
    }, 3000)
}

document.querySelector("[data-calculate]").addEventListener("click", calculateTip)