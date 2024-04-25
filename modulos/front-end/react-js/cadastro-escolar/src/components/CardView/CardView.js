import './CardView.css'
import ItemCardView from '../ItemCardView/ItemCardView'

export default function CardView({academico}) {
    return(
        <article className='article-card'>
            <ItemCardView title="Nome" text={academico.name}/>
            <ItemCardView title="RA" text={academico.ra}/>
            <ItemCardView title="Email" text={academico.email}/>
            <ItemCardView title="Senha" text={academico.senha}/>
            <ItemCardView title="Data de Nascimento" text={academico.nascimento}/>
            <ItemCardView title="Telefone" text={academico.telefone}/>
            <ItemCardView title="Curso" text={academico.curso}/>
            <ItemCardView title="Periodo" text={academico.periodo}/>
        </article>
    )
} 