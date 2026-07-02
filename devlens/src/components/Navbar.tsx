import { useState } from 'react'
import download from '../assets/download.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { UserRound, Menu, X } from 'lucide-react'
import { useAuth } from './AuthContext'

function Navbar() {
  const { name: fullName, logout } = useAuth()
  const name = fullName?.trim().split(" ")[0]
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLogout = () => {
    logout()
    navigate("/login")
  }

  return (
    <nav className="bg-[#0d1117] border-b border-[#30363d] h-[68px] flex items-center justify-between px-4 md:px-8 lg:px-24 fixed top-0 left-0 right-0 z-50">
      <div className='flex items-center gap-2'>
        <img src={download} alt='devlens' className='w-8 h-8' />
        <span className='text-xl font-bold text-white ml-1.5 cursor-pointer' onClick={() => navigate("/dashboard")}>DevLens</span>
      </div>

      {/* Desktop nav links */}
      <div className="hidden md:flex items-center gap-8 font-bold tracking-wide">
        <Link to="/#features" className="text-white text-sm hover:text-purple-400">Features</Link>
        <Link to="/#how-it-works" className="text-white text-sm hover:text-purple-400">How it Works</Link>
        <Link to="/#pricing" className="text-white text-sm hover:text-purple-400">Pricing</Link>
        {name && <Link to="/history" className="text-white text-sm hover:text-purple-400">History</Link>}
      </div>

      {/* Desktop auth */}
      <div className="hidden md:flex">
        {name ? (
          <div className='flex flex-row gap-3 items-center justify-center'>
            <UserRound size={18} color="white" />
            <h1 className='mr-3'>{name}</h1>
            <button className='bg-purple-600 text-white px-4 py-2 rounded-md text-sm cursor-pointer' onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div className="flex items-center gap-4 font-bold tracking-wide">
            <Link to="/login" className='text-white text-sm'>Login</Link>
            <button className='bg-purple-600 text-white px-4 py-2 rounded-md text-sm cursor-pointer' onClick={() => navigate("/login")}>Get Started</button>
          </div>
        )}
      </div>

      {/* Mobile hamburger */}
      <button className="md:hidden text-white p-1" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden absolute top-[68px] left-0 right-0 bg-[#0d1117] border-b border-[#30363d] flex flex-col px-6 py-4 gap-4 z-50">
          <Link to="/#features" className="text-white text-sm font-bold hover:text-purple-400" onClick={() => setMenuOpen(false)}>Features</Link>
          <Link to="/#how-it-works" className="text-white text-sm font-bold hover:text-purple-400" onClick={() => setMenuOpen(false)}>How it Works</Link>
          <Link to="/#pricing" className="text-white text-sm font-bold hover:text-purple-400" onClick={() => setMenuOpen(false)}>Pricing</Link>
          {name && <Link to="/history" className="text-white text-sm font-bold hover:text-purple-400" onClick={() => setMenuOpen(false)}>History</Link>}
          <div className="border-t border-[#30363d] pt-4">
            {name ? (
              <div className="flex items-center gap-3">
                <UserRound size={18} color="white" />
                <span className="text-white text-sm">{name}</span>
                <button className='bg-purple-600 text-white px-4 py-2 rounded-md text-sm cursor-pointer ml-auto' onClick={handleLogout}>Logout</button>
              </div>
            ) : (
              <div className="flex gap-4">
                <Link to="/login" className='text-white text-sm font-bold' onClick={() => setMenuOpen(false)}>Login</Link>
                <button className='bg-purple-600 text-white px-4 py-2 rounded-md text-sm cursor-pointer' onClick={() => { navigate("/login"); setMenuOpen(false) }}>Get Started</button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
