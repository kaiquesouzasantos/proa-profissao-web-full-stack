import './FormPage.css'
import { useState } from 'react'
import ButtonSubmit from '../../components/ButtonSubmit/ButtonSubmit'
import ButtonHome from '../../components/ButtonHome/ButtonHome'
import AcademicoRepository from '../../data/repository/AcademicoRepository'
import MessageSubmit from '../../components/MessageSubmit/MessageSubmit'

import { AcademicoModel } from '../../data/model/AcademicoModel'

export default function FormPage() {
    const [formData, setFormData] = useState(new AcademicoModel())

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData({...formData, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        AcademicoRepository.set(formData)
        resetFormData()
    }
    
    const resetFormData = () => {
        setFormData(new AcademicoModel())
    }

    return(
        <section className='section'>
            <ButtonHome/>
            <MessageSubmit success={false}/>
            
            <h2 className='form-title'>Formulário de Cadastro de Acadêmico</h2>

            <form onSubmit={handleSubmit} className='form'>
                <div>
                    <label htmlFor="nome">
                        Nome: <span>*</span>
                    </label>
                    
                    <input
                        type="text"
                        name="nome"
                        placeholder="Digite seu Nome Completo"
                        value={formData.nome || ""}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="ra">
                        RA: <span>*</span>
                    </label>
                    
                    <input
                        type="text"
                        name="ra"
                        placeholder="Digite seu Registro Academico"
                        value={formData.ra || ""}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="email">
                        E-mail: <span>*</span>
                    </label>
                    
                    <input
                        type="email"
                        name="email"
                        placeholder="Digite seu Email"
                        value={formData.email || ""}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="senha">
                        Senha: <span>*</span>
                    </label>
                    
                    <input
                        type="text"
                        name="senha"
                        placeholder="Digite sua Senha"
                        value={formData.senha || ""}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="nascimento">
                        Data de Nascimento: <span>*</span>
                    </label>
                    
                    <input
                        type="date"
                        name="nascimento"
                        value={formData.nascimento || ""}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="telefone">
                        Telefone: <span>*</span>
                    </label>
                    
                    <input
                        type="text"
                        name="telefone"
                        placeholder='(99) 99999-9999'
                        value={formData.telefone || ""}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="curso">
                        Curso: <span>*</span>
                    </label>
                    
                    <input
                        type="text"
                        name="curso"
                        placeholder="Digite o seu Curso"
                        value={formData.curso || ""}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="periodo">
                        Período: <span>*</span>
                    </label>
                    
                    <input
                        type="text"
                        name="periodo"
                        placeholder="Digite o Periodo"
                        value={formData.periodo || ""}
                        onChange={handleChange}
                        required
                    />
                </div>

                <ButtonSubmit/>
            </form>
        </section>   
    )
} 