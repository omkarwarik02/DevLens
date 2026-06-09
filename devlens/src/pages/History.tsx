import { useEffect, useState } from "react"
import ReactMarkdown from 'react-markdown'
function History() {
  const [reviews,setReviews] = useState([])
  
  useEffect(()=>{
    fetch("http://localhost:5000/api/review/history", {
        headers: {
    "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })
    
    .then(res=>res.json())
    .then(data=> setReviews(data))
  },[])

  return (
    <>
      <div className="min-h-screen bg-[#0d1117] p-6 pt-25 ">
        <div className="flex flex-col mb-6 ">
          <h1 className="font-bold text-2xl tracking-wide text-white">Review History</h1>
          <small className="text-gray-400 mt-1">A chronological archive of your recent code audits and AI suggestions.</small>
        </div>



        {reviews.map((review:any)=>(
          <div key={review._id} className="bg-[#161b22] rounded-xl p-4 mb-4">
            <div className="flex justify-between items-center mb-3">
              <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded">{review.language}</span>
              <small className="text-gray-400">{new Date(review.createdAt).toLocaleDateString()}</small>
            </div>
            <pre className="bg-[#0d1117] p-3 rounded text-sm font-mono text-gray-300 overflow-hidden line-clamp-3">
              {review.code}
            </pre>
            <div className="mt-3"> <ReactMarkdown>{review.aiReview}</ReactMarkdown></div>
          
          </div>
        ))}
      </div>
    
    
    
    </>
  )
}

export default History