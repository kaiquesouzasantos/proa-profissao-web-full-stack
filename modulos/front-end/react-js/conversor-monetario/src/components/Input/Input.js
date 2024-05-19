export default function Input({ amount, setAmount }) {
  return (
    <div className="form-group input-wrapper">
      <label htmlFor="amount">Valor:</label>
      
      <input
        type="number"
        id="amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder='Digite um valor numerico'
        required
      />
    </div>
  )
}