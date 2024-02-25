import { Factory } from './component/factory.component.js'
import { Manipulator } from './component/manipulator.component.js'
import { Requester } from "./component/requester.component.js"
import { LIST_PRODUCTS } from './data/product.list.js'

document.addEventListener("DOMContentLoaded", () => {
    if(!document.getElementById("index")) return

    LIST_PRODUCTS.forEach(
        product => Manipulator.showProductExhibition(
            Factory.constructProductExhibition(product)
        )
    )

    Manipulator.stopProgressBar()
})

document.addEventListener("DOMContentLoaded", () => {
    if(!document.getElementById("product")) return

    Manipulator.showProductDetailed(
        Factory.constructProductDetailed(
            LIST_PRODUCTS.filter(
                product => product.id === Requester.getIdentificationProduct()
            )[0]
        )
    )
})
