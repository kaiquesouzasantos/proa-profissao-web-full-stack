class Behavior {
    static addEvent(name, opsite, typePassword) {
        document.getElementById(`${name}-password`)?.addEventListener("click", () => {
            this.changeTypePassword(`${typePassword}`)
            this.changeIcon(name, opsite)
        })    
    }
    
    static changeIcon(before, after) {
        document.getElementById(`${before}-password`).style.display = "none"
        document.getElementById(`${after}-password`).style.display = "block"
    }
    
    static changeTypePassword(type) {
        password.type = type
    }
}

const password = document.querySelector("[data-password]")

document.querySelector("[data-password]").addEventListener("click", () => {
    Behavior.changeTypePassword("password")
    Behavior.changeIcon("lock", "show");
})

Behavior.addEvent("show", "hide", "text")
Behavior.addEvent("hide", "show", "password") 