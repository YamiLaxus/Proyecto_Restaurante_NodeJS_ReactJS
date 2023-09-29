import { BrowserRouter, Routes, Route} from 'react-router-dom'
import InsertMenu from './components/InsertForm'
import MenuBar from './components/NavBar'
import { Container } from '@mui/material'
import Home from './components/Home'

function App() {
  return (
    <BrowserRouter>
    <MenuBar/>
      <Container>
      <Routes>
        <Route path='/insert_menu' element={<InsertMenu />}/>
      </Routes>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
      </Container>    
    </BrowserRouter>
  )
}

export default App
