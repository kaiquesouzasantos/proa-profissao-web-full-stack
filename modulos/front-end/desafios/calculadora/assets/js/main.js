const userInput = document.querySelector("#input-user")
var expression = ""

press = (num) => {
    expression += num
    userInput.value = expression
}

equal = () => {
    userInput.value = eval(expression)
    expression = ""
}

erase = () => {
    expression = ""
    userInput.value = expression
}