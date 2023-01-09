import {Home,Projects,Lalasia,Urcrypto,Techfaze,Morent, Nuegas} from './Pages/index'
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
<Route  path='nuegas' element={<Nuegas/>}/>
<Route  path='techfaze' element={<Techfaze/>}/>
<Route  path='morent' element={<Morent/>}/>
</Routes>
    </div>
  
  )
}

export default App
