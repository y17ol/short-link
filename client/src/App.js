import React from  'react'
import {BrowserRouter} from 'react-router-dom'
import {UseRoutes } from './routes'
import {useAuth} from './hooks/auth.hook'
import {AuthContext} from './context/AuthContext'
import { Navbar } from './components/Navbar'
import 'materialize-css'
import { Loader } from './components/Loader'

function App() {
  const {token, userId, login, logout, ready} = useAuth()
  const isAuthenticated = !!token
  const routes = UseRoutes(isAuthenticated)

  if (!ready) {
    return <Loader/>
  }
  
  return (
    <AuthContext.Provider value={{
      token, userId, login, logout, isAuthenticated
    }}>
      <BrowserRouter>
        { isAuthenticated && <Navbar/> }
        <div className="container">
          {routes}
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App