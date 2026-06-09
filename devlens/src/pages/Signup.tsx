import { useState } from "react"
import download from "../assets/download.jpg"
import { FaGithub } from 'react-icons/fa'
import { useNavigate } from "react-router-dom"

function Signup() {
  const [name,setName] =useState("")
const[email,setEmail] = useState("")
const [password,setPassword] = useState("")
const [confirmPassword, setConfirmPassword] = useState("")
const navigate = useNavigate()


const handleSignUp = async () => {
  try {
    if(password !== confirmPassword){
      alert("Password do not match!")
      return
    }
    const res = await fetch("http://localhost:5000/api/auth/signup",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({name,email,password})
    })
    const data = await res.json()
    localStorage.setItem("token",data.token)
    navigate("/login")
  }catch(err){
    console.error(err)
    alert("SignUp failed try again")
  }
}



  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <div className="bg-[#161B22] items-center justify-center w-[420px] pb-10">
        <div className="flex items-center flex-col mt-10">
          <img src={download} className="w-[48px] h-[50px]" />
          <h3 className="text-[#D2BBFF] tracking-wide font-bold text-2xl mt-5">DevLens</h3>
          <h1 className="font-bold text-3xl mt-5">Create Account</h1>
          <p className="text-[#8B949E] mt-3">Sign up for your DevLens account</p>
        </div>

        <div className="flex flex-col mx-8">
          <small style={{ fontFamily: 'JetBrains Mono', fontWeight: 400 }} className="mt-8 mb-2">Full Name</small>
          <input
           value={name}
           onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="John Doe"
            className="bg-[#0D1117] border border-[#30363D] text-white text-sm rounded-md px-4 py-3 w-full placeholder-[#4B5563] focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
          />
        </div>

        <div className="flex flex-col mx-8">
          <small style={{ fontFamily: 'JetBrains Mono', fontWeight: 400 }} className="mt-6 mb-2">Email Address</small>
          <input
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
            type="email"
            placeholder="you@example.com"
            className="bg-[#0D1117] border border-[#30363D] text-white text-sm rounded-md px-4 py-3 w-full placeholder-[#4B5563] focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
          />
        </div>

        <div className="flex flex-col mx-8">
          <small style={{ fontFamily: 'JetBrains Mono', fontWeight: 400 }} className="mt-6 mb-2">Password</small>
          <input
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
            type="password"
            placeholder="••••••••"
            className="bg-[#0D1117] border border-[#30363D] text-white text-sm rounded-md px-4 py-3 w-full placeholder-[#4B5563] focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
          />
        </div>

        <div className="flex flex-col mx-8">
          <small style={{ fontFamily: 'JetBrains Mono', fontWeight: 400 }} className="mt-6 mb-2">Confirm Password</small>
          <input
          value={confirmPassword}
          onChange={(e)=>setConfirmPassword(e.target.value)}
            type="password"
            placeholder="••••••••"
            className="bg-[#0D1117] border border-[#30363D] text-white text-sm rounded-md px-4 py-3 w-full placeholder-[#4B5563] focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
          />

          <button className="mt-6 bg-purple-600 h-[40px]" onClick={handleSignUp}>Sign Up</button>
        </div>

        <div className="flex items-center gap-3 px-8 mt-6">
          <div className="flex-1 h-[1px] bg-[#30363d]"></div>
          <span className="text-[#8b949e] text-sm">OR</span>
          <div className="flex-1 h-[1px] bg-[#30363d]"></div>
        </div>

        <div className="px-8 mt-4">
          <button className="flex items-center justify-center gap-3 w-full border border-[#30363d] px-4 py-3 rounded-md hover:bg-[#30363d] transition-all">
            <FaGithub size={20} />
            <span>Continue with Github</span>
          </button>
        </div>

        <div className="flex items-center justify-center mt-10">
          <h3 className="text-[14px]">Already have an account? <span className="text-purple-500" onClick={()=> navigate("/login")}>Sign In</span></h3>
        </div>
      </div>
    </div>
  )
}

export default Signup
