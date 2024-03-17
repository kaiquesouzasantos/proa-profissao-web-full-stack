function changeEvolution(id) {
    if(id) {
        changeEvolutionImage(id)   
    } else {
        changeEvolutionImage("evolution")
    }
}

function changeEvolutionImage(id) {
    document.getElementById("evolution-image").src = `assets/img/${id}.jpg`
}

const scroll = ScrollReveal()

function factoryAnimated(reference, delay, origin) {
    scroll.reveal(
        reference, {
            delay: delay,
            distance: '300px',
            origin: origin,
            easing: 'ease-in-out',
            interval: 500,
            reset: true
        }
    )
}

factoryAnimated('.animation-right', 500, 'right')
factoryAnimated('.animation-left', 500, 'left')
factoryAnimated('.animation-bottom', 500, 'bottom')
factoryAnimated('.animation-top', 500, 'top')