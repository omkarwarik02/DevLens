import ProtectedRoute from "./components/ProtectedRoute"
import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import History from "./pages/History"
import Documentation from "./pages/Documentation"

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])
  return null
}

function App() {
  const location = useLocation()
  const hideNavbar =['/login','/signup'].includes(location.pathname)
  return(
    <div className="bg-[#0d1117] min-h-screen text-white">
      <ScrollToTop />
      {!hideNavbar &&  <Navbar/>}
      <div className={!hideNavbar ? "pt-[68px]" : ""}>
      <Routes>
        <Route path="/" element={<Landing></Landing>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/history" element={<History></History>}></Route>
        <Route path="/docs" element={<Documentation></Documentation>}></Route>
        <Route path="/dashboard" element={ 
        <ProtectedRoute>
           <Dashboard></Dashboard>
        </ProtectedRoute>
        } />
          </Routes>
      </div>
    </div>
  )
}
export default App