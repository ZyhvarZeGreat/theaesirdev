import {Home} from './Pages/index'
import './App.css'
import{Routes,Route} from 'react-router-dom'
import {Grid,Container} from '@mui/material'
function App() {
 
  return (

    <div className="App">
<Routes>
<Route  path='/' element ={<Home/>}/>
</Routes>
    </div>
  
  )
}

export default App
