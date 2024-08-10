import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Signin from './pages/Signin'
import SignOut from './pages/SignOut'
import Profile from './pages/Profile'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/signin' element={<Signin/>}></Route>
      <Route path='/signout' element={<SignOut/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
    </Routes>
  )
}

export default App
