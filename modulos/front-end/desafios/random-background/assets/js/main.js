class Color {
    static getColor() {
        return `rgb(${Color.sortedFragment()}, ${Color.sortedFragment()}, ${Color.sortedFragment()})`
    }

    static sortedFragment() {
        return Math.round(Math.random() * 255)
    }
}

document.querySelector("[data-button]").addEventListener("click", () => {
    let color = Color.getColor()

    document.body.style.backgroundColor = color
    document.querySelector("[data-color]").innerText = color
})