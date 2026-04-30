
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Componentes/Footer'
import Header from './Componentes/Header'
import { Link } from 'react-router-dom'
import Exercicio1 from './pages/Exercicio1'
import Home from './pages/Home'
import Exercicio2 from './pages/Exercicio2'
function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercicio1" element={<Exercicio1 />} />
        <Route path="/exercicio2" element={<Exercicio2 />} />

      </Routes>



      <Footer />
    </>
  )
}

export default App
