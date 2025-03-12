
import './App.css'
import RoutesIndex from '../router/RoutesIndex'
import { BrowserRouter } from 'react-router-dom'
import Home from '@/pages/home/Home'

function App() {

  return (
    <>
      <BrowserRouter>
        <RoutesIndex/>
      </BrowserRouter>
    </>
      
  )
}

export default App
