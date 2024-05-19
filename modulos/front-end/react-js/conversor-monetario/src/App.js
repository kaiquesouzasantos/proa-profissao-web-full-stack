import './App.css';
import Converter from './components/Converter/Converter'

export default function App() {
  return (
    <main className="container">
      <h1>Conversor de <span>Monetario</span></h1>
      
      <Converter />
  </main>
  )
}