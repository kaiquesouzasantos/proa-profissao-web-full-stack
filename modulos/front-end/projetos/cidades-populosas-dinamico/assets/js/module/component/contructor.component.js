export class Constructor {
    static constructView(cidade) {
    return `
<article>
    <a href="detalhamento.html?cidade=${cidade.id}">
        <img
            src="${cidade.imagem_reduzida}">

        <div class="overlay">
            <h2>${cidade.nome}</h2>
            <p>${cidade.populacao} habitantes</p>
        </div>
    </a>
</article>
    `
    }

    static constructFullView(cidade) {
        return `
    <section class="section-detalhamento-cidade">
        <img class="img-cidade" src="${cidade.imagem_ampliada}">
            
        <div class="detalhamento">
            <h1>${cidade.nome}</h1>
            <p>${cidade.populacao} habitantes</p>
            
            ${cidade.descricao}
        </div>
    </section>
        `
        }
}