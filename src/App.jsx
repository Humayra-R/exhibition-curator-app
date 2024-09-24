import { RouterProvider } from 'react-router-dom'
import { router } from './router/router'
import { useState } from 'react'
import { UserContext } from './context/UserContext'
import { GalleryContext } from './context/GalleryContext'

function App() {
  const [ user, setUser ] = useState({
    name: '',
    email: ''
  })  

  const [ userArtworks, setUserArtworks ] = useState([])

  return (
    <div>
      <UserContext.Provider value={[ user,  setUser ]}>
        <GalleryContext.Provider value ={[ userArtworks, setUserArtworks ]}>
          <RouterProvider router={router} />
        </GalleryContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

export default App
