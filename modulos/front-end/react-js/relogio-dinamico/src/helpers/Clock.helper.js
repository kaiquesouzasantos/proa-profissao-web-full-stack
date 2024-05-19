export class Clock {
    constructor() {
        this.date = new Date()
    }

    run() {
        this.hours = this.formatTime(this.date.getHours())
        this.minutes = this.formatTime(this.date.getMinutes())
        this.seconds = this.formatTime(this.date.getSeconds())

        return this
    }

    formatTime(time) {
        return (time < 10) ? "0" + time : time
    }
}