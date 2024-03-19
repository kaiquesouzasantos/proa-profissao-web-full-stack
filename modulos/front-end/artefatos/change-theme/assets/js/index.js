class Theme {
    constructor(icon_element, icon_dark, icon_default) {
        this.body = document.body.classList
        this.icon = icon_element
        this.icon_dark = icon_dark
        this.icon_default = icon_default
        this.theme_default = "dark-theme"

        this.theme = Theme.getBrowserPreferences() 
        this.applyTheme()
    }

    applyTheme() {
        this.changeTheme()
        this.changeIcon()

        this.modifyTheme()
    }

    changeTheme() {
        this.body[this.theme == "dark-theme" ? "add" : "remove"](this.theme_default)
    }

    changeIcon() {
        this.icon.src = "assets/img/".concat(
            this.body.contains(this.theme_default) ? this.icon_default : this.icon_dark
        )
    }

    modifyTheme() {
        this.theme = (this.theme == this.theme_default ? "light-theme" : this.theme_default)
    }

    static getBrowserPreferences() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
            return "light-theme"
        }

        return "dark-theme"
    }
} 

const option_theme = document.querySelector("[data-option-theme]")
const theme = new Theme(option_theme, "dark.png", "light.png")

option_theme.addEventListener('click', () => {
    theme.applyTheme()
})