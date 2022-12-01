import {Home,Projects,Lalasia,Urcrypto,Estatery,Techfaze, Appointly} from './Pages/index'
import './App.css'
import{Routes,Route} from 'react-router-dom'
import {Grid,Container} from '@mui/material'
function App() {
 
  return (

    <div className="App">
<Routes>
<Route  path='/' element ={<Home/>}/>
<Route  path='lalasia' element={<Lalasia/>}/>
<Route  path='urcrypto' element={<Urcrypto/>}/>
<Route  path='estatery' element={<Estatery/>}/>
<Route  path='techfaze' element={<Techfaze/>}/>
<Route  path='appointly' element={<Appointly/>}/>
</Routes>
    </div>
  
  )
}

export default App
