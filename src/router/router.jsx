import { 
    createBrowserRouter, 
    createRoutesFromElements, 
    Route
} from 'react-router-dom'
import { Home } from "../pages/Home"
import { Explore } from "../pages/Explore"
import { NavBar } from '../components/NavBar'
import { Dashboard } from '../pages/Dashboard'
import { Login } from '../pages/Login'
import { Logout } from '../components/Logout'


export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<NavBar />} >
        <Route path='/' element={ <Home />} />
        <Route path="dashboard" element={ <Dashboard /> } />
        <Route path="explore" element={ <Explore />} />
        <Route path='login' element={ <Login /> } />
        <Route path='logout' element={ <Logout /> } />
      </Route>
    )
)