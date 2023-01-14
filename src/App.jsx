import {Home,Projects} from './Pages/index'
import './App.css'
import {Navbar,Footer} from './Reusables/index'
import{Routes,Route} from 'react-router-dom'
import {Grid,Container} from '@mui/material'
function App() {
 
  return (

 <Grid gap='3rem' container xs={12}  className="App">
<Navbar/>
<Routes>
<Route  path='/' element ={<Home/>}/>
<Route path = ':projectdetails' element={<Projects/>}/>
{/* 
 */}
</Routes>
<Footer/>
    </Grid>
  
  )
}

export default App
