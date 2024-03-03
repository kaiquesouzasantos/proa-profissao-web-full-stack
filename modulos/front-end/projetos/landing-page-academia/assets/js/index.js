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