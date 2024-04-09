class Dictionary {
    constructor(word, reference) {
        this.word = word
        this.reference = reference
        this.url = "https://api.dictionaryapi.dev/api/v2/entries/en/"
    }

    addOnDocument(content) {
        return `
        <div class="word">
            <h3>${this.word}</h3>
        </div>
        
        <div class="details">
            <p>${content[0].meanings[0].partOfSpeech}</p>
            <p>/${content[0].phonetic}/</p>
        </div>

        <p class="word-meaning">
            ${content[0].meanings[0].definitions[0].definition}
        </p>
        
        <p class="word-example">
            ${content[0].meanings[0].definitions[0].example || ""}
        </p>`
    }

    async requestWord() {
        return await fetch(`${this.url}${this.word}`)
            .then((response) => response.json())
            .then((response) => { 
                this.reference.innerHTML = this.addOnDocument(response)
            })
            .catch(
                () => this.reference.innerHTML = `<h2 class="error">Couldn't Find The Word</h2>`
            )
    }
}

document.getElementById("search-btn").addEventListener("click", () => {
    new Dictionary(
        document.getElementById("input-word").value, 
        document.getElementById("result")
    ).requestWord()
})