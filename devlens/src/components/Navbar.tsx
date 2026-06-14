import download from '../assets/download.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { UserRound } from 'lucide-react'  
function Navbar() {
  const name = localStorage.getItem("name")?.trim().split(" ")[0]
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("name")
    navigate("/login")
  }

  return (
    <nav className="bg-[#0d1117] border-b border-[#30363d] h-[68px] flex items-center justify-between px-24 fixed top-0 left-0 right-0 z-50">
        
            <div className='flex items-center gap-2 '>
                <img src={download} alt='devlens' className='w-8 h-8'></img>
                <span className='text-xl font-bold text-white ml-1.5 cursor-pointer'onClick={()=> navigate("/dashboard")}>DevLens</span>
            </div>
            {/*mid*/}

            <div className="flex items-center gap-8 font-bold tracking-wide hover: ">
                <Link to="/#features" className="text-white text-sm  hover:text-purple-400">Features</Link>
                  <Link to="/#how-it-works" className="text-white text-sm  hover:text-purple-400">How it Works</Link>
                <Link to="/#pricing" className="text-white text-sm  hover:text-purple-400">Pricing</Link>
               {name && <Link to="/history" className="text-white text-sm hover:text-purple-400">History</Link>}
            </div>

            {/* right */}
            {name ? (
              <>
            
              <div className='flex flex-row gap-3 items-center justify-center'>
                <UserRound size={18} color="white" />
                  <h1 className='mr-3'>{name}</h1>
                <button className='bg-purple-600 text-white px-4 py-2 rounded-md text-sm cursor-pointer' onClick={handleLogout}>Logout</button>
              </div>
              
              </>
            ):(
              <>
              <div className="flex items-center gap-8 font-bold tracking-wide">
                <Link to="/login" className='text-white text-sm'>Login</Link>
                <button className='bg-purple-600 text-white px-4 py-2 rounded-md text-sm cursor-pointer'>Get Started</button>
            </div>
            </>
            )}
            

    </nav>
  )
}

export default Navbar