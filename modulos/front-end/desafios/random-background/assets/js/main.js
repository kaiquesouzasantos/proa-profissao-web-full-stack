class Color {
    static getColor() {
        return `rgb(
            ${Color.sortedFragment()}, ${Color.sortedFragment()}, ${Color.sortedFragment()}
        )`
    }

    static sortedFragment() {
        return Math.round(Math.random() * 255)
    }
}

document.querySelector("[data-button]").addEventListener("click", () => {
    document.body.style.backgroundColor = Color.getColor()
})