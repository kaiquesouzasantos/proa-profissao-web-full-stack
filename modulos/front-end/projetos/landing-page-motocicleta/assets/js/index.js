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