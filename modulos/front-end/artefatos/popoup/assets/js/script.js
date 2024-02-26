const 
    main = document.getElementsByTagName("main")[0],
    overlay = document.getElementById("overlay"),
    showBtn = document.getElementById("button-show-modal"),
    closeBtn = document.getElementById("button-close"),
    openBtn = document.getElementById("button-close");


/*
main.classList.add("active")
    - main -> define o corpo de referencia dos componentes
    - classList -> acessa o campo de class do mesmo
    - add / remove -> adiciona a referencia de uma classe 

    * activate -> classe pertinente ao CSS que manipula a visibilidade dos componentes
*/
showBtn.addEventListener("click", () => 
    main.classList.add("active")
);

overlay.addEventListener("click", () =>
    main.classList.remove("active")
);

closeBtn.addEventListener("click", () =>
    main.classList.remove("active")
);

openBtn.addEventListener("click", () =>
    window.location.replace("https://github.com/kaiquesouzasantos/proa-profissao-web-full-stack")
);