class Upload {
    constructor(documentReference, listFiles) {
        this.documentReference = documentReference
        this.listFiles = Array.from(listFiles)
    }

    render() {
        let fileListContent = ""

        this.listFiles.forEach(
            (file) => {
                let size = this.returnSize(file)

                fileListContent += this.formatElement(
                    file.name, size, this.verifySize(size)
                )
            }
        )

        this.documentReference.innerHTML = fileListContent
    }

    verifySize(size) {
       return (Number(size) >= 1024) ? "MB" : "KB"
    }

    returnSize({size}) {
        return (size / 1024).toFixed(1)
    }

    formatElement(name, size, unitSize) {
        return `<li><p>${name}</p><p>${size} ${unitSize}</p></li>`
    }
}

function getDOMElement(id) {
    return document.getElementById(id)
}

const fileInput = getDOMElement("input-file")
const fileList = getDOMElement("list")
const numOfFiles = getDOMElement("list-counter")

fileInput.addEventListener("change", () => {
    let files = fileInput.files.length

    if(files > 5) {
        alert("The limit of supported files is 5, please try again.")
        return
    }

    numOfFiles.textContent = `${files} Files Selected`
    new Upload(fileList, fileInput.files).render()
})
