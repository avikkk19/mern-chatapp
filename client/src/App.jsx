import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Auth from './pages/auth/Auth'
import Profile from './pages/auth/chat/Profile'
import Chat from './pages/auth/chat/Chat'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/auth" element={<Auth/>} />
      <Route path="*" element={<Auth/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/chat" element={<Chat/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App