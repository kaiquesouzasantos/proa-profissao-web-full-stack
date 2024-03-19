const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')

const navLink = document.querySelectorAll('.nav-link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

function scrollHeader() {
    const nav = document.getElementById('header')

    if (this.scrollY >= 200) 
        nav.classList.add('scroll-header')
    else 
        nav.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

function scrollTop() {
    const scrollTop = document.getElementById('scroll-top')

    if (this.scrollY >= 560) 
        scrollTop.classList.add('show-scroll')
    else 
        scrollTop.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollTop)

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-toggle-right'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-toggle-left' : 'bx-toggle-right'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-toggle-left' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

function cookies(functions) {
    const container = document.querySelector('.cookie-container');
    const save = document.querySelector('.cookies-save-button');

    if (!container || !save) return null;

    const localPref = JSON.parse(window.localStorage.getItem('cookie-preference'));

    if (localPref) activateFunctions(localPref);

    function getFormPref() {
        return [...document.querySelectorAll('[data-function]')]
            .filter((el) => el.checked)
            .map((el) => el.getAttribute('data-function'));
    }

    function activateFunctions(pref) {
        pref.forEach((f) => functions[f]());
        container.style.display = 'none';
        window.localStorage.setItem('cookie-preference', JSON.stringify(pref));
    }

    function handleSave() {
        const pref = getFormPref();
        activateFunctions(pref);
    }

    save.addEventListener('click', handleSave);
}

function marketing() {
    console.log('Função de marketing');
}

function analytics() {
    console.log('Função de analytics');

    const data = new Date();

    const str_data = data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear();
    const str_hora = data.getHours() + ':' + data.getMinutes() + ':' + data.getSeconds();
    const idioma = "O idioma utilizado é " + navigator.language + ".";
    const sistema = "O navegador utilizado é (plataforma-versão-navegador) " + navigator.userAgent + ".";

    console.log("Data: " + str_data);
    console.log("Hora: " + str_hora);
    console.log("Idioma: " + idioma);
    console.log("Sistema: " + sistema);
}

cookies({
    marketing,
    analytics,
});

pesquisa_input = document.querySelector("[data-search]");

pesquisa_input.addEventListener("keyup", () => {
    reg = new RegExp(pesquisa_input.value, "g")
    lista = document.getElementById("product-exhibition")
    
    for (item of lista.children) {
        if (!item.getAttribute("nome").match(reg))
            item.style.display = "none"
        else
            item.removeAttribute("style")
    }
})
