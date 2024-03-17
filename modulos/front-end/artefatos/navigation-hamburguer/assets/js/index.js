const menu = document.querySelector('.menu')

document.querySelector("[data-open-menu]").addEventListener('click', () => 
    menu.style.right = '0'
)

document.querySelector("[data-close-menu]").addEventListener('click', () =>  
    menu.style.right = '-100%'
)