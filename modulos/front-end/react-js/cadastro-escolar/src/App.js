import './App.css'
import HomePage from './pages/HomePage/HomePage'
import FormPage from './pages/FormPage/FormPage'
import ViewPage from './pages/ViewPage/ViewPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/save" element={<FormPage/>}></Route>
        <Route path="/view" element={<ViewPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
