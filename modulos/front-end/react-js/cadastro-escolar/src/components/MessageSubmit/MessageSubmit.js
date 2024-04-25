import './MessageSubmit.css'

export default function MessageSubmit({success}) {
    return(
        <article className={"article-message " + (success ? "success" : "error")}>
            {
                success ? <p>Cadastro Realizado com Sucesso!</p> : <p>Cadastro Inválido, Tente Novamente!</p>
            }
        </article>
    )
} 