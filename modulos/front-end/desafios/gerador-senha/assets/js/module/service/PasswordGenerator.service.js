export class PasswordGenerator {
    constructor() {
        this.charSets = {
            lowercase: "abcdefghijklmnopqrstuvwxyz",
            uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            numbers: "0123456789",
            symbols: "^!$%&|[](){}:.,*+-#@<>~"
        }
    }

    generatePassword(options, passwordLength) {
        let staticPassword = ""
        let randomPassword = ""
        let excludeDuplicate = false

        // configura a geracao com base nas preferencias
        options.forEach(option => {
            if (option.checked) {
                switch (option.id) {
                    case "exc-duplicate":
                        excludeDuplicate = true
                        break
                    case "spaces":
                        staticPassword += `  ${staticPassword}  `
                        break
                    default:
                        staticPassword += this.charSets[option.id]
                        break
                }
            }
        })

        for (let i = 0; i < passwordLength; i++) {
            let randomChar = staticPassword[Math.floor(Math.random() * staticPassword.length)]

            if (excludeDuplicate) {
                // se ja houver, retorna a tentativa na iteracao
                
                if (!randomPassword.includes(randomChar) || randomChar == " ") {
                    randomPassword += randomChar
                } else {
                    i--
                }
            } else {
                randomPassword += randomChar
            }
        }

        return randomPassword
    }
}