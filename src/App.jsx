import { RouterProvider } from 'react-router-dom'
import { router } from './router/router'
import { useState } from 'react'
import { UserContext } from './context/userContext'

function App() {
  const [ user, setUser ] = useState({
    name: '',
    email: ''
  })  

  return (
    <div>
      <UserContext.Provider value={[ user,  setUser ]}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </div>
  )
}

export default App
