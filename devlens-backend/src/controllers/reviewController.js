const Groq = require("groq-sdk");
const Review = require("../models/Review");
const { wrapWithLogging, getCounts,getAgentCounts,callLog } = require("../utils/agentAudit");
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });


const loggedGroqCall = wrapWithLogging((payload)=> groq.chat.completions.create(payload),"groq_review");

const reviewCode = async (req, res) => {
  try {
    const { code, language } = req.body;

    if (!code || !language) {
      return res
        .status(400)
        .json({ message: "Code and language are required" });
    }

    const response = await loggedGroqCall(req.user.id,{
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "user",
          content: `Review this ${language} code:${code}`,
        },
      ],
    });
    console.log("Current callLog:", callLog);
    const aiReview = response.choices[0]?.message?.content || "";

    await Review.create({
      userId: req.user.id,
      code,
      language,
      aiReview,
    });
    res.status(200).json({ aiReview });
    
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const reviewHistory = async (req,res) => {
  try{
    const doc = await  Review.find({userId: req.user.id}).sort({createdAt:-1})
    
    res.status(200).json(doc)

  }catch(err){
    res.status(500).json({message:"Something went wrong"})
  }
}

module.exports = { reviewCode,reviewHistory };
