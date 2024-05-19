import './Container.css'
import Item from '../Item/Item'

import { useState, useEffect } from 'react'
import NotaRepository from '../../data/repository/NotaRepository'

export default function Container() {
    const [notas, setNotas] = useState([])

    useEffect(() => {
        const interval = setInterval(() => {
            setNotas(NotaRepository.get())
        }, 100)

        return () => clearInterval(interval)
    }, [])

    return (
        <main>
            <section>
                <div className="container">
                    <div id="to-do-list" className="to-do-list">
                        {notas.map(nota => 
                            <Item conteudo={nota.conteudo} />
                        )}
                    </div>
                </div>
            </section>
        </main>
    )
}