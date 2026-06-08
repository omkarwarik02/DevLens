function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0d1117] p-6">
      <div className="flex gap-6 mt-20">
        {/**left panel */}
        <div className="w-1/2 bg-[#161b22] rounded-xl p-6">
          <h1 className="font-bold text-2xl">Code Review</h1>
          <div>
            <h3 className="mt-3 text-[11px]">PROGRAMMING LANGUAGE</h3>

            <select className="h-[46px] w-[554px] bg-[#0D1117] p-2 mt-3">
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
                className="w-full h-64 bg-[#0d1117] text-white font-mono text-sm p-3 rounded-lg border border-gray-700 resize-none outline-none mt-3"
                placeholder="Paste your code here..."
              />
            </div>
          </div>
        </div>

        {/**right panel */}
        <div className="w-1/2 bg-[#161b22] rounded-xl p-6"></div>
      </div>
    </div>
  );
}

export default Dashboard;
