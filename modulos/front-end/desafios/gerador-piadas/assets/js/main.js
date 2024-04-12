class Joke {
    constructor() {
        this.url = "https://v2.jokeapi.dev/joke/Programming?lang=en&type=single"
        this.jokeContainer = this.getDOMElement("[data-joke]")
    }

    async render() {
        this.jokeContainer.classList.remove("fade")
        this.setJoke(
            await this.translate(await this.getJoke())
        )
    }

    async getJoke() {
        return await fetch(this.url)
            .then(data => data.json())
    }

    async translate({joke}) {
        return await Translater.getTranslate(joke)
    }

    setJoke(joke) {
        this.jokeContainer.textContent = `${joke}`
        this.jokeContainer.classList.add("fade")
    }

    getDOMElement(data) {
        return document.querySelector(data)
    }
}

class Translater {
    static async getTranslate(text) {
        return await 
            fetch(
                `https://api.mymemory.translated.net/get?q=${text}&langpair=en-GB|pt-BR`
            )
                .then(data => data.json())
                .then(data => data.responseData.translatedText)
    } 
}

document.querySelector("[data-button]").addEventListener("click", () => {
    new Joke().render()
})