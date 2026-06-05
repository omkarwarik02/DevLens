import download from '../assets/download.jpg'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <nav className="bg-[#0d1117] border-b border-[#30363d] h-[68px] flex items-center justify-between px-24 fixed top-0 left-0 right-0 z-50">
        
            <div className='flex items-center gap-2 '>
                <img src={download} alt='devlens' className='w-8 h-8'></img>
                <span className='text-xl font-bold text-white ml-1.5'>DevLens</span>
            </div>
            {/*mid*/}

            <div className="flex items-center gap-8 font-bold tracking-wide hover: ">
                <Link to="/" className="text-white text-sm  hover:text-purple-400">Features</Link>
                  <Link to="/" className="text-white text-sm  hover:text-purple-400">How it Works</Link>
                <Link to="/" className="text-white text-sm  hover:text-purple-400">Pricing</Link>
            </div>

            {/* right */}
            <div className="flex items-center gap-8 font-bold tracking-wide">
                <Link to="/" className='text-white text-sm'>Login</Link>
                <button className='bg-purple-600 text-white px-4 py-2 rounded-md text-sm'>Get Started</button>
            </div>

    </nav>
  )
}

export default Navbar