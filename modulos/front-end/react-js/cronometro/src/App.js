import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faStop } from '@fortawesome/free-solid-svg-icons'
import './App.css'

export default function App() {
  const [time, setTime] = useState({ seconds: 0, minutes: 0, hours: 0 })
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let interval

    if (isRunning) {
      interval = setInterval(() => {
        setTime(prevTime => {
          const newTime = { ...prevTime }

          if (newTime.seconds >= 59) {
            newTime.seconds = 0
            if (newTime.minutes >= 59) {
              newTime.minutes = 0
              newTime.hours++
            } else {
              newTime.minutes++
            }
          } else {
            newTime.seconds++
          }

          return newTime
        })
      }, 1000)
    } else {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [isRunning])

  const startClock = () => {
    setIsRunning(true)
  }

  const stopClock = () => {
    setIsRunning(false)
  }

  const resetClock = () => {
    setIsRunning(false)
    setTime({ seconds: 0, minutes: 0, hours: 0 })
  }

  return (
    <main>
      <article>
        <section className="relogio">
          <div>
            <span id="horas">{time.hours < 10 ? `0${time.hours}` : time.hours}</span>
            <span className="tempo">Horas</span>
          </div>

          <div>
            <span id="minutos">{time.minutes < 10 ? `0${time.minutes}` : time.minutes}</span>
            <span className="tempo">Minutos</span>
          </div>

          <div>
            <span id="segundos">{time.seconds < 10 ? `0${time.seconds}` : time.seconds}</span>
            <span className="tempo">Segundos</span>
          </div>
        </section>

        <section className="controles">
          <FontAwesomeIcon
            icon={faPlay}
            onClick={startClock}
            className={`icon ${isRunning ? 'active' : ''}`}
          />

          <FontAwesomeIcon
            icon={faPause}
            onClick={stopClock}
            className={`icon ${isRunning ? 'active' : ''}`}
          />

          <FontAwesomeIcon
            icon={faStop}
            onClick={resetClock}
            className="icon"
          />
        </section>
      </article>
    </main>
  )
}
