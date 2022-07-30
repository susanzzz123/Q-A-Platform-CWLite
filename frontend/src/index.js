import ReactDOM from 'react-dom/client'
import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

// import route components
import { App } from './App'
import { Login } from './components/Login'
import { Signup } from './components/Signup'
const root = ReactDOM.createRoot(
  document.getElementById('app')
)
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path="/signup" element={<Signup />}>
      </Route>
      <Route path='/login' element={<Login />}>
      </Route>
    </Routes>
  </BrowserRouter>
)
