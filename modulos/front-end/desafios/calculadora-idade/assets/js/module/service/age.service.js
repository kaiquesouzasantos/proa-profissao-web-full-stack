export class Age {
    constructor(dateBirth) {
        this.dateAge = this.factoryDate(dateBirth)
    }

    factoryDate(dateBirth) {
        return new Date(
            Date.now() - new Date(dateBirth)
        )
    }

    getYears() {
        return this.dateAge.getUTCFullYear() - 1970
    }

    getMonths() {
        return this.dateAge.getUTCMonth()
    }    

    getDays() {
        return this.dateAge.getUTCDate()
    }
}