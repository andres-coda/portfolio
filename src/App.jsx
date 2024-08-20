import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './componentes/home/home'
import Heder from './componentes/heder/Heder'

function App() {

  return (
    <>
      <BrowserRouter>
    <Heder/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
