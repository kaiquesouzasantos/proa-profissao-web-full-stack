class Clock {
    constructor() {
        this.time = new Time()
        this.isRunning = false
        this.interval = null
    }

    start() {
        // se isRunning == false, adere a condicao
        if (!this.isRunning) {
            this.interval = setInterval(() => {
                this.time.setSeconds()
                this.setTime()
            }, 1000)

            this.isRunning = true
        }
    }

    stop() {
        // encerra a execucao do intervalo paralelo
        clearInterval(this.interval)
        this.isRunning = false
    }
    
    reset() {
        this.stop()
        // reinicia a contagem de tempo
        this.time = new Time()
        this.setTime()
    }

    setTime() {
        this.setSeconds()
        this.setMinutes()
        this.setHours()
    }

    setSeconds() {
        this.getDOMELement("segundos").textContent = this.formatTime(this.time.getSeconds())
    }

    setMinutes() {
        this.getDOMELement("minutos").textContent = this.formatTime(this.time.getMinutes())
    }

    setHours() {
        this.getDOMELement("horas").textContent = this.formatTime(this.time.getHours())
    }

    formatTime(time) {
        return (time < 10) ? "0" + time : time
    }

    getDOMELement(id) {
        return document.getElementById(id)
    }
}

class Time {
    constructor() {
        this.seconds = 0
        this.minutes = 0
        this.hours = 0
    }

    setSeconds() {
        if (this.seconds >= 59) {
            this.setMinutes()
            this.seconds = 0
        } else {
            this.seconds++
        }
    }

    setMinutes() {
        if (this.minutes >= 59) {
            this.setHours()
            this.minutes = 0
        } else {
            this.minutes++
        }
    }

    setHours() {
        this.hours++
    }

    getSeconds() {
        return this.seconds
    }

    getMinutes() {
        return this.minutes
    }

    getHours() {
        return this.hours
    }
}

const clock = new Clock()
const datas = ["[data-play]", "[data-stop]", "[data-reset]"]

getElement(datas[0]).addEventListener("click", () => {
    clock.start()
    colorActive(datas[0])
})

getElement(datas[1]).addEventListener("click", () => {
    clock.stop()
    colorActive(datas[1])
})

getElement(datas[2]).addEventListener("click", () => {
    clock.reset()
    colorActive(datas[2])
})

function colorActive(active) {
    for(let data of datas) {
        if(data != active)
            getElement(data).classList.remove("active")
        else
            getElement(data).classList.add("active")
    }
}

function getElement(data) {
    return document.querySelector(data)
} 