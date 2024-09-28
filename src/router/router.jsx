import { 
    createBrowserRouter, 
    createRoutesFromElements, 
    Route
} from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import { Home } from "../pages/Home"
import { Explore } from "../pages/Explore"
import { NavBar } from '../components/NavBar'
import { Dashboard } from '../pages/Dashboard'
import { Login } from '../pages/Login'
import { Fallback } from '../error/Fallback'
import { errorHandler } from '../error/util/errorHandler'

export const router = createBrowserRouter(
    createRoutesFromElements(

        <Route element={<ErrorBoundary FallbackComponent={Fallback} onError={errorHandler} > <NavBar /> </ErrorBoundary>} >
          <Route path='/' element={<ErrorBoundary FallbackComponent={Fallback} onError={errorHandler} > <Home /> </ErrorBoundary>} />
          <Route path="dashboard" element={<ErrorBoundary FallbackComponent={Fallback} onError={errorHandler} > <Dashboard /> </ErrorBoundary> } />
          <Route path="explore" element={<ErrorBoundary FallbackComponent={Fallback} onError={errorHandler} > <Explore /> </ErrorBoundary> } />
          <Route path='login' element={<ErrorBoundary FallbackComponent={Fallback} onError={errorHandler} > <Login /> </ErrorBoundary> } />
        </Route>
  )
)