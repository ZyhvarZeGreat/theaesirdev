import {Home,Projects,Lalasia,Urcrypto,Techfaze,Morent, Nuegas} from './Pages/index'
import './App.css'
import{Routes,Route} from 'react-router-dom'
import {Grid,Container} from '@mui/material'
function App() {
 
  return (

 <div className="App">
<Routes>
<Route  path='/' element ={<Home/>}/>
<Route path = ':projectdetails' element={<Projects/>}/>
{/* 
 */}
</Routes>
    </div>
  
  )
}

export default App
