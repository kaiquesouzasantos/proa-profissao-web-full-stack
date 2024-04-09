class Conversor {
    static getCelsius(fahrenheit) {
        return ((parseFloat(fahrenheit) - 32) * 5/9).toFixed(2)
    }

    static getFahrenheit(celsius) {
        return ((parseFloat(celsius) * 9/5 ) + 32).toFixed(2)
    }
}

const celsius = document.querySelector("[data-celsius]")
const fahrenheit = document.querySelector("[data-fahrenheit]")

celsius.addEventListener("input", () => {
    fahrenheit.value = Conversor.getFahrenheit(celsius.value)
})

fahrenheit.addEventListener("input", () => {
    celsius.value = Conversor.getCelsius(fahrenheit.value)
})
