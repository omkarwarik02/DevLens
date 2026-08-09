

const callLog = [];

function getCounts(logs){
    const counts = {};
    for(const entry of logs){
    const tool = entry.tool;
    if(counts[tool]){
        counts[tool]++;
    } else {
        counts[tool] = 1;
    }
    }
    return counts;
}
function getAgentCounts(agents){
    const agentCount = {};
    for(const a of agents){
        const agent = a.agent;
        if(agentCount[agent]){
            agentCount[agent]++;
        } else {
            agentCount[agent] = 1;
        }
    }
    return agentCount;
}


function wrapWithLogging(fn,fname){
    
    return async function (agentName,...args){
         const date = Date.now();
          console.log(date);
        console.log("Tool name",fname);
        const result = await fn(...args);
           const datee = Date.now();
          console.log(date);
        console.log("Finished.Result:", result);
        const final = datee - date;
        callLog.push({ tool: fname,agent:agentName ,duration:final})
        console.log(callLog);
        console.log(final);
        return result;
    }
}


module.exports = { wrapWithLogging, callLog, getCounts, getAgentCounts };