import './App.css'
import { useState, useEffect } from 'react'
import { Clock } from './helpers/Clock.helper'

export default function App() {
  const [hora, setHora] = useState(new Clock())

  useEffect(() => { 
    const interval = setInterval(() => { 
      setHora(new Clock().run())
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <main>
        <article className="relogio">
            <div>
                <span id="horas">{hora.hours}</span>
                <span className="tempo">Horas</span>
            </div>
    
            <div>
                <span id="minutos">{hora.minutes}</span>
                <span className="tempo">Minutos</span>
            </div>
    
            <div>
                <span id="segundos">{hora.seconds}</span>
                <span className="tempo">Segundos</span>
            </div>
        </article>
    </main>
  )
}
