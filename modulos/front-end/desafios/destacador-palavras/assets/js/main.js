class Search {
    constructor(text, paragraph) {
        this.text = this.getDOMElement(text).value
        this.paragraph = this.getDOMElement(paragraph)
    }

    apllyPattern() {
        return new RegExp(`${this.text.replace(/[.*+?^${}()|[\]\\]/g,"\\$&") }`,"gi")
    }

    markParagraph(pattern) {
        this.paragraph.innerHTML = paragraph.textContent.replace(
            pattern, match => `<mark>${match}</mark>`
        )
    }

    getDOMElement(id) {
        return document.getElementById(id)
    }
}

document.querySelector("[data-search]").addEventListener("keyup", () => { 
    const search = new Search("textSearch", "paragraph")
    search.markParagraph(search.apllyPattern())
})