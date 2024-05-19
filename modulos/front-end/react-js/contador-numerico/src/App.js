import './App.css'

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

export default function App() {
  const [count, setCount] = useState(0)

  const increase = () => {
    setCount(count+1)
  } 

  const decrease = () => {
    setCount(count-1)
  }

  return (
    <main>
      <article className="container">
        <section className="counter">
          <h1 className="count">{count}</h1>

          <div className="buttons">
            <FontAwesomeIcon 
              icon={faMinus} 
              onClick={decrease} 
              className='icon'
            />

            <FontAwesomeIcon 
              icon={faPlus} 
              onClick={increase} 
              className='icon'
            />
          </div>

        </section>
      </article>
    </main>
  )
}
