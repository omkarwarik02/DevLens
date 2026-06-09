import { Sparkles } from "lucide-react";
import type { DashboardAction, DashboardState } from "../types/dashboard.types";
import { useReducer } from "react";
import ReactMarkdown from 'react-markdown'
import API_URL from "../config"

const initialState: DashboardState = {
  code: "",
  language: "javascript",
  isLoading: false,
  aiReview: "",
  error: "",
};
const reducer = (
  state: DashboardState,
  action: DashboardAction,
): DashboardState => {
  switch (action.type) {
    case "SET_CODE":
      return { ...state, code: action.payload };

    case "SET_LANGUAGE":
      return { ...state, language: action.payload };

    case "REVIEW_START":
      return { ...state, isLoading: true, error: "", aiReview: "" };

    case "REVIEW_SUCCESS":
      return { ...state, isLoading: false, aiReview: action.payload };

    case "REVIEW_ERROR":
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
};

function Dashboard() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleReview = async () => {
    dispatch({ type: "REVIEW_START" });

    try {
      const token = localStorage.getItem("token");

      const res = await fetch(`${API_URL}/api/review`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          code: state.code,
          language: state.language,
        }),
      });

      const data = await res.json();
      dispatch({ type: "REVIEW_SUCCESS", payload: data.aiReview });
    } catch (error) {
      console.log(error)
      dispatch({ type: "REVIEW_ERROR", payload: "Something went wrong" });
    }
  };

  return (
    <div className="min-h-screen bg-[#0d1117] p-6">
      <div className="flex gap-6 mt-20">
        {/**left panel */}
        <div className="w-1/2 bg-[#161b22] rounded-xl p-6">
          <h1 className="font-bold text-2xl">Code Review</h1>
          <div>
            <h3 className="mt-3 text-[11px]">PROGRAMMING LANGUAGE</h3>

            <select
              className="h-[46px] w-full bg-[#0D1117] p-2 mt-3"
              value={state.language}
              onChange={(e) =>
                dispatch({ type: "SET_LANGUAGE", payload: e.target.value })
              }
            >
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
                value={state.code}
                onChange={(e) =>
                  dispatch({ type: "SET_CODE", payload: e.target.value })
                }
              />
            </div>
            <div className="flex gap-6 items-stretch">
              <button
                className="w-full mt-4 py-3 bg-blue-600 text-white rounded-lg font-semibold"
                onClick={handleReview}
              >
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
            {state.isLoading ? (
              <p>Analyzing your code...</p>
            ) : state.error ? (
              <p className="text-red-400">{state.error}</p>
            ) : state.aiReview ? (
              <ReactMarkdown>{state.aiReview}</ReactMarkdown>
            ) : (
              <>
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
              </>
            )}
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
