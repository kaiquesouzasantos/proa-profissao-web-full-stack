export class Manipulator {
    static showProductExhibition(product) {
        document.getElementById("product-exhibition").innerHTML += product
    }

    static showProductDetailed(product) { 
        document.getElementById("product-container").innerHTML = product
    }

    static stopProgressBar() {
        document.getElementById("progress").style.display = "none"
    }
}