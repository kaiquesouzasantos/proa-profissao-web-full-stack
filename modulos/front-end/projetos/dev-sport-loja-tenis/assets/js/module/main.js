import { Factory } from './component/factory.component.js'
import { Manipulator } from './component/manipulator.component.js'
import { Requester } from "./component/requester.component.js"
import { LIST_PRODUCTS } from './data/product.list.js'
import { Notification } from './service/notification.service.js'
import { FieldValidator } from './service/fieldValidator.service.js'

document.addEventListener("DOMContentLoaded", () => {
    if(!document.getElementById("index")) return

    LIST_PRODUCTS.forEach(
        product => Manipulator.showProductExhibition(
            Factory.constructProductExhibition(product)
        )
    )
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

document.getElementById("contato")?.addEventListener("submit", () => {
    Notification.alertaAtivacao("Contato realizado com sucesso! Em breve retornaremos, muito obrigado.")
})

document.getElementById("product-buy")?.addEventListener("click", () => {
    Notification.alertaAtivacao("TESTE")
})

new FieldValidator(document.querySelectorAll("[required]"))