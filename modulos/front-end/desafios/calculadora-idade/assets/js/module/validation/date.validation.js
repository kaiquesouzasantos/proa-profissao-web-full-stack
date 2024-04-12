export class DateValidation {
    static isValid(date) {
        return this.minYear(date) && this.maxYear(date)
    }

    static minYear(date) {
        return date.getYears() >= 0
    }

    static maxYear(date) {
        return date.getYears() <= 200
    }
}