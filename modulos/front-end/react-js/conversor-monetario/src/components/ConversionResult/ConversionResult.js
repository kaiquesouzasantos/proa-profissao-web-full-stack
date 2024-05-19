export default function ConversionResult({ convertedAmount, toCurrency }) {
  return (
    convertedAmount !== null && (
      <div className="result">
        <p>{toCurrency}$ {convertedAmount}</p>
      </div>
    )
  )
}