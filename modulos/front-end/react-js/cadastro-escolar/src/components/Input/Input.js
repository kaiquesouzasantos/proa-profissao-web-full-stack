import { useState } from 'react'
import './Input.css'

export default function Input({atribut, type, placeholder}) {
    const [value, setValue] = useState('')

    const handleChange = (event) => {
        const { value } = event.target
        setValue(value)
      }

    return(
        <div>
            <label htmlFor={atribut.toLowerCase()}>
                {atribut}: <span>*</span>
            </label>
            
            <input
                type={type}
                id={atribut.toLowerCase()}
                name={atribut.toLowerCase()}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                required
            />
        </div>
    )
} 