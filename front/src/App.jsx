import 'bootstrap/dist/css/bootstrap.min.css'
import User from './User'
import Update from './Update'
import Create from './Create'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import axios from 'axios'
import { useDispatch ,useSelector} from 'react-redux'
import { getUser } from './redux/userSlice'
import { useEffect } from 'react'
import './App.css'
function App() {
  const dispatch=useDispatch();
  
  useEffect(()=>{
    const datafetch=async()=>{
           try {
            const response=await axios.get("http://localhost:3000");
            dispatch(getUser(response.data));
           } catch (error) {
            console.log(error)
           }
    }
    datafetch();
},[]);
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<User/>}></Route>
      <Route path='/create' element={<Create/>}></Route>
      <Route path='/update/:id' element={<Update/>}></Route> 
     </Routes>
    </BrowserRouter>
  )
}

export default App
