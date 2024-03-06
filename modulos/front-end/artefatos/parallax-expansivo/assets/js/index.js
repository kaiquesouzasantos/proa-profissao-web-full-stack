window.addEventListener("scroll", () => {
    let value = window.scrollY

    // condicao de parada, se nao adicionada, o scroll excede os limites de mutacao esperados
    if(value > 350) 
        return

    returnElementBuId('text').style.marginTop = value * 2.5 + 'px'
    returnElementBuId('leaf').style.top = value * -1.5 + 'px'
    returnElementBuId('hill-4').style.left = value * -1.5 + 'px'
    returnElementBuId('hill-5').style.left = value * 1.5 + 'px'
    returnElementBuId('hill-1').style.top = value * 1 + 'px'
})

function returnElementBuId(id) {
    return document.getElementById(id)
}