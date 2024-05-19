export default function Select({ id, currency, setCurrency, currencies }) {
  return (
    <select
      id={id}
      value={currency}
      onChange={(event) => setCurrency(event.target.value)}
    >
      {currencies.map((currency) => (
        <option key={currency} value={currency}>
          {currency}
        </option>
      ))}
    </select>
  )
}