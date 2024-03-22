export class Constructor {
    static constructNavigation({name, title}) {
        return `<li><a href="#${name}">${title}</a></li>`
    }

    static constructView(topic) {
    return `
<section id="${topic.name}" name="topic">
    <h2>${topic.title}</h2>
    
    <input id="code-content-${topic.name}" type="hidden" value="${topic.code}">

    <pre>
    <button class="button-copy" onclick="copyTextCode('${topic.name}')"><img src="assets/img/structural/icon-copy-button.svg"></button>
    <code class="language-html hljs">
${topic.code}
        </code>
    </pre>
    
    <h3>Descrição</h3>
    <div class="definition">${topic.description}</div>
    <hr>
</section>
    `
    }
}