class Clock {
    constructor() {
        this.date = new Date()
    }

    run() {
        this.setSeconds()
        this.setMinutes()
        this.setHours()
    }

    setSeconds() {
        this.getDOMELement("segundos").textContent = this.formatTime(this.date.getSeconds())
    }

    setMinutes() {
        this.getDOMELement("minutos").textContent = this.formatTime(this.date.getMinutes())
    }

    setHours() {
        this.getDOMELement("horas").textContent = this.formatTime(this.date.getHours())
    }

    formatTime(time) {
        return (time < 10) ? "0" + time : time
    }

    getDOMELement(id) {
        return document.getElementById(id)
    }
}

setInterval(() => {
    new Clock().run()
}, 1000)