import { useState } from 'react'
import Todo from './Components/Todo'
import Home from './Components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

     {/* <Home/> */}
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/todo' element={<Todo/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
