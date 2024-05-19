import './Header.css'
import { useState } from 'react'
import NotaRepository from '../../data/repository/NotaRepository'
import { NotaModel } from '../../data/model/NotaModel'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardCheck, faSave } from '@fortawesome/free-solid-svg-icons'
import ContentValidation from '../../helpers/ContentValidation'

export default function Header() {
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const handleSubmit = () => {
        if(!ContentValidation.isValid(inputValue)) {
            alert("Cadastro Inválido, Tente Novamente!")
            return
        }

        NotaRepository.set(new NotaModel(inputValue))
        setInputValue('')
    }

    return(
        <header>
            <div className="container">
                <div id="header" className="header">
                    <h2>
                        <FontAwesomeIcon
                            icon={faClipboardCheck}
                        />
                        To-do List
                    </h2>

                    <div className="user-input">
                        <input 
                            type="text" 
                            id="input" 
                            placeholder="I need to..."
                            value={inputValue || ""} 
                            onChange={handleInputChange} 
                        />

                        <button id="add-item" className="add-item" onClick={handleSubmit}>
                            <FontAwesomeIcon
                                icon={faSave}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}