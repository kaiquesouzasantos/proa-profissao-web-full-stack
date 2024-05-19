import { useState } from 'react'
import './App.css'

export default function App() {
  const [expression, setExpression] = useState('')
  
  const press = (num) => {
    setExpression(prevExpression => prevExpression + num)
  }

  const equal = () => {
    try {
      setExpression(eval(expression))
    } catch(error) {
      setExpression("Error")
    }
  }

  const erase = () => {
    setExpression('');
  }

  return (
    <main className="container">
      <article className="calculator">
        <input id="input-user" placeholder="0" value={expression} readOnly/>

        <div className="line">
          <button className="button" onClick={() => press(1)}>1</button>
          <button className="button" onClick={() => press(2)}>2</button>
          <button className="button" onClick={() => press(3)}>3</button>
          <button className="button operation" onClick={() => press('+')}>+</button>
        </div>

        <div className="line">
          <button className="button" onClick={() => press(4)}>4</button>
          <button className="button" onClick={() => press(5)}>5</button>
          <button className="button" onClick={() => press(6)}>6</button>
          <button className="button operation" onClick={() => press('-')}>-</button>
        </div>

        <div className="line">
          <button className="button" onClick={() => press(7)}>7</button>
          <button className="button" onClick={() => press(8)}>8</button>
          <button className="button" onClick={() => press(9)}>9</button>
          <button className="button operation" onClick={() => press('*')}>*</button>
        </div>

        <div className="line">
          <button className="button" onClick={() => press('.')}>.</button>
          <button className="button" onClick={() => press(0)}>0</button>
          <button className="button" onClick={erase}>C</button>
          <button className="button operation" onClick={() => press('/')}>/</button>
        </div>

        <button className="button-equal" onClick={equal}>=</button>
      </article>
    </main>
  )
}
