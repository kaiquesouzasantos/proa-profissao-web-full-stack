class Joke {
    constructor() {
        this.url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"
        this.jokeContainer = this.getDOMElement("joke")
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
        console.log(joke)
        return await Translater.getTranslate(joke)
    }

    setJoke(joke) {
        console.log(joke)
        this.jokeContainer.textContent = `${joke}`
        this.jokeContainer.classList.add("fade")
    }

    getDOMElement(id) {
        return document.getElementById(id)
    }
}

class Translater {
    static async getTranslate(text) {
        return await 
            fetch(`https://api.mymemory.translated.net/get?q=${text}&langpair=en-GB|pt-BR`)
                .then(data => data.json())
                .then(data => data.responseData.translatedText)
    } 
}

document.querySelector("[data-button]").addEventListener("click", () => {
    new Joke().render()
})