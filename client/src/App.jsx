import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Signin from './pages/Signin'
import Profile from './pages/Profile'
import Header from './components/Header'
import SignUp from './pages/SignUp'
import PrivateRoute from './components/PrivateRoute'
import CreateListing from './pages/CreateListing'


const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/sign-in' element={<Signin/>}></Route>
        <Route path='/sign-up' element={<SignUp/>}></Route>
        <Route element={<PrivateRoute/>}>
           <Route path='/profile' element={<Profile/>}></Route>
           <Route path='/create-listing' element={<CreateListing/>}></Route>
        </Route>
      </Routes>
    </>

  )
}

export default App
