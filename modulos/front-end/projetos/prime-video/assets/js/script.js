window.addEventListener("DOMContentLoaded", () => {
    let number_images = 10;

    document.body.style.backgroundImage = `linear-gradient(to top, #000, rgba(0,0,0,0.5) 100%), url('assets/img/background/${Math.floor(Math.random() * number_images + 1)}.png')`;
})