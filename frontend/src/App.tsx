import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MeuPerfil from './pages/MeuPerfil'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          <MeuPerfil type='Usuário Comum' username='Username' call='Aventureira' />

    </>
  )
}

export default App