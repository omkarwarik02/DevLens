import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'

function App() {
  const location = useLocation()
  const hideNavbar =['/login','/signup'].includes(location.pathname)
  return(
    <div className="bg-[#0d1117] min-h-screen text-white">
      {!hideNavbar &&  <Navbar/>}
     
      <Routes>
        <Route path="/" element={<Landing></Landing>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/dashboard" element={ <Dashboard></Dashboard>}></Route>
      </Routes>
    </div>
  )
}
export default App