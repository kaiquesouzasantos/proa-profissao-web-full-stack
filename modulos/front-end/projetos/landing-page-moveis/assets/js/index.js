const scroll = ScrollReveal()

function factoryAnimated(reference, delay, origin) {
    scroll.reveal(
        reference, {
            delay: delay,
            distance: '300px',
            origin: origin,
            easing: 'ease-in-out',
            duration: 1000,
            interval: 500,
            reset: true
        }
    )
}

factoryAnimated('.animation-right', 200, 'right')
factoryAnimated('.animation-left', 200, 'left')
factoryAnimated('.animation-bottom', 500, 'bottom')