import { Manipulator } from "./component/manipulator.component.js"
import { TOPIC_LIST } from "./data/topic.list.js"

import { Search } from "./behavior/search.behavior.js"

import hljs from "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/es/highlight.min.js"

/* Renderizacao de Topicos */
TOPIC_LIST.forEach(
    topic => Manipulator.addTopic(topic)
)

/* Manipulacao de Bloco de Codigo Visivel */
hljs.highlightAll();

/* Barra de Pesquisa */
let search = document.getElementById("input-search")

search.addEventListener("keyup", () => 
    Search.filter(search.value)
)