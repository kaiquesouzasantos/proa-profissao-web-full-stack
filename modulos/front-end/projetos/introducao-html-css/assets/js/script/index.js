/* Adiciona o Bloco de Codio a Area de Tranferencia */
function copyTextCode(identificationTopic) {
    navigator.clipboard.writeText(
        document.getElementById(`code-content-${identificationTopic}`).value
    )
}