const menuBtn = document.getElementById("menu-btn")
const navLinks = document.getElementById("nav-links")
const menuBtnIcon = menuBtn.querySelector("i")

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open")

  const isOpen = navLinks.classList.contains("open")
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line")
})

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open")
  menuBtnIcon.setAttribute("class", "ri-menu-line")
})

/* Scroll */
const scroll = ScrollReveal()

function factoryAnimated(reference, delay, origin) {
    scroll.reveal(
        reference, {
            delay: delay,
            distance: '50px',
            origin: origin,
            easing: 'ease-in-out',
            duration: 1000,
            interval: 500,
            reset: true
        }
    )
}

factoryAnimated('.home-image img', 200, 'right')
factoryAnimated('home-content h1', 500, 'bottom')
factoryAnimated('.home-content .section-description', 1000, 'bottom')
factoryAnimated('.home-content .home-button', 1500, 'bottom')
factoryAnimated('.explore-image img', 200, 'left')
factoryAnimated('.explore-content .section-title', 500, 'bottom')
factoryAnimated('.explore-content .section-description', 1000, 'bottom')
factoryAnimated('.explore-content .explore-btn', 1500, 'bottom')
factoryAnimated('.banner-card', 500, 'bottom')
factoryAnimated('.chef-image img', 200, 'right')
factoryAnimated('.chef-content .section-title', 500, 'bottom')
factoryAnimated('.chef-content .section-description', 1000, 'bottom')
factoryAnimated('.chef-list li', 1500, 'bottom')

/* Swiper */

new Swiper(".swiper", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },
})
