class Scroll {
    constructor(element, top) {
        this.element = element
        this.top = top

        this.setTop()
    }

    setTop() {
        this.element.href = "#" + this.top
    }

    showButtonUp() {
        if (window.scrollY >= 200)
            this.element.classList.add("active")
        else 
            this.element.classList.remove("active")
    }
}

/* Icone de Rolagem */
window.addEventListener("scroll", () => {
    new Scroll(document.querySelector("[data-button-up]"), "sidebar").showButtonUp()
})