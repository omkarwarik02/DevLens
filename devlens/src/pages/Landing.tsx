import { Bug, Shield, History, Gauge } from "lucide-react";
import download from '../assets/download.jpg'
import { useNavigate } from "react-router-dom";
function Landing() {
  const navigate = useNavigate()
  return (
    <>
      <section>
        {/* main div*/}
        <div className="flex justify-around min-h-screen ">
          {/* left div*/}
          <div className="flex pt-[150px] px-24 flex-col">
            <h1 className="text-[69px] font-bold text-white leading-tight">
              AI-Powered Code
            </h1>
            <h1 className="text-[69px] font-bold text-white leading-tight">
              Reviews for Modern
            </h1>
            <h1 className="text-[69px] font-bold text-white leading-tight">
              Teams
            </h1>

            <div className="fex-col mt-3 font-light text-[#CCC3D8]">
              <p>
                Paste your code and get instant, intelligent feedback on bugs,
              </p>
              <p>security, and performance.</p>
            </div>

            <div className="fex-col mt-20">
              <button className=" bg-purple-600 rounded-md text-sm px-4 py-2 h-[58px] text-[16px] font-bold tracking-wide cursor-pointer" onClick={()=> navigate("/login")}>
                Get Started For Free
              </button>
              <button className="rounded-md text-sm px-4 py-2 h-[58px] text-[16px] font-bold tracking-wide ml-20 border border-white  cursor-pointer" onClick={() => navigate("/docs")}>
                View Documentation
              </button>
            </div>
          </div>
          <div className="flex-col  pt-[250px]">
            {/* RIGHT — code mockup */}
            <div className="bg-[#161b22] rounded-lg border border-[#30363d] w-[500px] h-[219px] items-center ">
              {/* top bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[#30363d]">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-[#8b949e] text-xs ml-4">
                  security_handler.js
                </span>
              </div>

              {/* code lines */}
              <div className="p-4 font-mono text-sm">
                <p className="text-[#8b949e]">1 async function loginUser...</p>
                <p className="text-[#8b949e]">2 const username, password</p>
                <p className="bg-purple-900 text-white">
                  4 const user = await db...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/**section2 */}
      <section id="features">
        <div className="flex flex-col min-h-screen items-center  ">
          <div className="text-center pt-30">
            <h1 className="text-[24px] font-bold tracking-wide">
              Engineered for Effieciency
            </h1>
            <p className="text-[16px] text-[#CCC3D8] font-light mt-3">
              Modern tools for modern developers.
            </p>
          </div>

          <div className="flex gap-6 justify-evenly px-24 mt-20 pt-40">

            <div className="h-[240px] w-[296px]  bg-[#161B22] p-4 border border-[#30363D]">
              <Bug className="text-purple-500" size={24}></Bug>
              <h1 className="mt-5 font-bold text-2xl">Bug Detection</h1>
              <p className="text-[14px] mt-5">
                Find hidden logic errors and edge cases instantly with our deep
                static analysis.
              </p>
            </div>
            <div className="h-[240px] w-[296px] bg-[#161B22] p-4 border border-[#30363D]">
              <Shield className="text-purple-500" size={24} />
              <h1 className="mt-5 font-bold text-2xl">Security Audits</h1>
              <p className="text-[14px] mt-5">
                Detect vulnerabilities and potential exploits before they ship
                to production.
              </p>
            </div>
            <div className="h-[240px] w-[296px] bg-[#161B22] p-4 border border-[#30363D]">
              <Gauge className="text-purple-500" size={24} />
              <h1 className="mt-5 font-bold text-2xl">Performance Insights</h1>
              <p className="text-[14px] mt-5">
                Optimize bottlenecks and improve execution speed with
                algorithmic analysis.
              </p>
            </div>
            <div className="h-[240px] w-[296px] bg-[#161B22] p-4 border border-[#30363D]">
              <History className="text-purple-500" size={24} />
              <h1 className="mt-5 font-bold text-2xl">History Tracking</h1>
              <p className="text-[14px] mt-5">
                Save every review to track improvement and team progress over
                time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works">
        <div className="flex flex-col min-h-screen items-center ">
          <div className="text-center pt-30">
            <h1 className="text-[24px] font-bold tracking-wide">How It Works</h1>
            <p className="text-[16px] text-[#CCC3D8] font-light mt-3">Integration into your workflow takes seconds, not hours.</p>
          </div>

        <div className="flex flex-col">
  
  {/* Step 1 */}
  <div className="flex gap-6 mt-20">
    {/* left — number + line */}
    <div className="flex flex-col items-center">
      <div className="border border-purple-500 rounded-lg w-10 h-10 flex items-center justify-center text-purple-500 font-bold">1</div>
      <div className="w-[1px] h-full bg-purple-500 mt-2"></div>
    </div>
    {/* right — text */}
    <div className="pb-12">
      <h3 className="text-white font-bold text-lg">Paste Code</h3>
      <p className="text-[#8b949e] text-sm mt-2">Input your snippet directly into our secure portal or connect your repository via GitHub, GitLab, or Bitbucket.</p>
    </div>
  </div>

  {/* Step 2 — same structure */}
   <div className="flex gap-6 mt-20">
    {/* left — number + line */}
    <div className="flex flex-col items-center">
      <div className="border border-purple-500 rounded-lg w-10 h-10 flex items-center justify-center text-purple-500 font-bold">2</div>
      <div className="w-[1px] h-full bg-purple-500 mt-2"></div>
    </div>
    {/* right — text */}
    <div className="pb-12">
      <h3 className="text-white font-bold text-lg">Get Review</h3>
      <p className="text-[#8b949e] text-sm mt-2">Our LLM-powered engine analyzes logic, security vulnerabilities, and industry best practices in milliseconds.</p>
    </div>
  </div>
  {/* Step 3 — same structure, no line at bottom */}
  <div className="flex gap-6 mt-20">
    {/* left — number + line */}
    <div className="flex flex-col items-center">
      <div className="border border-purple-500 rounded-lg w-10 h-10 flex items-center justify-center text-purple-500 font-bold">3</div>
      <div className="w-[1px] h-full bg-purple-500 mt-2"></div>
    </div>
    {/* right — text */}
    <div className="pb-12">
      <h3 className="text-white font-bold text-lg">Fix & Improve</h3>
      <p className="text-[#8b949e] text-sm mt-2">Apply suggested changes with a single click or export the report to share with your technical lead for final
approval.</p>
    </div>
  </div>
</div>
  <div id="pricing" className=" flex flex-col bg-purple-600 h-[212px] w-full items-center justify-center">
          <h1 className="text-white font-bold items-center text-[24px] mt-3">Ready to Ship Better Code?</h1>
          <p className="mt-2.5">Join 10,000+ developers who use DevLens to automate their code review cycle.</p>
          <button className="bg-white text-purple-500 mt-2.5 h-[56px] px-8 py-1  cursor-pointer" onClick={()=> navigate("/login")}>Start your First Review</button>
        </div>
        </div>
      </section>


      <section style={{ minHeight: "auto" }}>
      <footer className="bg-[#0d1117] border-t border-[#30363d] px-24 py-12">
  <div className="flex justify-between">
    
    {/* LEFT — logo + copyright */}
    <div className="flex flex-col gap-3">
      <div className="flex ">
        <img src={download} className="h-[24px] w-[24px]" alt="DevLens"></img>
      <h1 className=" font-bold ml-2.5 text-2xl">DevLens</h1>
      </div>
      <p className="text-xs">© 2026 DevLens Inc. All rights reserved.</p>
    </div>

    {/* CENTER — Product + Resources */}
    <div className="flex gap-20">
      <div className="flex flex-col gap-3">
        <h3 className="text-white font-semibold text-sm mb-1">Product</h3>
        <a href="#" className="text-[#8b949e] text-sm hover:text-white transition-colors">Features</a>
        <a href="#" className="text-[#8b949e] text-sm hover:text-white transition-colors">Pricing</a>
        <a href="#" className="text-[#8b949e] text-sm hover:text-white transition-colors">Changelog</a>
        <a href="#" className="text-[#8b949e] text-sm hover:text-white transition-colors">Roadmap</a>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-white font-semibold text-sm mb-1">Resources</h3>
        <a onClick={() => navigate("/docs")} className="text-[#8b949e] text-sm hover:text-white transition-colors cursor-pointer">Documentation</a>
        <a href="#" className="text-[#8b949e] text-sm hover:text-white transition-colors">API Reference</a>
        <a href="#" className="text-[#8b949e] text-sm hover:text-white transition-colors">Blog</a>
        <a href="#" className="text-[#8b949e] text-sm hover:text-white transition-colors">Support</a>
      </div>
    </div>

    {/* RIGHT — Company */}
    <div className="flex flex-col gap-3">
      <h3 className="text-white font-semibold text-sm mb-1">Company</h3>
      <a href="#" className="text-[#8b949e] text-sm hover:text-white transition-colors">About</a>
      <a href="#" className="text-[#8b949e] text-sm hover:text-white transition-colors">Careers</a>
      <a href="#" className="text-[#8b949e] text-sm hover:text-white transition-colors">Privacy Policy</a>
      <a href="#" className="text-[#8b949e] text-sm hover:text-white transition-colors">Terms of Service</a>
    </div>

  </div>
</footer>
      </section>

    </>
  );
}

export default Landing;
