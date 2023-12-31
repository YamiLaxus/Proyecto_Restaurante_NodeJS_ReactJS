import { BrowserRouter, Routes, Route} from 'react-router-dom'
import InsertMenu from './components/InsertForm'
import MenuBar from './components/NavBar'
import { Container } from '@mui/material'
import Home from './components/Home'
import Login from './components/LoginPage'
import RegisterPage from './components/RegisterPage'

function App() {
  return (
  <div className="bg-[#262837] w-full min-h-screen">
    <BrowserRouter>
    <MenuBar/>
      <Container>
      <Routes>
        <Route path='/insert_menu' element={<InsertMenu />}/>
      </Routes>
      <Routes>
        <Route path='/' element={<Login />}/>
      </Routes>
      <Routes>
        <Route path='/siginup' element={<RegisterPage />}/>
      </Routes>
      <Routes>
        <Route path='/home' element={<Home />}/>
      </Routes>
      </Container>    
    </BrowserRouter>
    </div>
  )
}

export default App
