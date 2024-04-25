import './FormPage.css'
import { useState } from 'react'
import Input from "../../components/Input/Input"
import ButtonSubmit from '../../components/ButtonSubmit/ButtonSubmit'
import ButtonHome from '../../components/ButtonHome/ButtonHome'
import AcademicoRepository from '../../data/repository/AcademicoRepository'
import MessageSubmit from '../../components/MessageSubmit/MessageSubmit'

export default function FormPage() {
    const academicoRepository = new AcademicoRepository()
    const [formData, setFormData] = useState({})

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formData)
        academicoRepository.set(formData)
        setFormData({})
    }

    return(
        <section className='section'>
            <ButtonHome/>
            <MessageSubmit success={false}/>
            
            <h2 className='form-title'>Formulário de Cadastro de Acadêmico</h2>

            <form onSubmit={handleSubmit} className='form'>
                <Input atribut="Nome" type="text" placeholder="Digite seu Nome Completo"/>
                <Input atribut="RA" type="text" placeholder="Digite seu Registro Academico"/>
                <Input atribut="E-mail" type="email" placeholder="Digite seu Email"/>
                <Input atribut="Senha" type="text" placeholder="Digite sua Senha"/>
                <Input atribut="Data de Nascimento" type="date" placeholder=""/>
                <Input atribut="Telefone" type="text" placeholder="(99) 99999-9999"/>
                <Input atribut="Curso" type="text" placeholder="Digite o seu Curso"/>
                <Input atribut="Período" type="text" placeholder="Digite o Periodo"/>

                <ButtonSubmit/>
            </form>
        </section>   
    )
} 