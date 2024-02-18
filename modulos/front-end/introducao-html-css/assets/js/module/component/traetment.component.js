export class Treatment {
    static mutateFormateCode(code) {
        return code
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
    }

    static mutateFormateTitleForName(title) {
        return title
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(" ", "-");
    }

    static mutateFormateSearch(text) {
        return text
            .toLowerCase()
            .replace(" ", "");
    }
}