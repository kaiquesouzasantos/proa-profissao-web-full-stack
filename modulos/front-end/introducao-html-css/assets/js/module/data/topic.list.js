import { Topic } from "../model/topic.model.js"

export var TOPIC_LIST = [
new Topic(
"Estrutura Semântica", 
`
<p>A finalidade de uma estrutura semântica HTML é proporcionar uma organização e compreensão clara do conteúdo de uma página web, tanto para os navegadores quanto para os motores de busca. Isso é alcançado através do uso apropriado de elementos HTML que têm significado semântico e refletem a estrutura lógica do documento.</p>
<ul>
    <li>
        <p><b>Compreensão para Navegadores</b>: Os navegadores interpretam a estrutura semântica para melhorar a experiência do usuário. Por exemplo, um navegador pode utilizar a tag <b>nav</b> para identificar a área de navegação de um site e fornecer funcionalidades específicas, como a geração automática de menus de navegação ou atalhos de teclado para essas seções.</p>
    </li>
    <li>
        <p><b>Acessibilidade</b>: Uma estrutura semântica é essencial para tornar as páginas web acessíveis a todos os usuários, incluindo aqueles com deficiências visuais que dependem de tecnologias assistivas, como leitores de tela. Tags semânticas, como <b>header</b>, <b>nav</b>, <b>main</b>, entre outras, fornecem informações claras sobre a estrutura da página, facilitando a navegação e compreensão do conteúdo.</p>    
    </li>
    <li>
        <p><b>SEO (Otimização para Mecanismos de Busca)</b>: Os mecanismos de busca utilizam a estrutura semântica para entender o conteúdo da página e classificá-la nos resultados de pesquisa de forma mais precisa. Tags semânticas, títulos hierárquicos e atributos adequados melhoram a indexação do conteúdo e podem influenciar a posição nos resultados de busca.</p>
    </li>
    <li>
        <p><b>Interoperabilidade</b>: Uma estrutura semântica consistente e conforme os padrões estabelecidos pelo W3C facilita a interoperabilidade entre diferentes navegadores, dispositivos e plataformas. Isso garante que o conteúdo da página seja renderizado de forma consistente e que as funcionalidades da web se comportem conforme o esperado em uma variedade de ambientes.</p>
    </li>
    <li>
        <p><b>Manutenção e Escalabilidade</b>: Uma estrutura semântica torna o código HTML mais legível, organizado e fácil de manter. Ao usar elementos semânticos apropriados e seguir as melhores práticas, é mais fácil entender a estrutura e o propósito de cada parte do código, facilitando futuras atualizações e modificações na página.</p>
    </li>
</ul>
`, 
`<!DOCTYPE html>
<html>

    <head>
        <link/>
    </head>

    <body>
        <header>
            <nav>
                <ul>
                    <li><a></a></li>
                </ul>
            </nav>
        </header> 

        <main>
            <section>   
                <div>  
                    <h1></h1>
                    <p></p>
                    <img/>
                </div>
            </section>

            <aside>
                <article></article>
            </aside>
        </main>
    </body>
</html>`
),

new Topic(
"Titulos", 
`<p>A ordem numérica de cada titulo, representa a prioridade para os mecanismos de busca. </p>
<div class="div-example">
    <h1>TITULO</h1>
    <h2>TITULO</h2>
    <h3>TITULO</h3>
    <h4>TITULO</h4>
    <h5>TITULO</h5>
    <h6>TITULO</h6>
</div>`, 
`<h1>TITULO</h1>
<h2>TITULO</h2>
<h3>TITULO</h3>
<h4>TITULO</h4>
<h5>TITULO</h5>
<h6>TITULO</h6>`
),

new Topic(
"Parágrafo", 
`<p>Representa um parágrafo de texto.<br><p class="div-example">Lorem Ipsum dolor sit amet.</p>`, 
`<p>TEXTO</p>`
),

new Topic(
"Quebra de Linha", 
`<p>Cria uma quebra de linha dentro do texto.<p>
<p class="div-example">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Fusce laoreet augue sagittis elementum commodo.<br>Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas a dui justo. Nulla consectetur gravida risus a dignissim.<br>Donec vel nulla semper, faucibus diam sit amet, pellentesque lorem.</p>`, 
`<p>Lorem Ipsum</p>
<br>
<p>Eucatenum</p>`
),

new Topic(
"Link", 
`
<p>Define um hiperlink, permitindo a criação de links para outras páginas ou recursos.</p>
<a class="link div-example" href="https://www.proa.org.br">Instituto PROA</a><br><br>
`, 
`<a href="link/caminho"></a>`
),
new Topic(
"Imagem", 
`
<p>Incorpora uma imagem na página.</p>
<img src="https://media.licdn.com/dms/image/C4D1BAQHYoqqwyRLdMQ/company-background_10000/0/1613585892608/instituto_proa_cover?e=2147483647&v=beta&t=3pciHKlmvCUDcpusfB33tUPQF9_-1YbE4n_t6B_x_yM"/>
`, 
`<img src="link/caminho"/>`
),
new Topic(
"Incorporar Página", 
`
<p>Permite a incorporação de conteúdo de outra fonte, como uma página externa ou um vídeo.</p>
<iframe height="600px" src="https://www.youtube.com/embed/ieilZUgxwsc?si=zGEyMCXsandSqqxA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
`, 
`<iframe>
    <source src="link/caminho">
</iframe>`
),
new Topic(
    "Meta Dados", 
    `
    <p>Os metadados são “dados sobre dados”, utilizados para encontrar e descobrir recursos. Por meio da ferramenta, é possível descrever páginas web e componentes acessíveis presentes nelas, além de associar versões alternativas de conteúdos.</p>
    `, 
    `<meta charset="UTF-8"> 
    
<meta name="keywords" content="HTML, CSS, JavaScript"> 
<meta name="description" content="Free Web tutorials"> 
<meta name="author" content="Kaique"> 
<meta name="viewport" content="width=device-width, initial-scale=1.0"> 
        
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta http-equiv="refresh" content="<delay-segundo>">
<meta http-equiv="refresh" content="<delay-segundo>; URL='<pagina>'">`
),
new Topic(
    "Destaque de Texto", 
    `
    <p>Os componentes de textos podem ser diferenciados a partir de tags complementares, onde podem se distinguir conforme a finalidade e exibição em mecanismos de pesquisa (SEO).</p>
    `, 
    `<!--  Define um texto enfatizado/importante para o SEO, geralmente exibido em itálico. -->
<p><em>TEXTO-ITALICO</em></p> 

<!-- Define texto em itálico, geralmente usado para ênfase leve. -->
<p><i>TEXTO-ITALICO</i></p> 

<!--  Define um texto fortemente enfatizado/importante para o SEO, geralmente exibido em negrito. -->
<p><strong>TEXTO-NEGRITO</strong></p>

<!--  Define um texto em negrito. -->
<p><b>TEXTO-NEGRITO</b></p>` 
),
new Topic(
    "Tabela", 
    `<p>O elemento representa dados tabulares — isto é, informações apresentadas em uma tabela bidimensional composta por linhas e colunas de células contendo dados.</p>
<table>
    <thead>
      <tr>
        <th>Nome</th>
        <th>Idade</th>
        <th>Cidade</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>João</td>
        <td>25</td>
        <td>São Paulo</td>
      </tr>
      <tr>
        <td>Maria</td>
        <td>30</td>
        <td>Rio de Janeiro</td>
      </tr>
      <tr>
        <td>Carlos</td>
        <td>22</td>
        <td>Brasília</td>
      </tr>
    </tbody>
  </table>
  <style>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th, td {
    padding: 8px;
    text-align: left;
    border: 1px solid #ddd;
  }
  th {
    background-color: #ddd;
    color: #222;
  }
</style>
    `, 
    `<table>
    <thead>
        <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>Cidade</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>João</td>
            <td>25</td>
            <td>São Paulo</td>
        </tr>
        <tr>
            <td>Maria</td>
            <td>30</td>
            <td>Rio de Janeiro</td>
        </tr>
        <tr>
            <td>Carlos</td>
            <td>22</td>
            <td>Brasília</td>
        </tr>
    </tbody>
</table>` 
),
new Topic(
    "Listas", 
    `
    <p><b>Ordenada</b></p>
    <ul>
        <li>Ler um livro</li>
        <li>Fazer exercícios físicos</li>
    </ul>
    
    <p><b>Desordenada</b></p>
    <ol>
        <li>Estudar programação</li>
        <li>Ir ao supermercado</li>
    </ol>
    
    <p><b>Definicao</b></p>
    <dl>
        <dt>Algoritmo</dt>
        <dd>Sequência finita de instruções, utilizadas a fim de resolver um problema.</dd>
    </dl>    `, 
    `<!-- Nao Ordenada -->
<ul>
    <li>Ler um livro</li>
    <li>Fazer exercícios físicos</li>
</ul>
    
<!-- Nao Ordenada -->
<ol>
    <li>Estudar programação</li>
    <li>Ir ao supermercado</li>
</ol>
    
<!-- Definicao -->
<dl>
    <dt>Algoritmo</dt>
    <dd>Sequência finita de instruções, utilizadas a fim de resolver um problema.</dd>
</dl>` 
),
]