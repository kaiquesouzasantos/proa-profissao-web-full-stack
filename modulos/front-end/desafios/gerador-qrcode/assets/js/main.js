class QRCodeGenerator {
    constructor(formId, qrcodeContainerId, buttonDownloadId) {
        this.form = document.getElementById(formId)
        this.qrcodeContainer = document.getElementById(qrcodeContainerId)
        this.buttonDownload = document.getElementById(buttonDownloadId)

        this.form.addEventListener("submit", this.onGenerateSubmit.bind(this))
    }

    onGenerateSubmit(event) {
        event.preventDefault()
        const url = document.getElementById("url").value

        if (url === "") {
            alert("Please enter a URL")
        } else {
            setTimeout(() => {
                this.clearQRCode()
                this.generateQRCode(url)
                this.showScanner()
            }, 1000)
        }
    }

    generateQRCode(url) {
        new QRCode(this.qrcodeContainer, {
            text: url,
            width: "300",
            height: "300",
        })
    }

    clearQRCode() {
        this.qrcodeContainer.innerHTML = ''
    }

    showScanner() {
        this.qrcodeContainer.style.display = "block"
        this.activeButtonSave()
    }

    activeButtonSave() {
        if (!this.buttonDownload.getAttribute("data-created")) {
            this.buttonDownload.addEventListener("click", this.downloadQRCode.bind(this))
            this.buttonDownload.setAttribute("data-created", true)
        }
    }

    downloadQRCode() {
        const link = document.createElement("a")
        link.href = this.qrcodeContainer.querySelector("canvas").toDataURL()
        link.download = "QR_CODE.png"
        link.click()
    }
}

new QRCodeGenerator("generate-form", "qrcode", "button-download")