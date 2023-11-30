import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Welcome from '../Pages/Welcome'

import Signup from '../Pages/auth/Signup'
import Signin from '../Pages/auth/Signin'

import Cover from '../Pages/Cover'

function PublicRoutes() {
  return (
    <div>
    <Routes>

      <Route path='/' element={<Welcome/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/cover' element={<Cover/>}/>

    </Routes>
    </div>
  )
}

export default PublicRoutes