// Classe para validar campos de formulário
export class FieldValidator {
    constructor(fields) {
        this.fields = fields;

        // Adiciona listeners para os eventos 'invalid' e 'blur' em cada campo
        for (const field of this.fields) {
            // Listener para o evento 'invalid' (quando o campo falha na validação nativa do HTML)
            field.addEventListener("invalid", event => {
                event.preventDefault(); // Impede o comportamento padrão do navegador
                this.validator(event.target); // Chama a função de validação personalizada
            });

            // Listener para o evento 'blur' (quando o campo perde o foco)
            field.addEventListener("blur", event => {
                this.validator(event.target); // Chama a função de validação personalizada
            });
        }
    }

    verifyErrors(field) {
        let foundError = false;

        // Percorre as propriedades de validação do campo
        for (const error in field.validity) {
            // Verifica se houve algum erro e se o campo não é válido
            if (field.validity[error] && !field.validity.valid) {
                foundError = error; // Atribui o tipo de erro encontrado
            }
        }

        return foundError; // Retorna o tipo de erro encontrado ou false se não houver erros
    }

    customMessage(field, typeError) {
        const messages = {
            text: {
                valueMissing: "Preencha este campo" // Mensagem de erro para campo obrigatório não preenchido
            }
        };
        
        return messages[field.type][typeError]; // Retorna a mensagem de erro correspondente ao tipo de campo e erro
    }

    setCustomMessage(field, message) {
        const spanError = field.parentNode.querySelector("span.error"); // Seleciona o elemento de mensagem de erro

        if (message) {
            // Se houver uma mensagem, adiciona a classe 'active' para exibir e define o conteúdo da mensagem
            spanError.classList.add("active");
            spanError.innerHTML = message;
        } else {
            // Se não houver mensagem, remove a classe 'active' para esconder e limpa o conteúdo da mensagem
            spanError.classList.remove("active");
            spanError.innerHTML = "";
        }
    }

    validator(field) {
        const error = this.verifyErrors(field);

        if (error) {
            const message = this.customMessage(field, error);

            field.style.borderColor = "red"; 
            this.setCustomMessage(field, message); 
        } else {
            field.style.borderColor = "green"; 
            this.setCustomMessage(field, ""); 
        }
    }
}