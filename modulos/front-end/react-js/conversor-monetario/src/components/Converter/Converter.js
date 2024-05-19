import { useState, useEffect } from 'react'

import CurrencyInput from '../Input/Input'
import CurrencySelect from '../Select/Select'
import ConversionResult from '../ConversionResult/ConversionResult'

export default function Converter() {
  const [amount, setAmount] = useState('')
  const [fromCurrency, setFromCurrency] = useState('BRL')
  const [toCurrency, setToCurrency] = useState('USD')
  const [convertedAmount, setConvertedAmount] = useState(null)
  const [currencies, setCurrencies] = useState([])
  const [exchangeRate, setExchangeRate] = useState(null)

  const fetchCurrencies = async () => {
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/BRL')
    const data = await response.json()
    setCurrencies([data.base, ...Object.keys(data.rates)])
  }

  const fetchExchangeRate = async () => {
    if (fromCurrency && toCurrency) {
      const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
      const data = await response.json()
      setExchangeRate(data.rates[toCurrency])
    }
  }

  useEffect(() => {
    fetchCurrencies()
  }, [])

  useEffect(() => {
    fetchExchangeRate()
  }, [fromCurrency, toCurrency])

  const handleSubmit = (event) => {
    event.preventDefault()
    
    if (exchangeRate) {
      const result = parseFloat(amount) * exchangeRate
      setConvertedAmount(result.toFixed(2))
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <CurrencyInput amount={amount} setAmount={setAmount} />

      <div className="form-group options input-wrapper">
        <CurrencySelect 
          id="fromCurrency" 
          currency={fromCurrency} 
          setCurrency={setFromCurrency} 
          currencies={currencies} 
        />

        <CurrencySelect 
          id="toCurrency" 
          currency={toCurrency} 
          setCurrency={setToCurrency} 
          currencies={currencies} 
        />
      </div>

      <button type="submit">Converter</button>

      <ConversionResult 
        convertedAmount={convertedAmount} toCurrency={toCurrency} 
      />
    </form>
  )
}