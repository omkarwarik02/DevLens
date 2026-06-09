import { Sparkle, Sparkles } from "lucide-react";

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0d1117] p-6">
      <div className="flex gap-6 mt-20">
        {/**left panel */}
        <div className="w-1/2 bg-[#161b22] rounded-xl p-6">
          <h1 className="font-bold text-2xl">Code Review</h1>
          <div>
            <h3 className="mt-3 text-[11px]">PROGRAMMING LANGUAGE</h3>

            <select className="h-[46px] w-full bg-[#0D1117] p-2 mt-3">
              <option value="javascript">JavaScript</option>
              <option value="typescript">TypeScript</option>
              <option value="java">Java</option>
              <option value="c++">C++</option>
              <option value="c">C</option>
              <option value="python">Python</option>
            </select>
            <div>
              <h3 className="text-[11px] mt-3">SOURCE CODE</h3>
              <textarea
                className="w-full h-96 bg-[#0d1117] text-white font-mono text-sm p-3 rounded-lg border border-gray-700 resize-none outline-none mt-3"
                placeholder="Paste your code here..."
              />
            </div>
            <div className="flex gap-6 items-stretch">
           
              <button className="w-full mt-4 py-3 bg-blue-600 text-white rounded-lg font-semibold">
                 Review Code
              </button>
            </div>
          </div>
        </div>

        {/**right panel */}
        <div className="w-1/2 bg-[#161b22] rounded-xl p-6 flex flex-col">
          <h1>AI Review</h1>
          <hr className="border-gray-700 my-4"></hr>
          <div className="flex flex-col flex-1 bg-[#282A32] items-center justify-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center flex-row">
              <Sparkles color="#B4C5FF" />
            </div>
            <p>Your review will appear here...</p>

            <div className="flex flex-col items-center justify-center mt-3">
              <small className="text-[#C3C6D7]">
                Paste your code snippet on the left and click
              </small>
              <small className="text-[#C3C6D7]">
                "Review Code" to start the analysis.
              </small>
            </div>
          </div>
          <hr className="border-gray-700 my-4"></hr>
          <div className="flex justify-end gap-3">
            <button className="px-4 py-2 text-sm font-semibold border border-gray-600 rounded-lg text-gray-300 hover:bg-gray-700 transition-colors">
              COPY RESULTS
            </button>
            <button className="px-4 py-2 text-sm font-semibold border border-gray-600 rounded-lg text-gray-300 hover:bg-gray-700 transition-colors">
              EXPORT PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
