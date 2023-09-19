import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import InsertMenu from './components/InsertForm'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<InsertMenu />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
