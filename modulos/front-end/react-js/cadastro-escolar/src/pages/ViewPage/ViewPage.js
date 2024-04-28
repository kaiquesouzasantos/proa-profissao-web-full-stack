import './ViewPage.css'
import ButtonHome from '../../components/ButtonHome/ButtonHome'
import CardView from '../../components/CardView/CardView'
import AcademicoRepository from '../../data/repository/AcademicoRepository'

export default function ViewPage() {
    return (
        <section className='section-view'>
            <ButtonHome/>
            
            <div className='div-view'>
                {
                    AcademicoRepository.get().map(
                        item => <CardView academico={item} />
                    )
                }
            </div>
        </section>
    )
}
