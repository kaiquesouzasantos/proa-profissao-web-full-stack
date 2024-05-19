import './Item.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import NotaRepository from '../../data/repository/NotaRepository'

export default function Item({ conteudo }) {
    const handleRemover = () => {
        NotaRepository.remove(conteudo)
    }

    return (
        <div className="item">
            <p>{conteudo}</p>
            
            <div>
                <FontAwesomeIcon
                    icon={faTrash}
                    className='icon'
                    onClick={handleRemover}
                />
            </div>
        </div>
    )
}