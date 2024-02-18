export class Treatment {
    static mutateFormateCode(code) {
        return code
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
    }

    static mutateFormateTitleForName(title) {
        return title
            .toLowerCase()
            .replace(" ", "-");
    }

    static mutateFormateSearch(text) {
        return text
            .toLowerCase()
            .replace(" ", "");
    }
}